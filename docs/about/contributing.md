---
title: "Contributing"
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

**In Obsidian.** Open the repository folder as a vault (it ships with the right settings). Edit as you would any note; the Obsidian Git plugin commits and pushes on a timer or on demand. Use normal Markdown links (`[text](cnt:other-page.md)`), which the vault is configured to insert; `[[wikilinks]]` do not render on the site.

**In a text editor or Claude Code.** Clone, edit, commit, push. Run `make serve` (needs [uv](https://docs.astral.sh/uv/); it installs MkDocs into `.venv` on first run) to preview the site at `http://127.0.0.1:8000` while you work.

## Adding a page

First ask whether the procedure belongs to the lab or to a center. A procedure performed on the CNT's systems by CNT's rules goes in the CNT manual (propose it there); a procedure the lab owns goes here. Copy [the SOP template](sop-template.md) into the theme folder it belongs to (`docs/data`, `docs/compute`, `docs/imaging`, `docs/electrophysiology`, `docs/redcap` or `docs/operations`; create the folder and a section folder with an `index.md` if they do not exist yet), fill in the front matter, write the procedure, commit. Navigation, the map and the center pages update automatically from the folder and the front matter; a `center:` line (`cnt`, `ibi`, `cceb`, `stroke`, `cbir`, `chop`) lists the page on that center's page and draws it on the home-page graph. To add a CNT procedure to the list the lab follows, add it to `centers.json`.

## Front matter, explained

A page carries only what cannot be read from its folder or from git. Five fields, two of them optional:

```yaml
---
title: "Exporting Files from Natus"   # shown in navigation and search
stage: "Data Collection"              # one of four lifecycle stages (drives the map and the tags)
roles: [data-rc, crc]                 # who needs this page; see Roles
center: stroke                        # optional: which partner center this belongs to
order: 2                              # optional: position within the section
---
```

`center` names the partner center a procedure belongs to, so it is listed on that center's page and drawn on the home-page graph. To link to a page that lives only in the CNT manual, write `[text](cnt:theme/section/page.md)`; the build turns it into the right URL, which is set once in `mkdocs.yml`. The theme and section come from the folder the file sits in; the tags on the Tags page are generated from `stage` and `roles`. Who last changed a page, and when, is what git records, so there is no owner or review-date field to keep up: the page history on GitHub is the record, `CODEOWNERS` names who reviews each theme, and `make stale` (or `_reports/stale.json` in the built site) lists every procedure by its last change and marks those untouched for a year. While the October 2026 audit is being worked through, some pages also carry `audit: merge` or `audit: retire`; delete the line once the page has been dealt with.

## Reviewing

Small fixes (typos, a changed path, a new contact) can be merged by anyone with write access. Changes to how something is done should be reviewed by the theme's code owner (see `CODEOWNERS`). Say in the pull request what you tested.

## Images and attachments

Put images in `docs/assets/<theme>/` and reference them with a relative path. Before you commit a screenshot, check every corner of it for a patient name or MRN; crop or blur. A few migrated pages show a red 🚫 note where a screenshot was withheld because it contained patient identifiers; replacing those is tracked in `MIGRATION-TODO.md`.
