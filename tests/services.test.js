import { beforeEach, expect, test } from "@jest/globals";

import { services } from "../src/data/services.js";
import { renderServices } from "../src/modules/services.js";

beforeEach(() => {
  document.body.innerHTML = '<div id="services-grid"></div>';

  renderServices();
});

test("renders one card for every service", () => {
  expect(document.querySelectorAll(".service-card")).toHaveLength(
    services.length,
  );
});

test("service enquiry links point to contact and identify the service", () => {
  const links = document.querySelectorAll(".service-link");

  links.forEach((link) => {
    expect(link.getAttribute("href")).toBe("#contact");
    expect(link.dataset.service).toBeTruthy();
  });
});
