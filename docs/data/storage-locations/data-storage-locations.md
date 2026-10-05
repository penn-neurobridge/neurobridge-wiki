---
title: "Data Storage Locations"
stage: "Data Governance"
roles: [data-rc, analyst, pi-manager]
order: 1
source: cnt
---

# Data Storage Locations

!!! abstract "What this page tells you"
    One-line descriptions of where CNT data lives: Borel/Pioneer (CETS; anonymized EEG, code, analysis output), IEEG.org (public portal on AWS), BSC (PMACS imaging cluster), cnt1/cnt-fs (PHI way station for de-identification), and REDCap (clinical research database).

*   **Borel, Pioneer (CETS)**
    *   **Borel:** Linux server with compute and storage; sandbox space for EEG and imaging (to be moved to BSC).
    *   **Pioneer:** GPU server connected to Borel; compute server with good processing speed.
    *   Main storage for limited and anonymized EEG data, code and the output of analyses.
*   [**IEEG.org**](http://IEEG.org) **(CNT)**
    *   Online public portal; the AWS backend stores processed, anonymized EEG.
    *   Web-based EEG viewer.
*   **BSC (PMACS)**
    *   Computing cluster in the LPC environment for imaging data and analyses.
*   **cnt1, cnt-fs (PMACS)**
    *   Linux server and Windows file share.
    *   Temporary way station to collect PHI data for de-identification.
*   **REDCap (PMACS)**
    *   Database for clinical research data; queries can be created to generate reports.
    *   Holds data manually extracted from EHR metadata, and study-specific data.
