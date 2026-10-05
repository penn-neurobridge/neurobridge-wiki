---
title: "De-Identifying EDF Headers"
stage: "Data Governance"
roles: [data-rc, pipeline]
audit: merge
order: 2
source: cnt
---

# De-Identifying EDF Headers

!!! abstract "What this page tells you"
    Move the Mxene and Clinical EDF files into cnt-fs, copy an ieeg-dataset.ini channel map, run anonymize_edf.sh on cnt1 to strip patient name and ID, then upload both deid folders to ieeg.org with the ieeg CLI and verify.

After a day of Mxene electrode testing, move the Mxene EDF file and the clinical EDF file into cnt-fs, de-identify their headers on cnt1, and upload both to ieeg.org.

1. **Move the EDF files into cnt-fs**
    *   Use Remote Desktop to export the Mxene EDF file and the clinical EDF file from the day you did testing.
        *   Place the Mxene EDF file in `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXX/RIXXX_Mxene`
        *   Place the clinical EDF file in `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/RIDXXXX_Clinical`
2. **Create the ieeg-dataset.ini channel mapping file**
    *   Copy the channel mapping file from a previous subject (the Mxene and clinical files differ).
    *   Leave the file name and the channels as they are.
        *   `ieeg-dataset.ini`
3. **De-identify the EDF file**
    1. Open MobaXterm and, on cnt1, navigate to the program folder: `cd /project/eeg_process/programs/edf_headers`
    2. Run: `bash anonymize_edf.sh -n NAME -i ID -d DIRECTORY_INPUT -o DIRECTORY_OUTPUT`
        *   This creates a new EDF file with anonymized headers, named `"original_filename"_deid.edf`.
        *   Options:
            *   `-n`: removes the patient name from the header and replaces it with the name given here. The recommended value is `deid`.
            *   `-i`: removes the patient ID from the header and replaces it with the ID given here. The recommended value is `deid`.
            *   `-d`: the path to the source directory where the EDF is stored. Example: `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXX/RIDXXX_Mxene`
            *   `-o`: the path to the output directory where the de-identified EDF will be stored. Example: `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/RIDXXXX_Mxene`
        *   The `-n`, `-i`, `-d` and `-o` options are all mandatory. The script errors if any of them is missing.
4. **Upload the de-identified EDF folder to [ieeg.org](http://ieeg.org)**
    *   Make sure the `"original_filename"_deid.edf` file and the `ieeg-dataset.ini` channel mapping file are both in the `cnt-fs/eeg_raw/Mxene_project/RIDXXX/deid` directory, and that no other files are in there.
    *   On cnt1, navigate to the ieeg CLI folder: `cd /project/eeg_process/programs/ieeg-cli.1.14.60`
    *   First upload the Mxene EDF with this command:
        `./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/Mxene_Electrode/RIDXXXX_Mxene' '/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXX/RIDXXX_Mxene/'`
    *   Then upload the clinical EDF with this command:
        `./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/Mxene_Electrode/RIDXXXX_Clinical' '/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/RIDXXXX_Clinical'`
    *   Check [ieeg.org](http://ieeg.org/) and verify that the EDF looks correct.
