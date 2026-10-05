---
title: "Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst, pipeline]
audit: merge
order: 1
source: cnt
---

# Moving Data Across cnt-fs, cnt1, BSC, Borel & Leif

!!! abstract "What this page tells you"
    Use rsync -avPhi to move data between cnt-fs, cnt1, BSC, Borel and Leif; a trailing slash on the source copies contents only. Includes example commands to BSC (bscsub.pmacs.upenn.edu) and Borel, plus a linked diagram PDF.

See the diagram first:

[📄 move\_data\_CNT\_servers\_rsync.pdf](../../assets/data/moving-data-across-cnt-fs-cnt1-bsc-borel-and-leif/01-move-data-cnt-servers-rsync.pdf)

To move the "dir" folder and everything in it into the destination location:
`rsync -avPhi /source/dir /destination/dir`

To move the contents of the "dir" folder (but not the "dir" folder itself) into the destination location:
`rsync -avPhi /source/dir/ /destination/dir`

Example: move data from cnt1 into BSC:
`rsync -avPhi /source/dir <pennkey>@bscsub.pmacs.upenn.edu:/project/davis_group_1/____`

Example: move data from BSC into Borel:
`rsync -avPhi /source/dir <pennkey>@borel.seas.upenn.edu:/data/Human_Data/____`
