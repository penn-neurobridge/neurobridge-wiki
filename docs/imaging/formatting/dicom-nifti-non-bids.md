---
title: "DICOM \u2192 NIfTI (non-BIDS)"
theme: "Imaging"
section: "Formatting"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst]
scope: core
kind: how-to
status: migrated
order: 1
owner: ""
last_reviewed: ""
tags: ["Data Standardization & Integration", "Data research coordinator / data RA", "Trainee / analyst (postdoc, PhD, master's, undergraduate)"]
---

# DICOM → NIfTI (non-BIDS)

!!! abstract "What this page tells you"
    In cnt1 go to /project/imaging_process/programs/run_dcm2niix, unzip the dicoms (unzip '*.zip'), edit the batch script or txt file with input/output paths, and run bash dcm2niix_directory.sh; niftis appear in the output folder.

in the VDI

ssh cnt1

cd /project/imaging\_process/programs/run\_dcm2niix


*   here you can use either batch\_processing or directory\_processing
    *   directory will go into sub directories within main directory
    *   batch will go into all files within directory

for directory\_processing

*   edit the dcm2niix\_batch.sh text file with input and output path
*   edit the txt file with input and output path

to run code: bash dcm2niix\_directory.sh

niftis will show up in the nifti output folder

New-
dicoms need to be unzipped
go to folder and type unzip '\*.zip'
all files will unzip
