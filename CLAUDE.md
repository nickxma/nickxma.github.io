# CLAUDE.md

Static site for paradoxofacceptance.xyz, served by GitHub Pages from `main` (see `.github/workflows/deploy.yml`). Merging to `main` publishes.

## Layout
- `index.html` — homepage (tools, featured essays, more, Pass CTA)
- `essays/` — the single essay list (`essays/index.html`) and long-form essays (`essays/<slug>/index.html`). The list also links the shorter "Paradoxes" pieces, which live in the separate `nickxma/mindfulness-essays` repo at `/mindfulness-essays/*.html`.
- `blog/` — blog index (posts listed in a JS array) and posts
- `feed.xml`, `feed.json`, `sitemap.xml`, `robots.txt`, `404.html`
- Favicon set at the root (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest`); `og-image.jpg` is the default share image
- `shared/subscribe.js` — all newsletter forms; set `BUTTONDOWN_USER` to turn signups on (hidden while empty)
- Tool pages (`/meditation-quiz/` etc.), `/mindfulness-essays/`, `/mindfulness-wiki/` come from other repos on the same domain
- `me/` and `favicon/` are left over from the old personal site

## Style
Cream background (#faf8f4), ink #2c2c2c, sage accents (#7d8c6e, dark #5a6b4e), Georgia for headings and essay text, system sans for UI. Dark mode via `data-theme="dark"` on `<html>` (stored in localStorage `theme`). Essays have A-/A+ text size buttons and a progress bar; copy `essays/when-to-quit/index.html` for a new essay.

## Local preview
`python3 -m http.server 8000`
