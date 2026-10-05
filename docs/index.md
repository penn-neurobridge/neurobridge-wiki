---
title: "Home"
hide:
  - navigation
  - toc
---

<section class="nb-banner" markdown="0">
  <div class="nb-banner__left">
    <h1>NeuroBridge Lab Wiki</h1>
    <p class="nb-banner__tag">Connecting brain science to clinical practice</p>
    <div class="nb-banner__actions">
      <a class="nb-btn nb-btn--primary" href="lab-manual/start-here/">Start here</a>
      <a class="nb-btn" href="map/">Map of the wiki</a>
    </div>
  </div>
  <p class="nb-banner__intro">The NeuroBridge Lab is the data coordinating center of a network of Penn and CHOP centers. This wiki holds the lab's own procedures for its data, compute and operations, grouped under six systems and cross-referenced by stage in the data lifecycle and by role. The infrastructure is run jointly with the Center for Neuroengineering &amp; Therapeutics, so shared procedures are maintained together. The wiki contains no patient identifiers and no credentials.</p>
</section>

<section class="nb-eco" markdown="0">
  <h2>The lab and its centers</h2>
  <p>Each center brings cohorts, systems, training or collaborators. The procedures that involve a center are drawn on the edge between it and the lab; today they are the %%SHAREDCOUNT:cnt%% procedures run jointly with the CNT, and each opens in this wiki. The other centers' procedures are added as the collaborations produce them.</p>
  <div id="nb-ecosystem" data-root="./"></div>
</section>

<div class="nb-grid" markdown="0">
  <section class="nb-card">
    <h2><a href="data/">Data</a></h2>
    <p>Where the lab's data is kept and how it is laid out, moved between servers, archived to Azure, shared through Pennsieve and ieeg.org, and de-identified.</p>
    <p class="nb-card__links"><a href="data/storage-locations/data-storage-locations/">Data storage locations</a> · <a href="data/moving-data/moving-data-across-cnt-fs-cnt1-bsc-borel-and-leif/">Moving data across servers</a> · <a href="data/de-identification/de-identifying-edfs/">De-identifying EDFs</a> · <a href="data/sharing-pennsieve-and-ieeg-org/uploading-from-cnt1-to-pennsieve/">Uploading to Pennsieve</a></p>
  </section>
  <section class="nb-card">
    <h2><a href="compute/">Compute</a></h2>
    <p>The servers and clusters the lab computes on, and how to obtain access.</p>
    <p class="nb-card__links"><a href="compute/overview/overview-of-cnt-systems/">Overview of CNT systems</a> · <a href="compute/seas-cets-servers/accessing-borel-over-ssh/">Accessing Borel over SSH</a> · <a href="compute/seas-cets-servers/submitting-jobs-with-slurm/">Submitting jobs with SLURM</a> · <a href="compute/pmacs-psom-systems/pmacs-vpn/">PMACS VPN</a></p>
  </section>
  <section class="nb-card">
    <h2><a href="imaging/">Imaging</a></h2>
    <p>Clinical imaging pulls, conversion of scans to NIfTI, and reconstruction of electrode positions. Scheduling and scanner-day work is in the CNT manual.</p>
    <p class="nb-card__links"><a href="imaging/clinical-imaging-pulls-radar/radar-data-pulls/">RADAR data pulls</a> · <a href="imaging/formatting/dicom-nifti-non-bids/">DICOM to NIfTI</a> · <a href="imaging/electrode-reconstruction/gui-docker-reconstruction-workflow/">Electrode reconstruction</a> · <a href="imaging/electrode-reconstruction/grid-electrode-labeling-conventions/">Grid labeling conventions</a></p>
  </section>
  <section class="nb-card">
    <h2><a href="electrophysiology/">Electrophysiology</a></h2>
    <p>Intracranial EEG from export out of Natus through channel mapping, conversion and publication on ieeg.org, and its archiving.</p>
    <p class="nb-card__links"><a href="electrophysiology/exporting-from-natus/exporting-files-from-natus/">Exporting files from Natus</a> · <a href="electrophysiology/channel-mapping/automated-channel-mapping/">Automated channel mapping</a> · <a href="electrophysiology/processing-and-upload-to-ieeg-org/processing-for-ieeg-org-natus2mef-validate-upload/">Processing for ieeg.org</a> · <a href="electrophysiology/overview-and-setup/seeg-phase-ii-processing-overview-and-timeline/">Phase II timeline</a></p>
  </section>
  <section class="nb-card">
    <h2><a href="redcap/">REDCap &amp; Clinical Metadata</a></h2>
    <p>The REDCap projects that hold clinical variables, the conventions for entering data in them, and the pulls from the electronic health record that feed them.</p>
    <p class="nb-card__links"><a href="redcap/projects-and-data-entry/surgical-outcomes-redcap-project/">Surgical Outcomes project</a> · <a href="redcap/projects-and-data-entry/redcap-tips/">REDCap tips</a> · <a href="redcap/clinical-data-pulls-ehr-redcap/radar-pull-redcap-entry/">RADAR pull to REDCap</a> · <a href="redcap/projects-and-data-entry/seizure-terminology-reference/">Seizure terminology</a></p>
  </section>
  <section class="nb-card">
    <h2><a href="operations/">Operations</a></h2>
    <p>Accounts and access, onboarding and offboarding, and adding people to IRB studies. Consent, scheduling, reimbursement and testing are in the CNT manual.</p>
    <p class="nb-card__links"><a href="operations/onboarding-and-offboarding/onboarding-and-offboarding-checklist/">Onboarding and offboarding</a> · <a href="operations/regulatory-irb-and-reporting/adding-personnel-to-an-irb-study/">Adding personnel to an IRB study</a> · <a href="operations/access-and-accounts/requesting-a-redcap-account/">Requesting a REDCap account</a> · <a href="operations/access-and-accounts/adding-users-to-the-ieeg-org-portal/">ieeg.org portal access</a></p>
  </section>
</div>

<p class="nb-grid__note">Procedures that are the CNT's alone, such as consenting, scanner-day and participant-facing coordinator work, live in the <a href="cnt:index.md">CNT procedures manual</a>; pages here that both manuals keep say so at the top.</p>

<div class="nb-columns" markdown="0">
  <section>
    <h2>Lab Manual</h2>
    <p>An account of how the lab works, written for someone in their first week. It explains and points; the procedures themselves are in the six sections above.</p>
    <ul>
      <li><a href="lab-manual/start-here/">Start here</a></li>
      <li><a href="lab-manual/what-this-lab-is/">What this lab is</a>: mission, place within Penn, partner centers</li>
      <li><a href="lab-manual/roles-in-the-lab/">Roles in the lab</a>: coordinators, research assistants, postdocs, students</li>
      <li><a href="lab-manual/how-data-moves/">How data moves through the lab</a></li>
      <li><a href="lab-manual/regulatory-and-privacy/">Regulatory and privacy essentials</a></li>
      <li><a href="lab-manual/glossary/">Glossary</a></li>
    </ul>
    <p>The procedures can also be read by stage or by role: the <a href="map/">map</a>, the <a href="tags/">tags</a>, and <a href="about/roles/">what each role is expected to know</a>.</p>
  </section>
  <section>
    <h2>Centers</h2>
    <ul>
      <li><a href="centers/cnt/">Center for Neuroengineering &amp; Therapeutics</a>: joint epilepsy data infrastructure</li>
      <li><a href="centers/ibi/">Institute for Biomedical Informatics</a>: the lab's informatics institute</li>
      <li><a href="centers/cceb/">Center for Clinical Epidemiology and Biostatistics</a>: training programs</li>
      <li><a href="centers/stroke/">Penn Stroke Center and LCNS</a>: stroke and aphasia cohorts, neuromodulation</li>
      <li><a href="centers/cbir/">Center for Brain Injury and Repair</a>: traumatic brain injury cohorts</li>
      <li><a href="centers/chop/">CHOP Informatics</a>: pediatric informatics collaboration</li>
    </ul>
    <h2>Contributing</h2>
    <p>To correct a page, use the edit button at the top of it, or edit the Markdown in Obsidian and commit. See <a href="about/contributing/">how contributing works</a>, the <a href="about/style-guide/">style guide</a> and the <a href="about/sop-template/">SOP template</a>.</p>
  </section>
</div>
