# Clebson Costa — Web Developer Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white)

A responsive, single-page developer portfolio presenting my current front-end
foundations, professional background, selected projects, and progression through
The Odin Project Full Stack JavaScript path.

[View the live portfolio](https://progritit.github.io/Portfolio/)

## Overview

This portfolio supports my transition into web development. It communicates both
my current technical level and the professional maturity developed through
previous experience in economics, data analysis, business operations, training
administration, and process coordination.

The visual system follows a **Cyber-Solar Professional** direction: dark
editorial surfaces, solar-gold accents, restrained technical details, generous
spacing, and project screenshots placed at the centre of the experience.

The project remains intentionally built with vanilla HTML, CSS, and JavaScript.
Its code stays approachable while demonstrating responsive layout, semantic
structure, reusable components, and progressive enhancement.

## Key Features

- Responsive single-page layout for mobile, tablet, and desktop
- Sticky navigation with current-section indication
- Accessible mobile menu with Escape-key support
- Distinctive but restrained Cyber-Solar visual identity
- Editorial hero with a lightweight CSS solar composition
- Larger, consistently framed project screenshots
- CSS-generated project fallbacks when screenshots cannot load
- Honest presentation of current skills
- Clear completed, current, and future learning milestones
- Visible keyboard focus states and a skip link
- Reduced-motion support
- Dynamic copyright year
- Semantic HTML and recruiter-friendly content hierarchy

## Tech Stack

| Area            | Technologies                                              |
| --------------- | --------------------------------------------------------- |
| Structure       | HTML5, semantic HTML                                      |
| Styling         | CSS3, custom properties, Flexbox, Grid, responsive design |
| Interactivity   | Vanilla JavaScript, DOM events                            |
| Version control | Git, GitHub                                               |
| Deployment      | GitHub Pages                                              |
| Visual assets   | Project screenshots, Devicon                              |

## Featured Projects

| Project                                                                             | Main learning focus                                                |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Solaris Archive](https://progritit.github.io/Library/)                             | Objects, arrays, DOM rendering, forms, and interface state         |
| [Solaris Command Center](https://progritit.github.io/Admin-Dashboard/)              | CSS Grid, responsive dashboard structure, and reusable UI patterns |
| [Solaris Access Portal](https://progritit.github.io/Solaris-Access-Portal/)         | Form structure, responsive layout, hierarchy, and custom styling   |
| [Cyber-Solar Calculator](https://progritit.github.io/Calculator/)                   | Functions, operator logic, DOM events, and application state       |
| [Rock Paper Scissors](https://progritit.github.io/TOP_PROJECT_Rock_Paper_Scissors/) | Conditionals, functions, DOM manipulation, and game logic          |
| [Etch-a-Sketch](https://progritit.github.io/PROJECT_Etch-a-Sketch/)                 | Dynamic elements, loops, pointer input, and responsive updates     |
| [TOP Landing Page](https://progritit.github.io/TOP-Landing-Page-Project/)           | Semantic structure, Flexbox, spacing, and visual hierarchy         |

## Development foundation (portfolio-refactor)

This branch integrates [02template](https://github.com/progritit/02template_build_quality_security_testing)
from commit `8cf0e9a5d38f93e1518d278bdd7a87a949abbdec` into the existing Portfolio
repository. The existing page content, assets, and JavaScript behavior are retained.
SOLCIRA — **The Brilliant Digital Presence** — is the planned brand; the visual
and commercial changes are a later step.

The template supplies Webpack, ESLint, Prettier, Jest/Babel, Semgrep commands,
and npm audit. Portfolio-specific adaptations include:

- Correct package metadata and Node 24 LTS configuration.
- SVG/ICO asset support alongside the template's raster images and fonts.
- Extracted CSS so the static page stays styled with JavaScript disabled.
- Content-hashed production JavaScript and CSS filenames.
- Five DOM behavior tests using Jest's jsdom environment, replacing the
  template's arithmetic smoke test.
- Tests included in `check` and therefore in `check:all`.
- Compatible dependency security updates recorded in the lockfile.

### Project structure

```text
Portfolio/
├── src/
│   ├── assets/              # Existing images and branding assets
│   ├── index.js             # Existing interactions + CSS import
│   ├── styles.css
│   └── template.html        # Existing page, processed by Webpack
├── tests/
│   ├── navigation.test.js
│   └── styleMock.cjs
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── eslint.config.js
├── babel.config.js
├── jest.config.js
├── package.json
├── package-lock.json
└── README.md
```

Webpack writes the built site to `dist/`, which is ignored by Git.
JavaScript modularization and CSS splitting remain future refactor work.

### Getting started

Use Node 24 LTS (`.nvmrc` is included) and npm. If you use nvm, run `nvm use`.

```bash
git clone --branch portfolio-refactor https://github.com/progritit/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

The development server opens at `http://localhost:8080`.
Use the development server instead of opening the source HTML directly.

| Command                                   | Purpose                                                |
| ----------------------------------------- | ------------------------------------------------------ |
| `npm run dev`                             | Development server with live updates                   |
| `npm run build`                           | Production HTML, CSS, JavaScript and images in `dist/` |
| `npm run lint` / `npm run lint:fix`       | Check / fix JavaScript lint issues                     |
| `npm run format` / `npm run format:check` | Apply / check Prettier formatting                      |
| `npm test` / `npm run test:watch`         | Run / watch the DOM behavior tests                     |
| `npm run check`                           | Lint, formatting, tests and production build           |
| `npm run security:strict`                 | Semgrep scan that fails on findings                    |
| `npm run security:deps`                   | Audit dependencies with npm                            |
| `npm run check:all`                       | All checks, including both security checks             |

Semgrep is a separate Python CLI, as in the original template; `npm ci` does
not install it. Install it with `pipx install semgrep`, or
`uv tool install semgrep`, and ensure `semgrep` is on your PATH.
The security commands require internet access to fetch rules and advisories.

To inspect the production build locally:

```bash
npm run build
python3 -m http.server 5500 --directory dist
```

Then visit `http://localhost:5500`.

### Deployment status

This refactor branch does not deploy or change the current GitHub Pages site.
Before merging it for production, configure hosting to run `npm ci` and
`npm run build`, and publish **`dist/`**. Serving the repository root will no
longer work because the source HTML now lives in `src/`. Hosting configuration
and the custom domain are planned separately.

The existing screenshots are retained at their original sizes. Webpack emits
asset-size warnings for several of them; image optimization is still on the
roadmap.

## JavaScript Responsibilities

JavaScript is limited to small progressive enhancements:

- Opening and closing the mobile navigation
- Closing the menu with the Escape key
- Updating the active navigation link while scrolling
- Hiding project screenshots when they fail so CSS fallbacks remain visible
- Updating the copyright year

The full page structure and content remain available when JavaScript is disabled.

## Accessibility

The portfolio includes:

- Semantic landmarks and logical heading order
- A keyboard-accessible skip link
- Visible focus indicators
- Accessible mobile-menu state and labels
- Meaningful project screenshot alternative text
- No hover-only information
- Practical touch-target sizes
- High-contrast text and controls
- Reduced-motion support

## Performance

The implementation avoids frameworks and animation libraries. Project images
below the first card use lazy loading and explicit dimensions. Motion is limited
to small transforms and one decorative orbit, which is disabled when reduced
motion is preferred.

For production, project screenshots should be exported as optimized WebP or PNG
files close to their displayed size.

## Manual Quality Checks

- Test at mobile, tablet, laptop, and wide-desktop widths
- Navigate the full page using only the keyboard
- Check mobile-menu state, link closing, and Escape-key closing
- Confirm every live-demo and source-code link
- Confirm screenshots and their CSS fallbacks
- Test with JavaScript disabled
- Test with reduced motion enabled
- Run Lighthouse accessibility, performance, SEO, and best-practices audits

## What I Practised

- Evolving an existing interface without unnecessary architectural complexity
- Creating reusable design tokens and interaction patterns
- Building stronger typographic and spacing hierarchy
- Making project imagery the focus of a portfolio
- Balancing a distinctive visual identity with professional restraint
- Improving responsive behaviour and accessibility
- Keeping JavaScript small and understandable

## Roadmap

- [ ] Add a downloadable CV
- [ ] Convert and optimize project screenshots
- [ ] Run a dedicated accessibility audit
- [ ] Add new projects as I progress through The Odin Project
- [ ] Introduce project case studies when the underlying work is ready
- [ ] Continue refining the shared Solaris visual language

## Author

**Clebson Costa**

- [GitHub — @progritit](https://github.com/progritit)
- [LinkedIn — clebsoncosta](https://www.linkedin.com/in/clebsoncosta/)

## License

This project is licensed under the MIT License.
