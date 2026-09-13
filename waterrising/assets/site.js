/* WaterHouse: shared nav, footer, interactions */
(function () {
  const WATERHOUSE = [
    { href: "platform.html", label: "Our Mission" },
    { href: "journey.html",  label: "The Journey" },
    { href: "us.html",     label: "WaterHouse US" },
    { href: "uk.html",     label: "WaterHouse UK" },
    { href: "italy.html",  label: "WaterHouse Italy" },
    { href: "uae.html",    label: "WaterHouse UAE" },
    { href: "saudi.html",  label: "WaterHouse Saudi Arabia" },
    { href: "india.html",  label: "WaterHouse India" },
  ];
  const ABOUT = [
    { href: "leadership.html", label: "Leadership & Board" },
    { href: "gary-ladrido.html", label: "Chair, Gary LaDrido" },
    { href: "russell-read.html", label: "Vice Chair, Russell Read" },
    { href: "alicia-douglas.html", label: "Founder & CEO, Alicia Douglas" },
    { href: "research.html", label: "Research & White Papers" },
    { href: "governance.html", label: "Governance & Bylaws" },
    { href: "supporters.html", label: "Our Supporters" },
  ];
  const NAV = [
    { href: "index.html",      label: "Home" },
    { href: "problem.html",    label: "Problem" },
    { href: "investment.html", label: "Opportunity" },
    { href: "market.html",     label: "Market" },
    { href: "events.html",     label: "Events" },
    { label: "WaterHouse", children: WATERHOUSE },
    { label: "About", children: ABOUT },
    { href: "https://www.fixmydripcity.com", label: "Fix My Drip City" },
    { href: "builders.html",   label: "Donate" },
    { href: "contact.html",    label: "Contact" },
  ];

  const MARK = `<svg class="brand__mark" viewBox="0 0 120 88" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.00 8.00 L44.29 39.92 L28.67 32.00 Z" fill="#b3e0e7" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M21.71 48.08 L20.00 8.00 L28.67 32.00 Z" fill="#57B9C9" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M44.29 39.92 L21.71 48.08 L28.67 32.00 Z" fill="#408995" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M20.00 8.00 L44.29 39.92 L21.71 48.08 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M44.29 39.92 L21.71 48.08 L37.33 56.00 Z" fill="#a1c0df" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M46.00 80.00 L44.29 39.92 L37.33 56.00 Z" fill="#2E73B8" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M21.71 48.08 L46.00 80.00 L37.33 56.00 Z" fill="#225588" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M44.29 39.92 L46.00 80.00 L21.71 48.08 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M60.00 26.00 L41.38 49.99 L55.33 44.00 Z" fill="#c0e6e2" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M64.62 56.01 L60.00 26.00 L55.33 44.00 Z" fill="#74C7BE" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M41.38 49.99 L64.62 56.01 L55.33 44.00 Z" fill="#56938d" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M60.00 26.00 L41.38 49.99 L64.62 56.01 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M41.38 49.99 L64.62 56.01 L50.67 62.00 Z" fill="#a8d0e9" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M46.00 80.00 L41.38 49.99 L50.67 62.00 Z" fill="#3E97CE" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M64.62 56.01 L46.00 80.00 L50.67 62.00 Z" fill="#2e7098" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M41.38 49.99 L46.00 80.00 L64.62 56.01 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M60.00 26.00 L78.62 49.99 L64.67 44.00 Z" fill="#bce5eb" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M55.38 56.01 L60.00 26.00 L64.67 44.00 Z" fill="#69C6D2" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M78.62 49.99 L55.38 56.01 L64.67 44.00 Z" fill="#4e939b" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M60.00 26.00 L78.62 49.99 L55.38 56.01 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M78.62 49.99 L55.38 56.01 L69.33 62.00 Z" fill="#a1cde8" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M74.00 80.00 L78.62 49.99 L69.33 62.00 Z" fill="#2F8FCB" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M55.38 56.01 L74.00 80.00 L69.33 62.00 Z" fill="#236a96" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M78.62 49.99 L74.00 80.00 L55.38 56.01 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M100.00 8.00 L75.71 39.92 L91.33 32.00 Z" fill="#b4e2f0" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M98.29 48.08 L100.00 8.00 L91.33 32.00 Z" fill="#59BEDD" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M75.71 39.92 L98.29 48.08 L91.33 32.00 Z" fill="#428da4" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M100.00 8.00 L75.71 39.92 L98.29 48.08 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/><path d="M75.71 39.92 L98.29 48.08 L82.67 56.00 Z" fill="#9dc1e3" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M74.00 80.00 L75.71 39.92 L82.67 56.00 Z" fill="#2576C0" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M98.29 48.08 L74.00 80.00 L82.67 56.00 Z" fill="#1b578e" stroke="#ffffff" stroke-width="0.3" stroke-linejoin="round"/><path d="M75.71 39.92 L74.00 80.00 L98.29 48.08 Z" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-linejoin="round"/></svg>`;

  function current() {
    const p = location.pathname.split("/").pop();
    return (!p || p === "") ? "index.html" : p;
  }

  function buildNav() {
    const here = current();
    const links = NAV.map(item => {
      if (item.children) {
        const childActive = item.children.some(c => c.href === here);
        const sub = item.children.map(c => {
          const ext = c.href.startsWith("http");
          const extra = ext ? ' target="_blank" rel="noopener"' : "";
          return `<li><a href="${c.href}" class="${!ext && c.href === here ? "active" : ""}"${extra}>${c.label}</a></li>`;
        }).join("");
        return `<li class="nav__item nav__has-drop">
          <button class="nav__trigger ${childActive ? "active" : ""}" aria-expanded="false">${item.label} <span class="caret">▾</span></button>
          <ul class="nav__drop">${sub}</ul>
        </li>`;
      }
      const ext = item.href.startsWith("http");
      const extra = ext ? ' target="_blank" rel="noopener"' : "";
      return `<li><a href="${item.href}" class="${!ext && item.href === here ? "active" : ""}"${extra}>${item.label}</a></li>`;
    }).join("");
    return `<header class="nav" id="nav">
      <div class="nav__inner">
        <a class="brand" href="index.html">${MARK}<span class="brand__name">WaterRising&nbsp;<em>Institute</em></span></a>
        <button class="nav__toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
        <ul class="nav__links" id="navLinks">
          ${links}
        </ul>
      </div>
    </header>`;
  }

  function buildFooter() {
    const WORDMARK = `<span style="font-family:var(--serif);font-size:1.7rem;display:inline-flex;align-items:center;gap:.55rem;">
      ${MARK}<span><b style="color:#7ecbe6;font-weight:500;">Water</b><b style="color:#fff;font-weight:500;">Rising</b></span></span>`;
    return `<footer class="footer">
      <div class="wrap">
        <div class="footer__top">
          <div>
            <div class="footer__brand">${WORDMARK}</div>
            <p style="color:#9fb4bd;max-width:34ch;font-size:.94rem;margin-top:1rem;">The WaterHouse is the global platform created by The WaterRising Institute to make water visible and investable.</p>
            <p class="footer__motto">Make the Invisible Visible&trade;</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="problem.html">Problem</a></li>
              <li><a href="market.html">Market</a></li>
              <li><a href="investment.html">Opportunity</a></li>
              <li><a href="research.html">Research</a></li>
              <li><a href="platform.html">Our Mission</a></li>
              <li><a href="journey.html">The Journey</a></li>
              <li><a href="events.html">Global Events</a></li>
            </ul>
          </div>
          <div>
            <h4>Regions &amp; Engage</h4>
            <ul>
              <li><a href="us.html">WaterHouse US</a></li>
              <li><a href="uk.html">WaterHouse UK</a></li>
              <li><a href="italy.html">WaterHouse Italy</a></li>
              <li><a href="uae.html">WaterHouse UAE</a></li>
              <li><a href="saudi.html">WaterHouse Saudi Arabia</a></li>
              <li><a href="india.html">WaterHouse India</a></li>
              <li><a href="builders.html">Founding Builders</a></li>
              <li><a href="supporters.html">Our Supporters</a></li>
              <li><a href="gary-ladrido.html">Gary LaDrido, Chair</a></li>
              <li><a href="russell-read.html">Russell Read, Vice Chair</a></li>
              <li><a href="alicia-douglas.html">Alicia Douglas, Founder &amp; CEO</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>The WaterRising Institute</h4>
            <p style="color:#9fb4bd;font-size:.9rem;line-height:1.7;">501(c)(3) Nonprofit<br>UN ECOSOC Special Consultative Status&nbsp;&middot;&nbsp;UN&nbsp;Water<br>Flint, Michigan<br>Founded in response to the Flint Water Crisis</p>
            <p style="margin-top:.8rem;font-size:.9rem;"><a href="index.html#mission">Mission &amp; Vision</a> &nbsp;&middot;&nbsp; <a href="governance.html">Governance &amp; Bylaws</a></p>
          </div>
        </div>
        <div class="footer__bottom">
          <span>&copy; 2026 The WaterRising Institute &amp; The WaterHouse &middot; <a href="https://www.thewaterrisinginstitute.org" style="color:#9fb4bd;">thewaterrisinginstitute.org</a></span>
          <span>Davos &middot; Cannes Lions &middot; Lake Como &middot; UNGA &middot; UN Water</span>
        </div>
      </div>
    </footer>`;
  }

  function ensureFavicon() {
    if (document.querySelector("link[rel='icon']")) return;
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "assets/crystal-favicon.svg";
    document.head.appendChild(link);
  }

  function mount() {
    ensureFavicon();
    const navSlot = document.querySelector("[data-nav]");
    if (navSlot) navSlot.outerHTML = buildNav();
    const footSlot = document.querySelector("[data-footer]");
    if (footSlot) footSlot.outerHTML = buildFooter();

    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));

    // dropdown toggle (click + keyboard)
    document.querySelectorAll(".nav__trigger").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const item = btn.closest(".nav__item");
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".nav__has-drop"))
        document.querySelectorAll(".nav__has-drop.open").forEach(i => {
          i.classList.remove("open");
          const t = i.querySelector(".nav__trigger"); if (t) t.setAttribute("aria-expanded","false");
        });
    });

    document.querySelectorAll("#navLinks a").forEach(a =>
      a.addEventListener("click", () => nav.classList.remove("open")));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
