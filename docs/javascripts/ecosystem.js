/* Landing-page graph: the lab in the middle, the partner centers around it, and the procedures the
   lab follows at a center drawn as small nodes on the edge between the two. Data: map/graph.json. */
(function () {
  const THEME_COLORS = {
    "Data": "#2a78d6", "Compute": "#eb6834", "Imaging": "#1baf7a",
    "Electrophysiology": "#eda100", "REDCap & Clinical Metadata": "#e87ba4", "Operations": "#008300"
  };

  async function boot() {
    const host = document.getElementById("nb-ecosystem");
    if (!host || host.dataset.ready) return;
    host.dataset.ready = "1";
    const d3 = await import("https://cdn.jsdelivr.net/npm/d3@7/+esm");
    const root = host.dataset.root || "./";
    const data = await (await fetch(root + "map/graph.json", { cache: "no-store" })).json();
    const centers = data.centers || [];
    if (!centers.length) return;

    const W = 1000, H = 640, cx = W / 2, cy = H / 2;
    const svg = d3.select(host).append("svg").attr("viewBox", [0, 0, W, H]).attr("role", "img")
      .attr("aria-label", "The lab and its partner centers; the procedures the lab follows at each center are drawn on the connecting edge.");
    const tip = d3.select(host).append("div").attr("class", "wm-tip").attr("hidden", true);

    // centers on a ring; the one with the most shared procedures sits to the right with extra room
    const ordered = centers.slice().sort((a, b) => (b.shared_count || 0) - (a.shared_count || 0));
    const n = ordered.length;
    const pos = ordered.map((c, i) => {
      const a = (i / n) * 2 * Math.PI;                       // 0 = east
      const r = i === 0 ? 340 : 255;
      return { c, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.74, a };
    });

    // edges
    const edges = svg.append("g");
    pos.forEach(p => {
      if (p.c.shared_count) edges.append("line").attr("x1", cx).attr("y1", cy).attr("x2", p.x).attr("y2", p.y)
        .attr("stroke", "var(--nb-soft)").attr("stroke-width", 44).attr("stroke-linecap", "round");
      edges.append("line").attr("x1", cx).attr("y1", cy).attr("x2", p.x).attr("y2", p.y)
        .attr("stroke", "var(--nb-line)").attr("stroke-width", p.c.shared_count ? 1.5 + Math.min(10, p.c.shared_count / 6) : 1.5)
        .attr("stroke-opacity", p.c.shared_count ? 0.9 : 0.8).attr("stroke-dasharray", p.c.shared_count ? null : "4 4");
    });

    // shared procedures as nodes along each edge (phyllotaxis around the edge's midpoint)
    const dots = svg.append("g");
    pos.forEach(p => {
      const nodes = data.nodes.filter(nd => nd.center === p.c.id);
      if (!nodes.length) return;
      const mx = cx + (p.x - cx) * 0.5, my = cy + (p.y - cy) * 0.5;
      const golden = Math.PI * (3 - Math.sqrt(5));
      const ex = (p.x - cx), ey = (p.y - cy), L = Math.hypot(ex, ey), ux = ex / L, uy = ey / L;
      nodes.forEach((nd, i) => {
        const rr = 7.5 * Math.sqrt(i + 0.5), th = i * golden;
        // stretch along the edge, squeeze across it
        const along = Math.cos(th) * rr * 1.7, across = Math.sin(th) * rr * 0.95;
        nd._x = mx + ux * along - uy * across; nd._y = my + uy * along + ux * across;
      });
      dots.selectAll(null).data(nodes).enter().append("a")
        .attr("href", nd => nd.external ? nd.url : root + nd.url)
        .append("circle").attr("cx", nd => nd._x).attr("cy", nd => nd._y).attr("r", 5.5)
        .attr("fill", nd => nd.external ? "#fff" : (THEME_COLORS[nd.theme] || "#888"))
        .attr("stroke", nd => THEME_COLORS[nd.theme] || "#888").attr("stroke-width", 2)
        .on("mousemove", (e, nd) => {
          tip.attr("hidden", null).html(`<b>${nd.title}</b><br>${nd.theme}${nd.section ? " › " + nd.section : ""}<br><span>${nd.stage}</span>`);
          const r = host.getBoundingClientRect();
          tip.style("left", (e.clientX - r.left + 14) + "px").style("top", (e.clientY - r.top + 14) + "px");
        })
        .on("mouseleave", () => tip.attr("hidden", true));
    });

    // the lab's own procedures that involve no particular center: a ring around the lab
    const own = data.nodes.filter(nd => !nd.external && !nd.center);
    if (own.length) {
      const ring = svg.append("g");
      own.forEach((nd, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / own.length; nd._x = cx + Math.cos(a) * 92; nd._y = cy + Math.sin(a) * 92; });
      ring.selectAll(null).data(own).enter().append("a").attr("href", nd => root + nd.url)
        .append("circle").attr("cx", nd => nd._x).attr("cy", nd => nd._y).attr("r", 5.5)
        .attr("fill", nd => THEME_COLORS[nd.theme] || "#888").attr("stroke", "#fff").attr("stroke-width", 1.5)
        .on("mousemove", (e, nd) => {
          tip.attr("hidden", null).html(`<b>${nd.title}</b><br>${nd.theme}${nd.section ? " › " + nd.section : ""}<br><span>${nd.stage}</span>`);
          const r = host.getBoundingClientRect();
          tip.style("left", (e.clientX - r.left + 14) + "px").style("top", (e.clientY - r.top + 14) + "px");
        })
        .on("mouseleave", () => tip.attr("hidden", true));
    }

    // center hubs
    const hubs = svg.append("g");
    const hub = hubs.selectAll("g").data(pos).enter().append("a").attr("href", p => root + "centers/" + p.c.id + "/")
      .append("g").attr("transform", p => `translate(${p.x},${p.y})`);
    hub.append("circle").attr("r", 40).attr("fill", "#fff").attr("stroke", "var(--nb-navy)").attr("stroke-width", 2.5);
    hub.append("text").attr("class", "eco-short").attr("text-anchor", "middle").attr("dy", 5).text(p => p.c.short);
    hub.append("text").attr("class", "eco-name").attr("text-anchor", "middle")
      .each(function (p) {
        const words = p.c.name.split(" "); const lines = []; let line = "";
        words.forEach(w => { if ((line + " " + w).trim().length > 26) { lines.push(line.trim()); line = w; } else line += " " + w; });
        lines.push(line.trim());
        const t = d3.select(this);
        lines.forEach((l, i) => t.append("tspan").attr("x", 0).attr("dy", i === 0 ? 58 : 14).text(l));
        if (p.c.shared_count) t.append("tspan").attr("class", "eco-count").attr("x", 0).attr("dy", 15).text(p.c.shared_count + (p.c.id === "cnt" ? " procedures run jointly" : " procedures"));
      });

    // the lab
    const lab = svg.append("a").attr("href", root + "lab-manual/start-here/").append("g").attr("transform", `translate(${cx},${cy})`);
    lab.append("circle").attr("r", 70).attr("fill", "var(--nb-navy)");
    lab.append("text").attr("class", "eco-lab").attr("text-anchor", "middle").attr("dy", -8).text("NeuroBridge");
    lab.append("text").attr("class", "eco-lab").attr("text-anchor", "middle").attr("dy", 11).text("Lab");
    lab.append("text").attr("class", "eco-lab-sub").attr("text-anchor", "middle").attr("dy", 28).text("data coordinating");
    lab.append("text").attr("class", "eco-lab-sub").attr("text-anchor", "middle").attr("dy", 42).text("center");

    // legend
    const lg = d3.select(host).append("div").attr("class", "wm-legend");
    lg.html(Object.entries(THEME_COLORS).map(([t, c]) => `<span class="wm-key"><i style="background:${c}"></i>${t}</span>`).join("") +
      `<span class="wm-key wm-key-note">node = one procedure, on the edge of the center it involves · filled = in this wiki · hollow = in the CNT manual only · click to open</span>`);
  }

  if (window.document$) { window.document$.subscribe(boot); } else { document.addEventListener("DOMContentLoaded", boot); }
})();
