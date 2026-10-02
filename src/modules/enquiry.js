import { services } from "../data/services.js";

function populateServiceOptions(select) {
  services.forEach((service) => {
    const option = document.createElement("option");

    option.value = service.id;
    option.textContent = service.title;

    select.append(option);
  });
}

function selectRequestedService(select, serviceId) {
  const serviceExists = services.some((service) => service.id === serviceId);

  if (serviceExists) {
    select.value = serviceId;
  }
}

export function initEnquiryForm() {
  const form = document.querySelector("#enquiry-form");
  const serviceSelect = document.querySelector("#enquiry-service");
  const formStatus = document.querySelector("#form-status");

  if (!form || !serviceSelect) return;

  populateServiceOptions(serviceSelect);

  document.addEventListener("click", (event) => {
    const serviceLink = event.target.closest(".service-link");

    if (!serviceLink) return;

    selectRequestedService(serviceSelect, serviceLink.dataset.service);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    submitButton.disabled = true;
    submitButton.setAttribute("aria-disabled", "true");

    form.setAttribute("aria-busy", "true");

    if (formStatus) {
      formStatus.className = "form-status form-status-sending";
      formStatus.textContent = "Sending your enquiry…";
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      form.reset();

      if (formStatus) {
        formStatus.className = "form-status form-status-success";
        formStatus.textContent =
          "Thank you. Your enquiry has been sent successfully.";
      }
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      if (formStatus) {
        formStatus.className = "form-status form-status-error";
        formStatus.textContent =
          "Something went wrong while sending your enquiry. Please try again.";
      }
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-disabled");

      form.removeAttribute("aria-busy");
    }
  });
}
