/* =========================================
HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

/* SHOW SLIDE */

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  if (slides[index]) {
    slides[index].classList.add("active");
  }
}

/* AUTO SLIDER */

if (slides.length > 0) {
  setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }, 4000);
}

/* =========================================
RULES ACCORDION
========================================= */

const moreButtons = document.querySelectorAll(".more-btn");

if (moreButtons.length > 0) {
  moreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const ruleCard = button.closest(".rule-card");

      if (ruleCard) {
        ruleCard.classList.toggle("active");
      }
    });
  });
}

/* =========================================
LIVE COUNTER
========================================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

/* START COUNTER */

function startCounter() {
  if (counterStarted) return;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");

    let count = 0;

    const increment = target / 120;

    function updateCounter() {
      count += increment;

      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString() + "+";

        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    }

    updateCounter();
  });

  counterStarted = true;
}

/* =========================================
SCROLL COUNTER TRIGGER
========================================= */

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats-section");

  if (!statsSection) return;

  const sectionPosition = statsSection.getBoundingClientRect().top;

  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    startCounter();
  }
});

/* =========================================
SMART NAVBAR SCROLL
========================================= */

window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    /* SCROLL DOWN */

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      navbar.classList.add("nav-hide");
    } else {

    /* SCROLL UP */
      navbar.classList.remove("nav-hide");
    }

    lastScrollY = currentScrollY;
  });
});

/* =========================================
SMOOTH SCROLL FOR ANCHOR LINKS
========================================= */

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    e.preventDefault();

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =========================================
BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(
  ".hero-btn, .primary-btn, .submit-btn, .apply-btn-final, .cta-btn",
);

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transition = "all 0.35s ease";
  });
});

/* =========================================
FORM INPUT FOCUS EFFECT
========================================= */

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentElement.classList.remove("focused");
    }
  });
});

/* =========================================
PAGE LOADER COMPLETE
========================================= */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* =========================================
CONSOLE BRANDING
========================================= */

console.log(
  "%cNational Skill Competition Portal",
  "color:#ff9800; font-size:20px; font-weight:bold;",
);

console.log("%cDeveloped Professionally", "color:#0f172a; font-size:14px;");
