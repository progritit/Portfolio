import { services } from "../data/services.js";

function createServiceCard(service) {
  const article = document.createElement("article");
  const number = document.createElement("p");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const audience = document.createElement("div");
  const audienceLabel = document.createElement("strong");
  const audienceText = document.createElement("p");
  const includesTitle = document.createElement("h4");
  const includesList = document.createElement("ul");
  const link = document.createElement("a");
  const arrow = document.createElement("span");

  article.classList.add("service-card");
  article.id = service.id;

  number.classList.add("service-number");
  number.textContent = service.number;

  title.textContent = service.title;

  description.classList.add("service-description");
  description.textContent = service.description;

  audience.classList.add("service-audience");

  audienceLabel.textContent = "Ideal for";
  audienceText.textContent = service.idealFor;

  audience.append(audienceLabel, audienceText);

  includesTitle.textContent = "Includes";

  includesList.classList.add("service-includes");

  service.includes.forEach((item) => {
    const listItem = document.createElement("li");

    listItem.textContent = item;
    includesList.append(listItem);
  });

  link.classList.add("text-link", "service-link");
  link.href = "#contact";
  link.dataset.service = service.id;

  arrow.textContent = "↘";
  arrow.setAttribute("aria-hidden", "true");

  link.append(document.createTextNode("Discuss this service "), arrow);

  article.append(
    number,
    title,
    description,
    audience,
    includesTitle,
    includesList,
    link,
  );

  return article;
}

export function renderServices() {
  const servicesGrid = document.querySelector("#services-grid");

  if (!servicesGrid) return;

  const fragment = document.createDocumentFragment();

  services.forEach((service) => {
    fragment.append(createServiceCard(service));
  });

  servicesGrid.replaceChildren(fragment);
}
