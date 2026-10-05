---
title: "Mounting Leif over SMB"
stage: "Data Analytics"
roles: [analyst, pipeline]
order: 3
source: cnt
---

# Mounting Leif over SMB

!!! abstract "What this page tells you"
    To mount Leif: connect to Global Protect VPN, then Mac Go > Connect to Server smb://leif.seas.upenn.edu or Windows Map Network Drive \\leif.seas.upenn.edu, sign in with PennKey plus SEAS Local Password (set first at accounts.seas.upenn.edu/passwd), and pick volumes.

Leif is the file store for the SEAS servers. You mount it as a network share from your own computer, over the University VPN when you are not on AirPennNet, and sign in with your PennKey and your SEAS Local Password.

## Samba mount and Windows file sharing for Leif

### 1\. Connect to the University VPN client (Global Protect) with your PennKey and password (if not on AirPennNet wifi)

Download the VPN client here: [https://www.isc.upenn.edu/how-to/university-vpn-getting-started-guide](https://www.isc.upenn.edu/how-to/university-vpn-getting-started-guide)

### 2\. Mount Leif as a file share

macOS: Go --> Connect to Server, then enter [smb://leif.seas.upenn.edu/](smb://leif.seas.upenn.edu/) (use the + sign to add it to the "favorite servers" list).
Windows: Computer --> Map network drive, then enter \\\\[leif.seas.upenn.edu](http://leif.seas.upenn.edu)\\

### 3\. Sign into Leif using your PennKey and SEAS Local Password

If this is your first time signing in, set a SEAS Local Password first at [https://accounts.seas.upenn.edu/passwd](https://accounts.seas.upenn.edu/passwd). This password is separate from your PennKey password.

### 4\. Select volume(s) to mount
