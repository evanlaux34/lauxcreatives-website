# Laux Creatives — Website UI Kit

A high-fidelity recreation of the Laux Creatives portfolio website, built from the
brand sheet (`uploads/Laux Creatives Brand - Vintage.dc.html`) and the studio's
photography. Composes the design-system primitives — it does **not** re-implement them.

## Screens (`index.html` is the interactive entry)

| File | Screen |
|---|---|
| `Nav.jsx` | Sticky paper nav — wordmark + section links + Inquire button. |
| `HomeScreen.jsx` | Full-bleed photo hero, intro statement, featured gallery, about teaser. |
| `PortfolioScreen.jsx` | Filterable masonry gallery (All / Weddings / Engagements / Family / Portraits). |
| `AboutScreen.jsx` | Studio story, dark grain quote block with stamp, services grid. |
| `ContactScreen.jsx` | Inquiry form (underline fields) with a sent confirmation state. |
| `Footer.jsx` | Dark footer — wordmark, explore links, studio details. |
| `app.jsx` | Client-side screen switcher (no routing lib). |

## Run

Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, then each
screen. Components come from `window.LauxCreativesDesignSystem_2042c0`.

## Notes

- Interactions are cosmetic: nav switches screens, the gallery filter works, the
  contact form fakes a submit. No backend.
- All imagery is the supplied photography under the brand's Warm Film / B&W tones.
