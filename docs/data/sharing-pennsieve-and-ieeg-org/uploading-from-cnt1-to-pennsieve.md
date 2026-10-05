---
title: "Uploading from cnt1 to Pennsieve"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst, collaborator]
order: 3
source: cnt
---

# Uploading from cnt1 to Pennsieve

!!! abstract "What this page tells you"
    To upload from CNT1: ssh to bscsub then CNT1, run 'module load pennsieve', complete the config wizard with your API token/secret, verify with whoami, 'pennsieve dataset use N', create a manifest for the CNT1 folder, and upload it. Page contains an API token/secret.

!!! warning "Credential removed"
    A password or key that appeared in the original text has been removed. Get it from the lab password manager, never from a wiki page.

### Uploading from CNT1 to Pennsieve

1. **Open Terminal**
2. **SSH into the BSC cluster**
    *   Command: `ssh USER@bscsub.pmacs.upenn.edu`
    *   Example: `ssh <pennkey>@bscsub.pmacs.upenn.edu`
3. **SSH into CNT1**
    *   Once on BSC, log in to CNT1 with `ssh USER@CNT1`
4. **Load and configure the Pennsieve agent**, or run the `./pennsieve_setup.sh` script to do it (the setup script's companion page was not migrated)
    *   Load the module: `module load pennsieve`
    *   Start the config wizard: `pennsieve config wizard`
    *   In a separate terminal, get your secret and token with this command: `cat .pennsieve/config.ini`
    *   Enter the `api_token` and `api_secret` from your own `.pennsieve/config.ini` (they are personal; never paste them into a wiki page)
    *   Create a new profile and name it as you wish
    *   Confirm with 'Y'
5. **Verify the Pennsieve login**
    *   Command: `pennsieve whoami`
    *   Make sure it returns your Pennsieve username
6. **Identify the dataset number**
    *   Log in to Pennsieve and find the dataset node ID (N) you want to use
7. **Select the dataset**
    *   Command: `pennsieve dataset use N`
8. **Create a manifest for your folder**
    *   Command: `pennsieve manifest create "cnt1 folder name"`
    *   _Example:_ `pennsieve manifest create "/project/rns/NYU_Neuropace/"`
9. **Upload the manifest**
    *   Command: `pennsieve upload manifest #` (replace # with the manifest ID)
10. **(Optional) View the command history**
    *   Command: `history`
