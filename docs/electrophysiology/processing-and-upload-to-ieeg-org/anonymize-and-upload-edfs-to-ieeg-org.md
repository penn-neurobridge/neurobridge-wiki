---
title: "Anonymize & Upload EDFs to ieeg.org"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 4
source: cnt
---

# Anonymize & Upload EDFs to ieeg.org

!!! abstract "What this page tells you"
    Anonymize Mxene EDFs on cnt1 with anonymize_edfs.sh (-n, -i, -d, -o required; date-shifts to 1/1/2000), create an ieeg-dataset.ini channel mapping, then upload the deid folder with ieeg upload-directory.

### Mxene EEG Processing/Uploading

Use this procedure to de-identify and upload each EDF recording from the Mxene project.

1. Move the EDF file into **cnt-fs**.
    1. For Mxene EEG: `/eeg_raw/Mxene_project/RIDXXXX/original`
2. De-identify the EDF file.
    1. Open MobaXterm, and in **cnt1** navigate to `/project/eeg_process/programs/edf_anonymize`.
    2. On the command line, run `bash anonymize_edfs.sh -n NAME -i ID -d DIRECTORY_INPUT -o DIRECTORY_OUTPUT -a ADD_DATE -s SUBTRACT_DATE`.
        1. This creates a new EDF file with anonymized headers.
            1. The de-identified file is named `<original_filename>_deid.edf`.
        2. Options
            1. `-n` : Removes the patient name from the header and replaces it with the name given here. The recommended value is `deid`.
            2. `-i` : Removes the patient ID from the header and replaces it with the ID given here. The recommended value is `deid`.
            3. `-d` : The path to the source directory where the EDF is stored, for example `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/original`.
            4. `-o` : The path to the output directory where the de-identified EDF is written, for example `/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/deid`.
            5. `-a` : By default, the recording date of the EDF is shifted to 1/1/2000. To shift the date by adding days to the original recording date instead, give the number of days to add.
            6. `-s` : By default, the recording date of the EDF is shifted to 1/1/2000. To shift the date by subtracting days from the original recording date instead, give the number of days to subtract.
        3. The `-n`, `-i`, `-d`, and `-o` flags are mandatory. The script errors if any of them is missing.
        4. The `-a` and `-s` flags are optional. Without them, the script shifts the EDF date to 1/1/2000, which is generally recommended. If both flags are given, the script errors.
3. Create the `ieeg-dataset.ini` channel mapping file.
    1. Copy the `ieeg-dataset.ini` template file and paste it into **cnt-fs** `/eeg_raw/Mxene_project/RIDXXXX/deid`.
    2. Open the `ieeg-dataset.ini` file in Notepad and edit the channel mappings as needed for the EDF recording.
        1. Template: `channels=Fp1,Fp2,F7,F8,....`
        2. Notes:
            1. Separate each channel with a comma. Do not put spaces between the channels.
            2. The order of the channels matters. It determines the order of the channels in [ieeg.org](http://ieeg.org).
            3. To rename a channel, use this form: `channels=FP1:Fp1,FP2:Fp2,F7,F8,T3:T7,T4:T8,....`
                1. The old channel name goes to the left of the colon, and the new channel name goes to the right of the colon.
            4. Do not rename the `ieeg-dataset.ini` file. If it is renamed, the upload process fails.
4. Upload the deid EDF folder to [ieeg.org](http://ieeg.org).
    1. Make sure that the `<original_filename>_deid.edf` file and the `ieeg-dataset.ini` channel mapping file are both in the cnt-fs `/eeg_raw/Mxene_project/RIDXXXX/deid` directory, and that no other files are there.
    2. In **cnt1**, navigate to `/project/eeg_process/programs/ieeg-cli-1.14.60`.
    3. Run `./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/Mxene/RIDXXXX' '/mnt/cnt-fs/eeg_raw/Mxene_project/RIDXXXX/deid'`.
    4. Check [ieeg.org](http://ieeg.org) and verify that the EDF looks correct.
