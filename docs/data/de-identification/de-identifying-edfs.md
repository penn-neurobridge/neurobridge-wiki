---
title: "De-Identifying EDFs"
stage: "Data Governance"
roles: [data-rc, pipeline]
audit: merge
order: 1
source: cnt
---

# De-Identifying EDFs

!!! abstract "What this page tells you"
    To strip headers and annotations from an EDF, copy the original, then in cnt1 /project/eeg_process/programs/edf run bash edf_deid_wrapper.sh <source.edf> <destination directory>.

The `edf_deid_wrapper.sh` script de-identifies the headers and deletes all the annotations in an EDF file.

1. Make a copy of the original file.
2. Open VDI and log in.
3. Change to the program folder: `cd /project/eeg_process/programs/edf`
4. Run `edf_deid_wrapper.sh` with bash. The first path is the source file and the second path is the destination directory:

    `bash edf_deid_wrapper.sh /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Vandy_Resting/HUPXXX_Vandy_Resting.edf /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Vandy_Resting/`
