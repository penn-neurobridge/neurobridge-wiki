---
title: "The ieeg.properties File"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 6
source: cnt
---

# The ieeg.properties File

!!! abstract "What this page tells you"
    Create an ieeg.properties file in your cnt1 home directory (ssh cnt1, touch ieeg.properties) with base_dir, url, username, password, and threads=5, so you can upload to ieeg.org. Test with ./ieeg size 'Study 005' in ieeg-latest; expect 3.438GB.

## How to Create an [ieeg.](http://ieeg.properties)[**properties**](http://ieeg.properties) File

#### This file is necessary in order to be able to upload to [ieeg.org](http://ieeg.org)
Each person who uploads to ieeg.org creates this file once, in their own cnt1 home directory, before their first upload.

Helpful link:

[bitbucket.org](https://bitbucket.org/ieeg/ieeg/wiki/cli.md)


1. Go to your home directory with these commands:
    1. In MobaXterm in the VDI, enter the cnt1 server with **ssh cnt1**.
    2. Then enter your home directory with `cd /home/<pennkey>`.
2. In your home directory (shown as ~), create a file called [ieeg.](http://ieeg.properties)[**properties**](http://ieeg.properties) with these commands:
    1. **touch** [**ieeg.properties**](http://ieeg.properties)
    2. cd /project/eeg\_process
    3. cd programs
    4. cd ieeg
    5. cd ieeg-latest
3. Edit the **properties** file to look like the image below, replacing the <> sections with your information.
    1. ![ieeg.org config snippet with placeholder username/password](../../assets/electrophysiology/the-ieeg-properties-file/the-ieeg-properties-file-01.png)

    ```
    base_dir=~/ieeg-data
    url=https://www.ieeg.org/services
    username=my_username
    password=my_password
    threads=5
    # aws_secret_key is optional
    #aws_secret_key=AWS_SECRET_KEY
    ```

4. To save, if you are editing in vi: press the **Escape** key, then type **:w**.
5. To quit vi: press the **Escape** key, then type **:x**.
6. When you upload to [ieeg.org](https://ieeg.org/) for the first time, an ieeg-data folder is created in your ~ directory. This shows that everything is working for your account.

#### **TO TEST THE INSTALLATION:**

1. In ieeg-latest, run: ./ieeg size 'Study 005'
2. If the file was created correctly, the output is **3.438GB**.
