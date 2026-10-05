#!/usr/bin/env python3
"""List pages whose last_reviewed is missing or older than 365 days (same logic as hooks/wiki.py)."""
import re, yaml, pathlib, datetime
today = datetime.date.today(); rows = []
for p in sorted(pathlib.Path("docs").rglob("*.md")):
    m = re.match(r"\A---\s*\n(.*?)\n---", p.read_text(encoding="utf-8"), re.S)
    fm = yaml.safe_load(m.group(1)) if m else {}
    if not fm or fm.get("kind") == "index" or not fm.get("theme"): continue
    lr = str(fm.get("last_reviewed") or "")
    try: d = datetime.date.fromisoformat(lr)
    except ValueError: d = None
    age = (today - d).days if d else None
    if age is None or age > 365: rows.append((age if age is not None else 99999, str(p), fm.get("owner") or "-", lr or "never"))
for age, path, owner, lr in sorted(rows, reverse=True):
    print(f"{lr:>10}  {owner:<14} {path}")
print(f"\n{len(rows)} page(s) need review")
