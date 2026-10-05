---
title: "Channel Mapping for EDFs (ieeg-dataset.ini)"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
audit: merge
order: 4
source: cnt
---

# Channel Mapping for EDFs (ieeg-dataset.ini)

!!! abstract "What this page tells you"
    Copy the ieeg-dataset.ini template into the RIDXXXX/deid folder and edit channels= as a comma-separated, space-free, ordered list; rename channels with old:new syntax. Do not rename the .ini file or the upload will fail.

Create this file in the RIDXXXX/deid folder for each EDF recording before it is uploaded to ieeg.org.

1. Create the `ieeg-dataset.ini` channel mapping file.
    1. Copy the `ieeg-dataset.ini` template file and paste it into **cnt-fs** `/eeg_raw/Mxene_project/RIDXXXX/deid`.
    2. Open the `ieeg-dataset.ini` file in Notepad and edit the channel mappings as needed for the EDF recording.
        1. Template: `channels=Fp1,Fp2,F7,F8,....`
        2. Notes:
            1. Separate each channel with a comma. Do not put spaces between the channels.
            2. The order of the channels matters. It determines the order of the channels in [ieeg.org](http://ieeg.org/).
            3. To rename a channel, use this form: `channels=FP1:Fp1,FP2:Fp2,F7,F8,T3:T7,T4:T8,....`
                1. The old channel name goes to the left of the colon, and the new channel name goes to the right of the colon.
            4. Do not rename the `ieeg-dataset.ini` file. If it is renamed, the upload process fails.
