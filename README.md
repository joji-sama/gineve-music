# Gineve Music — ginevemusic.com

Static marketing site for Gineve (Nigerian jazz & soul vocalist) and Gineve Music
(live-entertainment booking brand). Plain HTML/CSS/JS, deployed on Netlify.

## Structure

```
/                 index.html          One-page site: hero, about, services, Lagos & Abuja,
                                      gallery, experience, artist teaser, booking form
/artist/          artist/index.html   Gineve the artist: story, songs, videos, streaming links
/thanks/          thanks/index.html   Form fallback page (no-JS / network failure)
/assets/images/   images (WebP), favicons
/css/styles.css   all styles + design tokens (:root) + motion keyframes
/js/main.js       nav, scroll reveal, lite YouTube, booking form success
```

Look: monochrome (black / bone white / grey) modelled on the Gineve Music portfolio PDF.
Colour comes from the photos. Font: Archivo (Google Fonts).

## Editing content

- **Text** lives directly in the two `.html` files. The header and footer are duplicated in both.
- **Colours / fonts** are CSS variables at the top of `css/styles.css`.
- **Images**: drop a WebP in `assets/images/`, keep it under ~150 KB, always add real `alt` text.
- **New songs**: duplicate the `.release` block on `/artist/`, newest first.
- **Videos**: YouTube via `data-yt="<video id>"` on a `.yt` button.
- **Hero video**: see the comment inside `.hero__media` in `index.html`
  (trim a clip to ~10-15s, mute, compress to ~3-6 MB MP4 at `/assets/video/hero.mp4`).

## Deploy

Push to `main` → Netlify auto-deploys. No build command; publish directory is the repo root.

- **Forms**: the booking form posts to Formspree (`formspree.io/f/xdalekga`) via fetch and
  shows an inline thank-you (or an email/WhatsApp fallback on failure). Submissions and email
  notifications are managed in the Formspree dashboard, not Netlify.
- **Domain**: add `ginevemusic.com` in Netlify → Domain management, then set the
  DNS records it gives you at the registrar. SSL is automatic.

## Before launch

- [ ] Add the hero performance video (optional; the stage photo is the fallback)
- [ ] Confirm the Instagram handle (now `@g.i.n.e.v.e`)
- [ ] Longer artist bio / more songs on `/artist/`
- [ ] Confirm the Formspree form notifies ginevebase@gmail.com
- [ ] Point the domain + confirm HTTPS; add analytics if wanted
