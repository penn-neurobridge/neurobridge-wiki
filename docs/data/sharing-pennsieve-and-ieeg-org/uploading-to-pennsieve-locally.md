---
title: "Uploading to Pennsieve Locally"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst, collaborator]
audit: merge
order: 2
source: cnt
---

# Uploading to Pennsieve Locally

!!! abstract "What this page tells you"
    To upload de-identified data from your laptop: run 'pennsieve agent' and 'pennsieve whoami', copy the dataset node ID (N:...) from the dataset overview, run 'pennsieve dataset use <id>', 'pennsieve manifest create <folder>', then 'pennsieve upload manifest <id>' and confirm the files appear.

**How to upload to Pennsieve from your local computer**

1. **Open a terminal** and run `pennsieve agent`.
2. Run `pennsieve whoami`.
    *   Make sure it outputs your profile.
3. **Connect to the dataset:**
    *   Open the Pennsieve dataset you want to upload to.
    *   Go to 'Overview'.
    *   At the top, above 'Open Dashboard', copy the dataset node ID.
    *   It looks like `N:xxxxxxxxxxxxx`.
4. **Back in your terminal,** run `pennsieve dataset use` followed by the node ID you copied, and press Enter.
    *   It should output the dataset you want as the 'Active dataset', with the correct information.
5. **Create a manifest:** run `pennsieve manifest create` followed by the path to the local folder where the data is, and press Enter.
    *   This creates a manifest ID for the data you want to upload.
6. **Upload the data:** run `pennsieve upload manifest` followed by the manifest ID.
    *   If done correctly, it outputs 'Upload initiated for manifest #' and subscribes you to updates for that upload.
    *   Once the data is uploaded, it says 100.0% and unsubscribes client ID #.
7. Go back to Pennsieve and check the 'Files' of the workspace to make sure all the correct files were uploaded.
