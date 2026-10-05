---
title: Contributing
order: 1
---

# Contributing

This wiki is a Git repository of Markdown files. The website is built from it automatically. Anyone in the lab can fix a page; the only rules are the three below.

## The three rules

1. **No patient identifiers, ever.** No names, MRNs, dates of birth, HUP numbers paired with names, scan dates for a named person, or screenshots that show any of these. Records that contain PHI (scheduling trackers, archives) stay in the PHI-approved tracker system or REDCap; the wiki page only says where they are and who has access.
2. **No credentials.** No passwords, passcodes, API keys or private links with embedded tokens. Write *"get it from the lab password manager"*. A secret scanner runs on every commit and will block one if it slips in; if you ever commit a secret by accident, rotate it, because Git history is permanent.
3. **One procedure, one page.** If two pages describe the same task, merge them. If a page is obsolete, delete it rather than leaving a note that says it's old.

## Three ways to edit

**In the browser.** Click the pencil icon at the top of any page. GitHub opens the file; make your change, write one line saying what you changed, and choose *Propose changes*. That opens a pull request; a reviewer merges it and the site rebuilds in about a minute.

**In Obsidian.** Open the repository folder as a vault (it ships with the right settings). Edit as you would any note; the Obsidian Git plugin commits and pushes on a timer or on demand. Use normal Markdown links (`[text](../other-page.md)`), which the vault is configured to insert; `[[wikilinks]]` do not render on the site.

**In a text editor or Claude Code.** Clone, edit, commit, push. Run `make serve` (needs [uv](https://docs.astral.sh/uv/); it installs MkDocs into `.venv` on first run) to preview the site at `http://127.0.0.1:8000` while you work.

## Adding a page

Copy [the SOP template](sop-template.md) into the right theme and section folder, fill in the front matter, write the procedure, commit. Navigation and the map update automatically from the folder and the front matter; there is nothing else to register. If no section fits, add a folder with an `index.md` describing it.

## Front matter, explained

```yaml
---
title: "Exporting Files from Natus"          # shown in navigation and search
theme: "Electrophysiology"                   # one of the six (matches the folder)
section: "Exporting from Natus"              # the sub-folder's name
stage: "Data Collection"                     # one of four lifecycle stages
roles: [data-rc, crc]                        # who needs this page (see Roles)
kind: how-to                                 # how-to | tutorial | reference | explanation
status: current                              # current | draft | migrated | deprecated
order: 2                                     # position within the section
owner: "mariam"                              # GitHub handle of the person who keeps it right
last_reviewed: "2026-10-04"                  # bump when you confirm it still works
tags: ["Data Collection", "Data research coordinator", "Clinical research coordinator"]
---
```

`status: migrated` marks a page imported from the lab's previous knowledge base that nobody has re-checked yet. When you follow one and it works, change it to `current` and set `last_reviewed`. Pages not reviewed within a year show up in the stale report (`make stale`, or `_reports/stale.json` in the built site).

## Reviewing

Small fixes (typos, a changed path, a new contact) can be merged by anyone with write access. Changes to how something is done should be reviewed by the page's owner or the theme's code owner (see `CODEOWNERS`). Say in the pull request what you tested.

## Images and attachments

Put images in `docs/assets/<theme>/` and reference them with a relative path. Before you commit a screenshot, check every corner of it for a patient name or MRN; crop or blur. A few migrated pages show a red 🚫 note where a screenshot was withheld because it contained patient identifiers; replacing those is tracked in `MIGRATION-TODO.md`.
