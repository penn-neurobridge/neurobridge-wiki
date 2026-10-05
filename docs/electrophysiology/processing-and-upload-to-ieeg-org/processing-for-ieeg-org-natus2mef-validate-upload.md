---
title: "Processing for ieeg.org (natus2mef → validate → upload)"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 1
source: cnt
---

# Processing for ieeg.org (natus2mef → validate → upload)

!!! abstract "What this page tells you"
    Full ieeg.org processing commands for Intracranial, CCEPS, Gottfried, and Gold recordings: natus2mef in a screen, mefvalidate, redact PHI annotations, copy annotation and montage files to cnt-fs, delete original annotations, ieeg upload-directory to the right project, then build config folders. Notify Erin Conrad or the Gottfried Lab coordinator afterward.

Process and upload the EEG files after you have set up the metadata files and exported the recordings from Natus. **There are five steps in this process:**

1. Natus to mef conversion
2. Validate the mef
3. Redact annotations
    1. After you redact the PHI, copy both annotations files and the montages to cnt-fs.
    2. Delete the original annotations JSON file from the mef.
4. Upload to [ieeg.org](http://ieeg.org/)
5. Make config files

The commands for each type of EEG file are given below.
**Replace XXX with the patient's HUP ID in a text editor (for example Sublime Text) before running the commands.**

## Intracranial\_EEG
**First, log into the VDI and enter cnt1 in MobaXterm with this command: ssh cnt1**

*   If the VDI logs you out, the server name is [connect.pmacs.upenn.edu](http://connect.pmacs.upenn.edu).

1. **Natus to mef conversion**

    **Make sure that the EEG file times do not overlap before you run this conversion. If they overlap, the natus2mef conversion fails.** In that case, split the dataset into two separate natusdir files (labeled D01 and D02) and process each one separately. Adjust the file names in the commands below to match. **Instructions are here:** Splitting Datasets ([Splitting Datasets](splitting-datasets.md))

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/natus-latest
    ```

    First open a new screen, so that the mef conversion can run for a few hours until it is complete:

    ```
    screen -S HUPXXX_convert
    ```

    Inside the new screen, run:

    ```
    ./natus2mef -c /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG/HUPXXX_natusDir.txt -m /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG/HUPXXX_channelMapping.txt -o /project/eeg_process/HUPXXX/HUPXXX_mef >/mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG/HUPXXX_convert_log 2>&1
    ```

    The `--no-annotation-filters` flag is not used for the intracranial conversion.

    Press **Ctrl+a, then d** to leave the screen.

    To go back into the screen and check on it:
    **screen -ls** lists all available screens.
    **screen -r XXXX** reattaches to the screen with that number.
    **Ctrl+a, then Ctrl+\\** terminates a screen.

    Once the conversion has finished, type **exit** to close the screen.

    To check that the conversion succeeded, **open the HUPXXX\_convert\_log file in cnt-fs in ieeg\_raw/HUPXXX**. Right-click on the convert log, open it in Notepad++, and scroll to the bottom. It should say **“processing successful”**. **If the processing failed, the error is shown in this file.**

2. **Mef validate**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_mef/*.mef | grep PASS
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_mef/*.mef | grep FAIL
    ```

3. **Redact annotations**

    1. Run the redact annotations script.
        1. _If you accidentally delete an annotation that should have stayed in, or keep an annotation that should have been deleted, press_ **_Ctrl+C_** _to end the script, and then start over. Alternatively, finish the rest of the annotations, copy the file to cnt-fs, open the file, and remove the one you missed by hand._
    2. When done, copy both annotations files and the montages to cnt-fs.
    3. Delete the original annotations file from the mef (if it contains PHI).

    **Remove anything next to the line "type" that contains PHI, such as pronouns, names, or initials of the patient.**

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/redact_annots
    ```

    ```
    python redact_annots_python3.py /project/eeg_process/HUPXXX/HUPXXX_mef/annotations.iann.json /project/eeg_process/HUPXXX/HUPXXX_mef/annotations_edit.iann.json
    ```

    If you get the error message shown below, run:

    ```
    ssh cnt1
    module load python/3.10
    ```

    ![Terminal on cnt1 running redact_annots on HUP239 paths; libpython error](../../assets/electrophysiology/processing-for-ieeg-org-natus2mef-validate-upload/processing-for-ieeg-org-natus2mef-validate-upload-01.png)

    Once you have redacted the annotations **(any with PHI)**, enter the mef folder that you just created:

    ```
    cd /project/eeg_process/HUPXXX/HUPXXX_mef
    ```

    From here, copy both annotations files and the montages to cnt-fs, and **then delete the original annotations file (annotations.iann.json) from the mef**. The original must not be uploaded to [ieeg.org](http://ieeg.org) because it contains PHI.

    ```
    cp -r annotations.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG
    ```

    ```
    cp -r annotations_edit.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG
    ```

    ```
    cp -r montages.imtg.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Intracranial_EEG
    ```

    **Delete the original annotations file before uploading if it contains PHI.** This is needed only if you edited the original.

    ```
    rm -r annotations.iann.json
    ```

4. **Upload to [ieeg.org](http://ieeg.org)**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    First open a new screen, so that the ieeg upload can run for a few hours until it is complete:

    ```
    screen -S HUPXXX_ieeg_upload
    ```

    **Upload to** [**ieeg.org**](http://ieeg.org) **with the command below:**

    ```
    ./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/HUP_Intracranial_Data/HUPXXX_phaseII' '/project/eeg_process/HUPXXX/HUPXXX_mef'
    ```

    Datasets are no longer uploaded to the HUP\_SEEG project.

    Press **Ctrl+a, then d** to leave the screen.

    To go back into the screen and check on it:
    **screen -ls** lists all available screens.
    **screen -r XXXX** reattaches to the screen with that number.

    Once the upload is complete, type **exit** to close the screen.

5. **Make config files**

    1. When your processing is done, go to the **eeg\_raw/ieeg\_raw/HUPXXX/Intracranial\_EEG** folder in cnt-fs and place the files below in a folder called **config\_intracranial**. When all processing for this patient is done, this folder is placed in a master config folder in **ieeg\_metadata**.
        1. Natusdir
        2. Data Collection
        3. Convert log
        4. annotations.iann.json
        5. annotations\_edit.iann.json
        6. Montages
        7. channel mapping

## CCEPS
**First, log into the VDI and enter cnt1 in MobaXterm with this command: ssh cnt1**

*   If the VDI logs you out, the server name is [connect.pmacs.upenn.edu](http://connect.pmacs.upenn.edu).

1. **Natus to mef conversion**

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/natus-latest
    ```

    CCEPS recordings are converted with machine annotations, using the `--no-annotation-filters` flag:

    ```
    ./natus2mef --no-annotation-filters -c /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS/HUPXXX_CCEPS_natusDir.txt -m /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS/HUPXXX_channelMapping.txt -o /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef >/mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS/HUPXXX_CCEPS_convert_log 2>&1
    ```

    To check that the conversion succeeded, **open the HUPXXX\_CCEPS\_convert\_log file in cnt-fs in ieeg\_raw/HUPXXX/Research/CCEPS**. Right-click on the convert log, open it in Notepad++, and scroll to the bottom. It should say **“processing successful”**. **If the processing failed, the error is shown in this file.**

2. **Mef validate**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef/*.mef | grep PASS
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef/*.mef | grep FAIL
    ```

3. **Redact annotations**

    1. Run the redact annotations script.
        1. _If you accidentally delete an annotation that should have stayed in, or keep an annotation that should have been deleted, press_ **_Ctrl+C_** _to end the script, and then start over._
    2. When done, copy both annotations files and the montages to cnt-fs.
    3. Delete the original annotations file from the mef.
    4. Run the "edit\_annots\_cceps.py" script to de-identify the "Annotator" field and to check whether any channels are missing.

    **Remove anything next to the line "type" that contains PHI, such as pronouns, names, initials of the patient, or the room number.**

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/redact_annots
    ```

    ```
    python redact_annots_python3.py /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef/annotations.iann.json /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef/annotations_edit.iann.json
    ```

    Once you have redacted the annotations **(any with PHI)**, enter the mef folder that you just created:

    ```
    cd /project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef
    ```

    From here, copy both annotations files and the montages to cnt-fs, and **then delete the original annotations file (annotations.iann.json) from the mef**. The original must not be uploaded to [ieeg.org](http://ieeg.org) because it contains PHI.

    ```
    cp -r annotations.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS
    ```

    ```
    cp -r annotations_edit.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS
    ```

    ```
    cp -r montages.imtg.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS
    ```

    **Delete the original annotations file before uploading if it contains PHI.**

    ```
    rm -r annotations.iann.json
    ```

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef
    ```

    ```
    python edit_annots_cceps.py /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS/annotations_edit.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/CCEPS/HUPXXX_channelMapping.txt
    ```

    This script removes every entry in the "Annotator" header of the annotations JSON file and replaces it with "null". It also cross-checks the "Closed relay to ...." annotations in the annotations JSON file against the channel mapping file, and it alerts you if any channels are missing from the channel mapping.

4. **Upload to [ieeg.org](http://ieeg.org)**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/HUP_CCEPs/HUPXXX_CCEP' '/project/eeg_process/HUPXXX/HUPXXX_CCEPS_mef'
    ```

5. **Make config files**

    1. When your processing is done, go to the **eeg\_raw/ieeg\_raw/HUPXXX/Research/CCEPS** folder in cnt-fs and place the files below in a folder called **config\_CCEPS**. When all processing for this patient is done, this folder is placed in a master config folder in **ieeg\_metadata**.
        1. Natusdir
        2. Data Collection
        3. Convert log
        4. annotations.iann.json
        5. annotations\_edit.iann.json
        6. Montages

6. **Tell Erin Conrad that the file is uploaded.**

## Gottfried
**First, log into the VDI and enter cnt1 in MobaXterm with this command: ssh cnt1**

*   If the VDI logs you out, the server name is [connect.pmacs.upenn.edu](http://connect.pmacs.upenn.edu).
*   Log into the VDI with your PMACS username and password.

1. **Natus to mef conversion**

    ```
    ssh cnt1
    ```

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/natus-latest
    ```

    ```
    ./natus2mef -c /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried/HUPXXX_Gottfried_natusDir.txt -m /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried/HUPXXX_Gottfried_channelMapping.txt -o /project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef >/mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried/HUPXXX_Gottfried_convert_log 2>&1
    ```

    To check that the conversion succeeded, **open the HUPXXX\_Gottfried\_convert\_log file in cnt-fs in ieeg\_raw/HUPXXX/Research/Gottfried**. Right-click on the convert log, open it in Notepad++, and scroll to the bottom. It should say **“processing successful”**. **If the processing failed, the error is shown in this file.**

    _Workaround: if the convert log fails with both RESP channels, try processing with only one RESP channel._

2. **Mef validate**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef/*.mef | grep PASS
    ```

    This should print many lines containing \[PASS\], which means the validation worked.

    ```
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef/*.mef | grep FAIL
    ```

    This should print no lines if the validation worked.

3. **Redact annotations**

    1. Run the redact annotations script.
        1. _If you accidentally delete an annotation that should have stayed in, or keep an annotation that should have been deleted, press_ **_Ctrl+C_** _to end the script._
    2. When done, copy both annotations files and the montages to cnt-fs.
    3. Delete the original annotations file from the mef.

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/redact_annots
    ```

    ```
    python redact_annots_python3.py /project/eeg_process//HUPXXX/HUPXXX_Gottfried_mef/annotations.iann.json /project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef/annotations_edit.iann.json
    ```

    **Remove anything next to the line "type" that contains PHI, such as pronouns, names, or initials of the patient.**

    Once you have redacted the annotations **(any with PHI)**, enter the mef folder that you just created:

    ```
    cd /project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef
    ```

    From here, copy both annotations files and the montages to cnt-fs, and **then delete the original annotations file (annotations.iann.json) from the mef**. The original must not be uploaded to [ieeg.org](http://ieeg.org) because it contains PHI.

    ```
    cp -r annotations.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried
    ```

    ```
    cp -r annotations_edit.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried
    ```

    _The annotations\_edit file does not exist if you did not delete any annotations._

    ```
    cp -r montages.imtg.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gottfried
    ```

    **Delete the original annotations file before uploading only if it contains PHI.**

    ```
    rm -r annotations.iann.json
    ```

4. **Upload to [ieeg.org](http://ieeg.org)**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/Yarko_the_Great/HUPXXX_Gottfried_Odor_Features' '/project/eeg_process/HUPXXX/HUPXXX_Gottfried_mef'
    ```

5. **Make config files**

    1. When your processing is done, go to the **eeg\_raw/ieeg\_raw/HUPXXX/Research/Gottfried** folder in cnt-fs and place the files below in a folder called **config\_Gottfried**. When all processing for this patient is done, this folder is placed in a master config folder in **ieeg\_metadata**.
        1. Natusdir
        2. Data Collection
        3. Convert log
        4. annotations.iann.json
        5. annotations\_edit.iann.json
        6. Montages

6. **Tell the Gottfried Lab coordinator that the file is uploaded.**

## Gold Lab Audio Task
**First, log into the VDI and enter cnt1 in MobaXterm with this command: ssh cnt1**

The commands in this section have not yet been updated for the newer scripts.

*   If the VDI logs you out, the server name is [connect.pmacs.upenn.edu](http://connect.pmacs.upenn.edu).

1. **Natus to mef conversion**

    ```
    ssh cnt1
    ```

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/natus-latest
    ```

    ```
    ./natus2mef -c /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio/HUPXXX_Gold_natusDir.txt -m /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio/HUPXXX_Gold_channelMapping.txt -o /project/eeg_process/HUPXXX/HUPXXX_Gold_mef >/mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio/HUPXXX_Gold_convert_log 2>&1
    ```

    To check that the conversion succeeded, **open the HUPXXX\_Gold\_convert\_log file in cnt-fs in ieeg\_raw/HUPXXX/Research/Gold\_Audio**. Right-click on the convert log, open it in Notepad++, and scroll to the bottom. It should say **“processing successful”**. **If the processing failed, the error is shown in this file.**

2. **Mef validate**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_Gold_mef/*.mef | grep PASS
    ./mefvalidate /project/eeg_process/HUPXXX/HUPXXX_Gold_mef/*.mef | grep FAIL
    ```

3. **Redact annotations**

    1. Run the redact annotations script.
        1. _If you accidentally delete an annotation that should have stayed in, or keep an annotation that should have been deleted, press_ **_Ctrl+C_** _to end the script, and then start over._
    2. When done, copy both annotations files and the montages to cnt-fs.
    3. Delete the original annotations file from the mef.
    4. **The Gold task usually has no annotations that need to be redacted. In that case, copy only the original annotations file and the montages to cnt-fs, and do not delete the original annotations file from the mef.**

    In cnt1:

    ```
    cd /project/eeg_process/programs/mef/redact_annots
    ```

    ```
    python redact_annots_python3.py /project/eeg_process/HUPXXX/HUPXXX_Gold_mef/annotations.iann.json /project/eeg_process/HUPXXX/HUPXXX_Gold_mef/annotations_edit.iann.json
    ```

    Once you have redacted the annotations **(any with PHI)**, enter the mef folder that you just created:

    ```
    cd /project/eeg_process/HUPXXX/HUPXXX_Gold_mef
    ```

    From here, copy both annotations files and the montages to cnt-fs, and **then delete the original annotations file (annotations.iann.json) from the mef**. The original must not be uploaded to [ieeg.org](http://ieeg.org) because it contains PHI.

    ```
    cp -r annotations.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio
    ```

    ```
    cp -r annotations_edit.iann.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio
    ```

    Copy the annotations\_edit file only if you redacted annotations.

    ```
    cp -r montages.imtg.json /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX/Research/Gold_Audio
    ```

    **Delete the original annotations file before uploading if it contains PHI.** This is needed only when there is an edited file as well as the original, which is usually not the case for Gold testing.

    ```
    rm -r annotations.iann.json
    ```

4. **Upload to [ieeg.org](http://ieeg.org)**

    In cnt1:

    ```
    cd /project/eeg_process/programs/ieeg/ieeg-latest
    ```

    ```
    ./ieeg upload-directory -n 'Human_Data/Hospital of the University of Pennsylvania/Gold_Lab_Audio/HUPXXX_Audio_Task' '/project/eeg_process/HUPXXX/HUPXXX_Gold_mef'
    ```

5. **Make config files**

    1. When your processing is done, go to the **eeg\_raw/ieeg\_raw/HUPXXX/Research/Gold\_Audio** folder in cnt-fs and place the files below in a folder called **config\_Gold**. When all processing for this patient is done, this folder is placed in a master config folder in **ieeg\_metadata**.
        1. Natusdir
        2. Data Collection
        3. Convert log
        4. annotations.iann.json
        5. annotations\_edit.iann.json (if present)
        6. Montages
