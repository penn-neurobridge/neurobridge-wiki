---
title: "Exporting Files from Natus"
stage: "Data Collection"
roles: [data-rc, crc]
order: 1
source: cnt
---

# Exporting Files from Natus

!!! abstract "What this page tells you"
    Remote into MZ03GCS2 via the remote access portal, open VNC Viewer to HUP-XLTEK-CNT (password in the lab password manager; three wrong attempts wipes Natus data), select the EMU Database, mount cnt-fs, then right-click the clip and export with video unchecked. Includes fixes for a locked or black Natus screen.

!!! warning "Credential removed"
    A password that appeared in the original text has been removed. Get it from the lab password manager, never from a wiki page.

Export each clipped recording from Natus to cnt-fs by remoting into the Natus computer in the EMU testing room.

**If the Natus computer is stuck on the lock screen:** use UltraVNC to send the Ctrl+Alt+Delete signal to the Natus computer, or call the EEG technologist on duty. You can also send the Ctrl+Alt+Delete signal from the computer in the lab kitchen.

**If the Natus computer is stuck on a black screen:**

*   Send the Ctrl+Alt+Delete signal by hovering your mouse near the top of the screen until the toolbar appears.
*   After you press Ctrl+Alt+Delete, click "Sign out".
*   You may be returned to the remote desktop, where you have to click into VNC Viewer again.
*   Click back into it and sign in to UPHS with your login.
*   You are then taken to a page that asks you to log in to a workstation. Only users who have been assigned a workstation can log in, so one of them must log in until other users are assigned a workstation.

**If nothing else works, go to the EMU and restart the computer.**

**For any other problem with the remote desktop or VNC Viewer, call 215-662-7474.**


*   The Natus computer is in the EMU testing room, and you reach it remotely.
*   To do this, first remote into the computer in the lab kitchen, and from there enter the Natus computer.
*   Log into the remote access portal.
*   Click on PennChart and Citrix Apps.
*   Click on the remote desktop connection and enter the name of the computer:
    *   **MZ03GCS2 (used for Natus and/or Sectra access)**
    *   **MJ0HKNDA (only used for PennChart/Sectra access now)**
    *   Enter your Penn Medicine password.
*   Once you are in that computer, search for VNC Viewer and open it.
*   Click on HUP-XLTEK-CNT.
*   **Enter the password from the lab password manager. Enter it carefully.**
    *   _If the wrong password is entered three times, all of the data in Natus across all of the hospitals is deleted, and this cannot be stopped._
*   Once you are in Natus, make sure you are in the EMU Database, shown at the top left.
    *   If Natus is not already open, click on the Natus Database app on the left.
*   Search for the patient by name in the left-hand panel.
*   Mount cnt-fs on the VNC server computer if it is not mounted already. See Mounting cnt-fs ([Mounting cnt-fs](../overview-and-setup/mounting-cnt-fs.md)).
*   Right-click on the clip you want to **export → select Export → uncheck Video → click Browse Folder and find the folder you need (Intracranial\_EEG, CCEPS, Gottfried, Gold\_Audio, etc.)**.
*   While the recording is exporting from Natus to cnt-fs, a pop-up window shows a green progress bar and the estimated time left. That window shows the patient's name followed by a random combination of letters and numbers, for example "XXXXX~XXX\_1g67f23h". The first eight letters and numbers are the unique file name for each EEG.
*   **24-hour data exporting:**
    *   The 24-hour clips take longer to export, around 45 minutes to 1 hour.
    *   You can close the VNC connection while the file is exporting and come back later to check on it. You do not need to wait for the export to finish.
    *   If a master file is shorter than 30 minutes, it does not need to be exported.
