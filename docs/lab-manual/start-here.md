---
title: "0. Start here"
order: 0
---

# 0. Start here

This wiki holds the lab's procedures. Most of them were written by the clinical research coordinators and data staff of the Center for Neuroengineering and Therapeutics (CNT), whose epilepsy data pipelines the lab shares, so the wiki describes more than any one person in NeuroBridge will do. Each page says at the top whether it is something our people do (no banner), shared infrastructure we depend on, background reading, or clinical work we only cover. Read in the order below for your role, then use the [map](../map/index.md) to see where a page sits.

!!! danger "Five things you must never do"
    1. Put data with patient identifiers anywhere except the PMACS systems (cnt1, cnt-fs, the BSC cluster) or Penn+Box. SEAS servers, laptops, GitHub, Slack and this wiki never hold identified data.
    2. Write a password, key or token on a wiki page, in code, or in a chat message. They live in the lab password manager.
    3. Share a link to a dataset or folder with anyone outside the study team, or set a share to "anyone with the link".
    4. Use a patient's name, medical record number or date of birth in a file name, path, script or screenshot. Use the study identifier.
    5. Move data off the PMACS systems without running it through the de-identification procedure for its type.
    If you are unsure whether something counts, it does; ask the PI or the data research coordinator first.

## Everyone, in the first hour

Read [What this lab is](what-this-lab-is.md), [Regulatory and privacy essentials](regulatory-and-privacy.md) and [How data moves through the lab](how-data-moves.md). Keep the [glossary](glossary.md) open: EMU, Natus, iEEG, RID and HUP numbers, BIDS, mef and ieeg.org are explained there, and the procedures assume you know them.

## If you are the data research coordinator

Your job is the data: aggregating, standardising and de-identifying it, and keeping the pipelines running. Work through [Getting set up](getting-set-up.md) in parallel with this reading.

1. [Data storage locations](../data/storage-locations/data-storage-locations.md): which system holds what, and which may hold identified data.
2. [Overview of CNT systems](../compute/overview/overview-of-cnt-systems.md), then [PMACS VPN](../compute/pmacs-psom-systems/pmacs-vpn.md) and [VDI, cnt-fs and cnt1](../compute/overview/vdi-cnt-fs-and-cnt1.md).
3. [De-identifying EDFs](../data/de-identification/de-identifying-edfs.md) and [De-identifying NIfTI headers](../data/de-identification/de-identifying-nifti-headers.md).
4. The intracranial EEG pipeline, in order: [overview and timeline](../electrophysiology/overview-and-setup/seeg-phase-ii-processing-overview-and-timeline.md), [setup for processing](../electrophysiology/overview-and-setup/setup-for-processing.md), [automated channel mapping](../electrophysiology/channel-mapping/automated-channel-mapping.md), [processing and upload to ieeg.org](../electrophysiology/processing-and-upload-to-ieeg-org/processing-for-ieeg-org-natus2mef-validate-upload.md).
5. The imaging pipeline: [RADAR data pulls](../imaging/clinical-imaging-pulls-radar/radar-data-pulls.md), [DICOM to NIfTI](../imaging/formatting/dicom-nifti-non-bids.md), [electrode reconstruction](../imaging/electrode-reconstruction/gui-docker-reconstruction-workflow.md).
6. Sharing and archiving: [Pennsieve data access rules](../data/sharing-pennsieve-and-ieeg-org/pennsieve-data-access-rules.md), [uploading from cnt1 to Pennsieve](../data/sharing-pennsieve-and-ieeg-org/uploading-from-cnt1-to-pennsieve.md), [archiving EEG data to Azure](../data/archiving-azure/archiving-eeg-data-to-azure.md).
7. The clinical variables: [Surgical Outcomes REDCap project](../redcap/projects-and-data-entry/surgical-outcomes-redcap-project.md) and [RADAR pull to REDCap entry](../redcap/clinical-data-pulls-ehr-redcap/radar-pull-redcap-entry.md).
8. What you will administer for others: [onboarding and offboarding checklist](../operations/onboarding-and-offboarding/onboarding-and-offboarding-checklist.md), [adding personnel to an IRB study](../operations/regulatory-irb-and-reporting/adding-personnel-to-an-irb-study.md).

Six months in, you should be able to run every page in items 3 to 6 without help. [Roles in the lab](roles-in-the-lab.md) gives the full expectations.

## If you are a PhD student, master's student or undergraduate

You will analyse de-identified data. You do not need the hospital systems, and you should not request access to them.

1. [How data moves through the lab](how-data-moves.md) and the [glossary](glossary.md), so that the words in the data's file names mean something.
2. Where you compute: [Overview of CNT systems](../compute/overview/overview-of-cnt-systems.md), [accessing Borel over SSH](../compute/seas-cets-servers/accessing-borel-over-ssh.md), [mounting Leif](../compute/seas-cets-servers/mounting-leif-over-smb.md), [submitting jobs with SLURM](../compute/seas-cets-servers/submitting-jobs-with-slurm.md).
3. Where the data is and how to get it: [Data storage locations](../data/storage-locations/data-storage-locations.md), [Pennsieve data access rules](../data/sharing-pennsieve-and-ieeg-org/pennsieve-data-access-rules.md), [Pennsieve downloader](../data/sharing-pennsieve-and-ieeg-org/pennsieve-downloader.md).
4. How the data came to be, read once: the [intracranial EEG overview](../electrophysiology/overview-and-setup/seeg-phase-ii-processing-overview-and-timeline.md), [electrode reconstruction](../imaging/electrode-reconstruction/gui-docker-reconstruction-workflow.md) and [opening the results in ITK-SNAP](../imaging/electrode-reconstruction/opening-itk-snap-files-from-pennbox.md), and the [Surgical Outcomes REDCap project](../redcap/projects-and-data-entry/surgical-outcomes-redcap-project.md) with the [seizure terminology reference](../redcap/projects-and-data-entry/seizure-terminology-reference.md), which defines the outcome variables you will model.
5. If your project uses MRI: [DICOM to NIfTI](../imaging/formatting/dicom-nifti-non-bids.md) and [de-identifying NIfTI headers](../data/de-identification/de-identifying-nifti-headers.md).

Agree the dataset, question and deliverable with the PI in writing in your first two weeks. Code goes in the lab's GitHub organisation; data never does.

## If you are a postdoc, especially one new to clinical neuroscience

Start with the two sections that place the lab: [What this lab is](what-this-lab-is.md), for the partner centers and which procedures belong to which, and [Sites and collaborators](sites-and-collaborators.md), for how data from a new site or program is taken in. If you work on stroke or brain injury, the Electrophysiology and Imaging themes describe the epilepsy pipelines you will adapt rather than follow; the Data and Compute themes apply to you unchanged.

You will be asked about the rules before you are asked about methods: [Regulatory and privacy essentials](regulatory-and-privacy.md), [adding personnel to an IRB study](../operations/regulatory-irb-and-reporting/adding-personnel-to-an-irb-study.md) and the [e-regulatory binder](../operations/regulatory-irb-and-reporting/e-regulatory-binder-and-edoa-audit-prep.md). Then the student list above, items 2 to 4. When you build a pipeline others will run, write it up with the [SOP template](../about/sop-template.md) and the [style guide](../about/style-guide.md); [Contributing](../about/contributing.md) explains how a page gets in.

## If you cover clinical duties

Clinical coordinators shared with the CNT, and anyone standing in for one, use the pages marked *Clinical coverage only*. Begin with the clinical section of [Getting set up](getting-set-up.md), the [consent signing checklist](../operations/consenting/consent-signing-checklist.md), the [3T visit checklist](../imaging/scheduling-and-visits/visit-checklist-3t-study.md) and [EMU acquisition](../electrophysiology/emu-acquisition/index.md). The lead clinical coordinator at the CNT supervises this work day to day.

## Where the other things are

Project decisions, meeting notes and the people directory are in the lab's project workspace, not in this wiki; ask the PI for access. Records that contain patient identifiers (scheduling trackers, consent logs) are in the PHI-approved tracker and in REDCap; the wiki only says where they are. Code is in the lab's GitHub organisation. Who to call is on [Important contacts and emergency numbers](../operations/contacts/important-contacts-and-emergency-numbers.md).
