import weatherPreview from "../assets/app_previews/weather_preview.png";
import todoPreview from "../assets/app_previews/todo_preview.png";
import restaurantPreview from "../assets/app_previews/restaurant_preview.png";
import tictactoePreview from "../assets/app_previews/tictactoe_preview.png";
import libraryPreview from "../assets/app_previews/library_preview.png";
import dashboardPreview from "../assets/app_previews/dashboard_preview.png";
import formPreview from "../assets/app_previews/form_preview.png";
import calculatorPreview from "../assets/app_previews/calculator_preview.png";
import rpsPreview from "../assets/app_previews/rps_preview.png";
import sketchPreview from "../assets/app_previews/etchasketch_preview.png";
import landingPreview from "../assets/app_previews/landingpage_preview.png";

export const projects = [
  {
    category: "Weather application",
    title: "Weather App",
    description:
      "A responsive weather application for searching locations, viewing current conditions and forecasts, saving locations, and working with live weather data through an external API.",
    tags: ["JavaScript", "Webpack", "REST API", "Async/Await", "localStorage"],
    image: weatherPreview,
    imageAlt:
      "Weather App interface showing current conditions and weather forecasts",
    mediaClass: "weather-preview",
    fallbackType: "weather",
    featured: false,
    liveUrl: "https://progritit.github.io/weather_app/",
    sourceUrl: "https://github.com/progritit/weather_app",
  },
  {
    category: "Task management application",
    title: "To Do List - Solaris Mission Queue",
    description:
      "A modular task-management application for organizing missions, projects, priorities, deadlines, and completion states with persistent browser storage.",
    tags: ["JavaScript", "Webpack", "date-fns", "localStorage", "DOM"],
    image: todoPreview,
    imageAlt: "To Do List - Solaris Mission Queue task management interface",
    mediaClass: "todo-preview",
    fallbackType: "todo",
    featured: false,
    liveUrl: "https://progritit.github.io/to_do_list/",
    sourceUrl: "https://github.com/progritit/to_do_list",
  },
  {
    category: "Modular JavaScript application",
    title: "Restaurant Page - Helios Cantina",
    description:
      "A responsive restaurant website built as a JavaScript-rendered single-page experience, combining modular page components with a polished futuristic hospitality interface.",
    tags: ["JavaScript", "Webpack", "ES6 Modules", "Responsive UI", "DOM"],
    image: restaurantPreview,
    imageAlt: "Helios Cantina restaurant website interface",
    mediaClass: "restaurant-preview",
    fallbackType: "restaurant",
    featured: false,
    liveUrl: "https://progritit.github.io/restaurant_page/",
    sourceUrl: "https://github.com/progritit/restaurant_page",
  },
  {
    category: "JavaScript game architecture",
    title: "Tic Tac Toe - Solaris Tactics Grid",
    description:
      "A modular Tic Tac Toe game built to practice factory functions, encapsulation, game-state management, DOM separation, and structured JavaScript application design.",
    tags: ["JavaScript", "Factory Functions", "Modules", "DOM", "Game Logic"],
    image: tictactoePreview,
    imageAlt: "Solaris Tactics Grid Tic Tac Toe game interface",
    mediaClass: "tictactoe-preview",
    fallbackType: "tictactoe",
    featured: false,
    liveUrl: "https://progritit.github.io/Tic-Tac-Toe/",
    sourceUrl: "https://github.com/progritit/Tic-Tac-Toe",
  },
  {
    category: "JavaScript application",
    title: "Library App — Solaris Archive",
    description:
      "A personal library manager built to practise objects, arrays, DOM rendering, forms, events, and interface state.",
    tags: ["HTML", "CSS", "JavaScript", "Objects", "DOM"],
    image: libraryPreview,
    imageAlt: "Solaris Archive library interface showing a collection of books",
    mediaClass: "fallback-library",
    fallbackType: "library",
    featured: true,
    liveUrl: "https://progritit.github.io/Library/",
    sourceUrl: "https://github.com/progritit/Library",
  },
  {
    category: "Responsive interface",
    title: "Dashboard — Solaris Command Center",
    description:
      "A responsive admin dashboard focused on CSS Grid, layout structure, reusable cards, hierarchy, and adaptive composition.",
    tags: ["HTML", "CSS", "Grid", "Responsive"],
    image: dashboardPreview,
    imageAlt: "Solaris Command Center responsive dashboard interface",
    mediaClass: "fallback-dashboard",
    fallbackType: "dashboard",
    featured: true,
    liveUrl: "https://progritit.github.io/Admin-Dashboard/",
    sourceUrl: "https://github.com/progritit/Admin-Dashboard",
  },
  {
    category: "Form design",
    title: "Solaris Access Portal",
    description:
      "A polished responsive form exploring structure, hierarchy, custom assets, and accessible input presentation.",
    tags: ["HTML", "CSS", "Forms", "Responsive"],
    image: formPreview,
    imageAlt: "Solaris Access Portal sign-up form interface",
    mediaClass: "fallback-portal",
    fallbackType: "portal",
    featured: false,
    liveUrl: "https://progritit.github.io/Solaris-Access-Portal/",
    sourceUrl: "https://github.com/progritit/Solaris-Access-Portal",
  },
  {
    category: "JavaScript logic",
    title: "Cyber-Solar Calculator",
    description:
      "A browser calculator built to practise functions, operator logic, DOM interaction, events, and interface state.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    image: calculatorPreview,
    imageAlt: "Cyber-Solar Calculator interface",
    mediaClass: "fallback-calculator",
    fallbackType: "calculator",
    featured: false,
    liveUrl: "https://progritit.github.io/Calculator/",
    sourceUrl: "https://github.com/progritit/Calculator",
  },
  {
    category: "Interactive game",
    title: "Rock Paper Scissors",
    description:
      "A browser game for practising functions, conditionals, DOM manipulation, event listeners, and simple game logic.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    image: rpsPreview,
    imageAlt: "Rock Paper Scissors browser game interface",
    mediaClass: "fallback-rps",
    fallbackType: "rps",
    featured: false,
    liveUrl: "https://progritit.github.io/TOP_PROJECT_Rock_Paper_Scissors/",
    sourceUrl: "https://github.com/progritit/TOP_PROJECT_Rock_Paper_Scissors",
  },
  {
    category: "DOM application",
    title: "Etch-a-Sketch",
    description:
      "A dynamic drawing grid focused on element creation, loops, pointer input, event handling, and responsive updates.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    image: sketchPreview,
    imageAlt: "Etch-a-Sketch drawing grid interface",
    mediaClass: "fallback-sketch",
    fallbackType: "sketch",
    featured: false,
    liveUrl: "https://progritit.github.io/PROJECT_Etch-a-Sketch/",
    sourceUrl: "https://github.com/progritit/PROJECT_Etch-a-Sketch",
  },
  {
    category: "Layout foundations",
    title: "TOP Landing Page Project",
    description:
      "A responsive landing page focused on semantic structure, Flexbox, spacing, typography, and visual hierarchy.",
    tags: ["HTML", "CSS", "Flexbox"],
    image: landingPreview,
    imageAlt: "The Odin Project responsive landing page",
    mediaClass: "fallback-landing",
    fallbackType: "landing",
    featured: false,
    liveUrl: "https://progritit.github.io/TOP-Landing-Page-Project/",
    sourceUrl: "https://github.com/progritit/TOP-Landing-Page-Project",
  },
];
