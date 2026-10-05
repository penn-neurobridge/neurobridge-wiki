---
title: "DICOM → NIfTI (non-BIDS)"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst]
order: 1
source: cnt
---

# DICOM → NIfTI (non-BIDS)

!!! abstract "What this page tells you"
    In cnt1 go to /project/imaging_process/programs/run_dcm2niix, unzip the dicoms (unzip '*.zip'), edit the batch script or txt file with input/output paths, and run bash dcm2niix_directory.sh; niftis appear in the output folder.

This conversion runs on cnt1 from the VDI.

*   `ssh cnt1`
*   `cd /project/imaging_process/programs/run_dcm2niix`
*   Here you can use either batch\_processing or directory\_processing.
    *   directory\_processing goes into the sub-directories within the main directory.
    *   batch\_processing goes into all files within the directory.

The DICOMs must be unzipped before conversion. Go to the folder and type `unzip '*.zip'`. All files will unzip.

For directory\_processing:

*   Edit the dcm2niix\_batch.sh text file with the input and output path.
*   Edit the txt file with the input and output path.

To run the code: `bash dcm2niix_directory.sh`

The NIfTIs will show up in the nifti output folder.
