import { beforeEach, expect, test } from "@jest/globals";

import { services } from "../src/data/services.js";
import { initEnquiryForm } from "../src/modules/enquiry.js";

beforeEach(() => {
  document.body.innerHTML = `
    <a
      class="service-link"
      href="#contact"
      data-service="business-websites"
    >
      Discuss this service
    </a>

    <form id="enquiry-form">
      <select id="enquiry-service" required>
        <option value="">Select a service</option>
      </select>

      <p id="form-status"></p>
    </form>
  `;

  initEnquiryForm();
});

test("adds all available services to the enquiry form", () => {
  const options = document.querySelectorAll("#enquiry-service option");

  expect(options).toHaveLength(services.length + 1);
});

test("selects a service when its enquiry link is clicked", () => {
  document.querySelector(".service-link").click();

  expect(document.querySelector("#enquiry-service").value).toBe(
    "business-websites",
  );
});
