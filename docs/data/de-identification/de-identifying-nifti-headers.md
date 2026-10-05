---
title: "De-identifying NIfTI Headers"
stage: "Data Governance"
roles: [data-rc, pipeline]
order: 3
source: cnt
---

# De-identifying NIfTI Headers

!!! abstract "What this page tells you"
    De-identify nifti images in cnt1: add each /mnt/cnt-fs/imaging_process_fs/imaging_bids/subRIDXXX path to deid_json_queue.txt in /project/imaging_process/programs/deid_json (blank trailing line), then run bash deid_json.sh from the heudiconv_3T folder. Images must be nifti first (see dicom-to-nifti page).

This procedure de-identifies NIfTI images on cnt1 with the `deid_json` script.

To use this script, the images must be in NIfTI format. To convert from DICOM to NIfTI, [use this sop](../../imaging/formatting/dicom-nifti-non-bids.md).

1. On cnt1, de-identify the NIfTI images using `deid_json`.
    1. In MobaXterm, on cnt1, go to `/project/imaging_process/programs/deid_json/` and open the `deid_json_queue.txt` file.
    2. On each line, type `/mnt/cnt-fs/imaging_process_fs/imaging_bids/subRIDXXX`, then save.
        1. Press Enter so that there is an empty line below the last entry.
    3. Go to `/project/imaging_process/programs/heudiconv_3T/`.
    4. Type `bash deid_json.sh` and press Enter to run it.
