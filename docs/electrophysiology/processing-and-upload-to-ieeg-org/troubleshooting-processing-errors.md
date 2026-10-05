---
title: "Troubleshooting Processing Errors"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 2
source: cnt
---

# Troubleshooting Processing Errors

!!! abstract "What this page tells you"
    Troubleshooting: run kinit for permission denied or stalled convert logs; check ieeg.org admin rights for upload errors; delete old mef, montage, and convert log before re-uploading; split datasets by sampling frequency (check in Persyst, comment lines with #); restart or manually fix redacted annotations.

Use these fixes when a step of the ieeg.org processing pipeline fails.

1. If you get a “permission denied” message, run **kinit**.
2. If the convert log stalls but does not say "processing failed", run **kinit** to resume processing.
3. The Natus to mef conversion takes a few minutes to run. If it finishes right away, something is wrong.
4. If you get errors uploading to [ieeg.org](http://ieeg.org/), make sure you have been added as an administrator of the project.
    1. Log in to ieeg.org ➝ click on the project ➝ click Open Project (top left). The project admins are listed at the bottom.
5. If you need to re-upload something to [ieeg.org](http://ieeg.org/), delete the montage, the convert log, and the mef file from the HUP folder before retrying.
    1. ssh cnt1
    2. cd /project/eeg\_process
    3. ls
    4. Go into the HUP folder you want to delete from (cd HUPXXX).
    5. rm -r the mef file you are redoing.
6. If, while making the convert log, you see that the sampling frequency is not the same across all of the intracranial recordings, split the dataset and process the recordings in groups by sampling frequency **(example in cnt-fs under HUPXXX)**.
    1. To check the sampling frequency of the recordings:
        1. Open the remote desktop.
        2. Open Persyst.
        3. In Persyst, click "Open" in the top left.
        4. Click "Browse file system".
        5. Click "This PC" ➝ "Network Drive", then click through the folders in cnt-fs until you reach the EEG recording whose sampling frequency you want to check. Make sure the format is XLTEK.
        6. Once the recording is open, click "Patient". The sampling frequency for this recording is shown there.
    2. Put # in front of any line in the data collection or natusdir file that you do not want the program to read.
        1. For example, when exporting the datasets with the higher sampling frequency, put a # in front of all of the lines in the natusdir and data collection files that correspond to the lower frequency.
        2. Then, when exporting the datasets with the lower sampling frequency, edit the natusdir and data collection files so that the # is in front of the lines that correspond to the higher frequency.
7. If you make a mistake and keep an annotation that should have been deleted, press **Ctrl+C** to end the script.
    1. Go into the mef folder: cd /project/eeg\_process/HUPXXX/HUPXXX\_CCEPS\_mef
    2. Delete the edited annotations file: rm -r annotations\_edit.iann.json
    3. Go back to the redact annotations script and start over.
    4. In cnt1: cd /project/eeg\_process/programs/
        1. python redact\_annots\_python3.py ../HUPXXX/HUPXXX\_CCEPS\_mef/annotations.iann.json ../HUPXXX/HUPXXX\_CCEPS\_mef/annotations\_edit.iann.json

**If you do not want to start over, you can fix the annotations file by hand.** Finish the annotations, copy the file into cnt-fs as usual, open it, use Command+F to search for any keywords you noticed you missed, and delete the annotation between the parentheses.
