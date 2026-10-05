---
title: "Mounting cnt-fs"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 3
source: cnt
---

# Mounting cnt-fs

!!! abstract "What this page tells you"
    In the VDI, open File Explorer and click CNT under This PC. If missing, map network drive Z: to \\pmacs.upenn.edu\depts\NE-4322-Neurology\CNT (or \\172.16.50.149\CNT) using different credentials, username pmacs\pennkey.

Mount cnt-fs in the VDI whenever the CNT share is not already visible in File Explorer.

1. Log into the VDI.
2. Open File Explorer.
3. Go to “This PC”.
4. The CNT server should be listed there.
5. Click on CNT.
6. If CNT is not listed, remount it:
    1. Right-click on Network.
    2. Select “Map Network Drive”.
    3. In Drive, select Z:.
    4. In Folder, type one of these paths:
    **\\\\**[**pmacs.upenn.edu**](http://pmacs.upenn.edu/)**\\depts\\NE-4322-Neurology\\CNT**
    or
    **\\\\172.16.50.149\\CNT**
    5. Check "Connect using different credentials".
    6. Click Finish.
    7. When the login prompt appears, enter your PMACS login:
        1. If the Domain field does not say pmacs, enter your username as `pmacs\<pennkey>`.
        2. In the screenshot below, if the domain had not said PMACS, the username would have been entered as `pmacs\<pennkey>`.
        3. ![Windows credential prompt for 172.16.50.149, user jacb, password masked](../../assets/electrophysiology/mounting-cnt-fs/mounting-cnt-fs-01.png)
