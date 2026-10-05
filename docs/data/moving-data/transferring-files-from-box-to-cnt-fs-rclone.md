---
title: "Transferring Files from Box to cnt-fs (rclone)"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst, pipeline]
order: 3
source: cnt
---

# Transferring Files from Box to cnt-fs (rclone)

!!! abstract "What this page tells you"
    Move files between PennBox and cnt1/cnt-fs with rclone: ssh cnt1, mkdir the destination, then rclone copy remote:<Box path> <destination> -P (or reverse to upload). First-time rclone configuration is required once; the SOP that described it is retired.

#### One-time setup

Before running rclone for the first time, configure an rclone remote for PennBox. The SOP that described this one-time setup (rclone file transfer between PennBox & cnt1) is retired and is not kept in this wiki. After you have configured rclone once, you do not need to do it again and can start with the steps below.

### Downloading and Uploading Files

After configuring rclone, you can transfer files between PennBox and cnt1.

1. First, `ssh cnt1`.
2. Create the destination folder first if it does not already exist:
    *   `mkdir <path_to_destination>`
        *   Example for CHOP data: `mkdir /mnt/cnt-fs/chop_fs/CHOP_stim_seizures/CHOPXXXspontaneous_seizure_data`
3. To download files from PennBox to cnt1:
    *   `rclone copy remote:<path_to_file_or_folder_on_PennBox> <path_to_destination_on_cnt1>`
        *   Example for CHOP data: `rclone copy remote:CHOP_CCEPs/CHOP_spontaneous_seizures/CHOPXXXspontaneous_seizure_data /mnt/cnt-fs/chop_fs/CHOP_stim_seizures/CHOPXXXspontaneous_seizure_data -P`
4. To upload files to PennBox from cnt1:
    *   `rclone copy <path_to_source_on_cnt1> remote:<path_to_destination_on_PennBox>`

Notes:

*   Replace `remote` with the name you assigned to your Box remote during the rclone configuration. Substitute `<path_to_file_or_folder_on_PennBox>` and `<path_to_destination_on_cnt1>` with the paths for your files.
*   The destination path can be a path on cnt1 or cnt-fs. You may need to create the directory first, if it does not already exist, before running rclone.
*   Include `-P` to see progress updates while downloading or uploading files.
