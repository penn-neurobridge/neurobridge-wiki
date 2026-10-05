# NeuroBridge Lab Wiki

Standard operating procedures of the Penn NeuroBridge Lab, as Markdown, built into a website with [MkDocs](https://www.mkdocs.org) + [Material](https://squidfunk.github.io/mkdocs-material/).

- `docs/` — the content. One folder per theme, one sub-folder per section, one file per procedure. **This folder is also an Obsidian vault-friendly tree**; the repository root is the vault.
- `hooks/wiki.py` — builds the navigation from the folders and writes `map/graph.json` + `_reports/stale.json` at build time. No hand-maintained nav.
- `docs/about/` — how to contribute, style guide, SOP template, roles.
- `design-system/` — the visual direction the landing page follows (tokens, pattern, checklist), generated with the UI/UX Pro Max skill.
- `MIGRATION-TODO.md` — what still needs a human pass after the import from the previous knowledge base.

## Preview locally

```bash
brew install uv          # once, if you don't have it (or: curl -LsSf https://astral.sh/uv/install.sh | sh)
make serve               # http://127.0.0.1:8000 — uv creates .venv and installs MkDocs on first run
```

Dependencies are declared in `pyproject.toml` and pinned in `uv.lock`; `uv run mkdocs serve` works without the Makefile.

`make build` runs a strict build (broken links fail it); `make check` also runs the secret scanner if `gitleaks` is installed.

## Editing with Obsidian

1. Obsidian → *Open folder as vault* → choose this repository folder.
2. Settings → Community plugins → Browse → install **Git** (by Vinzent) and enable it. Set *Auto commit-and-sync interval* to e.g. 10 minutes, or use the command palette: *Git: Commit all changes* / *Git: Push*.
3. The vault settings already use Markdown links with relative paths and put attachments in `docs/assets/`, so what you write in Obsidian renders on the site unchanged.

## Rules

No patient identifiers. No credentials. One procedure per page. See `docs/about/contributing.md`.

## Relationship to the CNT procedures manual

The lab shares the CNT's epilepsy data pipelines. The CNT keeps the complete set of procedures, including the clinical and shared-system work the lab only depends on, in [penn-neurobridge/cnt-procedures](https://github.com/penn-neurobridge/cnt-procedures), maintained by the CNT associate director. This wiki keeps only the procedures the lab's own people run; pages that also exist in the CNT manual carry `source: cnt` and a note with the link, and pages that live only there are linked with `cnt:` links, resolved from one setting in `mkdocs.yml` (`extra.wiki.cnt_manual`; switch `style` to `site` once the CNT manual is hosted).

## Audit

`AUDIT.md` records the October 2026 page-by-page audit of the procedures kept here: stale-risk and newcomer scores, the recommended action, and the questions only the lab can answer. Pages the audit flagged carry an `audit: merge` or `audit: retire` field and a banner until the lab decides.
