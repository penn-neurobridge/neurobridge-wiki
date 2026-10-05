---
title: "2. Roles in the lab"
order: 2
---

# 2. Roles in the lab

Everyone in the lab touches the same data infrastructure, so the roles differ in **what they own**, not in which systems they may use. Each role below lists what you own, what success looks like, which wiki *reader roles* to follow (these drive the [Map](../map/index.md) and the [Tags](../tags.md) page), and your first-month checklist. The onboarding steps common to everyone are in [§3](getting-set-up.md).

## Research coordinator — data (informatics RC)

**What you own.** The lab's data: aggregating, standardizing and de-identifying retrospective data from 15+ collaborating sites, roughly 500 new Penn Epilepsy Center patients every six months, the standard pipelines, the cloud and server infrastructure, and the regulatory paperwork that goes with them. Bash and Python; every dataset held to the FAIR standard.

**What it is not.** Not a clinical coordinator role. Patient-facing work is minimal, though you may occasionally consent a participant and you will cover for the clinical coordinators across the shared CNT infrastructure.

**Success.** By six months, fluent in every standardization, de-identification and large-scale wrangling pipeline the lab runs. By two years, a turnkey data infrastructure with a site-onboarding protocol, so researchers never spend time organizing datasets.

**Reader roles:** `data-rc` first, then `pipeline` and `pi-manager` (Governance). **Themes in order:** Data, Compute, Electrophysiology and Imaging, REDCap, Operations.

## Clinical research coordinator (CRC)

**What you own.** The participant-facing side of the studies: screening, consenting, scheduling and running 3T/7T/fMRI visits, EMU bedside tasks, post-operative neuropsych testing, Greenphire reimbursement, IRB modifications and personnel changes, and the REDCap entry that follows a visit. CRCs are usually shared across the CNT epilepsy groups and are supervised day to day by the lead CRC.

**Success.** Every visit documented the same day; no consent or scheduling record outside the approved PHI systems; a new CRC can follow your pages without asking you.

**Reader roles:** `crc`, plus the REDCap pages tagged `data-rc`. **Themes:** Operations, Imaging › Scheduling & Visits, Electrophysiology › EMU Acquisition, REDCap.

## Research assistant (RA)

**What you own.** Defined pieces of the data work under a coordinator or postdoc: running an established pipeline on new cases, quality-checking outputs, entering and reconciling metadata, maintaining an inventory, preparing figures and tables. Some RAs also cover clinical tasks after the relevant trainings.

**Success.** You can run the pipelines you have been given end to end without supervision, you log what you did, and you flag anything that looks wrong rather than fixing it silently.

**Reader roles:** `data-rc` for data RAs, `crc` for clinical RAs, `analyst` for anyone running analyses. **First month:** [§3](getting-set-up.md), then shadow one full run of the pipeline you will own.

## Postdoctoral researcher

**What you own.** A research program: questions, methods, papers and grant sections, usually across one or two of the partner centers (epilepsy, stroke/neuromodulation, TBI). You also own the reproducibility of your analyses, which means code in the lab GitHub organization, derivatives in the agreed `derivatives/` layout, and an SOP for any pipeline you expect someone else to run.

**Success.** First-author outputs on schedule; at least one pipeline or dataset left in a state the next person can use; a student mentored.

**Reader roles:** `analyst`, plus `pipeline` for the pipelines you maintain and `pi-manager` for the governance pages (IRB, data-use agreements, storage rules) you will be asked about.

## PhD student

**What you own.** Your dissertation project, with the same reproducibility expectations as a postdoc, scaled to your stage. Coursework and the program's milestones (DBEI/CCEB or the relevant graduate group) run in parallel; tell the PI early when they collide with lab deadlines.

**Success, by year.** Year 1: fluent with the data you will use, one analysis reproduced from scratch, committee formed. Years 2–3: a first-author paper and a candidacy exam. Years 4–5: the dissertation studies, with each dataset and pipeline documented as you go.

**Reader roles:** `analyst`; add `pipeline` once you maintain anything others depend on.

## Master's student

**What you own.** A scoped project (capstone, thesis or rotation) with a defined dataset, question and deliverable agreed in writing in the first two weeks. You work from de-identified data wherever possible.

**Success.** The deliverable, plus a short write-up and a notebook or script that reproduces every figure.

**Reader roles:** `analyst`. **Themes:** Compute › Overview and Software & Tools first, then the Data pages for your dataset.

## Undergraduate researcher

**What you own.** A bounded task with a mentor (an RA, PhD student or postdoc) who meets you weekly: annotation, quality control, a literature review, a small analysis, or a tooling improvement. You work only with de-identified data and do not request access to PHI systems.

**Success.** The task finished and documented; you can explain what the data is and where it came from.

**Reader roles:** `analyst` (the Compute basics) and the Lab Manual.

## Visiting researcher or external collaborator

**What you own.** Nothing in the lab's infrastructure; you receive data through an agreed channel (Pennsieve, Box, a DUA) and follow the sharing rules in Data › Sharing.

**Reader roles:** `collaborator`.

## Rhythm, for everyone

Weekly lab meeting; the imaging and PIER meetings when you cover clinical work; the data-request queue for incoming asks. See [§7](rhythm-and-writing-sops.md).
