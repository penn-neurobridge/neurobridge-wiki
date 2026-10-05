---
title: "SEAS Servers: Borel, Leif, Pioneer"
stage: "Data Analytics"
roles: [analyst, pipeline]
order: 1
source: cnt
---

# SEAS Servers: Borel, Leif, Pioneer

!!! abstract "What this page tells you"
    Borel is the CETS Linux compute server (ssh with PennKey); Leif is the file store you mount, which needs a SEAS Local Password set at accounts.seas.upenn.edu; Pioneer is Borel's GPU. No PHI on any. Access lasts while your SEAS account is active.

Borel, Leif and Pioneer are the CNT's servers at the School of Engineering (SEAS), managed by CETS. Any lab member with an active SEAS account can use them. No PHI is allowed on any of them.

### Littlab Servers (Borel, Leif, Pioneer)

**Borel** is a Linux compute server managed by CETS, not PMACS. The CNT owns it, and no other group can access it. No PHI is allowed on Borel.

Borel and Leif are two parts of one system. Leif is the server where you store your data and files; you mount it and open it in Finder or File Explorer. Borel is the Linux compute server where you run your code; you ssh into it. The two are connected: a file you create in your USERS/pennkey folder on Leif appears on Borel under `cd /users/pennkey`.

You do not need a SEAS Local Password to SSH into Borel. SSH uses your PennKey username and password, authenticated through Kerberos against the campus Kerberos servers.

Mounting Leif over SMB is different. It requires your SEAS Local Password, which is a separate password used mainly for SMB, because the SMB server cannot authenticate with PennKeys.

To set your SEAS Local Password, go to [https://accounts.seas.upenn.edu](https://accounts.seas.upenn.edu/) and log in with your PennKey. Then click "SEAS local password" on the left and follow the instructions.

**Pioneer** is the GPU attached to Borel. No PHI is allowed on Pioneer.

### Software

Matlab is installed on Borel and Pioneer. See [Submitting CETS & PMACS Helpdesk Tickets](../support-and-tickets/submitting-cets-and-pmacs-helpdesk-tickets.md) for how to request a personal license if you need one.

### Security and Best Practices

*   CETS Security Presentation Fall 2023:

[📄 seascetssecurity.pptx](../../assets/compute/seas-servers-borel-leif-pioneer/01-seascetssecurity.pptx)

### Access Duration

Access to the Littlab servers has no expiration of its own. It lasts for as long as your SEAS account is active, and SEAS accounts are renewed yearly. See [Submitting CETS & PMACS Helpdesk Tickets](../support-and-tickets/submitting-cets-and-pmacs-helpdesk-tickets.md) for how access and renewals are requested.
