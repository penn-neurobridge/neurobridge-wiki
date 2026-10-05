---
title: "Deleting a Dataset from ieeg.org"
stage: "Data Governance"
roles: [data-rc, pipeline]
order: 8
source: cnt
---

# Deleting a Dataset from ieeg.org

!!! abstract "What this page tells you"
    To delete an ieeg.org dataset: in the project, uncheck the dataset and copy its name first, then in cnt1 go to /project/eeg_process/programs/ieeg/ieeg-latest and run ./ieeg delete nameofdataset, confirming with Y.

1. In [ieeg.org](http://ieeg.org):
    1. Click Projects.
    2. Go to the project folder that holds the file you need to delete.
    3. Click Open Project.
    4. Uncheck the dataset you want to delete. **Copy its name before you uncheck it.**
2. In the VDI, open MobaXterm.
3. ssh cnt1
4. cd /project/eeg\_process/programs/ieeg/ieeg-latest
5. ./ieeg delete nameofdataset
6. Type “Y” to confirm the deletion.
