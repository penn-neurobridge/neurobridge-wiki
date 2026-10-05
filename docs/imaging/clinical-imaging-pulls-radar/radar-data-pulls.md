---
title: "RADAR Data Pulls"
stage: "Data Collection"
roles: [data-rc]
order: 1
source: cnt
---

# RADAR Data Pulls

!!! abstract "What this page tells you"
    Request RADAR imaging pulls via redcap.link/RADAR (PI fills out), then on MJ0HKNDA map \\isilon-cardiology\mim_anon, rsync to BSC /project/davis_group_1, fix chown/chmod, run dcm2niix/BIDS, and move dicoms to Borel/Sauce.

## Submitting data requests

The PI submits the RADAR application to request a RADAR data pull: [https://redcap.link/RADAR](https://redcap.link/RADAR). RADAR then sends a welcome email. The points it covers are:

*   RADAR no longer transfers studies containing PHI. The metadata and pixel data in the request are fully de-identified. If the IRB has permitted it, RADAR can provide a linking table (a CSV file or similar) that connects the PHI (an MRN or accession number) with the study ID.
*   The folder structure of de-identified studies is described in the RADAR FAQ: [FAQ | RADAR | Perelman School of Medicine at the University of Pennsylvania (upenn.edu)](https://www.med.upenn.edu/radar/secure/frequently-asked-questions)
*   RADAR does not store or operate on the data. The cost of image storage and compute is the lab's responsibility. RADAR can help plan or estimate these costs.
*   For an industry-sponsored research project, Penn must sign off on the transfer of imaging data off site before the transfer begins, for example through a data use agreement.
*   RADAR quotes an anticipated cost based on the number of imaging studies in the application. The true cost depends on the number of studies transferred, which can be lower if some studies are not in the VNA, or higher if there are more new studies than anticipated. Approximate numbers are acceptable for budgeting a grant proposal.

## Steps to transfer data from UPHS fileshare to CNT

1. Log in to the Hayden Hall kitchen UPHS Windows 10 computer MJ0HKNDA.
    1. You can log in in person or remotely (through [https://pennmedaccess.uphs.upenn.edu/my.policy](https://pennmedaccess.uphs.upenn.edu/my.policy)) using your UPHS/PennMed account (not your PMACS account).
    2. This assumes you have a PennMed account.
2. Open File Explorer and map the `\\isilon-cardiology\mim_anon` network drive.
    1. This is the folder that RADAR uploads the CNT's data pulls to.
    2. Right-click "This PC", then click "Map network drive".
    3. Select the "Y:" drive, then for Folder enter `\\isilon-cardiology\mim_anon`.
    4. The data pull is usually stored in a subfolder named after the requestor, e.g. `\\isilon-cardiology\mim_anon\<your-folder>`.
    5. RADAR must first grant your PennMed account access to the network drive.
3. Open a Cygwin Terminal window and create a new destination folder in the PMACS BSC Cluster.
    1. Open Cygwin Terminal.
    2. `ssh pennkey@bscsub.pmacs.upenn.edu` and enter your PMACS password.
    3. `cd /project/davis_group_1/insert_project_folder`
    4. `mkdir new_destination_folder`
4. Open a second Cygwin Terminal window and run `rsync` to copy the data pull to BSC.
    1. Open a new Cygwin Terminal window.
        1. Every new window opens in your `/home/UPHS_username` folder.
    2. Run `rsync -avPhi --stats /cygdrive/y/<your-folder>/ pennkey@bscsub.pmacs.upenn.edu:/project/davis_group_1/insert_project_folder/new_destination_folder/ > rsync_log_RADAR_2000-01-01.txt`
        1. The source data is in `/cygdrive/y/<your-folder>/`, because `\\isilon-cardiology\mim_anon` is mapped to the "Y:" drive and the data is stored in `\\isilon-cardiology\mim_anon\<your-folder>`.
        2. The destination folder is `/project/davis_group_1/insert_project_folder/new_destination_folder/` in BSC.
        3. This command saves the output of `rsync -avPhi --stats` to a log file called `rsync_log_RADAR_2000-01-01.txt`. Unless you change the file path, the log file is stored locally on the UPHS computer in your `/home/UPHS_username` folder.
5. Depending on the size of the data pull, `rsync` takes many hours to run. You can close the computer, but leave the Cygwin Terminal window open. Do not exit out of it.
6. Once `rsync` is finished, log in to the BSC Cluster from your own computer and fix the file permissions as needed.
    1. Usually you need to recursively change the group ownership of every file and folder in the data pull so that the `davisgroup` group has access. In BSC, run `chown -R :davisgroup /project/davis_group_1/insert_project_folder/new_destination_folder`
    2. You may also need to change the `rwx` permissions of the files and folders. If needed, run `chmod -R 750 /project/davis_group_1/insert_project_folder/new_destination_folder` to give `rwx` access to the user, `r-x` access to the group, and no access to others.
        1. This reference explains `chmod` and `rwx` access: [https://quickref.me/chmod](https://quickref.me/chmod)
7. Run `dcm2niix` and/or BIDS on the imaging data.
8. Once the `nifti` and `json` files are generated, the `nifti` files stay on BSC and the original `dicom` files are saved to the CETS Sauce storage server.
    1. Run `rsync` to copy the `dicom` files to the Borel compute server (files stored on Borel are physically stored on Sauce): `rsync -ah --stats /project/davis_group_1/insert_project_folder/new_destination_folder/nifti pennkey@borel.seas.upenn.edu:/data/Human_Data/insert_project_folder/`
        1. The source folder is `/project/davis_group_1/insert_project_folder/new_destination_folder/nifti` in BSC.
        2. The destination folder is `/data/Human_Data/insert_project_folder/` in Borel/Sauce.
    2. Once you have confirmed that the `dicom` files have been transferred to Sauce/Borel, delete the `dicom` files from BSC: `rm -r /project/davis_group_1/insert_project_folder/new_destination_folder/dicom`
