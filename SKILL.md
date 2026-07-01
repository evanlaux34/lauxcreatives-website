---
name: laux-creatives-design
description: Use this skill to generate well-branded interfaces and assets for Laux Creatives (a vintage-editorial wedding & portrait photography + design studio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Map

- `readme.md` — the full design guide: company context, CONTENT FUNDAMENTALS,
  VISUAL FOUNDATIONS, ICONOGRAPHY, and the file index. **Read this first.**
- `styles.css` — global entry point (link this one file); `@import`s all tokens + fonts.
- `tokens/` — colors, typography, fonts (`@font-face` for Dreaming Serif), spacing, effects.
- `assets/fonts/` — Dreaming Serif (custom display face). `assets/photos/` — photography.
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — React primitives: Button, Eyebrow, Caption, SectionHeader,
  PhotoCard, Tag, Input, Divider, Logo. Each has a `.d.ts` + `.prompt.md`.
- `ui_kits/website/` — interactive portfolio-site recreation.

## The brand in one breath

Vintage editorial — a film darkroom and a letterpress contact sheet. Warm faded
paper, sepia ink, sage & golden-honey accents. Dreaming Serif display, EB Garamond
body, Courier Prime labels. Square corners, soft warm shadows, thin inset frames,
a whisper of film grain, taped photo prints with contact-sheet captions. Voice is
warm, first-person-plural, unhurried: *"serving people well through photography & design."*
No emoji. Icons (if truly needed) → Lucide thin-stroke, used sparingly.
