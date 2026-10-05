---
title: "Final Step: Delete mef Folders"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
audit: merge
order: 7
source: cnt
---

# Final Step: Delete mef Folders

!!! abstract "What this page tells you"
    Final step: after everything is uploaded to ieeg.org, ssh cnt1, cd /project/eeg_process, and rm -r HUPXXX to delete the converted mefs, because cnt1 is for processing, not storage.

The final step in the ieeg processing pipeline is to delete the mef files from cnt1, once everything for the patient has been uploaded to [ieeg.org](http://ieeg.org).

**cnt1 is used only for processing data and running scripts, not for storage, and the mef files take up a lot of space.**

Delete the HUPXXX folder with all of the converted mefs in cnt1 only after everything has been uploaded to [ieeg.org](http://ieeg.org).


1. Enter cnt1 in MobaXterm in the VDI with this command:
    1. **ssh cnt1**
2. Enter the directory where all of the HUPXXX folders are stored:
    1. **cd /project/eeg\_process**
3. Type **ls** to list the folders. You should see the HUPXXX folder that you just processed. This folder holds all of the converted mefs.
4. Delete this HUPXXX folder and all of the converted mefs with this command:
    1. **rm -r HUPXXX**

## You are now done with EEG processing
