// ── Scroll nav ──────────────────────────────────────────────────────────────
const nav = document.getElementById("navbar");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// ── Mobile hamburger ────────────────────────────────────────────────────────
const hbg = document.getElementById("hbg");
const mobMenu = document.getElementById("mobMenu");
if (hbg && mobMenu) {
  hbg.addEventListener("click", () => {
    hbg.classList.toggle("active");
    mobMenu.classList.toggle("open");
  });
}

function closeMob() {
  if (hbg) hbg.classList.remove("active");
  if (mobMenu) mobMenu.classList.remove("open");
}

// ── Fade-in observer ────────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll(".fade-in");
if (fadeEls.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeEls.forEach((el) => obs.observe(el));
}

// ── Skill bar animation ─────────────────────────────────────────────────────
const skillBars = document.querySelectorAll(".sk-fill");
if (skillBars.length) {
  const sObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w || "80%";
          sObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  skillBars.forEach((bar) => sObs.observe(bar));
}

// ── CV download placeholder ─────────────────────────────────────────────────
function dlCV(e) {
  e.preventDefault();
  alert(
    "CV download coming soon — replace this with your actual CV file link in index.html."
  );
}

// ── Contact form (Netlify Forms) ────────────────────────────────────────────
const cForm = document.getElementById("cForm");
const okMsg = document.getElementById("okMsg");
if (cForm) {
  cForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(cForm);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) {
        cForm.style.display = "none";
        if (okMsg) { okMsg.style.display = "block"; }
      }
    } catch {
      alert("Something went wrong. Please email idaazilpah@gmail.com directly.");
    }
  });
}

// ── Subscribe form (Netlify Forms) ──────────────────────────────────────────
const subForms = document.querySelectorAll(".subscribe-netlify-form");
subForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const msgEl = form.querySelector(".sub-ok-msg");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) {
        if (msgEl) {
          msgEl.textContent = "You're subscribed! Thank you.";
          msgEl.style.display = "block";
        }
        form.reset();
      }
    } catch {
      if (msgEl) { msgEl.textContent = "Something went wrong. Try again."; msgEl.style.display = "block"; }
    }
  });
});
