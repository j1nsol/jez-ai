# Jez Xyrel K. Olpoc — Landing Page

A single-page personal landing site for **Jez Xyrel K. Olpoc**, Computer Engineer.
Built with **React + Vite** and styled in a **Japandi** aesthetic (Japanese–Scandinavian
fusion): warm neutrals, paper grain, hairline rules, generous negative space, and calm motion.

## Tech
- React 18 + Vite 5
- Framer Motion (scroll reveals)
- Fraunces (display) + Work Sans (body), loaded from Google Fonts
- No CSS framework — hand-written CSS with design tokens in `src/index.css`

## Run locally
```bash
npm install
npm run dev
```
Open the printed `localhost` URL.

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy

### Vercel
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite.
3. Build command `npm run build`, output directory `dist`. Deploy.

### Netlify
1. Push to GitHub, then "Add new site → Import an existing project".
2. Build command `npm run build`, publish directory `dist`. Deploy.

### GitHub Pages
```bash
npm run build
# then publish the /dist folder (e.g. with the gh-pages package)
```
If hosting under a subpath, set `base: '/<repo-name>/'` in `vite.config.js`.

## Customize
- Content (fit points, projects, stack, experience) lives as plain arrays at the top of `src/App.jsx`.
- Colors, fonts, and spacing tokens live in the `:root` block of `src/index.css`.
- The hero photo is `public/jez.jpg` — drop in a new square image with the same filename to replace it. The slight warm/desaturated look is a CSS `filter` on `.portrait-frame img` in `src/App.css`; remove it for full color.
