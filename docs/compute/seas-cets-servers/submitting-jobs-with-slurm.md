---
title: "Submitting Jobs with SLURM"
stage: "Data Analytics"
roles: [analyst, pipeline]
order: 4
source: cnt
---

# Submitting Jobs with SLURM

!!! abstract "What this page tells you"
    How and when to run jobs on the Finkel GPU via SLURM from Borel or Pioneer: salloc for interactive jobs, sbatch with #SBATCH headers for batch jobs, squeue for status, with example shell and Python scripts. Finkel cannot be ssh'd into directly.

Jobs for the Finkel GPU are submitted with SLURM from Borel or Pioneer. Finkel cannot be reached directly over SSH; to log in to Finkel interactively, run `salloc` on Borel or Pioneer.

### How the servers fit together

Sauce is the file server. It holds data sets such as "data" and "users", which are accessed on Borel, Pioneer and Finkel at /mnt/sauce/littlab or through symlinks such as /data, /users and /admin. Before SLURM was set up, Borel, Pioneer and Finkel were standalone servers: people could SSH into any of them and run jobs there, and the files on Sauce were available in the same places on each. Now only Finkel is managed by SLURM. You cannot SSH into Finkel. You SSH into Borel or Pioneer and use SLURM commands to schedule jobs on Finkel. SLURM cannot schedule jobs on Borel or Pioneer, but you can still run jobs directly on them as before.

Both batch jobs (`sbatch`) and interactive jobs (`salloc`) can be submitted from Borel or Pioneer. The paths SLURM needs are only set up for new login sessions, so start a new login session before using the commands below.

### Resources

- CETS write-up on using SLURM: [hpc.seas.upenn.edu](https://hpc.seas.upenn.edu/home/mp-clusters/how-to-use-mp-clusters-slurm/)
- SLURM documentation: [slurm.schedmd.com](https://slurm.schedmd.com/documentation.html)

### Should I use the job scheduler?

There are three main reasons to submit scripts to the SLURM job scheduler:

1. You want to run many scripts at once on Borel or Pioneer.
2. You want to run jobs that are long (more than 1 hour) and need a lot of memory (more than 16GB).
3. You want to use the Finkel GPU to run GPU-compatible scripts.

In most cases it is fine to run scripts without submitting them as a job. Borel and Pioneer have a large amount of RAM, and CETS applies a per-user memory limit of 128GB. However, if too many people run large jobs interactively at the same time (on the command line, without the job scheduler), Borel or Pioneer can freeze, which prevents users from reading or writing files or running scripts.

### How do I submit a script as a job?

Below are two examples of running a script called [`script.sh`](http://script.sh) with the job scheduler, which uses the computing resources on [finkel.seas.upenn.edu](http://finkel.seas.upenn.edu/). Check the status of your job with the `squeue` command.

#### 1. From the command line

`salloc --gres=shard:1 --cpus-per-task=1 --mem=8GB`

This command creates an interactive job with the following resources:

*   1 GPU shard (the 2 GPUs are divided into 8 shards so that more users can use the GPU at once)
*   1 CPU core
*   8GB of RAM

Then run `./script.sh`. If resources are available, the script begins running. The job ends when you close the terminal.

#### 2. Within a script

The requested resources are specified in the header of the script itself. This method needs an extra script, but it is recommended because you can close your terminal and the job continues running to completion. Specify where your logs are saved so that you can check that the job ran correctly.

`run_script.sh`

```bash
#!/bin/bash

## Define and create directory to save logs
logs_dir=logs; mkdir -p ${logs_dir}

## Define how you want your logs to be named

## %j --> SLURM JOB ID

## .o --> stdout (primary output stream for script)

## .e --> stderr (separate output stream for errors, diagnostics)
logs_output=${logs_dir}/script_job-%j.o
logs_error=${logs_dir}/script_job-%j.e

## Submit job
sbatch --output=${logs_output} --error=${logs_error} script.sh
```

[`script.sh`](http://script.sh)

```bash
#!/bin/bash
#SBATCH --gres=shard:1
#SBATCH --cpus-per-task=1
#SBATCH --mem=8GB

## Create an empty .txt file
touch hello_world.txt
```

To run a non-shell script, such as a Python script called [`script.py`](http://script.py), change the interpreter at the top of the script:

[`script.py`](http://script.py)

```python
#!/usr/bin/python3
#SBATCH --gres=shard:1
#SBATCH --cpus-per-task=1
#SBATCH --mem=8GB

## Create an empty text file
open('hello_world.txt', 'a').close()
```

### Tutorial

The CETS tutorial on the servers, the job scheduler and other resources:

[📄 Litt Lab Cluster Tutorial.pptx](../../assets/compute/submitting-jobs-with-slurm/01-litt-lab-cluster-tutorial-1.pptx)
