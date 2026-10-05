---
title: "Pennsieve Downloader"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst, collaborator]
order: 4
source: cnt
---

# Pennsieve Downloader

!!! abstract "What this page tells you"
    How to run pennsieve_downloader.py to pull one dataset (e.g. sub-NY648) from a Pennsieve DataSet: supply the dataset name, DataSet ID from the URL, and a short-lived API key obtained by running the download-manifest request on docs.pennsieve.io.

The `pennsieve_downloader.py` script downloads a single "dataset" from Pennsieve at a time (for example, `sub-NY648` and all its contents inside the NYU Pennsieve DataSet). It does not yet download an entire DataSet (several datasets at once) or individual files (for example, a single EDF file).

Run `python pennsieve_downloader.py`. It prompts you to enter three things:

1. Dataset name
    1. To download the sub-NY648 dataset from the "NYU_Data_Ecosytem" DataSet in Pennsieve, enter `sub-NY648`.
2. DataSet ID
    1. Enter the DataSet ID that corresponds to the "NYU_Data_Ecosytem" DataSet. You can find it in the URL when you navigate to that DataSet in Pennsieve. The ID takes the form `N:dataset:99097abf-d3d9-4f0b-83d6-2aefb7e9e988`.
3. API key
    1. Go to [https://docs.pennsieve.io/reference/download-manifest](https://docs.pennsieve.io/reference/download-manifest) and log in to your account.
    2. In the "BODY PARAMS" section, in the "nodeIds" field, click "ADD STRING", then copy and paste the DataSet ID (for example, `N:dataset:99097abf-d3d9-4f0b-83d6-2aefb7e9e988`).
    3. To the right, in the "CURL REQUEST" box, click "Try it". You should get a 200 response.
    4. Once you do, copy the API key, which is in the "Query" box under "AUTHORIZATION". When you copy it, scroll all the way to the end of the box to get the full API key.
    5. Notes
        1. If you do not get a 200 response, log out and log in again, then retry. It often takes several attempts to get a 200 response and an API key that works.
        2. If the API key does not work when you enter it into the script, make sure you copied the whole key. You may then need to generate a new API key by logging out and logging in again.
        3. The API key is short-lived, on the order of 10 minutes.
