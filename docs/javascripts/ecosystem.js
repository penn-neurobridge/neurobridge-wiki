/* Landing-page graph: the lab in the middle, the partner centers around it, and the procedures that
   involve a center drawn as small nodes on the edge between the two. Data: map/graph.json.
   Responsive: the SVG is laid out in real pixels for the width it gets (text never scales down),
   and below 640 px it becomes a list. No library needed. */
(function () {
  const THEME_COLORS = {
    "Data": "#2a78d6", "Compute": "#eb6834", "Imaging": "#1baf7a",
    "Electrophysiology": "#eda100", "REDCap & Clinical Metadata": "#e87ba4", "Operations": "#008300"
  };
  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let data = null, host = null, tip = null;

  function wrap(name, max) {
    const lines = []; let line = "";
    name.split(" ").forEach(w => { if ((line + " " + w).trim().length > max) { lines.push(line.trim()); line = w; } else line += " " + w; });
    lines.push(line.trim()); return lines;
  }

  function showTip(e, nd) {
    tip.hidden = false;
    tip.innerHTML = `<b>${esc(nd.title)}</b><br>${esc(nd.theme)}${nd.section ? " › " + esc(nd.section) : ""}<br><span>${esc(nd.stage)}</span>`;
    const r = host.getBoundingClientRect();
    tip.style.left = (e.clientX - r.left + 14) + "px"; tip.style.top = (e.clientY - r.top + 14) + "px";
  }

  function nodeCircle(parent, nd, x, y, r, root) {
    const a = el("a", { href: nd.external ? nd.url : root + nd.url }, parent);
    const c = el("circle", { cx: x, cy: y, r, fill: nd.external ? "#fff" : (THEME_COLORS[nd.theme] || "#888"),
      stroke: nd.external ? (THEME_COLORS[nd.theme] || "#888") : "#fff", "stroke-width": nd.external ? 2 : 1.5 }, a);
    c.addEventListener("mousemove", e => showTip(e, nd));
    c.addEventListener("mouseleave", () => { tip.hidden = true; });
    el("title", {}, c).textContent = nd.title;
    return c;
  }

  function renderSvg(W, root) {
    const centers = data.centers.slice().sort((a, b) => (b.shared_count || 0) - (a.shared_count || 0));
    const n = centers.length;
    const H = Math.round(Math.max(500, Math.min(640, W * 0.8)));
    const cx = W / 2, cy = H / 2;
    const compact = W < 900;
    const hubR = compact ? 32 : 40, labR = compact ? 56 : 70, dotR = compact ? 4.5 : 5.5;
    const ringR = Math.min(W * 0.33, (H / 2 - hubR - 78) / 0.72), farR = Math.min(W * 0.42, W / 2 - 112, ringR * 1.32);

    const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: "img",
      "aria-label": "The lab and its partner centers; the procedures that involve a center sit on the edge between it and the lab." }, host);

    const pos = centers.map((c, i) => {
      const a = (i / n) * 2 * Math.PI, r = i === 0 ? farR : ringR;
      return { c, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.72 };
    });

    const edges = el("g", {}, svg);
    pos.forEach(p => {
      if (p.c.shared_count) el("line", { x1: cx, y1: cy, x2: p.x, y2: p.y, stroke: "var(--nb-soft)", "stroke-width": compact ? 34 : 44, "stroke-linecap": "round" }, edges);
      el("line", { x1: cx, y1: cy, x2: p.x, y2: p.y, stroke: "var(--nb-line)", "stroke-width": 1.5,
        "stroke-dasharray": p.c.shared_count ? "" : "4 4" }, edges);
    });

    // procedures on each edge: phyllotaxis around the midpoint, stretched along the edge
    const dots = el("g", {}, svg);
    pos.forEach(p => {
      const nodes = data.nodes.filter(nd => nd.center === p.c.id);
      if (!nodes.length) return;
      const ex = p.x - cx, ey = p.y - cy, L = Math.hypot(ex, ey), ux = ex / L, uy = ey / L;
      const mx = cx + ex * 0.5, my = cy + ey * 0.5;
      const room = (L - labR - hubR - 12) / 2;                 // half-length available along the edge
      const golden = Math.PI * (3 - Math.sqrt(5));
      const spread = (dotR * 1.45) * Math.sqrt(nodes.length);  // nominal cluster radius
      const kAlong = Math.max(1, Math.min(1.7, room / spread)), kAcross = 0.95;
      nodes.forEach((nd, i) => {
        const rr = dotR * 1.45 * Math.sqrt(i + 0.5), th = i * golden;
        const along = Math.cos(th) * rr * kAlong, across = Math.sin(th) * rr * kAcross;
        nodeCircle(dots, nd, mx + ux * along - uy * across, my + uy * along + ux * across, dotR, root);
      });
    });

    // the lab's own procedures that involve no center: a ring around the lab
    const own = data.nodes.filter(nd => !nd.external && !nd.center);
    if (own.length) {
      const ring = el("g", {}, svg);
      own.forEach((nd, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / own.length; nodeCircle(ring, nd, cx + Math.cos(a) * (labR + 22), cy + Math.sin(a) * (labR + 22), dotR, root); });
    }

    // hubs
    pos.forEach(p => {
      const a = el("a", { href: root + "centers/" + p.c.id + "/" }, svg);
      const g = el("g", { transform: `translate(${p.x},${p.y})`, class: "eco-hub" }, a);
      el("circle", { r: hubR, fill: "#fff", stroke: "var(--nb-navy)", "stroke-width": 2.5 }, g);
      el("text", { class: "eco-short", "text-anchor": "middle", dy: 5 }, g).textContent = p.c.short;
      const t = el("text", { class: "eco-name", "text-anchor": "middle" }, g);
      wrap(p.c.name, compact ? 22 : 26).forEach((l, i) => { el("tspan", { x: 0, dy: i === 0 ? hubR + 18 : 14 }, t).textContent = l; });
      if (p.c.shared_count) el("tspan", { x: 0, dy: 15, class: "eco-count" }, t).textContent =
        p.c.shared_count + (p.c.id === "cnt" ? " procedures run jointly" : " procedures");
    });

    // the lab
    const la = el("a", { href: root + "lab-manual/start-here/" }, svg);
    const lg = el("g", { transform: `translate(${cx},${cy})` }, la);
    el("circle", { r: labR, fill: "var(--nb-navy)" }, lg);
    el("text", { class: "eco-lab", "text-anchor": "middle", dy: compact ? -4 : -8 }, lg).textContent = "NeuroBridge";
    el("text", { class: "eco-lab", "text-anchor": "middle", dy: compact ? 14 : 11 }, lg).textContent = "Lab";
    if (compact) {
      el("text", { class: "eco-lab-sub eco-lab-sub--s", "text-anchor": "middle", dy: 27 }, lg).textContent = "data coordinating";
      el("text", { class: "eco-lab-sub eco-lab-sub--s", "text-anchor": "middle", dy: 39 }, lg).textContent = "center";
    } else {
      el("text", { class: "eco-lab-sub", "text-anchor": "middle", dy: 28 }, lg).textContent = "data coordinating";
      el("text", { class: "eco-lab-sub", "text-anchor": "middle", dy: 42 }, lg).textContent = "center";
    }
  }

  function renderList(root) {
    const centers = data.centers.slice().sort((a, b) => (b.shared_count || 0) - (a.shared_count || 0));
    const box = document.createElement("div"); box.className = "eco-list"; host.appendChild(box);
    const lab = document.createElement("a"); lab.className = "eco-list__lab"; lab.href = root + "lab-manual/start-here/";
    lab.innerHTML = `<b>NeuroBridge Lab</b><span>data coordinating center</span>`;
    box.appendChild(lab);
    centers.forEach(c => {
      const nodes = data.nodes.filter(nd => nd.center === c.id);
      const byTheme = {};
      nodes.forEach(nd => { byTheme[nd.theme] = (byTheme[nd.theme] || 0) + 1; });
      const row = document.createElement("a"); row.className = "eco-list__row"; row.href = root + "centers/" + c.id + "/";
      row.innerHTML = `<span class="eco-list__short">${esc(c.short)}</span>
        <span class="eco-list__body"><b>${esc(c.name)}</b><span class="eco-list__rel">${esc(c.relation || "")}</span>
        ${nodes.length ? `<span class="eco-list__counts">${Object.entries(byTheme).map(([t, k]) => `<span><i style="background:${THEME_COLORS[t] || "#888"}"></i>${k} ${esc(t)}</span>`).join("")}</span>` : ""}</span>`;
      box.appendChild(row);
    });
  }

  function legend() {
    const lg = document.createElement("div"); lg.className = "wm-legend"; host.appendChild(lg);
    lg.innerHTML = Object.entries(THEME_COLORS).map(([t, c]) => `<span class="wm-key"><i style="background:${c}"></i>${t}</span>`).join("") +
      `<span class="wm-key wm-key-note">node = one procedure, on the edge of the center it involves · filled = in this wiki · hollow = in the CNT manual only · click to open</span>`;
  }

  let lastW = 0;
  function render() {
    const W = Math.floor(host.clientWidth);
    if (!W || W === lastW) return;
    lastW = W;
    host.innerHTML = "";
    tip = document.createElement("div"); tip.className = "wm-tip"; tip.hidden = true; host.appendChild(tip);
    const root = host.dataset.root || "./";
    if (W < 640) renderList(root); else { renderSvg(W, root); legend(); }
  }

  async function boot() {
    host = document.getElementById("nb-ecosystem");
    if (!host || host.dataset.ready) return;
    host.dataset.ready = "1";
    const root = host.dataset.root || "./";
    data = await (await fetch(root + "map/graph.json", { cache: "no-store" })).json();
    if (!(data.centers || []).length) return;
    render();
    if (window.ResizeObserver) new ResizeObserver(() => render()).observe(host);
    else window.addEventListener("resize", render);
  }

  if (window.document$) { window.document$.subscribe(boot); } else { document.addEventListener("DOMContentLoaded", boot); }
})();
