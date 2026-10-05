---
title: "BSC Cluster"
stage: "Data Analytics"
roles: [analyst, pipeline, data-rc]
order: 3
source: cnt
---

# BSC Cluster

!!! abstract "What this page tells you"
    Connect to the BSC imaging cluster: turn on the PMACS VPN, ssh pennkey@bscsub.pmacs.upenn.edu, then cd to /project/davis_group, davis_group_1, gugger, or gugger_1. Lists queue limits (bsc_interactive 4 jobs/48h, bsc_normal 64/12h, bsc_short 256/1h, bsc_long 40/30d) and notes bscsub2 works for VSCode editing only.

The BSC cluster is a PMACS resource for brain imaging work. You need a PMACS account and a connection to a Penn Medicine network, on campus or through the PMACS VPN, to use it. Access is requested through a PMACS helpdesk ticket; see [Submitting CETS & PMACS Helpdesk Tickets](../support-and-tickets/submitting-cets-and-pmacs-helpdesk-tickets.md).

## Penn Brain Science Center (BSC) Cluster

### Resources

*   Wiki: [https://brainsciencecenter.github.io/bscLPC/](https://brainsciencecenter.github.io/bscLPC/)

### How to Connect

1. Turn on the Ivanti Secure Access PMACS VPN (formerly the Pulse Secure PMACS VPN).
    1. Penn Medicine network access is required to reach BSC, so remote connections must go through the PMACS VPN. See [PMACS VPN](pmacs-vpn.md) for details.
2. SSH in the terminal.
    1. The job submission and file transfer host for BSC is [bscsub.pmacs.upenn.edu](http://bscsub.pmacs.upenn.edu/), which replaced [scisub.pmacs.upenn.edu](http://scisub.pmacs.upenn.edu/). To connect, run:

        ```plain
         ssh pennkey@bscsub.pmacs.upenn.edu 
        ```

3. Log in with your PennKey and password.
4. BSC is a shared space. To access the CNT project folders:
    1. `cd /project/davis_group`
    2. `cd /project/davis_group_1`
    3. `cd /project/gugger`
    4. `cd /project/gugger_1`

BSC is also accessible from cnt1 via SSH.

### Queue Limits

The following queue limits are in place to prevent oversubscription of the BSC compute nodes. Project directories no longer have a 10TB limit.

| Queue | Max Jobs/User | Max Jobs/Queue | Max Runtime |
| ---| ---| ---| --- |
| bsc\_interactive | 4 | \- | 2880 Minutes (48 Hours/2 Days) |
| bsc\_normal | 64 | \- | 720 Minutes (12 Hours) |
| bsc\_short | 256 | \- | 60 Minutes |
| bsc\_long | 40 | 160 | 720 Hours (30 Days) |

### PMACS Submit Hosts

The LPC is accessible only from Penn Medicine networks. Each PMACS group has its own job submission and file transfer host, and each host combines the functions of scisub, sciget and transfer: [scisub7.pmacs.upenn.edu](http://scisub7.pmacs.upenn.edu/) (general), [ccebsub.pmacs.upenn.edu](http://ccebsub.pmacs.upenn.edu/) (CCEB), [bscsub.pmacs.upenn.edu](http://bscsub.pmacs.upenn.edu/) (BSC) and [ftdcsub.pmacs.upenn.edu](http://ftdcsub.pmacs.upenn.edu/) (FTDC).

### PMACS Account Setup

When your PMACS account is created, Secure Share sends you an email with a temporary password and instructions for changing it. Your username is your PennKey. If the email does not arrive, log in to Secure Share directly with your PennKey credentials: [https://secureshare.apps.upenn.edu/](https://secureshare.apps.upenn.edu/)

Once your password is reset, use your PMACS credentials to access the LPC and the BSC queues. You must be on a supported PMACS or UPHS network. This includes the PMACS and UPHS VPNs and wired PMACS or UPHS networks on campus. The submit host for BSC is [bscsub.pmacs.upenn.edu](http://bscsub.pmacs.upenn.edu/). Once on a supported network, connect to bscsub through ssh.

### PMACS Documentation

- Connecting to and accessing the LPC (PennKey authentication): [https://wiki.pmacs.upenn.edu/pub/LPC](https://wiki.pmacs.upenn.edu/pub/LPC)
- The LPC scheduling software: [https://wiki.pmacs.upenn.edu/pub/LSF\_Basics](https://wiki.pmacs.upenn.edu/pub/LSF_Basics) and [https://wiki.pmacs.upenn.edu/pub/Batch\_Computing](https://wiki.pmacs.upenn.edu/pub/Batch_Computing)
- Modules: applications are installed on a central shared directory so that they are available on all hosts in the cluster. Use "modules" to see what is available and to load or unload software packages. [https://wiki.pmacs.upenn.edu/pub/LPC#Modules](https://wiki.pmacs.upenn.edu/pub/LPC#Modules)
- VPN download and configuration: [https://www.med.upenn.edu/dart/vpn-instructions.html](https://www.med.upenn.edu/dart/vpn-instructions.html)
- Two-factor authentication for the VPN: [https://www.isc.upenn.edu/how-to/two-step-verification-getting-started](https://www.isc.upenn.edu/how-to/two-step-verification-getting-started)
- The original PMACS account notice with these details: [https://helpdesk.pmacs.upenn.edu/userui/ticket?ID=571802](https://helpdesk.pmacs.upenn.edu/userui/ticket?ID=571802)

### Using VSCode with BSC

PMACS provides a second submit host, bscsub2, for VSCode. It is a RHEL9 server, and current versions of VSCode can connect to it. Use bscsub2 only for editing and VSCode connections, because the execute hosts are still CentOS 7. Submit jobs and do other work on bscsub.
