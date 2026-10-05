---
title: "5. Sites, centers and collaborators"
order: 5
---

# 5. Sites, centers and collaborators

## Partner centers

The lab's data and much of its day-to-day operation come from clinical partners. For each, the wiki should eventually answer the same five questions: who our contacts are, what data flows in which direction, which systems hold it, under which agreement, and which procedures apply. Today only the CNT column is complete.

| | CNT / Penn Epilepsy Center | Penn Stroke Center · LCNS · brainSTIM | Center for Brain Injury and Repair (CBIR) | IBI · DBEI · CCEB |
|---|---|---|---|---|
| **Relationship** | Shared servers, coordinators and patients; lab touchdown space | Collaboration on stroke, aphasia and neuromodulation cohorts | Collaboration on TBI cohorts and imaging | Academic home; compute, training, methods collaborators |
| **Data in** | iEEG, scalp EEG, MRI/CT, RNS, surgical outcomes, REDCap | *to document:* lesion imaging, behavioural/outcome scales, stimulation protocols | *to document:* TBI imaging, clinical trajectories | none (methods, not data) |
| **Data out** | Derivatives, de-identified datasets, Pennsieve/ieeg.org uploads | *to document* | *to document* | manuscripts, shared code |
| **Systems** | cnt1, cnt-fs, BSC, Natus, Flywheel, REDCap, ieeg.org, Pennsieve | *to document* | *to document* | PMACS, LPC |
| **Agreements** | Penn IRB protocols (see Operations › Regulatory) | *to document:* IRB / reliance / DUA | *to document* | n/a |
| **Contacts** | PIs: Erin Conrad, Kate Davis, Brian Litt; lead CRC | *to add* | *to add* | *to add* |
| **Procedures in this wiki** | Electrophysiology, Imaging, REDCap, Operations | *none yet* | *none yet* | Compute › PMACS, Operations › Onboarding |

When a new center starts sending data, create its procedures in the existing themes (an Imaging pipeline is an Imaging pipeline whichever center the scan came from) and tag the pages with `program: stroke`, `program: tbi`, and so on, so the Map can later show a per-program view.

## The site network

Beyond the Penn centers, the lab curates data from 15+ external sites. The inventory — what each site provides (iEEG, imaging, RNS, metadata), counts, whether a protocol or DUA is required, and where the data lands — is maintained with the Data theme. *(Action: turn that list into a table with columns site · modalities · n · protocol/DUA · location · status · contact, and keep it in this wiki.)*

## Onboarding a new site — the protocol

This is the two-year goal from the data-coordinator role made into a checklist. Every new site, and every new partner center, goes through it in order.

1. **Agreement** — confirm whether the data needs a protocol, reliance agreement or DUA; record the decision and the document on the site's page.
2. **Transfer channel** — agree the route (Pennsieve, Box, SFTP, drive) and who sends. Identified data may land only on approved PMACS systems (cnt1, cnt-fs, BSC). Use the agreed project destination and access controls.
3. **Intake** — log the delivery: date, contents, counts, sender. Check against what was promised.
4. **Conformance** — restructure to the lab's data structure specification (Data Structure v1.0, being written into Data › Standards); record what could not be mapped.
5. **De-identification** — run the Data › De-identification scripts; verify headers.
6. **Registration** — add or update the site in the inventory; note derivatives available.
7. **Feedback to the site** — what was missing (the current inventory already flags gaps such as missing outcomes or iEEG reconstruction).

## Contacts by site

*The site table is in preparation.*
