import { projects } from "../data/projects.js";
import { initProjectImageFallback } from "./projectImages.js";

const fallbackMarkup = {
  weather: `
    <div class="weather-fallback" aria-hidden="true">
      <div class="weather-atmosphere"></div>

      <div class="weather-fallback-panel">
        <div class="weather-fallback-header">
          <span></span>
          <span></span>
        </div>

        <div class="weather-fallback-current">
          <div class="weather-fallback-icon">
            <span class="weather-fallback-sun"></span>
            <span class="weather-fallback-cloud"></span>
          </div>

          <strong>24°</strong>
        </div>

        <div class="weather-fallback-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `,

  todo: `
    <div class="todo-fallback" aria-hidden="true">
      <div class="todo-sidebar">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="todo-main">
        <div class="todo-heading"></div>

        <div class="todo-task">
          <span class="todo-check"></span>
          <span class="todo-line"></span>
        </div>

        <div class="todo-task">
          <span class="todo-check"></span>
          <span class="todo-line short"></span>
        </div>

        <div class="todo-task">
          <span class="todo-check completed"></span>
          <span class="todo-line completed"></span>
        </div>
      </div>
    </div>
  `,

  restaurant: `
    <div class="restaurant-fallback" aria-hidden="true">
      <div class="restaurant-sun"></div>

      <div class="restaurant-panel">
        <span class="restaurant-label"></span>
        <span class="restaurant-title"></span>
        <span class="restaurant-copy"></span>

        <div class="restaurant-actions">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `,

  tictactoe: `
    <div class="tictactoe-fallback" aria-hidden="true">
      <div class="tictactoe-orbit"></div>

      <div class="tictactoe-grid">
        <span>×</span>
        <span></span>
        <span>○</span>
        <span></span>
        <span>×</span>
        <span></span>
        <span>○</span>
        <span></span>
        <span>×</span>
      </div>
    </div>
  `,

  library: `
    <div class="fallback-visual" aria-hidden="true">
      <span class="fallback-orb"></span>
      <span class="fallback-panel">SOLARIS ARCHIVE</span>
    </div>
  `,

  dashboard: `
    <div
      class="fallback-visual fallback-dashboard-ui"
      aria-hidden="true"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,

  portal: `
    <div class="fallback-visual fallback-form" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,

  calculator: `
    <div
      class="fallback-visual fallback-calculator-ui"
      aria-hidden="true"
    >
      <strong>512</strong>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  `,

  rps: `
    <div class="fallback-visual fallback-rps-ui" aria-hidden="true">
      <strong>ROCK</strong>
      <span>✊ · ✋ · ✌</span>
    </div>
  `,

  sketch: `
    <div
      class="fallback-visual fallback-sketch-ui"
      aria-hidden="true"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,

  landing: `
    <div
      class="fallback-visual fallback-landscape"
      aria-hidden="true"
    >
      <span class="fallback-sun"></span>
      <span class="fallback-hill"></span>
    </div>
  `,
};

function createFallback(type) {
  const template = document.createElement("template");

  template.innerHTML = fallbackMarkup[type].trim();

  return template.content.firstElementChild;
}

function createProjectLink(url, text, secondary = false) {
  const link = document.createElement("a");
  const arrow = document.createElement("span");

  link.classList.add("project-link");

  if (secondary) {
    link.classList.add("project-link-secondary");
  }

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  arrow.textContent = "↗";
  arrow.setAttribute("aria-hidden", "true");

  link.append(document.createTextNode(`${text} `), arrow);

  return link;
}

function createProjectCard(project, index) {
  const article = document.createElement("article");
  const media = document.createElement("div");
  const image = document.createElement("img");
  const info = document.createElement("div");
  const projectNumber = document.createElement("p");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const tags = document.createElement("ul");
  const actions = document.createElement("div");

  article.classList.add("project-card");

  if (project.featured) {
    article.classList.add("project-card-featured");
  }

  media.classList.add("project-media", project.mediaClass);

  image.classList.add("project-preview-image");
  image.alt = project.imageAlt;
  image.width = 1200;
  image.height = 675;
  image.loading = "lazy";

  initProjectImageFallback(image);

  image.src = project.image;

  media.append(image, createFallback(project.fallbackType));

  info.classList.add("project-info");

  const number = String(index + 1).padStart(2, "0");

  projectNumber.classList.add("project-number");
  projectNumber.textContent = `${number} / ${project.category}`;

  title.textContent = project.title;
  description.textContent = project.description;

  tags.classList.add("tags");
  tags.setAttribute("aria-label", "Technologies used");

  project.tags.forEach((tag) => {
    const listItem = document.createElement("li");

    listItem.textContent = tag;
    tags.append(listItem);
  });

  actions.classList.add("project-actions");

  actions.append(
    createProjectLink(project.liveUrl, "Live demo"),
    createProjectLink(project.sourceUrl, "Source code", true),
  );

  info.append(projectNumber, title, description, tags, actions);

  article.append(media, info);

  return article;
}

export function renderProjects() {
  const projectGrid = document.querySelector("#project-grid");

  if (!projectGrid) return;

  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    fragment.append(createProjectCard(project, index));
  });

  projectGrid.replaceChildren(fragment);
}
