---
title: "Overview of CNT Systems"
stage: "Data Analytics"
roles: [data-rc, analyst, pipeline]
order: 1
source: cnt
---

# Overview of CNT Systems

!!! abstract "What this page tells you"
    Crash courses on cnt-fs (mount paths, user-group access via the data research coordinator), Persyst (LabArchives link), data sharing (use HUP numbers not RID; limited vs anonymized definitions), ieeg.org (adding datasets to projects, admins, upload path names), and AWS (upenn-ieeg and upenn-surgrec consoles).

This page supplements the CNT Data and Computing Orientation slide deck. It gives a short introduction to each system that lab members use.

### cnt1 Crash Course

cnt1 is the Linux server.

### cnt-fs Crash Course

- cnt-fs is the HIPAA-secure Windows fileshare. It can be mounted on a Windows machine.
- It stores a variety of data, especially data that needs to be read.
- Staff can access all directories. Students, postdocs and other members can only access the directories they have been added to as part of a user group.
- Ask the data research coordinator which user group covers your project and who is in it.
- It can be mounted in one of two ways:
    - \\\\[pmacs.upenn.edu](http://pmacs.upenn.edu/)\\depts\\NE-4322-Neurology\\CNT
    - \\\\172.16.50.149\\CNT
- It can also be mounted on your own computer when the UPHS VPN is connected.
- There is a plan to move the raw Natus files to Microsoft Azure storage to make more room on cnt-fs.

### Persyst Crash Course

See [_Data Collection and Preprocessing/EEG/Persyst_](https://mynotebook.labarchives.com/share/CNT%2520Notebook/ODY5Ljd8NjkzNDY1LzY2OS0xNDkzL1RyZWVOb2RlLzIyMTY4NzA2NDB8MjIwNy43) in LabArchives.

### Data Sharing Crash Course

- Share all data using the subject number (HUPXXX), not the RID number.
- Intracranial EEG clinical recordings ("Spontaneous EEG"): publicly shared intracranial datasets are associated with the project called "Multi" on [IEEG.org](http://ieeg.org/).
- Imaging data and reconstructions are de-identified (converted to NIfTI), RID numbers are changed to HUP numbers, and the data are then shared. These scans are not masked or de-faced.
- The difference between limited and anonymized data:
    - Limited: can have RID numbers and dates of service.
    - Anonymized: only HUP numbers and date-shifted dates of service (usually shifted to 2000-01-01 for the first day of intracranial recording, or shifted relative to this date).

### [ieeg.org](http://ieeg.org/) Crash Course

- To upload to [ieeg.org](http://ieeg.org/), you need an [ieeg.properties](http://ieeg.properties/) file in your home (~) directory on cnt-fs.
- To add a preexisting dataset to another project:
    1. In the project the dataset already exists in, open the dataset you would like to add to another project.
    2. Close the project.
    3. Open the project you would like to add it to.
    4. Scroll down to find the name of the dataset you want to add. Its check box should be empty.
    5. Check the box. It should now be blue.
    6. Done.
- To become an admin or manager on a project, or to add others in that role: open the project, click Project Admin, search for the name, and click the check box so that it is blue. Do the same under Project Team.
- Changing paths when uploading: most example upload code uses "Hospital of the University of Pennsylvania" as the institution. Not everything you upload is HUP data. For data from another institution, change "Hospital of the University of Pennsylvania" to the name of that institution (for example UCLA, CCHMC or Children's Hospital of Philadelphia).
- If a `>` prompt appears on the next line after you press Enter, the command contains an unclosed quotation mark. Press Control-C, add the missing quotation mark, and rerun the command.

### AWS Crash Course

- AWS stands for Amazon Web Services.
- The AWS account administrator grants AWS account access. With an AWS login, you sign in to the AWS web console with your IAM user for the following account IDs:
    - upenn-ieeg
    - upenn-surgrec
- The upenn-ieeg console gives access to the back end of [ieeg.org](http://ieeg.org/). Use it to trace who uploaded what and where, to re-download data, to request data from storage (Glacier), or to delete data. Go to org-ieeg-inbox.
- The upenn-surgrec console gives access to the instance used for the reconstruction pipeline. Security groups can also be edited there to add IP addresses for specific users, so they can work from a static location outside the lab.
- Everyone who has uploaded to ieeg.org has their own bucket number. Some bucket numbers, with the name of the person each belongs to, can be found by searching LabArchives for "bucket".
