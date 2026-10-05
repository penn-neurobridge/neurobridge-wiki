---
title: "1. What this lab is"
order: 1
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
| **Penn Stroke Center**, with the **Laboratory for Cognition and Neural Stimulation (LCNS)** and the **Penn Brain Science, Translation, Innovation and Modulation Center (brainSTIM)** | Roy Hamilton's neuromodulation and cognitive-neurology groups and the clinical stroke service | Stroke and aphasia cohorts, lesion imaging, neuromodulation trial data, outcome scales | *In preparation* |
| **Center for Brain Injury and Repair (CBIR)** | Penn's traumatic-brain-injury research center | TBI cohorts, imaging and clinical trajectories | *In preparation* |
| **IBI / DBEI / CCEB** | The methods institutes (not data sources) | Compute allocations, biostatistics and informatics collaborators, training programs, seminars | Compute (PMACS), Operations › Onboarding |

The procedures in this wiki today are the epilepsy workflows run jointly with the CNT, because that is where the lab's infrastructure began. The structure is generic: a stroke MRI follows the same Imaging stages (book, scan, transfer, format, derive), and a TBI cohort enters through the same site-intake protocol. Procedures for the other centers are added to the same themes, with a `center:` line in their front matter, as the collaborations produce them.

## Who's who

- **PI** — Nishant Sinha.
- **Collaborating PIs** — Erin Conrad and Kate Davis (Penn Epilepsy Center); Brian Litt (CNT); the Penn Stroke Center / LCNS / brainSTIM and CBIR investigators the lab works with.
- **Team** — research coordinators (data and clinical), research assistants, postdocs, PhD students, master's and undergraduate students, and a cloud-infrastructure project manager. Roles are described in [§2](roles-in-the-lab.md). The people directory is in the lab's project workspace.

## How we work

Task-based, not micromanaged. In-person presence is preferred for collaboration; hours are flexible; there is no expectation of weekend or holiday work. Documentation is part of the job: if you did something twice, it becomes an SOP; if you found a page wrong, you fix it (see [Contributing](../about/contributing.md)).
