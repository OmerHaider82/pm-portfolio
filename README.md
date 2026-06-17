# pm-portfolio

A clean, responsive single-page portfolio site built with **React** and **Vite**,
styled with plain CSS (no UI framework). The page is composed of small, readable
components — a hero, an About section, a Projects grid, and a contact footer.

## Tech stack

- **[Vite](https://vite.dev/)** — dev server and production bundler
- **[React](https://react.dev/)** — UI components
- Plain CSS with design tokens (CSS variables) in `src/index.css`
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — linting and formatting
- **[Vitest](https://vitest.dev/)** + **[React Testing Library](https://testing-library.com/)** — unit tests

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (this project was built with Node 24)
- npm (ships with Node)

## Getting started

Install dependencies once:

```bash
npm install
```

Start the dev server with hot-reload:

```bash
npm run dev
```

Then open the URL it prints (default **http://localhost:5173/**). Leave this
command running while you work — it watches your files and live-reloads the page.
Press `Ctrl+C` to stop it.

## Available scripts

| Command          | What it does                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `npm run dev`    | Start the Vite dev server with hot-reload for local development.    |
| `npm test`       | Run the Vitest unit tests once and exit (used in CI).               |
| `npm run lint`   | Check all files with ESLint; reports problems without changing code.|
| `npm run format` | Auto-format all files in place with Prettier.                       |
| `npm run build`  | Produce an optimized production build in `dist/`.                   |
| `npm run preview`| Serve the built `dist/` locally to preview the production bundle.   |

## Running the tests

```bash
npm test
```

This runs every `*.test.jsx` file under `src/`. The tests render each section
and assert that its key content appears. A run that ends with all tests passing
exits with code `0`; any failure exits non-zero, which is what a CI server uses
to mark the build red.

To iterate on tests with an auto-rerunning watcher, run `npx vitest` (no `run`).

## Linting and formatting

- `npm run lint` catches code-quality issues (unused variables, React Hooks
  mistakes, etc.). Prettier-style formatting rules are disabled in ESLint via
  `eslint-config-prettier` so the two tools never conflict.
- `npm run format` rewrites files to match the Prettier config in
  `.prettierrc.json`.

## Building for production

```bash
npm run build
```

Vite outputs optimized, minified static files to the **`dist/`** folder:

```
dist/
├── index.html
├── favicon.svg          # copied from public/
├── icons.svg            # copied from public/
└── assets/
    ├── index-[hash].js  # bundled, minified JavaScript
    └── index-[hash].css # bundled, minified CSS
```

The `[hash]` in each filename changes when the contents change, which lets
browsers cache assets safely. Everything in `dist/` is plain static files —
deploy the folder to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

To preview the production build locally before deploying:

```bash
npm run preview
```

## Project structure

```
pm-portfolio/
├── index.html              # HTML entry point; loads src/main.jsx
├── public/                 # static assets served as-is (favicon, icons)
├── src/
│   ├── main.jsx            # mounts <App> into the page
│   ├── App.jsx             # composes the page sections in order
│   ├── index.css           # global styles + design tokens (CSS variables)
│   ├── test/setup.js       # test setup (jest-dom matchers, cleanup)
│   └── components/         # one small component (+ its .css and .test.jsx) per section
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── ProjectCard.jsx
│       └── Footer.jsx
├── eslint.config.js        # ESLint (flat config)
├── .prettierrc.json        # Prettier formatting rules
└── vite.config.js          # Vite + Vitest configuration
```

## Editing the content

All copy is placeholder text you can edit:

- **Name / tagline** — `src/components/Hero.jsx` (and the brand in `Header.jsx`)
- **Bio & skills** — `src/components/About.jsx`
- **Projects** — the `PROJECTS` array in `src/components/Projects.jsx`
- **Contact links** — the `CONTACTS` array in `src/components/Footer.jsx`
- **Colors & spacing** — the CSS variables under `:root` in `src/index.css`
