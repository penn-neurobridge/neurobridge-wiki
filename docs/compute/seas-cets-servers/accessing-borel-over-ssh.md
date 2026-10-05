---
title: "Accessing Borel over SSH"
stage: "Data Analytics"
roles: [analyst, pipeline]
order: 2
source: cnt
---

# Accessing Borel over SSH

!!! abstract "What this page tells you"
    Step-by-step to reach Borel: enroll in Duo two-step, connect to Global Protect VPN if off AirPennNet, ssh PennKey@borel.seas.upenn.edu, enter PennKey password and Duo option, then cd to CNT directories (/users/pennkey, /tools, /projects, /data, /cache).

You log in to Borel over SSH with your PennKey credentials, either from AirPennNet or through the University VPN. Two-step verification with Duo is required.

## ssh into borel

Prerequisite: you must be enrolled in the University Two-Step Verification service (Duo). Check your enrollment at [https://twostep.apps.upenn.edu/](https://twostep.apps.upenn.edu/).

### 1\. Connect to the University VPN client (Global Protect) with your PennKey and password (if not on AirPennNet wifi)

Setup guide: [https://www.isc.upenn.edu/how-to/university-vpn-getting-started-guide](https://www.isc.upenn.edu/how-to/university-vpn-getting-started-guide)

### 2\. SSH into borel

```plain
ssh PennKey_Username@borel.seas.upenn.edu
```

### 3\. Enter your PennKey password

### 4\. Enter the Duo option that you wish to use

You may only be asked for this the first time you log in. The prompt looks like this:

> Duo two-factor login for PennKey\_Username
> Enter a passcode or select one of the following options:
> (ex) 1. Duo Push to phone\_push (iOS) … 6. Passcode or option (1-6):

After you enter your password, your prompt shows PennKey@borel, but you are in your SEAS general home directory, not your CNT home directory. See step 5 to navigate to your CNT home directory.

### 5\. Navigate to CNT directories in borel

The following directories are available for CNT use. Read [SEAS Servers: Borel, Leif, Pioneer](seas-servers-borel-leif-pioneer.md) for an orientation before using these directories.

```plain
cd /users/pennkey
cd /tools/
cd /projects/
cd /data/
cd /cache/
```
