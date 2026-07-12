# Clebson Web Dev Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)

A responsive personal web development portfolio built from scratch to showcase my learning journey, technical foundations, design direction, and early front-end projects.

The portfolio serves as a central hub for my GitHub, LinkedIn, featured projects, technical skills, and progression through [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript path.

## Live Demo

[View the live portfolio](https://progritit.github.io/Portfolio/)

---

## Overview

This project was created as part of my transition into web development. Its goal is to present my current front-end skills through a clean, responsive, and visually distinctive portfolio website.

Rather than relying on a generic template, the interface follows a custom **Cyber-Solar** design direction: a dark, structured, technology-inspired visual identity combined with solar highlights, green accents, orbital details, and project preview imagery.

The project is intentionally built with **vanilla HTML, CSS, and JavaScript** to strengthen core web development fundamentals before moving into frameworks and full-stack tools.

---

## Key Features

- **Responsive single-page layout** optimized for mobile, tablet, and desktop screens.
- **Cyber-Solar visual identity** with dark UI, solar accents, green highlights, and custom visual details.
- **Featured projects section** with live demo links, source code links, tags, and preview images.
- **CSS fallback previews** for project cards in case image previews fail to load.
- **Interactive mobile navigation** built with vanilla JavaScript.
- **Dynamic copyright year** generated automatically with JavaScript.
- **Skills section** using technology icons to highlight the current stack.
- **Learning journey timeline** showing current progress and next technical goals.
- **Semantic HTML structure** for better accessibility and maintainability.
- **Reusable CSS components** for cards, buttons, tags, sections, and project previews.
- **Static deployment** through GitHub Pages.

---

## Tech Stack

| Category | Technologies |
| --- | --- |
| Markup | HTML5, semantic HTML |
| Styling | CSS3, CSS custom properties, Flexbox, CSS Grid, responsive design |
| Interactivity | Vanilla JavaScript |
| Version Control | Git, GitHub |
| Deployment | GitHub Pages |
| Assets | Devicon, custom visual assets, project preview images |

---

## Featured Projects

### Solaris Command Center

A responsive admin dashboard interface designed with a cyber-solar visual system.

- **Core Focus:** CSS Grid, dashboard layout, responsive UI structure, visual hierarchy, and reusable interface patterns.
- [Live Demo](https://progritit.github.io/Admin-Dashboard/) | [Source Code](https://github.com/progritit/Admin-Dashboard)

### Solar Archive

A cyber-solar library application for managing a personal collection of books.

- **Core Focus:** JavaScript objects, arrays, DOM rendering, form inputs, event handling, and UI state updates.
- [Live Demo](https://progritit.github.io/Library/) | [Source Code](https://github.com/progritit/Library)

### Solaris Access Portal

A responsive access portal interface combining polished UI presentation with practical form layout.

- **Core Focus:** Form structure, responsive layout, visual hierarchy, custom styling, asset integration, and professional UI presentation.
- [Live Demo](https://progritit.github.io/Solaris-Access-Portal/) | [Source Code](https://github.com/progritit/Solaris-Access-Portal)

### Cyber-Solar Calculator

A browser-based calculator designed with a distinctive cyber-solar interface and built to strengthen JavaScript logic through real user interaction.

- **Core Focus:** JavaScript functions, operator logic, DOM interaction, event handling, UI state management, and responsive interface design.
- [Live Demo](https://progritit.github.io/Calculator/) | [Source Code](https://github.com/progritit/Calculator)

### Rock Paper Scissors

An interactive browser game built to practice early programming fundamentals.

- **Core Focus:** JavaScript functions, conditional logic, DOM manipulation, and event listeners.
- [Live Demo](https://progritit.github.io/TOP_PROJECT_Rock_Paper_Scissors/) | [Source Code](https://github.com/progritit/TOP_PROJECT_Rock_Paper_Scissors)

### Etch-a-Sketch

A dynamic browser-based drawing grid application focused on DOM manipulation and real-time UI updates.

- **Core Focus:** Dynamic element creation, nested loops, user input tracking, event handling, and responsive UI updates.
- [Live Demo](https://progritit.github.io/PROJECT_Etch-a-Sketch/) | [Source Code](https://github.com/progritit/PROJECT_Etch-a-Sketch)

### TOP Landing Page Project

A responsive landing page built to practice layout mechanics during The Odin Project Foundations curriculum.

- **Core Focus:** Semantic HTML, CSS layout execution, Flexbox spacing, typography, and visual hierarchy.
- [Live Demo](https://progritit.github.io/TOP-Landing-Page-Project/) | [Source Code](https://github.com/progritit/TOP-Landing-Page-Project)

---

## Project Structure

```bash
Portfolio/
├── assets/
│   ├── app_previews/
│   │   ├── calculator_preview.png
│   │   ├── dashboard_preview.png
│   │   ├── etchasketch_preview.png
│   │   ├── form_preview.png
│   │   ├── landingpage_preview.png
│   │   ├── library_preview.png
│   │   └── rps_preview.png
│   ├── icon.png
│   ├── leaf.png
│   └── orbit.png
├── index.html
├── styles.css
├── script.js
└── README.md
````

---

## Getting Started

### Prerequisites

No build tools or package managers are required.

You only need:

* A modern web browser
* Git
* Optionally, Visual Studio Code with the Live Server extension

---

### Clone the Repository

```bash
git clone https://github.com/progritit/Portfolio.git
cd Portfolio
```

---

### Run Locally

Because this is a static website, you can open `index.html` directly in your browser.

For a better local development experience, you can run a simple local server.

#### Using Python

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

#### Windows Alternative

```bash
py -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

#### Using VS Code Live Server

```bash
code .
```

Then right-click `index.html` and select **Open with Live Server**.

---

## Environment Variables

This project does not require environment variables.

No API keys, tokens, database credentials, or private configuration files are needed.

---

## Usage

This portfolio is a static single-page website. Users can:

* Browse featured projects
* Open live project demos
* View source code repositories
* Explore the current technical stack
* Follow the learning journey timeline
* Access GitHub and LinkedIn profiles

Main entry point:

```text
index.html
```

Main stylesheet:

```text
styles.css
```

Main JavaScript file:

```text
script.js
```

---

## Accessibility Notes

The project uses semantic HTML and accessible interaction patterns where appropriate, including:

* Semantic section structure
* Descriptive link text
* `aria-expanded` handling for the mobile navigation toggle
* `aria-hidden` for decorative preview elements
* Alternative text for project preview images
* Keyboard-focusable links and buttons

Further accessibility improvements are planned as part of future audits.

---

## Running Tests

This project does not currently include an automated test suite.

Recommended manual checks before deployment:

```text
- Test layout on mobile, tablet, and desktop screen sizes
- Verify all navigation links work correctly
- Verify all project live demo links and source code links
- Test the mobile menu open/close behavior
- Confirm project preview images load correctly
- Confirm CSS fallback previews remain acceptable if images fail
- Run Lighthouse checks for accessibility, performance, SEO, and best practices
```

---

## Deployment

The project is deployed as a static site using **GitHub Pages**.

Live site:

```text
https://progritit.github.io/Portfolio/
```

Typical GitHub Pages deployment flow:

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Select the deployment branch, usually `main`.
5. Select the root folder.
6. Save and wait for GitHub Pages to publish the site.

---

## What I Learned

Building this portfolio helped me connect individual front-end exercises into a real, published project.

Key takeaways include:

* Structuring a complete responsive portfolio from scratch
* Organizing reusable CSS components
* Managing a consistent visual identity across sections
* Using JavaScript for small but meaningful interactions
* Handling project preview images with CSS fallbacks
* Improving Git and GitHub Pages deployment workflow
* Presenting technical projects clearly for recruiters and collaborators
* Communicating a learning journey through real project work

---

## Roadmap

Planned improvements include:

* [ ] Add a downloadable PDF version of my CV
* [ ] Improve accessibility after a dedicated a11y audit
* [ ] Add richer project case studies
* [ ] Add an optional eco-mode or reduced-motion visual mode
* [ ] Improve performance optimization for images
* [ ] Add new projects as I progress through The Odin Project
* [ ] Continue refining the Cyber-Solar design identity

---

## Contributing

This is a personal portfolio project, so external contributions are not currently expected.

However, suggestions, feedback, and issue reports are welcome.

To suggest an improvement:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b improvement/your-suggestion
```

3. Commit your changes.

```bash
git commit -m "Suggest portfolio improvement"
```

4. Push your branch.

```bash
git push origin improvement/your-suggestion
```

5. Open a pull request with a clear description of the proposed change.

---

## Author

**Clebson Costa**

* GitHub: [@progritit](https://github.com/progritit)
* LinkedIn: [clebsoncosta](https://www.linkedin.com/in/clebsoncosta/)

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more details.
