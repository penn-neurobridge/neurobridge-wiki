# Audit of the wiki, October 2026

Every page was read in full and scored against one question: could a new member of NeuroBridge, with no background in clinical neuroscience, follow it alone? On 5 October the 92 procedures that are the CNT's clinical work or shared infrastructure moved to the CNT procedures manual, with their audit rows and questions; this file keeps the rows for the 56 procedures the lab's own people run. *Stale* and *New* run from 0 to 3: the risk that the page is out of date, and how far a newcomer gets unaided (3 is all the way). *Action* is the recommendation; where it is merge or retire, the page carries an `audit:` field and a banner until the lab decides.

Procedures kept: 56. Stale risk 2 or 3: 42. Newcomer score 0 or 1: 32. Recommended actions: rewrite 28, tighten 14, merge 11, needs-pi 2, reframe-as-reference 1.

## What was fixed immediately

Secrets and identifiers that survived the import were removed on 5 October 2026 and the repository history was rewritten: a Pennsieve API token, the Natus VNC password (in two machine-written summaries), the pedro account password, the HUP6 door codes and scanner-laptop login, the neuropsych flash-drive password, a fund code, a session key in a URL, a patient's name in a withheld-screenshot note, a personal mobile number, coded subject identifiers in example paths, residue text from the previous knowledge base, one mention of it by name, and two links that pointed at the wrong page. `scripts/check_content.py` now fails the build on each of these patterns. Still to decide for the pages kept here: staff PennKeys and names visible in screenshots, an AWS account number, internal IP addresses, and non-defaced MRIs copied to SEAS servers and to a Penn+Box folder shared as "anyone with the link" (see the questions at the end).

## What a newcomer meets

The wiki is honest about what it contains but not about whom it is for. It was written over several years by and for the CNT's clinical research coordinators, and it still reads that way: 45 of the 149 procedures are participant-facing work (consenting, scanner day, bedside testing, reimbursement, scheduling trackers) that nobody in NeuroBridge performs, a further 23 describe CNT or Penn infrastructure the lab uses but does not run, and only 56 are things our own people do. Until this audit no page said which was which, so a new PhD student opening *Imaging* met eleven scanner-day pages before the four that concern them. The pages are also personal notes rather than procedures. They name people by first name (Josh, Gloria, Carolyn, Naseem, Mariam, Joel, Cat, Gabby, Marissa, Lisa, Steve) where a newcomer needs a role; they carry dates that have passed (an Azure token that expired in March 2026, a 7T protocol that ended in February, a server crash from May, a 2022 downtime banner, a 2023 VPN migration notice with empty steps); and almost none says why the step is done, what you need before you start, how you know it worked, or whom to ask. Of 149 procedures, 127 carry a stale-risk score of 2 or 3 and 125 would not get a newcomer to the end unaided.

A new data research coordinator can find the systems but not the rules. No Data page states which systems may hold identified data, and the pages contradict the lab's own rule: *Data storage locations* calls Borel "main storage for limited and anonymized EEG data", the rsync pages copy from cnt1 to Borel with no de-identification gate, the computing schematic and *PMACS overview* say the BSC cluster allows no PHI while the glossary says it does, and the reconstruction pages copy non-defaced T1 images to Leif and to a Box folder shared with anyone who has the link. The one route to every account, *Submitting CETS and PMACS helpdesk tickets*, lists CNT sponsors, a Neurology department code and a CNT IRB form, so the coordinator cannot tell who files for them or which group they join. The pipeline they must learn first, *Processing for ieeg.org*, is a 2,245-word command transcript in which the same five steps are pasted four times with small unexplained differences, struck-through commands, a "need to update with new scripts" flag and a contradiction about whether a file is deleted. Three different EDF de-identification scripts appear across two themes with no statement of which is current or what each removes.

A new PhD student from computer science meets the vocabulary before the explanation. EMU, Natus, iEEG, mef, RID and HUP numbers appear from the first paragraph of most pages and are defined only in the glossary, which nothing pointed to. There is no page that explains what the lab's data is and how it came to exist, no page on downloading a de-identified dataset from ieeg.org as a consumer rather than an uploader, and *Pennsieve downloader* never says where the script lives. The compute path exists (Borel over SSH, Leif, SLURM) but the SLURM page opens with a CETS email saying the scheduler "could use more than basic testing", and there was no page of things you must never do. The student would most likely ask a labmate within ten minutes and never return.

A master's student working on MRI-derived features finds the four workflows that matter to them, RADAR pulls, scan landing, DICOM to NIfTI and electrode reconstruction, scattered among scanner-day checklists, consent scripts and billing reviews. Reconstruction runs to about 7,200 words across five pages that repeat each other, with two routes and no rule for choosing. The NIfTI de-identification page assumes a BIDS conversion procedure that does not exist, and there is no defacing policy, no coding conventions page and no statement of where derived data should be written.

A postdoc arriving from physics to work on stroke or brain injury finds that only the Data and Compute themes apply to them unchanged; *What this lab is* says the stroke and TBI procedures are "to be added", which is true and should stay visible. The IRB and personnel pages they will be asked about are the CNT's, by first name, with one link that pointed at a page about mounting a file server. *Contributing*, the style guide and the SOP template are good and are the right place to send them when they build their first pipeline.

What the site needed, and now has, is routing: a *Start here* page that tells each of these four people what to read and in what order, a banner on every page that says whether it is ours, shared, reference or clinical coverage, a scope view on the map, and the five rules a newcomer must not break stated once, prominently. What it still needs is in the tables below: about fifty merges that would take the six themes from 149 procedures to roughly a hundred, fifteen retirements, a one-page data-governance statement that resolves the contradictions above, and a dozen pages that do not exist yet: a REDCap project catalogue, identifier mapping (MRN, RID, HUP, subject IDs), getting data out of REDCap, Data Structure v1.0 and the BIDS layout, how collaborating sites deliver data, a defacing policy, a BIDS conversion procedure, a NeuroBridge onboarding matrix by role, requesting cnt1 and cnt-fs access, required trainings, and a consumer's guide to ieeg.org and Pennsieve.


## Data

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [Data Storage Locations](docs/data/storage-locations/data-storage-locations.md) | 2 | 1 | rewrite | rewrite: as a table: system / what lives there / PHI allowed? / who grants access / how to reach it (link) |
| [Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif](docs/data/moving-data/moving-data-across-cnt-fs-cnt1-bsc-borel-and-leif.md) | 2 | 1 | merge | merge: absorb 'Moving Imaging Data Across CNT Servers' into this page as 'Moving data between servers (rsync)' |
| [Transferring Files from Box to cnt-fs (rclone)](docs/data/moving-data/transferring-files-from-box-to-cnt-fs-rclone.md) | 3 | 1 | rewrite | add: the one-time rclone setup section (rclone config -> box -> authorize on a machine with a browser -> paste token) so the page stands … |
| [Archiving EEG Data to Azure](docs/data/archiving-azure/archiving-eeg-data-to-azure.md) | 2 | 2 | tighten | add: a 'When to archive' line and the decision owner |
| [cnt1 Scripts for Azure Archiving & Unarchiving](docs/data/archiving-azure/cnt1-scripts-for-azure-archiving-and-unarchiving.md) | 2 | 2 | tighten | reorder: put the four scripts in a table (name / purpose / input / output dir / log) at the top, then the unarchive procedure |
| [Pennsieve Data Access Rules](docs/data/sharing-pennsieve-and-ieeg-org/pennsieve-data-access-rules.md) | 2 | 1 | needs-pi | rewrite: as a decision table: consent status x data type -> allowed destination (Discover public / controlled / internal only) x key cust… |
| [Uploading to Pennsieve Locally](docs/data/sharing-pennsieve-and-ieeg-org/uploading-to-pennsieve-locally.md) | 2 | 2 | merge | merge: with 'Uploading from cnt1 to Pennsieve' into one page with two 'where you run it' variants (laptop vs cnt1 module load) |
| [Uploading from cnt1 to Pennsieve](docs/data/sharing-pennsieve-and-ieeg-org/uploading-from-cnt1-to-pennsieve.md) | 3 | 1 | rewrite | duplicate of `uploading-to-pennsieve-locally.md`; URGENT cut: the api_token/api_secret values; rotate that key; add the 'Credential remov… |
| [Pennsieve Downloader](docs/data/sharing-pennsieve-and-ieeg-org/pennsieve-downloader.md) | 3 | 1 | rewrite | add: script location (GitHub repo and commit) and requirements |
| [De-Identifying EDFs](docs/data/de-identification/de-identifying-edfs.md) | 2 | 1 | merge | merge: with 'De-Identifying EDF Headers' into one page 'De-identifying EDF files' with a decision line: keep annotations (anonymize_edfs.… |
| [De-Identifying EDF Headers](docs/data/de-identification/de-identifying-edf-headers.md) | 3 | 1 | merge | duplicate of `anonymize-and-upload-edfs-to-ieeg-org.md`; merge: the generic 'anonymize EDF header' step into one De-identifying EDF files… |
| [De-identifying NIfTI Headers](docs/data/de-identification/de-identifying-nifti-headers.md) | 3 | 1 | rewrite | rewrite: state what deid_json.sh does (fields removed), its true path, the queue format, the output, and a verification command (e.g., gr… |

## Compute

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [Overview of CNT Systems](docs/compute/overview/overview-of-cnt-systems.md) | 3 | 1 | rewrite | split: move the Data Sharing Crash Course (HUP vs RID, limited vs anonymized, date shift to 2000-01-01) to its own page under Data and li… |
| [SEAS Servers: Borel, Leif, Pioneer](docs/compute/seas-cets-servers/seas-servers-borel-leif-pioneer.md) | 2 | 1 | rewrite | rewrite: five-row table — Borel (CPU, ssh), Pioneer (GPU, ssh), Finkel (GPU, SLURM only), Leif (SMB view of the same storage), Sauce (fil… |
| [Accessing Borel over SSH](docs/compute/seas-cets-servers/accessing-borel-over-ssh.md) | 2 | 2 | tighten | cut: the dangling 'Open' and the 'future instructions' note |
| [Mounting Leif over SMB](docs/compute/seas-cets-servers/mounting-leif-over-smb.md) | 1 | 2 | tighten | add: list of Leif volumes and what each maps to on Borel |
| [Submitting Jobs with SLURM](docs/compute/seas-cets-servers/submitting-jobs-with-slurm.md) | 2 | 2 | tighten | cut: the first pasted CETS email and the 'consider this channel' line |
| [SLURM on Finkel: Configuration & Limits](docs/compute/seas-cets-servers/slurm-on-finkel-configuration-and-limits.md) | 2 | 2 | merge | duplicate of `submitting-jobs-with-slurm.md`; merge: into submitting-jobs-with-slurm.md as a 'Limits (as of <date>)' section |
| [BSC Cluster](docs/compute/pmacs-psom-systems/bsc-cluster.md) | 3 | 1 | rewrite | keep: Resources link, How to Connect steps 1-4, the queue table (re-dated), and one sentence on bscsub2 for VS Code editing only |
| [PMACS VPN](docs/compute/pmacs-psom-systems/pmacs-vpn.md) | 3 | 1 | rewrite | rewrite: (1) when you need it; (2) install from med.upenn.edu/dart/vpn-instructions.html; (3) connect: open Ivanti, server remote.pmacs.u… |
| [Submitting CETS & PMACS Helpdesk Tickets](docs/compute/support-and-tickets/submitting-cets-and-pmacs-helpdesk-tickets.md) | 3 | 2 | rewrite | split: (a) an access-request matrix — what you need / who files / where / template / turnaround / how to verify; (b) one short page per r… |

## Imaging

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [DICOM → NIfTI (non-BIDS)](docs/imaging/formatting/dicom-nifti-non-bids.md) | 2 | 0 | rewrite | rewrite: as a short procedure - purpose, prerequisites, the one script to run, an example path edit, expected output, next step |
| [Electrode Reconstruction: Prep & Software](docs/imaging/electrode-reconstruction/electrode-reconstruction-prep-and-software.md) | 3 | 2 | merge | duplicate of `gui-docker-reconstruction-workflow.md`; merge: into the GUI/Docker page as the canonical procedure; keep from here only the… |
| [GUI/Docker Reconstruction Workflow](docs/imaging/electrode-reconstruction/gui-docker-reconstruction-workflow.md) | 2 | 2 | rewrite | rewrite: as the canonical reconstruction page - prerequisites (software, access), Part A export (CNT clinical), Part B convert and name, … |
| [MUSC Reconstruction](docs/imaging/electrode-reconstruction/musc-reconstruction.md) | 2 | 2 | merge | duplicate of `electrode-reconstruction-prep-and-software.md`; merge: into the canonical reconstruction page as a 'Site variant: MUSC' box… |
| [Grid Electrode Labeling Conventions](docs/imaging/electrode-reconstruction/grid-electrode-labeling-conventions.md) | 1 | 1 | merge | merge: into the canonical reconstruction page as 'Appendix: grids and strips' |
| [RADAR Data Pulls](docs/imaging/clinical-imaging-pulls-radar/radar-data-pulls.md) | 3 | 2 | rewrite | rewrite: as NeuroBridge's canonical 'Requesting clinical imaging' SOP - prerequisites (IRB, PI request, RADAR fee), request, receive, lan… |

## Electrophysiology

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [sEEG Phase II Processing: Overview & Timeline](docs/electrophysiology/overview-and-setup/seeg-phase-ii-processing-overview-and-timeline.md) | 1 | 1 | rewrite | add: ordered nine-step chain with a link per step and the role that owns it |
| [Setup for Processing](docs/electrophysiology/overview-and-setup/setup-for-processing.md) | 2 | 1 | rewrite | add: two sentences on why two PDF versions exist (limited keeps the implant date for internal use; anonymized is shareable) and who may o… |
| [Mounting cnt-fs](docs/electrophysiology/overview-and-setup/mounting-cnt-fs.md) | 1 | 2 | tighten | add: one line on what cnt-fs is (PMACS HIPAA fileshare; identified data allowed) and who grants access |
| [natusdir & Data Collection Files](docs/electrophysiology/overview-and-setup/natusdir-and-data-collection-files.md) | 1 | 1 | rewrite | add: a plain-text template of each file with one example line and a comment per field |
| [The config Folder](docs/electrophysiology/overview-and-setup/the-config-folder.md) | 2 | 2 | tighten | fix: the cnt-fs path typo |
| [The ieeg.properties File](docs/electrophysiology/overview-and-setup/the-ieeg-properties-file.md) | 2 | 1 | rewrite | add: prerequisite - an ieeg.org account with upload rights, and who grants it |
| [Exporting Files from Natus](docs/electrophysiology/exporting-from-natus/exporting-files-from-natus.md) | 3 | 1 | rewrite | reorder: procedure first, troubleshooting at the end |
| [Automated Channel Mapping](docs/electrophysiology/channel-mapping/automated-channel-mapping.md) | 2 | 1 | rewrite | add: a six-line example output with header, three contacts and EKG1/2 |
| [Channel Mapping for EDFs (ieeg-dataset.ini)](docs/electrophysiology/channel-mapping/channel-mapping-for-edfs-ieeg-dataset-ini.md) | 1 | 2 | merge | duplicate of `anonymize-and-upload-edfs-to-ieeg-org.md`; merge: into Anonymize & Upload EDFs as the 'channel mapping (.ini)' step, genera… |
| [Processing for ieeg.org (natus2mef -> validate -> upload)](docs/electrophysiology/processing-and-upload-to-ieeg-org/processing-for-ieeg-org-natus2mef-validate-upload.md) | 2 | 1 | rewrite | rewrite: one parameterised procedure (TYPE in Intracranial, CCEPS, Gottfried, Gold) with a table of per-type differences: folder, natusdi… |
| [Troubleshooting Processing Errors](docs/electrophysiology/processing-and-upload-to-ieeg-org/troubleshooting-processing-errors.md) | 2 | 1 | tighten | restructure: a three-column table - symptom, likely cause, fix |
| [Anonymize & Upload EDFs to ieeg.org](docs/electrophysiology/processing-and-upload-to-ieeg-org/anonymize-and-upload-edfs-to-ieeg-org.md) | 2 | 2 | rewrite | generalise: 'any EDF to ieeg.org' with Mxene as one example path |
| [Adding an iEEG File to a Project](docs/electrophysiology/processing-and-upload-to-ieeg-org/adding-an-ieeg-file-to-a-project.md) | 1 | 1 | merge | merge: into Troubleshooting as a 'dataset not in project' row with cause and fix |
| [Splitting Datasets](docs/electrophysiology/processing-and-upload-to-ieeg-org/splitting-datasets.md) | 1 | 1 | tighten | add: the three triggers (overlap, electrode change, sampling-rate change) in one list |
| [Final Step: Delete mef Folders](docs/electrophysiology/processing-and-upload-to-ieeg-org/final-step-delete-mef-folders.md) | 1 | 2 | merge | merge: into Processing as the closing step with a three-item precondition list (datasets open on ieeg.org; config folder in ieeg_metadata… |
| [Deleting a Dataset from ieeg.org](docs/electrophysiology/processing-and-upload-to-ieeg-org/deleting-a-dataset-from-ieeg-org.md) | 1 | 2 | tighten | add: when (PHI leak, wrong project, failed upload) and who approves |
| [Archiving ieeg Files](docs/electrophysiology/archiving-on-ieeg-org/archiving-ieeg-files.md) | 3 | 1 | rewrite | rewrite: one current route; move the dated workaround to a note |
| [Unarchiving an ieeg Dataset](docs/electrophysiology/archiving-on-ieeg-org/unarchiving-an-ieeg-dataset.md) | 3 | 0 | needs-pi | needs content: the restore steps (az download, destination recently_unarchived/HUPXXX, who runs it, how long) |
| [Re-uploading Archived Datasets](docs/electrophysiology/archiving-on-ieeg-org/re-uploading-archived-datasets.md) | 2 | 1 | tighten | add: triggers and the order: delete bad dataset on ieeg.org -> restore -> rebuild folder -> reprocess |

## REDCap & Clinical Metadata

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [RADAR Pull → REDCap Entry](docs/redcap/clinical-data-pulls-ehr-redcap/radar-pull-redcap-entry.md) | 2 | 2 | rewrite | add: a three-line header — purpose (metadata for every clinical 3T/fMRI epilepsy patient), owner, cadence (yearly, triggered by the RADAR… |
| [Surgical Outcomes REDCap Project](docs/redcap/projects-and-data-entry/surgical-outcomes-redcap-project.md) | 1 | 1 | rewrite | rewrite as the project overview: name, PID, owner, DAGs, one line per instrument (what it holds, who fills it, when), and how RID links r… |
| [REDCap Tips](docs/redcap/projects-and-data-entry/redcap-tips.md) | 1 | 1 | rewrite | rewrite the export tip: User Rights → the user's role → Data Export Rights; set the needed instruments to 'Full Data Set' (or 'De-Identif… |
| [Seizure Terminology Reference](docs/redcap/projects-and-data-entry/seizure-terminology-reference.md) | 1 | 2 | reframe-as-reference | merge the Engel→ILAE text list and the table image into one Markdown table with a Notes column; cite Engel (1993), ILAE/Wieser (2001) and… |

## Operations

| Page | Stale | New | Action | Note |
|---|---|---|---|---|
| [PennKey & REDCap Access for External Guests](docs/operations/access-and-accounts/pennkey-and-redcap-access-for-external-guests.md) | 2 | 0 | rewrite | rewrite: transcribe the PDF into numbered steps with sponsor, form links and turnaround |
| [Requesting a REDCap Account](docs/operations/access-and-accounts/requesting-a-redcap-account.md) | 2 | 2 | tighten | fix: numbering and the triple-rendered link |
| [Adding Users to the ieeg.org Portal](docs/operations/access-and-accounts/adding-users-to-the-ieeg-org-portal.md) | 1 | 2 | tighten | add: one line: ieeg.org is the de-identified iEEG portal; never PHI |
| [Onboarding & Offboarding Checklist](docs/operations/onboarding-and-offboarding/onboarding-and-offboarding-checklist.md) | 2 | 1 | rewrite | rewrite: as a role x system matrix (data RC / analyst / student / PI) with Owner-by-role, How-to-request, Verify, Offboard columns |
| [Adding Personnel to an IRB Study](docs/operations/regulatory-irb-and-reporting/adding-personnel-to-an-irb-study.md) | 2 | 2 | tighten | fix: the two personnel-list links; delete 'You do not have access to this Doc' |
| [Adding a Non-Penn / New Hire to a Study](docs/operations/regulatory-irb-and-reporting/adding-a-non-penn-new-hire-to-a-study.md) | 2 | 2 | rewrite | rewrite: remove the legacy tool name; point step 5 at the real personnel list |

## Questions only the lab can answer

Collected from the pages kept here. The ones that recur (which systems may hold identified data, who files account requests and under which sponsor and IRB, which named people now hold which roles, which REDCap projects and cloud accounts are the lab's) unblock the most pages.


### Data

- Is 'limited' data (RID numbers + dates of service) still permitted on Borel/Pioneer, or must everything on SEAS be fully anonymized?. *(Data Storage Locations)*
- Has the Borel sandbox move to BSC happened?. *(Data Storage Locations)*
- Is Pioneer still in service, and where do Leif and Finkel fit?. *(Data Storage Locations)*
- Which project directories (BSC, cnt-fs shares) belong to NeuroBridge and should a newcomer be added to?. *(Data Storage Locations)*
- What is NeuroBridge's project directory on BSC (examples use davis_group_1)?. *(Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif)*
- Does the lab use Leif, and what is its hostname and role?. *(Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif)*
- May analysts rsync directly from cnt1 to Borel, or only from a de-identified staging area?. *(Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif)*
- Is rclone still the sanctioned Box <-> cnt-fs path, or has PMACS provided an alternative (Box Drive on VDI, Globus)?. *(Transferring Files from Box to cnt-fs (rclone))*
- Where should site deliveries land on cnt-fs under Data Structure v1.0 (per-site _fs shares?). *(Transferring Files from Box to cnt-fs (rclone))*
- Does NeuroBridge archive to the Litt lab's cntlitt account or should it have its own storage account/container?. *(Archiving EEG Data to Azure)*
- Who at PMACS issues the SAS token, and has the 03/15/2026 token been renewed?. *(Archiving EEG Data to Azure)*
- Is there an inventory of what has been archived (HUPXXX list), and where is it kept?. *(Archiving EEG Data to Azure)*
- Who approves an unarchive request (it costs money), and is there a log of unarchive events?. *(cnt1 Scripts for Azure Archiving & Unarchiving)*
- Which IRB protocols cover NeuroBridge's data sharing, and who approves each Pennsieve release?. *(Pennsieve Data Access Rules)*
- Where is the RID/HUP <-> identity key kept, and who may hold it?. *(Pennsieve Data Access Rules)*
- How does this tree apply to retrospective data delivered by the 15+ sites under DUAs (consent waived)?. *(Pennsieve Data Access Rules)*
- Is 'controlled access' on Pennsieve actually in use, and what is the data request form?. *(Pennsieve Data Access Rules)*
- Which Pennsieve organization/workspace and datasets does NeuroBridge own (vs CNT/Litt)?. *(Uploading to Pennsieve Locally)*
- Has the Pennsieve API key printed on this page been rotated?. *(Uploading from cnt1 to Pennsieve)*
- Is 'module load pennsieve' still available on cnt1, and is bscsub -> cnt1 still the route?. *(Uploading from cnt1 to Pennsieve)*
- Where does pennsieve_downloader.py live (repo), and who maintains it?. *(Pennsieve Downloader)*
- Does the current Pennsieve agent's download command make this script unnecessary?. *(Pennsieve Downloader)*
- Which script is the lab standard: edf_deid_wrapper.sh (strips annotations) or anonymize_edfs.sh (headers + date shift, keeps annotations)?. *(De-Identifying EDFs)*
- Are annotations ever PHI in our EDFs (e.g., names typed by techs), and is stripping them the policy?. *(De-Identifying EDFs)*
- Is the lab still processing Mxene study EEG, or is that purely CNT?. *(De-Identifying EDF Headers)*
- Which anonymize script/version is current, and is it in a repo?. *(De-Identifying EDF Headers)*
- What exactly does deid_json.sh strip, and where does the script live now (heudiconv_3T vs deid_json)?. *(De-identifying NIfTI Headers)*
- Is defacing required before imaging leaves PMACS, or is header de-identification sufficient under the lab's protocols?. *(De-identifying NIfTI Headers)*

### Compute

- Is 'share by HUP number, never RID' and the 2000-01-01 date shift still the lab's convention under Data Structure v1.0, and does it apply to non-Penn sites' data?. *(Overview of CNT Systems)*
- Who now grants cnt-fs user-group membership and upenn-ieeg / upenn-surgrec AWS access for NeuroBridge members?. *(Overview of CNT Systems)*
- Has the raw-Natus move to Azure completed (the Data › Archiving pages suggest yes)?. *(Overview of CNT Systems)*
- Does NeuroBridge use Persyst at all?. *(Overview of CNT Systems)*
- Do NeuroBridge members get Borel/Leif/Finkel access through the CNT 'littuser/davisuser' groups, or does the lab have its own CETS group?. *(SEAS Servers: Borel, Leif, Pioneer)*
- Who is the lab's CETS sponsor for SEAS sponsored research accounts?. *(SEAS Servers: Borel, Leif, Pioneer)*
- Is the Fall 2023 CETS security deck still required reading?. *(SEAS Servers: Borel, Leif, Pioneer)*
- Which directory should NeuroBridge members use for project data on Borel (/projects/<lab>? /data/Human_Data?), and is there a lab group directory?. *(Accessing Borel over SSH)*
- Is Finkel still 2 x L40S with 8 shards, and is the 128 GB per-user memory limit on Borel/Pioneer in force?. *(Submitting Jobs with SLURM)*
- Does the lab standardise on conda or modules on Borel, and is there a shared environment path?. *(Submitting Jobs with SLURM)*
- Who in NeuroBridge raises SLURM configuration requests with CETS now?. *(SLURM on Finkel: Configuration & Limits)*
- Are these limits current, and as of when?. *(SLURM on Finkel: Configuration & Limits)*
- Which BSC /project directory and group does NeuroBridge use (davis_group_1? its own?), and who requests membership?. *(BSC Cluster)*
- May identified imaging data be processed on BSC (glossary says yes since 2026-09-20; CNT pages say no)?. *(BSC Cluster)*
- Are the 2022 queue limits still current?. *(BSC Cluster)*
- Which VPNs do NeuroBridge members need by default, and does DBEI/IBI issue PMACS accounts differently from CNT (Neurology-sponsored)?. *(PMACS VPN)*
- For NeuroBridge hires, who is the PMACS sponsor and department (Nishant Sinha / DBEI?) and which IRB protocols must they join before cnt1/cnt-fs access?. *(Submitting CETS & PMACS Helpdesk Tickets)*
- Who files PMACS 'Systems' tickets and CETS requests for the lab, and does that person hold 'Systems' permission in the PMACS portal?. *(Submitting CETS & PMACS Helpdesk Tickets)*
- Which SEAS usergroup should NeuroBridge members join (littuser/davisuser or a new one), and who is the SEAS sponsor?. *(Submitting CETS & PMACS Helpdesk Tickets)*
- Is the VDI still the required route to cnt1, or do PMACS-managed laptops or direct ssh over the PMACS VPN now suffice?. *(Submitting CETS & PMACS Helpdesk Tickets)*

### Imaging

- Is /project/imaging_process/programs/run_dcm2niix still the lab's conversion path, or has heudiconv/BIDS replaced it?. *(DICOM → NIfTI (non-BIDS))*
- Which script and text file are canonical, and where does output land relative to imaging_bids?. *(DICOM → NIfTI (non-BIDS))*
- Are the T1 images in /mnt/leif/littlab/data/Human_Data/recon/BIDS_penn defaced before they reach Borel, given SEAS servers are never PHI locations?. *(Electrode Reconstruction: Prep & Software)*
- Is the Borel run_penn_recons.py route still supported, or is Docker/GUI the only sanctioned route?. *(Electrode Reconstruction: Prep & Software)*
- Does NeuroBridge staff hold UPHS/Sectra access to export clinical images, or does CNT do that step?. *(Electrode Reconstruction: Prep & Software)*
- Which ieeg-recon release (penn-cnt/ieeg-recon) is the lab standard, and who maintains it?. *(GUI/Docker Reconstruction Workflow)*
- Should reconstruction outputs for lab use be written to cnt-fs/BSC derivatives rather than to the clinical PennBox folder?. *(GUI/Docker Reconstruction Workflow)*
- Is the MUSC R01 collaboration active, and does the site-onboarding protocol make this the template for other sites' reconstructions?. *(MUSC Reconstruction)*
- Does the MUSC DUA permit their imaging on Borel/Leif and in a Penn Box folder?. *(MUSC Reconstruction)*
- Does the lab still reconstruct grid/strip cases (retrospective or site data), or is this historical?. *(Grid Electrode Labeling Conventions)*
- Which IRB protocol(s) cover NeuroBridge's RADAR requests, and who is the lab's current RADAR contact?. *(RADAR Data Pulls)*
- Is MJ0HKNDA (or any UPHS workstation) still available to NeuroBridge staff for the fileshare step?. *(RADAR Data Pulls)*
- Where should RADAR DICOMs be archived now - Sauce/Borel or the Azure cold archive - and where do NIfTIs land under Data Structure v1.0?. *(RADAR Data Pulls)*

### Electrophysiology

- Who in NeuroBridge owns sEEG processing now, and does the one-week post-explant deadline still apply?. *(sEEG Phase II Processing: Overview & Timeline)*
- Does the lab still process the CCEPS, Gottfried and Gold research recordings, or only the clinical intracranial recording?. *(sEEG Phase II Processing: Overview & Timeline)*
- Who is 'Lisa' (role) and is she still the implant-map contact?. *(Setup for Processing)*
- Does the data RC receive the implant PowerPoint directly, and may it be handled on a personal laptop?. *(Setup for Processing)*
- Are both limited and anonymized versions still required, and who is allowed to see the limited one?. *(Setup for Processing)*
- Is the UNC path \\pmacs.upenn.edu\depts\NE-4322-Neurology\CNT still current, and should the raw IP be published at all?. *(Mounting cnt-fs)*
- Is natus2mef's natusdir format documented in the converter repo, so the template can be copied from source?. *(natusdir & Data Collection Files)*
- Who receives the 'ready to archive' hand-off now that it is no longer Josh A.?. *(The config Folder)*
- Who issues ieeg.org accounts and upload or admin rights for NeuroBridge members?. *(The ieeg.properties File)*
- Who holds Natus/VNC access for NeuroBridge today, and what is the current support route when the Natus PC locks?. *(Exporting Files from Natus)*
- Has the shared VNC password been rotated now that it sat in a wiki page and still sits in an abstract?. *(Exporting Files from Natus)*
- Is the 256/262 vs 128/134 DC channel ambiguity a headbox difference that can be stated as a rule?. *(Automated Channel Mapping)*
- Are the Gottfried and Gold research tasks still running; if not, drop those sections?. *(Automated Channel Mapping)*
- Are CCEPS, Gottfried and Gold uploads still active, and who should be notified now?. *(Processing for ieeg.org (natus2mef -> validate -> upload))*
- Is the 'module load python/3.10' libpython error still current on cnt1?. *(Processing for ieeg.org (natus2mef -> validate -> upload))*
- Who administers the HUP_Intracranial_Data project on ieeg.org and grants NeuroBridge upload rights?. *(Processing for ieeg.org (natus2mef -> validate -> upload))*
- Is there a command-line way on cnt1 to read a Natus recording's sampling rate?. *(Troubleshooting Processing Errors)*
- Which EDF anonymizer is canonical now: edf_anonymize/anonymize_edfs.sh or the scripts on the Data pages?. *(Anonymize & Upload EDFs to ieeg.org)*
- Should scalp EDFs from collaborating sites go through this path or straight to BIDS?. *(Anonymize & Upload EDFs to ieeg.org)*
- What is the ieeg.org dataset-name convention for split recordings (HUPXXX_phaseII_D01?). *(Splitting Datasets)*
- Who may delete ieeg.org datasets uploaded by the lab?. *(Deleting a Dataset from ieeg.org)*
- Which upload route is current after the May 2026 cnt1 crash: cnt2, cntgpu1, or neither?. *(Archiving ieeg Files)*
- Who owns the cntlitt Azure storage account and the restore budget, and may NeuroBridge staff write to it?. *(Archiving ieeg Files)*
- Can the original unarchiving SOP be recovered from the retired knowledge base or from Josh?. *(Unarchiving an ieeg Dataset)*
- Who is allowed to request a restore and what does it cost?. *(Unarchiving an ieeg Dataset)*
- Who handles restore tickets now?. *(Re-uploading Archived Datasets)*

### REDCap & Clinical Metadata

- Is the yearly RADAR metadata entry now a NeuroBridge data-RC duty or still a CNT CRC duty?. *(RADAR Pull → REDCap Entry)*
- Do RADAR scans arrive de-identified (the imaging page names a 'mim_anon' share)? If not, why does this page name Borel as a destination?. *(RADAR Pull → REDCap Entry)*
- Which fields in pid 42518 are the analytically important ones (DRE, PNEE, lesion, laterality, Engel/ILAE) and are they QC'd before analysts use them?. *(RADAR Pull → REDCap Entry)*
- Who is the request contact for the pull if Joel Stein / Kate Davis are no longer the route for NeuroBridge?. *(RADAR Pull → REDCap Entry)*
- Is 'surgical outcomes project' the same REDCap project as the 'CNT Surgical Repository' / 'REDCap Surgical Repository' on other pages, and what is its PID?. *(Surgical Outcomes REDCap Project)*
- Who performs the yearly outcomes follow-up entry now — a CNT CRC, the NeuroBridge data RC, or nobody?. *(Surgical Outcomes REDCap Project)*
- Is this project the authoritative source of Engel/ILAE outcomes for NeuroBridge analyses, and how do analysts get a de-identified export?. *(Surgical Outcomes REDCap Project)*
- Who in NeuroBridge holds User Rights admin on each REDCap project, and who approves identifier-level export rights?. *(REDCap Tips)*
- Should users from the collaborating sites ever have export rights beyond their own DAG?. *(REDCap Tips)*
- Who adjudicates ambiguous Engel→ILAE mappings now that 'flag these for me' no longer resolves to a person?. *(Seizure Terminology Reference)*
- Was the Engel→ILAE conversion applied retrospectively in the Surgical Repository, and should analyses use Engel, ILAE or both?. *(Seizure Terminology Reference)*

### Operations

- Do collaborating sites enter data directly into NeuroBridge REDCap projects, or only Penn staff?. *(PennKey & REDCap Access for External Guests)*
- Who sponsors guest PennKeys for NeuroBridge collaborators?. *(PennKey & REDCap Access for External Guests)*
- Who owns NeuroBridge's REDCap projects and grants project-level access?. *(Requesting a REDCap Account)*
- Which ieeg.org projects and admins serve NeuroBridge?. *(Adding Users to the ieeg.org Portal)*
- Who in NeuroBridge owns onboarding now that the CNT data-manager role is shared?. *(Onboarding & Offboarding Checklist)*
- Which rows (Azure littlab, AWS upenn-ieeg, cntgpu1, Matlab) apply to NeuroBridge members?. *(Onboarding & Offboarding Checklist)*
- What is the offboarding rule for a departing trainee's data and code?. *(Onboarding & Offboarding Checklist)*
- Where does NeuroBridge keep its study personnel list now that the old task-tool list is gone?. *(Adding Personnel to an IRB Study)*
- Which NeuroBridge protocols exist beyond the CNT ones, and who files their modifications?. *(Adding Personnel to an IRB Study)*
- What ORG code applies to NeuroBridge HSERA accounts?. *(Adding a Non-Penn / New Hire to a Study)*
- Where is the personnel list kept now?. *(Adding a Non-Penn / New Hire to a Study)*
