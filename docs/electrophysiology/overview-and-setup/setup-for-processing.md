---
title: "Setup for Processing"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 2
source: cnt
---

# Setup for Processing

!!! abstract "What this page tells you"
    Before processing, get the implant map (text the EEG technologist if missing), confirm ground/reference electrodes, make limited and anonymized PDF versions of the implant PowerPoint, upload them to cnt-fs under eeg_raw/ieeg_raw/HUPXXX, and create Intracranial_EEG and Research subfolders (CCEPS, Gold_Audio, Gottfried).

Do this setup for each new implant patient before any processing, as soon as the implant map arrives. First, make sure that an [ieeg.properties](http://ieeg.properties) file has been created for you in cnt1. Follow the instructions in [ieeg.properties](http://ieeg.properties) File ([The ieeg.properties File](the-ieeg-properties-file.md)).

*   **You need the implant map.**
    *   The map is normally emailed to you by Thursday morning, the morning after the implant. If it has not arrived by then, text the EEG technologist to ask for the PowerPoint (see the Important Contacts List).
*   **Make sure that the PowerPoint lists the ground and reference electrodes.**
    *   If it does not, text the EEG technologist and ask what they are.
    *   Alternatively, open the patient's PennChart record and read the discharge summary from the sEEG stay. The ground and reference electrodes are stated there.
*   Save the PowerPoint from the email to your desktop.
*   Make two versions of the PowerPoint and save each as a PDF.
    *   1\. Limited version
        *   Remove all names and any other information about the patient apart from the implant date. For example, crop the name from the surgery map and remove the MRN and EEG number.
        *   Replace the patient's name with **“HUPXXX RIDXXX”** on the title page.
        *   Rename the PowerPoint **RID###\_HUP###\_limited** and save it as a PDF.
    *   2\. Anonymized version
        *   Remove all names, all dates, and any other patient information, including the red Surgery Date box.
        *   Replace the patient's name with HUPXXX on the title page.
        *   Rename the PowerPoint **HUP###\_anon** and save it as a PDF.
        *   Replace the implant date with **01/01/2000**.
*   You now have three documents on your desktop: one PowerPoint and two PDFs.
    *   If you are a CRC doing reconstructions, keep a copy of the anonymized version on your desktop to add to the reconstruction folder that is uploaded to Box.
*   **Next, upload those documents to cnt-fs.**
*   **Turn the UPHS VPN on.**
*   In the menu bar at the top left of your desktop, go to:
    *   Go → Connect to Server → [**smb://172.16.50.149/CNT**](smb://172.16.50.149/CNT) → enter your PMACS username and password.
*   You are now in cnt-fs.
*   In cnt-fs, go into **eeg\_raw ➝ ieeg\_raw** and **make a HUP folder** named HUPXXX, using the HUP ID of the implant patient.
*   Copy the three files from your desktop into the HUPXXX folder.
*   Delete the files from your desktop permanently.
    *   If you are doing the reconstruction, you can keep the anonymized PDF to upload to Penn Box.
*   Close cnt-fs and log out of the UPHS VPN.
*   Log into the VDI.
*   Open cnt-fs from File Explorer.
    *   If you need to mount it, see Mounting cnt-fs ([Mounting cnt-fs](mounting-cnt-fs.md)).
*   In **ieeg\_raw**, open the HUPXXX folder that you made.
    *   Make two folders inside HUPXXX, called **Intracranial\_EEG** and **Research**.
    *   Go into Research and create a folder for each research test done during the implant. The possible folders are:
        *   **CCEPS**
        *   **Gold\_Audio**
        *   **Gottfried**
        *   If a test was not done, do not make its folder in Research, because there will be no EEG file to process for it. For example, if the CNT was not able to complete bedside testing with the patient, do not make a Gold\_Audio folder.
