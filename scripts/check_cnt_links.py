#!/usr/bin/env python3
"""Check that every cnt: link in docs/ points at a page that exists in a local checkout of the CNT
procedures manual.  usage: check_cnt_links.py ../cnt-procedures"""
import re, sys, pathlib
cnt = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "../cnt-procedures") / "docs"
if not cnt.is_dir():
    sys.exit(f"no CNT checkout at {cnt}")
bad = 0; total = 0
for p in sorted(pathlib.Path("docs").rglob("*.md")):
    text = re.sub(r"`[^`\n]*`", "", p.read_text(encoding="utf-8"))   # ignore code spans (examples)
    for m in re.finditer(r'cnt:([^)\s"#]+)', text):
        total += 1
        if not (cnt / m.group(1)).exists():
            print(f"{p}: missing in CNT manual: {m.group(1)}"); bad += 1
print(f"{total} cnt: link(s), {bad} missing")
sys.exit(1 if bad else 0)
