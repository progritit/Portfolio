import { readFileSync } from "node:fs";
import { beforeAll, expect, jest, test } from "@jest/globals";

beforeAll(async () => {
  const template = readFileSync("src/template.html", "utf8");
  const page = new DOMParser().parseFromString(template, "text/html");
  document.body.innerHTML = page.body.innerHTML;
  await import("../src/index.js");
});

test("mobile navigation opens and closes with accessible labels", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");

  toggle.click();
  expect(menu.classList.contains("is-open")).toBe(true);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  expect(toggle.getAttribute("aria-label")).toBe("Close navigation menu");

  toggle.click();
  expect(menu.classList.contains("is-open")).toBe(false);
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(toggle.getAttribute("aria-label")).toBe("Open navigation menu");
});

test("Escape and selecting a section close the menu", () => {
  const toggle = document.querySelector(".nav-toggle");
  toggle.click();
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(
    document.querySelector("#nav-menu").classList.contains("is-open"),
  ).toBe(false);

  toggle.click();
  document.querySelector('.nav-menu a[href="#projects"]').click();
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(
    document.querySelector("#nav-menu").classList.contains("is-open"),
  ).toBe(false);
});

test("scrolling selects the current section and clears the previous one", () => {
  const sections = [...document.querySelectorAll("main section[id]")];
  let currentIndex = sections.findIndex((section) => section.id === "about");
  sections.forEach((section, index) => {
    jest.spyOn(section, "getBoundingClientRect").mockImplementation(() => ({
      top: index <= currentIndex ? 0 : 500,
    }));
  });

  window.dispatchEvent(new Event("scroll"));
  expect(document.querySelector('.nav-menu a[aria-current="true"]').hash).toBe(
    "#about",
  );

  currentIndex = sections.findIndex((section) => section.id === "projects");
  window.dispatchEvent(new Event("scroll"));
  expect(document.querySelector('.nav-menu a[aria-current="true"]').hash).toBe(
    "#projects",
  );
  expect(
    document.querySelectorAll('.nav-menu a[aria-current="true"]'),
  ).toHaveLength(1);
  jest.restoreAllMocks();
});

test("failed project screenshots are hidden to reveal the CSS fallback", () => {
  const image = document.querySelector(".project-preview-image");
  image.dispatchEvent(new Event("error"));
  expect(image.hidden).toBe(true);
});

test("the copyright uses the current year", () => {
  expect(document.querySelector("#copyright-year").textContent).toBe(
    String(new Date().getFullYear()),
  );
});
