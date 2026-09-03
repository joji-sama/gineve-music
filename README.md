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
/assets/images/   images (WebP), favicons, EPK PDF (assets/docs)
/css/styles.css   all styles + design tokens (:root)
/js/main.js       nav toggle, scroll reveal, lite YouTube embeds, form success
```

## Editing content

- **Text** lives directly in the `.html` files. Nav and footer are duplicated in
  each page — if you change one, change all five (search for `site-header` / `site-footer`).
- **Colours / fonts** are CSS variables at the top of `css/styles.css` (`:root`).
- **Images**: drop a WebP into `assets/images/` and update the `src`. Keep them
  optimised (< ~150 KB). Every `<img>` needs real `alt` text.
- **Videos** are YouTube embeds — set `data-yt="<video id>"` on the `.lite-yt` block.

## Deploy

Push to `main` → Netlify auto-deploys. No build command; publish directory is the repo root.

- **Forms**: the `/book/` form uses Netlify Forms (`data-netlify="true"` + hidden
  `form-name`). Submissions appear in the Netlify dashboard; add an email
  notification to `ginevebase@gmail.com` under Site settings → Forms → Notifications.
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
