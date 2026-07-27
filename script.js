const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");
const copyrightYear = document.querySelector("#copyright-year");
const projectPreviewImages = document.querySelectorAll(".project-preview-image");

function closeMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const menuIsOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
      navToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
      navToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function updateActiveLink() {
  let currentSectionId = "";

  sections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 160) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(function (link) {
    const linkTarget = link.getAttribute("href");

    if (linkTarget === "#" + currentSectionId) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

projectPreviewImages.forEach(function (image) {
  image.addEventListener("error", function () {
    image.hidden = true;
  });
});

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}