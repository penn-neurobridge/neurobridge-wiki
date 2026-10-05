---
title: "Onboarding & Offboarding Checklist"
stage: "Data Governance"
roles: [crc, data-rc, analyst, pipeline, pi-manager]
order: 1
source: cnt
---

# Onboarding & Offboarding Checklist

!!! abstract "What this page tells you"
    Every account, server, listserv and protocol a new member may need, who requests it, how, and what is removed when the person leaves. Owners are roles, not people; the current holder of each role is in the lab's people directory.

The PI confirms the start date and which systems the person needs; the data research coordinator requests the technical accounts; the regulatory coordinator handles the IRB protocols; the lab administrator handles logistics. Nobody needs every line. Students and postdocs working only with de-identified data stop at the SEAS servers and GitHub; hospital systems are requested only for people who will work with identified data or in the clinic. The step-by-step request procedures are linked from [Getting set up](../../lab-manual/getting-set-up.md).

## Logistics (lab administrator and PI)

| Item | At onboarding | At offboarding |
|---|---|---|
| Onboarding and offboarding forms | Welcome form sent before day one | Exit form; end date recorded |
| PennKey, department email | Confirmed with the department business office | Removed by the department on the end date |
| Lab and department websites | Person added | Person removed |
| Listservs and Slack | Added to the lab list, the shared CNT lists if applicable, and Slack | Removed |
| Computer and peripherals | Ordered or assigned; office supplies | Computer returned and wiped |

## Protocols (regulatory coordinator)

| Item | At onboarding | At offboarding |
|---|---|---|
| IRB protocols | Added to each protocol the person will work under, after CITI and HIPAA training: [Adding Personnel to an IRB Study](../regulatory-irb-and-reporting/adding-personnel-to-an-irb-study.md) or [Adding a Non-Penn / New Hire](../regulatory-irb-and-reporting/adding-a-non-penn-new-hire-to-a-study.md) | Removed from each protocol at the next modification |
| Study personnel list | Updated | Updated |

## Compute and data systems (data research coordinator)

Requested through the CETS or PMACS helpdesk as described in [Submitting CETS & PMACS Helpdesk Tickets](../../compute/support-and-tickets/submitting-cets-and-pmacs-helpdesk-tickets.md); a person must be on the relevant IRB before access to systems that hold identified data is requested.

| System | How it is requested | At offboarding |
|---|---|---|
| SEAS servers (Borel, Pioneer, Leif, Finkel) and user groups | Data research coordinator emails CETS | Removed from the servers and groups |
| SEAS sponsored research account and SEAS email | Data research coordinator emails CETS; email can be requested on its own | Expires after at most one year unless renewed |
| GlobalProtect VPN | Comes with the SEAS account | Expires with the account |
| MATLAB licence (CETS) | Faculty or the user asks the data research coordinator, who emails CETS | Released |
| PMACS account, VDI, Ivanti Secure VPN | Data research coordinator submits a PMACS helpdesk ticket: [PMACS VPN](../../compute/pmacs-psom-systems/pmacs-vpn.md) | Deactivated when the person leaves Penn |
| BSC cluster project folders | PMACS helpdesk ticket | Removed from the project groups |
| cnt1 and cnt-fs (identified data) | After IRB membership, PMACS helpdesk ticket for the matching user groups | Removed from the groups |
| cntgpu1 | PMACS helpdesk ticket | Removed |
| REDCap account and project access | [Requesting a REDCap Account](../access-and-accounts/requesting-a-redcap-account.md); project access granted by the project owner | Removed from each project |
| PMACS helpdesk ticketing rights | PMACS helpdesk ticket, for staff who will file tickets themselves | Removed |
| Azure archive accounts | PMACS helpdesk ticket | Removed |
| Pennsieve workspace | Granted by a workspace administrator: [Pennsieve Data Access Rules](../../data/sharing-pennsieve-and-ieeg-org/pennsieve-data-access-rules.md) | Removed |
| ieeg.org projects | Added by an existing project member: [Adding Users to the ieeg.org Portal](../access-and-accounts/adding-users-to-the-ieeg-org-portal.md) | Removed from the projects |
| Penn+Box folders | Shared by the folder owner | Removed |
| GitHub organisation | Added by an organisation owner | Removed |
| AWS accounts (ieeg.org infrastructure) | Granted by the account owner, only for people who maintain it | Removed |

## Hospital systems (only for people who need them)

| System | How it is requested | At offboarding |
|---|---|---|
| PennMedicine account and email, PennChart | Through the department's PennMedicine sponsor; [PennChart training](cnt:operations/onboarding-and-offboarding/pennchart-training.md) first | Deactivated by the hospital |
| UPHS F5 VPN, Citrix remote desktop, UPHS desktops | UPHS IS helpdesk ticket: [UPHS F5 VPN Access](cnt:operations/access-and-accounts/uphs-f5-vpn-access.md), [Citrix Remote Desktop Access](cnt:operations/access-and-accounts/citrix-remote-desktop-access.md) | Removed |
| Isilon neurology share, EMU shared drive | UPHS IS helpdesk ticket: [Requesting Shared Drive Access](cnt:operations/access-and-accounts/requesting-shared-drive-access-penn-medicine-ticket.md) | Removed |

## When someone leaves

Set the end date with the department and the data research coordinator a month ahead where possible. Before the last day: data and code handed over to a named person and documented ([Leaving the lab](../../lab-manual/leaving-the-lab.md)); personal copies of identified data deleted and confirmed; accounts above removed in the order listed, hospital systems first; computer returned. Shared credentials the person knew are rotated.
