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

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (formStatus) {
      formStatus.textContent =
        "Enquiry submission will be activated when the secure form service is connected.";
    }
  });
}
