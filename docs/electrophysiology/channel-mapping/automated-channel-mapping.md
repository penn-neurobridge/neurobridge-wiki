---
title: "Automated Channel Mapping"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 1
source: cnt
---

# Automated Channel Mapping

!!! abstract "What this page tells you"
    Run python auto_channel_mappings.py on an exported Natus folder (usually CCEPS) in cnt1 to generate HUPXXX_channelMapping, add a GND/REF header, delete extra channels after EKG1/2, and copy it to CCEPS and Intracranial_EEG. For Gottfried and Gold, append DC01/DC07 (256/262 or 128/134) and RESP channels.

Run this after at least one set of Natus recordings (usually CCEPS) has been fully exported to cnt-fs, and before the natus2mef conversion.

*   This program opens the Natus EEG files, reads the channel mappings embedded in the recordings, and creates the channel mapping text file that natus2mef processing needs.
*   When you pass in a directory that contains several Natus recordings (for example /mnt/cnt-fs/eeg\_raw/ieeg\_raw/HUPXXX/Intracranial\_EEG/), it compares the channel mappings of each recording.
*   If all channel mappings match, it writes a single channel mapping text file for that group of recordings.
*   If there are any differences between the channel mappings, it writes a separate channel mapping file for each recording.
*   Export the CCEPS file to cnt-fs first. The script reads the Natus recordings, so one set of recordings must be fully exported before it can run.
    *   The set can be CCEPS, Gold\_Audio, or all of the intracranial recordings. CCEPS is usually done first, so it is the easiest set to use for the channel mapping.

**Scripts to Run:**

1. Open the VDI. Open MobaXterm. **ssh into cnt1**
2. Navigate to: **cd /project/eeg\_process/programs/mef/auto\_channel\_mappings/**
3. Run: **python auto\_channel\_mappings.py /mnt/cnt-fs/eeg\_raw/ieeg\_raw/HUPXXX/Research/CCEPS**
    1. This can take a while to run, especially if there are many Natus recordings.
    2. The program skips any Natus recording that has errors and prints the error message in the terminal.
    3. Change the path at the end of the command to the recordings folder you need.
4. Name the file: **HUPXXX\_channelMapping**
5. Copy the channel mapping file to the HUPXXX folder in cnt-fs:
    1. Change into the directory: **cd /project/eeg\_process/programs/mef/auto\_channel\_mappings/**
        1. Copy into cnt-fs: **cp -r HUPXXX\_channelMapping.txt** **/mnt/cnt-fs/eeg\_raw/ieeg\_raw/HUPXXX/Research/CCEPS**
6. Once the channel mapping text file (or files) has been created, open it and make any edits that are needed, such as deleting extra channels.
    1. Add this header at the top of the file: **\# HUPXXX channel mapping # XX GND # XX REF**
        1. Include both the number and the name of the ground and reference electrodes (for example, # 89 LA4 GND).
    2. If several channel mapping files were generated, compare them and edit as needed to produce a single master channel mapping file.
    3. _Delete all of the extra channels. The script writes 400 or more channels; delete every channel after EKG1 and EKG2, or after whatever your last two electrodes should be._
7. **Within the HUP folder in cnt-fs, copy the channel mapping file you made for CCEPS into the Intracranial\_EEG folder. The two mappings are the same.**
8. If the Gottfried or Gold Audio tasks were done, follow the steps below to add the appropriate channels to the channel mapping you created above.

**Gottfried Channel Mapping**

1. The Gottfried Lab coordinator will email you when the bedside testing task is complete and the file has been clipped in Natus. The email will say whether the DC1/DC7 channels and the respiration channels were used.
2. Once the intracranial/CCEPS channel mapping is made, copy it into the Gottfried folder in **ieeg\_raw/HUPXXX/Research/Gottfried**.
3. Rename the copy **HUPXXX\_Gottfried\_channelMapping**.
4. Open the text file.
5. At the very bottom of the channel mapping, add the DC1/DC7 channels. These are either
**256 DC01**
**262 DC07**
or
**128 DC01**
**134 DC07**

_Try the 256/262 channels first. If the convert log fails, run it again with the 128/134 channels instead._


6. Using the respiration channel numbers that the Gottfried Lab coordinator gave you, add the respiration channels as:
**RESP1**
**RESP2**
(You may have to relabel one of the intracranial electrodes as a RESP channel. Put them at the channel numbers the Gottfried Lab coordinator gives you.)

**Gold Audio Task Channel Mapping**

1. Once the intracranial/CCEPS channel mapping is made, copy it into the Gold folder in **ieeg\_raw/HUPXXX/Research/Gold\_Audio**.
2. Rename the copy **HUPXXX\_Gold\_channelMapping**.
3. Open the text file.
4. At the very bottom, add the DC1/DC7 channels. These are either
**256 DC01**
**262 DC07**
or
**128 DC01**
**134 DC07**

_Try the 256/262 channels first. If the convert log fails, run it again with the 128/134 channels instead._
