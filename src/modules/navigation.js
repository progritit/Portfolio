function closeMenu(navMenu, navToggle) {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
}

function updateActiveLink(sections, navLinks) {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 160) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    if (linkTarget === `#${currentSectionId}`) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

export function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const sections = document.querySelectorAll("main section[id]");

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    const menuIsOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", menuIsOpen);

    navToggle.setAttribute(
      "aria-label",
      menuIsOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu(navMenu, navToggle);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu(navMenu, navToggle);
    }
  });

  window.addEventListener("scroll", () => {
    updateActiveLink(sections, navLinks);
  });

  updateActiveLink(sections, navLinks);
}
