---
title: "The config Folder"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 5
source: cnt
---

# The config Folder

!!! abstract "What this page tells you"
    After all uploads, make config_intracranial, config_CCEPS, config_Gold, etc. folders (natusdir, data collection, convert log, both annotation files, montages), put them plus the PowerPoints/PDFs in a config folder, move it to ieeg_metadata/HUPXXX, then tell the data research coordinator the raw EEG is ready to archive.

Make the config folder after all processing for the patient is finished and every file has been uploaded to [ieeg.org](http://ieeg.org).

1. The config folder holds all of the text files for the patient. It is kept separate from the raw EEG data files, because the raw files will eventually be archived to save space in cnt-fs.
2. Make a config folder for each task that was done (config\_intracranial, config\_CCEPS, config\_Gold, etc.).
3. Each config folder should contain:
    1. Natusdir
    2. Data Collection
    3. Convert log
    4. annotations.iann.json
    5. annotations\_edit.iann.json (if present)
    6. Montages
4. In **cnt-fs/ieeg\_raw/ieeg\_raw/HUPXXX**, make a folder called **config**.
5. Put all of the config folders you have made (config\_intracranial, config\_CCEPS, config\_Gold, etc.) into the config folder that you just made.
6. Put the PowerPoints and PDF files in the config folder as well.
7. Go to **ieeg\_metadata** in cnt-fs and make a folder named **HUPXXX**.
8. Move the config folder out of the HUPXXX folder in **ieeg\_raw** and into the HUPXXX folder in **ieeg\_metadata**.
    1. This separates the text files from the raw EEG files. The raw EEG files take up a great deal of space and will eventually be archived.
9. The raw EEG files are now ready to be archived. Tell the data research coordinator.
