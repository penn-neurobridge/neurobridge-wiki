---
title: "PMACS VPN"
stage: "Data Analytics"
roles: [analyst, pipeline, data-rc]
order: 5
source: cnt
---

# PMACS VPN

!!! abstract "What this page tells you"
    The PMACS VPN is Ivanti Secure Access (auto-upgraded from Pulse Secure in October 2023; requires Windows 10/11 21H2+ or macOS Big Sur+). Install via the med.upenn.edu/dart VPN instructions, connect through remote.pmacs.upenn.edu, and email medhelp@pennmedicine.upenn.edu for access problems.

The PMACS VPN client is Ivanti Secure Access, which replaced Pulse Secure in October 2023. PMACS systems such as the BSC cluster can only be reached from a Penn Medicine network, so you connect to the PMACS VPN first when you are off campus (see [BSC Cluster](bsc-cluster.md)).

### Installation

Instructions to install the VPN are [here](https://www.med.upenn.edu/dart/vpn-instructions.html).

### How to Connect

1. Log on to [remote.pmacs.upenn.edu](http://remote.pmacs.upenn.edu).

### Upgrading from Pulse Secure to Ivanti Secure Access

In late 2020, Ivanti [purchased Pulse Secure](https://urldefense.com/v3/__https://www.ivanti.com/company/press-releases/2020/ivanti-acquires-mobileiron-and-pulse-secure__;!!IBzWLUs!VTEF5CYZKk_08bgCFl8evsqgws2Mwh5FrsZhXeWE2Mv5PCjRtP7g8Sx7CSwtFibQLJwYkAYETRNF3jpgThWkhdoOEHTdr_Vq$) and rebranded it as Ivanti Secure Access. Since October 9, 2023, an existing Pulse Secure installation upgrades itself to Ivanti Secure Access when you connect. The vendor's guide is [Using Ivanti Secure Access](https://urldefense.com/v3/__https://help.ivanti.com/ps/help/en_US/ISAC/22.X/ag-22.X/using_ui.htm__;!!IBzWLUs!VTEF5CYZKk_08bgCFl8evsqgws2Mwh5FrsZhXeWE2Mv5PCjRtP7g8Sx7CSwtFibQLJwYkAYETRNF3jpgThWkhdoOEHTHut2D$).

The upgrade proceeds as follows:

1. When you log in to Pulse Secure, it reports that the version requirements have not been met. The upgrade takes 1-2 minutes to complete.

    ![Generic installer 'Prepare for installation' dialog](../../assets/compute/pmacs-vpn/pmacs-vpn-01.png)

2. The installation begins after the download. Mac computers ask for your password to install.
3. When the installation is complete, Ivanti connects without prompting for login. The installation does not require a reboot. If prompted to reboot, you may ignore the prompt or click OK.

Ivanti Secure Access supports Windows 10/11 versions 21H2 and 22H2, and macOS Big Sur (11.6), Monterey (12.6.5) and Ventura (13.0). On an older operating system you may need to upgrade to use Ivanti Secure Access.

The application icon changed with the rebrand:

![Two app icons with an arrow between them](../../assets/compute/pmacs-vpn/pmacs-vpn-02.png)

[Please enter a helpdesk ticket](https://helpdesk.pmacs.upenn.edu/) if you need assistance with Ivanti Secure Access.

### Problems with access?

*   Please contact [medhelp@pennmedicine.upenn.edu](mailto:medhelp@pennmedicine.upenn.edu)
