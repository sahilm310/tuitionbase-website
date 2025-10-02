# TuitionBase - One Page Site

A minimal one-page website built with Astro for a company called TuitionBase.

🚀 Project Structure

```
/
├── public/
│   └── content/
│       ├── fonts/          # Custom font files
│       └── images/         # Site images and assets
│       └── videos/         # Site videos
├── src/
│   ├── components/
│   │   └── sections/       # Page sections (Header, Hero, Features, etc.)
│   ├── config/
│   │   └── constants.ts    # Site constants (phone number, etc.)
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with global styles
│   └── pages/
│       └── index.astro     # Single page site
└── package.json
```

This is a SPA with modular components for each section, making it easy to maintain and update.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                               |
| :-------------------------- | :--------------------------------------------------- |
| `npm install`             | Installs dependencies                                |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Build your production site to `./dist/`            |
| `npm run preview`         | Preview your build locally, before deploying         |
