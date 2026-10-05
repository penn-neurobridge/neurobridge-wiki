---
title: "De-Identifying EDFs"
theme: "Data"
section: "De-identification"
stage: "Data Governance"
roles: [data-rc, pipeline]
kind: how-to
status: migrated
order: 1
owner: ""
last_reviewed: ""
tags: ["Data Governance", "Data research coordinator / data RA", "Pipeline & systems maintainer"]
---

# De-Identifying EDFs

!!! abstract "What this page tells you"
    To strip headers and annotations from an EDF, copy the original, then in cnt1 /project/eeg_process/programs/edf run bash edf_deid_wrapper.sh <source.edf> <destination directory>.

This script will de-identify the headers and delete all the annotations in an edf file


*   make a copy of the original file
*   open VDI and login
*   Cd /project/eeg\_process/programs/edf
*   now run the edf\_deid\_wrapper.sh
run bash script, first path is source file, second path is destination directory 

bash edf\_deid\_wrapper.sh /mnt/cnt-fs/eeg\_raw/ieeg\_raw/HUPXXX/Research/Vandy\_Resting/HUPXXX\_Vandy\_Resting.edf /mnt/cnt-fs/eeg\_raw/ieeg\_raw/HUPXXX/Research/Vandy\_Resting/

all done! 😀
