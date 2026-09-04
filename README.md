# Gineve Music — ginevemusic.com

Static marketing site for Gineve (Nigerian jazz & soul vocalist) and Gineve Music
(live-entertainment booking brand). Plain HTML/CSS/JS, deployed on Netlify.

## Structure

```
/                 index.html          Home
/music/           music/index.html    Music / EPK
/book/            book/index.html     Booking (Netlify Forms → ginevebase@gmail.com)
/press/           press/index.html    Press / EPK
/about/           about/index.html    About / Contact
/assets/images/   images (WebP), favicons
/css/styles.css   all styles + design tokens (:root)  — linked as ?v=N
/js/main.js       nav toggle, scroll reveal, lite YouTube embeds, form  — linked as ?v=N
```

**Cache-busting:** `styles.css` and `main.js` are linked with `?v=2`. After
editing either, bump that number everywhere it appears (`?v=3`, …) so returning
visitors get the new file immediately. `netlify.toml` also tells browsers to
revalidate CSS/JS every load, so this is belt-and-suspenders.

## Editing content

- **Text** lives directly in the `.html` files. Nav and footer are duplicated in
  each page — if you change one, change all five (search for `site-header` / `site-footer`).
- **Colours / fonts** are CSS variables at the top of `css/styles.css` (`:root`).
- **Images**: drop a WebP into `assets/images/` and update the `src`. Keep them
  optimised (< ~150 KB). Every `<img>` needs real `alt` text.
- **Videos** are YouTube embeds — set `data-yt="<video id>"` on the `.lite-yt` block.

## Deploy

Push to `main` → Netlify auto-deploys. No build command; publish directory is the repo root.

- **Forms**: the `/book/` form posts to **Formspree** (`formspree.io/f/xdalekga`).
  `js/main.js` submits it via `fetch` and shows an inline thank-you; with JS off
  it does a normal POST and Formspree redirects to `/book/thanks/` (`_next`).
  On failure the page shows a mailto fallback instead of an error.
  Check/adjust the notification email + settings in the Formspree dashboard for
  that form (`_subject` is set to "New booking inquiry — ginevemusic.com").
  No Netlify Forms config is used.
- **Domain**: add `ginevemusic.com` in Netlify → Domain management, then set the
  DNS records it gives you at the registrar. SSL is automatic.

## Before launch — checklist

Every page ships real content only — no placeholders. Where something didn't
exist yet it was removed, not stubbed: `/music/` has one release + two clips;
`/about/` is bio + brand statement (no personal-history section yet); `/press/`
has no PDF/zip downloads (the page is the kit).

- [ ] Set the Netlify Forms email notification → ginevebase@gmail.com
- [ ] Confirm HTTPS on the custom domain
- [ ] Add analytics (GoatCounter / Plausible) — one script tag in each page `<head>`
- [ ] Optional: swap the softer phone photos for higher-res versions
- [ ] Add more releases / videos / an About story as Gineve supplies them
