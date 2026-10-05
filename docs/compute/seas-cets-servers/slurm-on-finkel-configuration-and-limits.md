---
title: "SLURM on Finkel: Configuration & Limits"
stage: "Data Analytics"
roles: [analyst, pipeline]
audit: merge
order: 5
source: cnt
---

# SLURM on Finkel: Configuration & Limits

!!! abstract "What this page tells you"
    Finkel SLURM settings: 8 GPU shards (4 per L40S, ~12GB each), 14-day max job time, 100 queued jobs per user, /scratch purged after 21 days, open to cntgroup; the data research coordinator coordinates config changes with CETS. Links the cluster tutorial deck.

This page lists the SLURM settings currently configured on Finkel. The data research coordinator coordinates any changes to them with CETS. For how to submit jobs, see [Submitting Jobs with SLURM](submitting-jobs-with-slurm.md).

## Tutorial:

[📄 Litt Lab Cluster Tutorial.pptx](../../assets/compute/slurm-on-finkel-configuration-and-limits/01-litt-lab-cluster-tutorial.pptx)

## Current Configurations on Finkel:

*   **Governance model for deciding what changes to make for the lab**
    *   The data research coordinator coordinates with CETS on any changes that are needed.
*   **Number of shards per GPU**
    *   There are 8 shards in total on [finkel.seas.upenn.edu](http://finkel.seas.upenn.edu/), 4 per GPU.
        *   A shard is the smallest unit. You only need to request a shard to run jobs on a GPU. Jobs that do not request a shard can still run, using CPU and memory but not a GPU, when all of the shards have been claimed.
        *   The smallest typical job is estimated at 12GB. A single L40S has 48GB, which gives 4 shards of 12GB per card, so 8 such jobs can run on Finkel at the same time. The current configuration is 8 shards in total, 4 per GPU card.
*   **Maximum time limit per job**
    *   There is a 14-day time limit on any job.
*   **Maximum number of jobs per user in queue / running**
    *   No user can have more than 100 jobs in the queue at once.
*   **Scratch space management**
    *   A tool automatically removes files older than 21 days from the `/scratch` directory.
*   **Allowed users**
    *   The `cntgroup` usergroup (all CNT users).
