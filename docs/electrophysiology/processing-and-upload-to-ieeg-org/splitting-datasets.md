---
title: "Splitting Datasets"
stage: "Data Standardization & Integration"
roles: [data-rc, pipeline]
order: 6
source: cnt
---

# Splitting Datasets

!!! abstract "What this page tells you"
    When Natus files overlap in start times or electrodes changed, split into two natusdir and data collection files suffixed D01 and D02 (plus two channel maps if electrodes changed), then process each with the intracranial instructions, updating file names. HUPXXX is the example.

Split a dataset before the natus2mef conversion when the Natus files overlap in their start times or when the electrodes were changed during the stay. **See HUPXXX in ieeg\_metadata in cnt-fs as an example patient.**

If EEG files in the Natusdir **overlap in their start times**, you need to **split the dataset** into two separate natusdir files. Otherwise the natus2mef conversion fails.

If there was an **electrode change**, you also need to split the dataset into two, to reflect the different electrodes used. This also requires **making a new channel map** that reflects the changed electrodes.

The processing is done in the same way as usual. The only change is that you make two natusdir files and two data collection files, labeled with D01 and D02 at the end. For example:
**HUPXXX\_natusdir\_D01**
**HUPXXX\_natusdir\_D02**

**HUPXXX\_datacollection\_D01**
**HUPXXX\_datacollection\_D02**

You can keep the same channel mapping if there was no electrode change. If there was an electrode change, you also need to make two separate channel map files to reflect the different electrodes used. For example:
**HUPXXX\_channelMapping\_D01**
**HUPXXX\_channelMapping\_D02**

**The processing instructions are in** Processing for [ieeg.org](http://ieeg.org) ([Processing for ieeg.org (natus2mef → validate → upload)](processing-for-ieeg-org-natus2mef-validate-upload.md)). Follow the intracranial instructions. **Because the natusdir file names now end in D01 or D02, you must change the file names in the example commands to match.**
