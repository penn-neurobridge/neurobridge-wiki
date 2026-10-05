---
title: "Grid Electrode Labeling Conventions"
stage: "Data Standardization & Integration"
roles: [data-rc, analyst]
audit: merge
order: 5
source: cnt
---

# Grid Electrode Labeling Conventions

!!! abstract "What this page tells you"
    How to label a grid electrode in voxtool: set dimensions as contacts-per-row by rows, label the four corners with matching label numbers and X/Y lead coordinates (worked 8x4 example), then interpolate, repeating or manually filling missed contacts. Links a video tutorial.

#### Labeling Grids

*   This example uses an 8x8 grid split after the 4th row. The dimensions are x: 8 (contacts per row), y: 4 (rows).
*   The X dimension is the position within a row (1-8). The Y dimension is the row (1-4).
*   Label the grid by its corners. The first corner is (1,1). The second corner is (1,8): you are still in the first row (1), and you are labeling the 8th electrode of that row (8).
*   When labeling the 8th electrode of the first row (the 2nd corner), change the Label number to 8 (or the Nth electrode of the row), and change the Lead number to match.
*   For the 3rd corner, change the Label number to the Nth electrode contact of the grid that corresponds to that corner (in this case contact 25). Change the X Lead to 1, the first electrode of that row. Change the Y Lead to 4, because you are labeling in the 4th row. This is the 1st point on the 4th row. The Lead coordinates are (X: 1, Y: 4).
*   For the 4th corner, change the Label to the Nth electrode contact that corresponds to that corner, in this case the final, 32nd contact (Label 32). The X Lead is the position of the electrode within the row (x = 8). The Y Lead is the row (y = 4). The Lead coordinates are (X: 8, Y: 4).
*   When all four corners have been labeled, interpolate.
*   If electrodes are not found with the first interpolation, click Interpolate again to see whether it continues to find electrodes within range. It should find the remaining electrodes.
*   If the interpolation misses an electrode, enter it manually by defining the x coordinate (which electrode in the row), the y coordinate (which row), and the Label number (the Nth electrode in the grid).

#### See tutorial below:
<span class="attachment-note" title="Too large for the Git repository">🎬 Video: video1338425901.mp4 — kept in Dropbox › NeuroBridge › wiki-media as <code>7927-video1338425901.mp4</code></span>
