# Migration to-do

Generated 2026-10-05 after the import from the lab's previous knowledge base, and trimmed on the same day when the clinical and shared-system procedures moved to the CNT procedures manual (their open items went with them). Tick items off as they are done; delete this file when it is empty.

## Attachments

All attachments were downloaded and reviewed for patient identifiers; 153 were committed under `docs/assets/<theme>/<page>/`. The rest are listed here.

**Screenshots withheld after PHI review** (each shows as a red 🚫 note on its page; replace with a de-identified capture):

- [ ] **Seizure Terminology Reference** (`docs/redcap/projects-and-data-entry/seizure-terminology-reference.md`) — Open patient chart tab 'Collins, Maurice' visible in Epic header; patient name on a hospital record screen (staff user Gabriela Bustamante also shown)

**Screen recordings kept out of Git** (GitHub's 100 MB file limit; stored in `Dropbox/NeuroBridge/wiki-media/` and referenced from the page):

- [ ] **Grid Electrode Labeling Conventions** (`docs/imaging/electrode-reconstruction/grid-electrode-labeling-conventions.md`) — video1338425901.mp4
- [ ] Decide whether recordings should move to Penn+Box or Git LFS; update the links on those pages accordingly.

## Pages that need a human pass

- [ ] Reshape migrated pages into the house template (Purpose / Scope / Prerequisites / Procedure / Troubleshooting / Notes), one theme at a time; a page counts as verified once someone has followed it and committed the fixes (git keeps the date and the name).
- [ ] Pages whose original held a password (now removed): confirm the credential is in the password manager, then remove the warning box.
- [ ] Lab Manual sections 1, 2, 5, 6, 7 and 9 are drafts awaiting the PI's pass; §1 and §5 need the stroke/LCNS/brainSTIM and CBIR columns filled in; §2 needs each role's expectations confirmed.
- [ ] Write the gap pages: Data › Standards (the Data Structure v1.0 specification), Data › Site intake protocol, Data › Inventory, REDCap › Overview, Compute › Environments (conda / modules).
- [ ] Bring over the three pages still marked *(not yet in the wiki)*: Data Structure v1.0, Sites, Access CNT1 and CNT-fs.
- [ ] Add the first stroke / neuromodulation and TBI procedures and introduce a `program:` front-matter field so the Map can show a per-program view.
- [ ] One retired page was not imported: the procedure for importing REDCap reports into the old task tracker (obsolete with the tracker).
- [ ] Replace the placeholder handles in `CODEOWNERS`; set `site_url` in `mkdocs.yml` if the site is ever hosted.
