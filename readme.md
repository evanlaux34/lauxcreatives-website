# Laux Creatives — Design System

> *Serving people well through photography & design.*

Laux Creatives is a husband-and-wife photography & design studio founded by
**Evan & Alexis Laux** (Est. 2024), based in **Chicago & beyond**. They shoot
weddings, engagements, family sessions, and portraits — warm, candid, golden-hour
film work — and design the brand pieces around them. The brand voice is personal,
unhurried, and relational: *"We're not here to check boxes. We're here to show up,
earn your trust, and create something that actually feels like you."*

The aesthetic is **vintage editorial** — a film-photographer's darkroom and a
letterpress contact sheet. Warm faded paper, sepia ink, sage and golden-honey
accents, a bold rounded retro-serif logotype, typewriter captions, thin inset
frames, and a whisper of film grain.

## Sources

- **`templates/brand-sheet/BrandSheet.dc.html`** — the canonical brand sheet
  (a Design Component). Cover, Logo Suite, Palette, Typography. Every color, type,
  and motif in this system is derived from it.
- **Photography** — 9 supplied images live in `assets/photos/` (weddings,
  engagements, family, portraits). Warm film tones, sage/olive wardrobe, golden hour.
- **`assets/fonts/Bringbold-{Regular,Oblique}.{otf,ttf}`** — the custom display
  face (a bold rounded retro serif), supplied by the studio.
- **`assets/logos/`** — the supplied LC master art: monogram, "LauxCreatives"
  logotype, horizontal lockup, circle-mark, and the gold coin badge.
- Contact / domain: `evan@lauxcreatives.com` · `www.lauxcreatives.com`

---

## CONTENT FUNDAMENTALS

How Laux Creatives writes.

- **Voice — warm, first-person plural, relational.** The studio speaks as "we"
  (Evan & Alexis) directly to "you" (the client). It is personal and humble, never
  corporate. *"We're drawn to the moments, details, and ideas that make your story
  worth telling."*
- **Tone — unhurried, sincere, a little romantic.** Sentences are conversational
  and confident. Emotional but not saccharine. Plain words over jargon.
  *"to serve people well through photography and design."*
- **Casing.**
  - *Headlines & body* — sentence case ("Storytellers at heart.").
  - *Eyebrows, labels, captions, film-edge meta* — UPPERCASE, widely letter-spaced,
    set in Courier Prime ("OUR STORY", "CHICAGO & BEYOND", "WEDDINGS · ENGAGEMENTS ·
    FAMILY · PORTRAITS").
- **Italics carry the feeling.** EB Garamond italic is used for emotional emphasis
  and pull-quotes — *"actually feels like you,"* *"stories worth telling."*
- **Captions read like a contact sheet.** Numbered, technical, lowercase tail:
  "Fig. 01 — 35mm · the in-between moments", "LAUX · 035 · ƒ1.8 · CHICAGO & BEYOND · 2024".
- **Recurring phrases / motifs:** "Chicago & Beyond", "Est. 2024", "stories worth
  telling", "Photography · Design · Storytelling", "Weddings · Engagements · Family ·
  Portraits", the dyad "Evan & Alexis".
- **Ampersands, not "and"** in brand lockups and lists ("photography & design").
- **Punctuation.** The middot ` · ` separates list items in labels. Em-dashes —
  like this — set off editorial asides. Numbered section markers use an en-dash
  ("01 — The Mark").
- **No emoji. No exclamation-heavy hype.** Quiet confidence. Numbers and stats are
  essentially absent — this is a feelings-first brand, not a metrics brand.

---

## VISUAL FOUNDATIONS

- **Palette — warm, faded, lived-in.** Pulled straight from the film: golden-hour
  skin tones, sage gowns, aged brick, ivory paper. Sepia Ink `#2E2A20` (primary
  dark), Aged Olive `#6E7355`, Golden Honey `#B98A45` / accent `#C8964A`, Dusty
  Blue `#6E8398`, on a family of warm papers — Sand `#DED4B8` (mat board), Ivory
  Paper `#EBE2C9`, Ivory Deep `#E3D9BD` (alternating sections), Ivory Light
  `#F4EDDB` (lifted cards). Text is warm brown ink, never pure black.
- **Type — three voices.** *Bringbold* (custom, bold rounded retro serif) for
  headlines; *EB Garamond* (incl. italic) for body and quotes; *Courier Prime* for
  all labels, captions, and film-edge meta. The *LauxCreatives* logotype itself is
  drawn art (see the Logo component), not live type. Display runs very
  large with tight leading (~1.0); labels are tiny with wide tracking
  (0.18–0.34em) and uppercase.
- **Backgrounds.** Solid warm paper fills (no white). Sections alternate between
  Ivory Paper and Ivory Deep for rhythm; feature/gallery sections go full dark
  (Sepia Ink). **Full-bleed photography** for hero/cover and watermark bands,
  always under a dark protection gradient so the cream type reads. No gradients as
  decoration; the only gradients are photo-darkening scrims.
- **Film grain.** A subtle `feTurbulence` fractal-noise SVG overlaid at ~0.20
  opacity with `mix-blend-mode: overlay` on dark/photo surfaces. Use `.lc-grain`.
- **Photo treatment.** Three filmic tones: Warm Film (default —
  `sepia(.12) saturate(.95) contrast(1.02) brightness(1.02)`), Sepia, and Black &
  White. Imagery is warm, soft, candid. Detail/archival shots are often desaturated
  to grayscale.
- **Frames & borders.** Hairline (1px) rules in `--lc-line` divide sections on
  paper. A signature **inset hairline frame** sits ~18–22px inside dark panels,
  photo covers, and applications (`border:1px solid rgba(242,234,212,.5)`). Cards
  on paper get a 1px `--lc-line-soft` border.
- **Corners are SQUARE.** No rounded corners anywhere on prints, panels, mat board,
  or photo cards — it is a film/letterpress brand. Only form inputs and chips get a
  whisper of radius (`--radius-sm: 2px`). There is a `--radius-pill` for the rare
  tracking-tag chip.
- **Shadows — soft, warm, low.** Like a photo print resting on paper: large blur,
  low opacity, warm-brown tint (`0 14px 34px rgba(46,42,32,.20)` for cards;
  `0 26px 64px rgba(46,42,32,.26)` for the brand sheet). No hard or colored shadows.
  No inner shadows. Depth is "lifted print", not "material elevation".
- **The taped-print card.** The hero component: a photo sits on an Ivory Light mat
  with `padding:12–14px 12px 0`, a soft drop-shadow, and a Courier Prime caption in
  the bottom mat ("Fig. 01 — 35mm · …"). This is how nearly all imagery is framed.
- **Layout.** A centered sheet (max ~1180px) floating on Sand mat board with the
  big sheet shadow. Generous 84px section padding, 64px gutters, 18px gallery grid
  gaps. Body measure ~520px. Section headers pair a left numbered eyebrow
  ("02 — Palette") with a right-aligned meta label ("Pulled from film").
- **Motion — quiet & filmic.** Slow fades and gentle eases (`--ease-soft`,
  240–600ms). No bounce, no spring, no infinite loops on content.
- **Hover.** Lift slightly (`--shadow-raise`) and/or warm the accent; on dark
  surfaces, raise opacity toward 1. **Press.** A touch darker, no shrink-and-bounce —
  restrained.
- **Transparency & blur.** Used sparingly: cream type set at 0.5–0.92 alpha over
  photos; hairline frames at low alpha. No glassmorphism / backdrop-blur.

---

## ICONOGRAPHY

Laux Creatives is a **near-iconless** brand — it leans on type, rules, and
photography rather than UI glyphs. Honor that restraint.

- **The serif "LC" monogram is the brand's signature.** A clean serif mark with a
  flowing tail joining the L into the C (supplied as master art; `assets/logos/`).
  The `Logo` component recolors the solid shapes on the fly via CSS mask, so the
  mark, the *LauxCreatives* logotype, the horizontal `lockup`, and the `circle`
  mark sit in any brand tone on any surface. The `badge` is the fixed gold coin
  ("ESTD · 2024 · Chicago & Beyond"). Use the mark or coin as favicon, watermark,
  loader, and social avatar.
- **No built-in icon font or SVG icon set** ships in the source. Decoration is
  typographic, not iconographic: numbered section markers ("01 —"), the middot
  ` · ` separator, "Fig. 0X —" caption tags, and uppercase Courier eyebrows do the
  work an icon set would do elsewhere.
- **No emoji. No unicode pictographs** beyond the middot (·), ampersand (&),
  em/en dashes, and the photographic "ƒ" (f-stop) in film-edge captions.
- **When UI genuinely needs icons** (a website nav, a form), use
  [**Lucide**](https://lucide.dev) via CDN at a **thin 1.5px stroke**, sized
  16–20px, colored `currentColor` in `--lc-ink-soft` / `--lc-ink-muted`. Lucide's
  light, classic line style is the closest match to the brand's hairline
  sensibility. **This is a substitution** — flagged because the brand ships no UI
  icons of its own. Keep icon use minimal and quiet.

---

## INDEX

Root manifest of this design system.

| Path | What |
|---|---|
| `styles.css` | Global entry point — link this one file (import-only). |
| `tokens/colors.css` | Palette + semantic color aliases. |
| `tokens/typography.css` | Families, display/editorial/label scales (+ Google Fonts import). |
| `tokens/fonts.css` | `@font-face` for the custom Bringbold (Regular + Oblique). |
| `tokens/spacing.css` | Spacing scale + layout tokens. |
| `tokens/effects.css` | Radii, borders, warm shadows, photo filters, grain, motion. |
| `assets/fonts/` | Bringbold Regular + Oblique (otf/ttf). |
| `assets/logos/` | LC master art: mono mark, logotype, lockup, circle-mark, gold coin badge. |
| `assets/photos/` | Supplied photographs + `alexis.jpg` / `evan.jpg` founder portraits (B&W, 4:5). |
| `guidelines/*.html` | Foundation specimen cards (Type, Colors, Spacing, Brand). |
| `components/core/` | Reusable primitives — see below. |
| `ui_kits/website/` | Portfolio-site UI kit (full-screen recreations). |
| `templates/brand-sheet/` | Canonical brand sheet (Design Component starting point). |
| `SKILL.md` | Agent-Skill front matter for download/Claude Code use. |

**Components** (`window.LauxCreativesDesignSystem_2042c0`): `Button`, `Eyebrow`,
`Caption`, `PhotoCard`, `SectionHeader`, `Tag`, `Input`, `Divider`, `Logo`.

**UI kits:** `website` — Laux Creatives portfolio site (Home, Portfolio, About,
Contact).

---

## NOTES & SUBSTITUTIONS

- **Icons → Lucide (CDN).** The brand ships no icons; Lucide thin-stroke is the
  flagged substitute for any real UI need. See ICONOGRAPHY.
- **Bringbold** is the genuine custom font, supplied and shipped here (Regular +
  Oblique). EB Garamond is listed only as a graceful fallback. The *LauxCreatives*
  logotype is drawn art, not set in any font.
