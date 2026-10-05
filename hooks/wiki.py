"""MkDocs hooks for the NeuroBridge wiki.

on_config      builds the navigation from the docs/ tree (no hand-maintained nav)
on_post_build  writes map/graph.json (pages x theme/stage/roles) for the map page
               and _reports/stale.json (pages past their review window)

Pure Python + PyYAML (already a MkDocs dependency); no extra plugins needed.
"""
import os, re, json, datetime, yaml

FM = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.S)

def front_matter(path):
    try:
        text = open(path, encoding="utf-8").read(20000)
    except OSError:
        return {}
    m = FM.match(text)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return {}

def title_of(path, fallback):
    fm = front_matter(path)
    if fm.get("title"):
        return str(fm["title"])
    for line in open(path, encoding="utf-8"):
        if line.startswith("# "):
            return line[2:].strip()
    return fallback

def sort_key(path):
    fm = front_matter(path)
    return (int(fm.get("order", 9999)), title_of(path, os.path.basename(path)).lower())

def pages_in(dirpath, docs_dir):
    files = [f for f in os.listdir(dirpath) if f.endswith(".md") and f != "index.md"]
    files.sort(key=lambda f: sort_key(os.path.join(dirpath, f)))
    return [{title_of(os.path.join(dirpath, f), f): os.path.relpath(os.path.join(dirpath, f), docs_dir)} for f in files]

def theme_nav(theme_dir, docs_dir, title):
    items = [os.path.relpath(os.path.join(theme_dir, "index.md"), docs_dir)]
    sections = [d for d in sorted(os.listdir(theme_dir)) if os.path.isdir(os.path.join(theme_dir, d))]
    def sec_key(d):
        idx = os.path.join(theme_dir, d, "index.md")
        fm = front_matter(idx) if os.path.exists(idx) else {}
        return (int(fm.get("order", 9999)), d)
    # section order: by the minimum `order` of the theme index table if present, else alphabetical
    order_hint = section_order_hint(os.path.join(theme_dir, "index.md"))
    sections.sort(key=lambda d: (order_hint.get(d, 9999), d))
    for d in sections:
        sdir = os.path.join(theme_dir, d)
        idx = os.path.join(sdir, "index.md")
        stitle = title_of(idx, d) if os.path.exists(idx) else d.replace("-", " ").title()
        entries = ([os.path.relpath(idx, docs_dir)] if os.path.exists(idx) else []) + pages_in(sdir, docs_dir)
        items.append({stitle: entries})
    return {title: items}

def section_order_hint(theme_index):
    """The theme index lists its sections in a table; use that row order."""
    hint = {}
    if not os.path.exists(theme_index):
        return hint
    for i, m in enumerate(re.finditer(r"\]\(([a-z0-9\-]+)/index\.md\)", open(theme_index, encoding="utf-8").read())):
        hint.setdefault(m.group(1), i)
    return hint

def on_config(config):
    docs = config["docs_dir"]
    themes = config["extra"]["wiki"]["themes"]
    nav = [{"Home": "index.md"}]
    lm = os.path.join(docs, "lab-manual")
    if os.path.isdir(lm):
        nav.append({"Lab Manual": pages_in(lm, docs)})
    for t in themes:
        tdir = os.path.join(docs, t["dir"])
        if os.path.isdir(tdir):
            nav.append(theme_nav(tdir, docs, t["title"]))
    if os.path.exists(os.path.join(docs, "map", "index.md")):
        nav.append({"Map": "map/index.md"})
    if os.path.exists(os.path.join(docs, "tags.md")):
        nav.append({"Tags": "tags.md"})
    about = os.path.join(docs, "about")
    if os.path.isdir(about):
        nav.append({"About this wiki": pages_in(about, docs)})
    config["nav"] = nav
    return config

# ------------------------------------------------------------------ landing-page counts
def _collect(docs):
    nodes = []
    for root, _, files in os.walk(docs):
        for f in files:
            if f.endswith(".md"):
                fm = front_matter(os.path.join(root, f))
                if fm.get("theme") and fm.get("stage") and fm.get("kind") != "index":
                    nodes.append(fm)
    return nodes

SCOPE_BANNERS = {
    "clinical-coverage": ("note", "Clinical coverage only",
        "This is participant-facing work done by the CNT clinical research coordinators. NeuroBridge members need it "
        "only when covering a clinical duty. Trainees and analysts can skip it."),
    "shared": ("info", "Shared infrastructure",
        "This describes a CNT or Penn system the lab depends on but does not run. Read it to understand the pipeline; "
        "ask the data research coordinator before acting on it."),
    "reference": ("abstract", "Background reading",
        "Read once for orientation. It is not a procedure you will be asked to perform."),
    "flagged": ("warning", "Flagged in the audit",
        "The October 2026 audit recommends retiring or merging this page (see `AUDIT.md` in the repository). "
        "Treat its content as unconfirmed until the lab decides."),
}
AUDIT_NOTE = {
    "merge": ("warning", "Flagged for merging",
        "The October 2026 audit recommends merging this page with a sibling (see `AUDIT.md`). The content stands until then."),
    "retire": ("warning", "Flagged for retirement",
        "The October 2026 audit recommends retiring this page (see `AUDIT.md`). Treat its content as unconfirmed."),
}

def _banner(kind, title, text):
    return f'!!! {kind} "{title}"\n    {text}\n\n'

def on_page_markdown(markdown, page, config, files):
    meta = page.meta or {}
    scope = meta.get("scope")
    banners = ""
    if scope in SCOPE_BANNERS:
        banners += _banner(*SCOPE_BANNERS[scope])
    if scope != "flagged" and meta.get("audit") in AUDIT_NOTE:
        banners += _banner(*AUDIT_NOTE[meta["audit"]])
    if banners:
        lines = markdown.split("\n", 1)
        if lines[0].startswith("# "):
            markdown = lines[0] + "\n\n" + banners + (lines[1] if len(lines) > 1 else "")
        else:
            markdown = banners + markdown
    if page.file.src_path != "index.md" or "%%" not in markdown:
        return markdown
    docs = config["docs_dir"]
    nodes = _collect(docs)
    manual = len([f for f in os.listdir(os.path.join(docs, "lab-manual")) if f.endswith(".md")]) if os.path.isdir(os.path.join(docs, "lab-manual")) else 0
    def repl(m):
        key = m.group(1)
        if key == "PAGES": return str(len(nodes))
        if key == "MANUAL": return str(manual)
        if key.startswith("T:"): return str(sum(1 for n in nodes if n["theme"] == key[2:]))
        if key.startswith("S:"): return str(sum(1 for n in nodes if n["stage"] == key[2:]))
        return m.group(0)
    return re.sub(r"%%([^%]+)%%", repl, markdown)

# ------------------------------------------------------------------ graph + reports
def on_post_build(config):
    docs = config["docs_dir"]
    themes = config["extra"]["wiki"]["themes"]
    theme_titles = [t["title"] for t in themes]
    nodes = []
    for root, _, files in os.walk(docs):
        for f in files:
            if not f.endswith(".md"):
                continue
            p = os.path.join(root, f)
            fm = front_matter(p)
            if fm.get("kind") in ("index",) or not fm.get("theme") or not fm.get("stage"):
                continue
            rel = os.path.relpath(p, docs)
            url = re.sub(r"(index)?\.md$", "", rel)
            if not url.endswith("/"):
                url = url + "/"
            nodes.append({
                "id": rel, "title": str(fm.get("title") or title_of(p, f)), "url": url,
                "theme": fm["theme"], "section": fm.get("section", ""), "stage": fm["stage"],
                "roles": list(fm.get("roles") or []), "status": fm.get("status", ""),
                "owner": fm.get("owner") or "", "last_reviewed": str(fm.get("last_reviewed") or ""),
                "scope": fm.get("scope", ""), "audit": fm.get("audit", ""),
            })
    roles_path = os.path.join(os.path.dirname(docs), "roles.json")
    roles = json.load(open(roles_path)) if os.path.exists(roles_path) else {}
    scopes = {"core": "Core: our people do this", "shared": "Shared infrastructure", "reference": "Background reading",
              "clinical-coverage": "Clinical coverage only", "flagged": "Flagged: retire or merge"}
    out = {"generated": datetime.date.today().isoformat(), "themes": theme_titles,
           "stages": config["extra"]["wiki"]["stages"], "roles": roles, "scopes": scopes, "nodes": nodes}
    os.makedirs(os.path.join(config["site_dir"], "map"), exist_ok=True)
    json.dump(out, open(os.path.join(config["site_dir"], "map", "graph.json"), "w"), indent=0)

    # stale report: no last_reviewed, or older than 365 days
    today = datetime.date.today()
    stale = []
    for n in nodes:
        lr = n["last_reviewed"]
        try:
            d = datetime.date.fromisoformat(lr) if lr else None
        except ValueError:
            d = None
        if d is None or (today - d).days > 365:
            stale.append({"page": n["id"], "title": n["title"], "last_reviewed": lr, "owner": n["owner"]})
    os.makedirs(os.path.join(config["site_dir"], "_reports"), exist_ok=True)
    json.dump({"generated": today.isoformat(), "count": len(stale), "pages": stale},
              open(os.path.join(config["site_dir"], "_reports", "stale.json"), "w"), indent=1)
