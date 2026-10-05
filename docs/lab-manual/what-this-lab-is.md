---
title: 1. What this lab is
kind: explanation
status: draft
order: 1
owner: ""
last_reviewed: 2026-10-05
---

# 1. What this lab is


## Mission

The lab exists to **quantify disease severity, progression and outcomes**, to **overcome barriers to clinical translation**, and to **guide personalized treatment** in neurological disorders. Everything the lab does falls under one of three thrusts:

1. Discover methods to integrate multimodal data (imaging, electrophysiology, clinical records, outcomes).
2. Develop scalable tools that generalize across sites and disorders.
3. Deploy translational products for rigorous validation and clinical trials.

The disorders in scope today are epilepsy first, then traumatic brain injury, stroke and aphasia, movement disorders, consciousness, and clinical practice itself. The project list lives in the lab's project workspace; ask the PI for access.

## Where the lab sits

NeuroBridge is an **informatics lab**. Its academic home is the **Department of Biostatistics, Epidemiology and Informatics (DBEI)** in the Perelman School of Medicine, and it works inside two of Penn's methods institutes: the **Institute for Biomedical Informatics (IBI)**, which hosts the informatics faculty, seminars and computing community the lab belongs to, and the **Center for Clinical Epidemiology and Biostatistics (CCEB)**, the home of the biostatistics and epidemiology training programs several lab members sit in.

The data comes from clinical partners. Each partnership brings its own patients, systems and procedures, which is why the wiki's themes are organised by *system* rather than by disease:

| Partner | What they are | What the lab does with them | Where their procedures live |
|---|---|---|---|
| **Center for Neuroengineering & Therapeutics (CNT)** and the **Penn Epilepsy Center** | The epilepsy groups of Erin Conrad, Kate Davis and Brian Litt; the lab has a touchdown space at CNT and shares its servers, data and coordinators | Intracranial and scalp EEG, MRI/CT, electrode reconstruction, surgical outcomes; most of the data pipelines the lab runs started here | Electrophysiology, Imaging, REDCap, Compute (cnt1/cnt-fs), Operations |
| **Penn Stroke Center**, with the **Laboratory for Cognition and Neural Stimulation (LCNS)** and the **Penn Brain Science, Translation, Innovation and Modulation Center (brainSTIM)** | Roy Hamilton's neuromodulation and cognitive-neurology groups and the clinical stroke service | Stroke and aphasia cohorts, lesion imaging, neuromodulation trial data, outcome scales | *Procedures to be added — see §5* |
| **Center for Brain Injury and Repair (CBIR)** | Penn's traumatic-brain-injury research center | TBI cohorts, imaging and clinical trajectories | *Procedures to be added — see §5* |
| **IBI / DBEI / CCEB** | The methods institutes (not data sources) | Compute allocations, biostatistics and informatics collaborators, training programs, seminars | Compute (PMACS), Operations › Onboarding |

!!! note "Why the wiki looks epilepsy-heavy today"
    The SOPs imported in October 2026 came from the CNT knowledge base, so the Electrophysiology, Imaging and REDCap themes describe epilepsy workflows. The structure is deliberately generic: a stroke MRI follows the same Imaging stages (book → scan → transfer → format → derive), and a TBI cohort enters through the same Data › Site intake protocol. As the stroke and TBI collaborations produce their own procedures, they are added to the same themes with a `program` tag rather than to a separate section.

## How we work

Task-based, not micromanaged. In-person presence is preferred for collaboration; hours are flexible; there is no expectation of weekend or holiday work. Documentation is part of the job: if you did something twice, it becomes an SOP; if you found a page wrong, you fix it (see [Contributing](../about/contributing.md)).
