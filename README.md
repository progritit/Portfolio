# Thinkfully Development — Clebson Costa Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=111)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white)

**Thinkfully Development** is my developer portfolio and professional web-services website.

It presents my current work, technical progression through The Odin Project Full Stack JavaScript path, and practical web-development services for independent professionals, small businesses, and people building a stronger digital presence.

## Live Website

[https://thinkfullydevelopment.com](https://thinkfullydevelopment.com)

---

## About the Project

This repository started as a personal developer portfolio and has evolved into the foundation of **Thinkfully Development**.

The site now serves two complementary purposes:

- showcase my development work and learning progression;
- provide a professional entry point for web-development enquiries.

The project remains intentionally framework-free. It is built with vanilla HTML, CSS, and JavaScript while using a modern development workflow with modules, Webpack, testing, linting, formatting, security checks, and automated deployment.

The guiding idea behind the brand is:

> **Thoughtful digital solutions, built with purpose.**

The visual language follows the **Thoughtful Gap** identity: structured geometry, deliberate negative space, restrained typography, deep ink surfaces, warm ivory, muted sage, slate, and a limited gold accent.

---

## Key Features

- Responsive single-page website
- Custom Thinkfully Development visual identity
- Accessible sticky navigation
- Mobile navigation with Escape-key support
- Active-section navigation highlighting
- Data-driven project rendering
- Data-driven service rendering
- Modular JavaScript architecture
- Project-image fallback handling
- Responsive project showcase
- Service enquiry flow
- Hosted contact-form submission through Formspree
- Client-side validation and submission states
- Spam-protection honeypot
- Domain-restricted form submissions
- Dynamic copyright year
- Keyboard-visible focus states
- Reduced-motion support
- Production deployment to a custom domain

---

## Services

Thinkfully Development currently presents four focused front-end services:

### Landing Pages

Responsive landing pages designed to communicate an offer clearly and guide visitors toward a specific action.

### Small Business Websites

Professional websites for freelancers, independent professionals, service providers, associations, and small businesses.

### Portfolio & Professional Websites

Personal websites designed to showcase projects, expertise, professional identity, and online presence.

### Front-End Improvements

Targeted improvements to existing websites, including responsive behaviour, interface refinement, HTML/CSS cleanup, accessibility-conscious improvements, and JavaScript refactoring.

---

## Technical Stack

| Area            | Technologies                                              |
| --------------- | --------------------------------------------------------- |
| Structure       | HTML5, semantic HTML                                      |
| Styling         | CSS3, custom properties, Flexbox, Grid, responsive design |
| JavaScript      | ES6+, modules, DOM APIs, Fetch API                        |
| Architecture    | Data modules, UI modules, reusable rendering logic        |
| Tooling         | npm, Webpack 5                                            |
| Code quality    | ESLint, Prettier                                          |
| Testing         | Jest, jsdom                                               |
| Security        | Semgrep, npm audit                                        |
| Deployment      | GitHub Pages, `gh-pages`                                  |
| Forms           | Formspree                                                 |
| Version control | Git, GitHub                                               |

---

## Project Architecture

The JavaScript is separated by responsibility instead of being concentrated in one large script.

```text
src/
├── assets/
│   ├── app_previews/
│   └── branding/
│       ├── logo.svg
│       ├── logo-horizontal.svg
│       ├── mark.svg
│       ├── favicon-32.png
│       └── apple-touch-icon.png
│
├── data/
│   ├── projects.js
│   └── services.js
│
├── modules/
│   ├── enquiry.js
│   ├── footer.js
│   ├── navigation.js
│   ├── projectImages.js
│   ├── projects.js
│   └── services.js
│
├── index.js
├── styles.css
└── template.html
```
