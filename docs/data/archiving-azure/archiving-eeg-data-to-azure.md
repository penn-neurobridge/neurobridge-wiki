---
title: "Archiving EEG Data to Azure"
stage: "Data Governance"
roles: [pipeline, data-rc]
order: 1
source: cnt
---

# Archiving EEG Data to Azure

!!! abstract "What this page tells you"
    Archive HUP EEG data to Azure: copy config logs to /ieeg_metadata, run zip_dataset.sh in a screen on cnt1, verify the zip log, move tarball to ready_for_archiving, upload with upload_azcli.sh, verify in portal.azure.com (cntlitt), then delete local copies.

This procedure archives raw iEEG data (the original Natus recordings), or any other data, to Azure cold storage under Brian Litt's account once a HUP EEG dataset is ready to be archived. Once the data is archived, it can be deleted from `cnt-fs` and `cnt1`.

Prerequisites:

*   You need access to the cntlitt storage account in Microsoft Azure. PMACS grants access.
*   The `upload_azcli.sh` script in `/project/eeg_process/azure_archive/scripts` needs a non-expired SAS token, which PMACS provides. The token recorded when this page was written expired on 03/15/2026, so confirm with PMACS that a current token is in place before starting.

When a HUP EEG dataset is ready to be archived:

1. Copy the HUPXXX config logs into the `/ieeg_metadata` folder on `cnt-fs`.
    1. Examples: the channel mapping text file, the NatusDir file, the data collection file and the jacksheet PDF.
2. SSH into `cnt1` and open a new Linux screen for HUPXXX.
    1. `screen -S HUPXXX`
3. Go to `/project/eeg_process/azure_archive/scripts`.
4. Run `bash zip_dataset.sh /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX`.
    1. This takes a long time to run. Detach from the Linux screen by pressing Ctrl A + D. Check whether it is done by reattaching (`screen -r HUPXXX`).
    2. **Optional**: If it is urgent to free up space in `cnt-fs`, first move the HUP dataset out of `cnt-fs` and into `cnt1` with this command:
    `rsync -ah --stats /mnt/cnt-fs/eeg_raw/ieeg_raw/HUPXXX /project/eeg_process/azure_archive/staging/`
    Then run this command instead:
    `bash zip_dataset.sh /project/eeg_process/azure_archive/staging/HUPXXX`
5. Once the zip process has finished, check the log file `/project/eeg_process/azure_archive/logs_zip/zip_log_HUPXXX.txt`. Confirm that the number of files and folders and the total size match between the original dataset and the compressed tarball.
    1. Once confirmed, delete the HUPXXX dataset from `cnt-fs`.
6. Move the HUPXXX tarball (the zipped file `HUPXXX.tar.gz`) into the `/project/eeg_process/azure_archive/ready_for_archiving` folder.
7. Return to the HUPXXX Linux screen (reattach with `screen -r HUPXXX` if you detached from it) and make sure you are in the `/project/eeg_process/azure_archive/scripts` folder. Then run the following command to start uploading the tarball to Azure:
    `nohup bash upload_azcli.sh HUPXXX.tar.gz &> /project/eeg_process/azure_archive/logs_azure/HUPXXX_azure_archive.log`
    1. This takes a long time to run. Detach from the Linux screen by pressing Ctrl A + D. Check whether it is done by reattaching (`screen -r HUPXXX`).
8. Check the log file `/project/eeg_process/azure_archive/logs_azure/HUPXXX_azure_archive.log` for progress on the upload. Confirm from the log that the upload has finished and that the size of the remote tarball matches the size of the local tarball.
9. Log in to [http://portal.azure.com](http://portal.azure.com) to verify that the tarball has been uploaded to Brian Litt's account.
    1. Log in with your PennMedicine (UPHS) email account.
    ![Microsoft Azure 'Pick an account' with staff email](../../assets/data/archiving-eeg-data-to-azure/archiving-eeg-data-to-azure-01.png)
    ![Penn Medicine secure logon form, empty username and password fields](../../assets/data/archiving-eeg-data-to-azure/archiving-eeg-data-to-azure-02.png)
    2. Search for the "cntlitt" storage account.
    ![Azure portal search for cntlitt storage account](../../assets/data/archiving-eeg-data-to-azure/archiving-eeg-data-to-azure-03.png)
    3. Go to Data Storage, then go to Containers.
    ![Azure storage account cntlitt overview; partial subscription ID visible](../../assets/data/archiving-eeg-data-to-azure/archiving-eeg-data-to-azure-04.png)
    4. Open the "cntlitt" container.
    ![Azure cntlitt Containers list ($logs, cntlitt)](../../assets/data/archiving-eeg-data-to-azure/archiving-eeg-data-to-azure-05.png)
    5. Look for the HUPXXX.tar.gz tarball.
10. Once verified, delete the HUPXXX.tar.gz tarball from the `/project/eeg_process/azure_archive/ready_for_archiving` folder.
