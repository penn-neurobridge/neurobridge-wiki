---
title: "8. Glossary"
order: 8
---

# 8. Glossary

| Term | Meaning |
|---|---|
| CNT | Center for Neuroengineering and Therapeutics (Penn) — the shared epilepsy-research home; the lab's touchdown space |
| DBEI | Department of Biostatistics, Epidemiology and Informatics — where the lab is based |
| PMACS / PSOM | Penn Medicine Academic Computing Services / Perelman School of Medicine — the HIPAA-side computing (cnt1, cnt-fs, BSC, VDI, REDCap) |
| CETS / SEAS | Computing and Educational Technology Services / School of Engineering — the engineering-side servers (Borel, Leif, Pioneer, Finkel) |
| cnt1, cnt-fs | PMACS Linux compute node and Windows file share — the way-station for identified data before de-identification |
| BSC / LPC | PMACS computing cluster used for imaging analyses; identifiable data are permitted on BSC, as confirmed by Nishant Sinha on 2026-09-20 |
| Borel, Pioneer, Finkel, Leif | SEAS servers: Borel (compute+storage), Pioneer (GPU), Finkel (GPU under SLURM), Leif (storage share) |
| VDI | PMACS virtual desktop — the Windows environment from which cnt-fs is mounted |
| [ieeg.org](http://ieeg.org) | Public iEEG portal with an AWS backend; where processed, anonymized recordings are published |
| Pennsieve | Penn's scientific data platform; de-identified datasets are published there |
| RADAR | Penn Radiology Data Analytics Resource — how clinical imaging is requested |
| EMU | Epilepsy Monitoring Unit — where sEEG patients are recorded |
| sEEG / iEEG | Stereo-EEG / intracranial EEG — recordings from implanted electrodes |
| Natus | The clinical EEG recording system; recordings are exported from it |
| natusdir, mef | The exported Natus directory; the compressed format (MEF) produced by natus2mef for [ieeg.org](http://ieeg.org) |
| RID / HUP-number | Research ID used in REDCap and internal study records / CNT subject number (HUPXXX) used in the data-sharing workflow. The CNT SOP specifies HUP numbers rather than RID numbers for shared outputs; follow its identifier mapping and de-identification steps in [Overview of CNT Systems](cnt:compute/overview/overview-of-cnt-systems.md). |
| BIDS | Brain Imaging Data Structure — a data organization standard. The lab's Data Structure v1.0 specification (being written into Data › Standards) defines the curated layout for Dataset 49; pipeline-specific input and session names may differ and require an explicit mapping. |
| FAIR | Findable, Accessible, Interoperable, Reusable — the standard the lab's data is held to |
| REDCap | The clinical research database; holds clinical variables and outcomes |
| eDOA | Electronic Delegation of Authority log — who may do what on a protocol |
| RPPR | NIH Research Performance Progress Report — annual grant reporting |
| CAMRIS | Center for Advanced Magnetic Resonance Imaging and Spectroscopy — where research scans are booked |
| Greenphire ClinCard | The participant reimbursement system |
| PennChart | Penn Medicine's Epic EHR |
| Flywheel, Pedro | Where 3T (Flywheel) and 7T (Pedro server) scans are retrieved from |
