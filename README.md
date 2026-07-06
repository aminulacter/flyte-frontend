# Flyte Solutions — Web Frontend (recovered)

This is a **Next.js 15 (App Router)** reconstruction of the Flyte Solutions
corporate website. The original project source was lost; this project was
rebuilt by studying the production **static export** that remained (`../*.html`,
`../_next/**`, `../images/**`, etc.).

## How it was recovered

The production build revealed the original stack:

| Concern            | Original technology (detected in the build)                          |
| ------------------ | -------------------------------------------------------------------- |
| Framework          | Next.js 15, App Router, `output: 'export'` (fully static)            |
| Styling            | Tailwind CSS v3 + DaisyUI + shadcn/ui tokens + a custom design system |
| Fonts              | Geist / Geist Mono (`next/font`)                                     |
| Animation          | AOS (Animate On Scroll)                                              |
| Carousels          | Swiper                                                               |
| Forms              | react-phone-number-input, react-toastify                            |
| Icons              | Font Awesome 6 (CDN)                                                 |
| Data               | Backend API at `https://admin.flytesolutions.com/api`               |
| Analytics          | Google Tag Manager (`GTM-NJZ2XR6F`)                                 |

Because the original Tailwind/DaisyUI/shadcn **configuration and component
source were not recoverable** from a minified production build, the recovery
prioritises **pixel fidelity**:

- **Compiled CSS is reused as-is.** The original compiled stylesheet bundles
  live in `public/assets/css/*` and are linked from `app/layout.jsx` in the
  original document order. This guarantees the site looks identical to the
  original, including the custom `btnColor` (`#5856D6`) theme, the mega-menu
  CSS, DaisyUI, AOS, Swiper and phone-input styles.
- **Real, editable components** were reconstructed for the shared chrome:
  - `components/Header.jsx` — the global mega-menu, rebuilt as real JSX driven
    by data in `lib/navigation.js`. The mobile toggle + dropdown behaviour is a
    port of the original `public/script.js`, in `components/ClientInit.jsx`
    (the DOM ids / `dropdown__*` classes are preserved so it still works).
  - `components/Footer.jsx` — a faithful reconstruction of the original
    data-driven footer, which fetches `GET /init-system` (RTK Query
    `getFooter` in the original). It shows the original skeleton while loading
    and falls back to sensible defaults when the API is unreachable.
- **Per-page content** was recovered from each exported page's server-rendered
  markup and is rendered through `components/RecoveredHtml.jsx`. This means
  every one of the ~60 routes is present and visually faithful today, and each
  page's markup can be **progressively extracted into real React components**
  over time.

## Project structure

```
web_frontend/
├── app/
│   ├── layout.jsx                 # <html>, metadata, CSS links, GTM, Header/Footer
│   ├── page.jsx + content.js      # "/" home route
│   ├── not-found.jsx              # 404
│   └── <route>/page.jsx + content.js
├── components/
│   ├── Header.jsx  header.content.js
│   ├── Footer.jsx
│   ├── ClientInit.jsx             # AOS + mobile menu behaviour
│   └── RecoveredHtml.jsx
├── public/                        # images, svgs, lottie, script.js, favicon, og,
│   │                              #  robots.txt, sitemap.xml, ...
│   └── assets/css, assets/media   # compiled CSS bundles + fonts
├── scripts/recover.mjs            # regenerates app/** from ../*.html
├── next.config.mjs                # output: 'export'
└── package.json
```

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: point at a different API base
npm run dev                  # http://localhost:3000
npm run build                # static export to ./out
```

## Regenerating page content

If you re-run the export or tweak the extraction logic, regenerate all page
markup from the original HTML with:

```bash
node scripts/recover.mjs
```

This reads `../*.html` (the original export, one directory up) and rewrites the
`content.js` modules, `page.jsx` route entries and the shared header fragment.

## Known limitations / next steps

These are consequences of only having the compiled production build:

1. **Interactivity that lived in the original JS bundles is not wired up.**
   Contact / consultation / application **forms render but do not submit**, and
   **Swiper carousels render statically** (their init code was in the lost
   source). The mobile menu, dropdowns and AOS animations **do** work.
2. **API-driven content** (footer columns, and some homepage sections that were
   client-fetched) depends on `NEXT_PUBLIC_API_BASE_URL` being reachable.
3. **Componentization is in progress.** The `Header` and the `/career` page are
   fully rebuilt as real React components (see `lib/api.js`, `lib/navigation.js`,
   `components/career/*`). The remaining pages still render recovered markup via
   `RecoveredHtml` (their `content.js`) and are being converted section by
   section using that same pattern: static sections → JSX components, dynamic
   sections → `lib/api.js` helpers fetched at build time (SSG). It is also worth
   reintroducing a live Tailwind + DaisyUI config so new utility classes can be
   authored (the current compiled CSS only contains classes used by the
   original site).
4. **Fonts** are served from the recovered `public/assets/media/*.woff2` via the
   compiled `@font-face` CSS rather than `next/font`.
```
