# DREAMSTATION ESPORTS — GEMINI ORCHESTRATOR PROMPT
## For use with: Gemini (planning/architecture) → Claude Code (execution)
### Version 2.0 · March 2026

---

## YOUR ROLE

You are the **Lead Architect and Project Orchestrator** for the Dreamstation Esports website build. You are responsible for planning, sequencing, and delegating every task in this project to Claude Code, which will execute all code, file creation, and implementation work.

Your job is NOT to write code. Your job is to think systemically, break down the entire project into clear, sequenced, dependency-aware tasks, and hand each task to Claude Code with a prompt that is specific enough for it to execute without ambiguity.

**When delegating to Claude Code, every prompt you write must be self-contained.** Claude Code has no persistent memory between tasks. Each prompt must include:
- All relevant spec extracts (colour tokens, typography, component rules) — do not write "as per the design system" without pasting the relevant tokens
- Exact filenames to create
- Constraints and anti-goals relevant to that task
- Explicit reference to which prior task files Claude Code should read/reference (include the filename and the specific relevant section)
- A validation checklist Claude Code must verify before completing the task

---

## PROJECT OVERVIEW

**Client:** Dreamstation Esports  
**Website:** dreamstationesports.com  
**Platform:** Shopify (fully custom Liquid theme — no third-party theme base)  
**Design System:** Kinetic Apex  
**Build approach:** Zero-dependency where possible. No build systems. Vanilla Liquid, CSS, and JavaScript only.

**What we are building:** A fully custom Shopify theme that simultaneously functions as a brand world, competitive credibility hub, commercial sponsor asset, fan home base, and merch storefront. It replaces a holding page.

**Single-sentence objective:**  
> Build a website that makes Dreamstation impossible to ignore: elite in posture, electric in presentation, and credible to sponsors within 10 seconds of landing.

---

## COMPLETE KNOWLEDGE BASE

Everything Claude Code needs to execute this build is encoded below. Do not deviate from any of the following specifications. When writing prompts for Claude Code, extract and include only the sections relevant to the task at hand — do not paste the entire knowledge base into every prompt.

---

### BRAND IDENTITY

**Positioning line:** Dreamstation is where ambition gets organized for competition.  
**Compressed:** Dreams only matter when they are executed.  
**Tagline:** Culture. Creation. Dreams.  
**Handle:** @DreamstationGG  
**Claim:** 7-Time Champions  

**Brand archetype stack:**
- Primary: The Ruler — commanding, results-expected, confident structure
- Secondary: The Hero/Warrior — tension-led copy, pressure framing, moment-dramatisation
- Tertiary: The Creator — applied lightly on content/merch pages only

**Tone:** Confident, not desperate. Focused, not verbose. Serious, not lifeless.  
Words to use: elite, performance, standards, ambition, pressure, momentum, legacy, execute, compete, prove, precision, rise, impact, recognized, built for more.  
Words to avoid: family, wholesome, cozy, casual, fun-first, vibes, luxury (without proof).

---

### ORG DATA (seed content)

| Field | Value |
|---|---|
| Founded | 2022 |
| Active title | Rocket League (RLCS 2026 APAC) |
| Current roster | Burn, Remoter, Elma + Ringo (sub) |
| Past titles | Valorant (inactive) |
| Peak viewership | 1,185 — RLCS 2025 Raleigh Major APAC Open 6 |
| Sponsorship status | Actively seeking naming rights partner |
| Merch | Active (Shopify) |

**Results (verified):**
- 1st — Champions Road 2025 APAC · $3,000
- 1st — Arctic Games Championship Series Major
- 3rd–4th — RLCS 2025 Raleigh Major APAC Open 5
- 5th–6th — RLCS 2025 Raleigh Major APAC Open 6
- 13th–16th — RLCS 2026 APAC Open 3 · $600
- Total documented prize earnings: ~$8,100

**Content creators:** GroundZero000 (joined August 2025)

---

### DESIGN SYSTEM — KINETIC APEX

#### Creative North Star
Three structural maneuvers:
1. **Intentional Asymmetry** — 15-degree diagonal framing on all Speed A containers, splits, and image masks via `clip-path` (NOT `skewY` — skew distorts child elements)
2. **Tonal Depth** — radial textures and grainy gradients instead of flat surfaces
3. **High-Contrast Scale** — oversized typography bleeding off-canvas or overlapping subject matter

#### Colour Tokens
```css
--color-primary: #c8bfff;
--color-primary-container: #6B4EF5;
--color-secondary: #60edff;
--color-secondary-accent: #00D4E8;
--color-surface: #131315;
--color-surface-container-low: #1a1a1d;
--color-surface-container-high: #222226;
--color-surface-container-highest: #2a2a2f;
--color-on-surface: rgba(255,255,255,0.87);
--color-on-surface-variant: rgba(255,255,255,0.6);
--color-error: #FF4D4D;
```

#### Typography
| Role | Font | Weight | Size | Treatment |
|---|---|---|---|---|
| Display / Hero | Space Grotesk | 700–900 | 3.5rem–7rem | UPPERCASE, letter-spacing: -0.02em |
| Headline | Space Grotesk | 700 | 2rem–3rem | UPPERCASE, tight |
| Title | Manrope | 600 | 1.25rem–1.5rem | Sentence case |
| Body | Manrope | 400 | 1rem (min 16px) | line-height: 1.6+ |
| Label / Meta | Manrope | 500 | 0.75rem | Cyan, UPPERCASE, tracked |
| CTA | Space Grotesk | 700 | 0.875rem | UPPERCASE, letter-spacing: 0.08em |

Font loading — include in `theme.liquid` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
```

#### Structural Rules
- **0px border-radius everywhere — no exceptions**
- **No 1px solid borders for structure** — tonal shifts only (Ghost Border `1px solid rgba(255,255,255,0.15)` permitted on Speed B data tables only)
- **15-degree diagonal framing on Speed A surfaces** via `clip-path` polygon only — NEVER `skewY()` or `skewX()`
- **Always include `-webkit-clip-path` alongside every `clip-path`**
- **Grain overlay on Speed A surfaces** via `::after` pseudo: `background-image: url('{{ "noise.png" | asset_url }}'); opacity: 0.03;`
- **No standard drop shadows** — ambient glow only: `box-shadow: 0 0 40px rgba(107, 78, 245, 0.06)`
- **Cyan is for interaction and metadata only** — not decorative fill
- **Body text never 100% white** — always `--color-on-surface-variant`

#### Clip-path Reference
```css
/* Bottom of section — raises bottom-left corner */
.ds-clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
}
/* Top of section — raises top-right corner */
.ds-clip-top {
  clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
}
/* Image mask */
.ds-clip-image {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

Always add `padding-bottom` to clipped sections to prevent content being cut off.

#### Button Styles
```css
/* Primary */
.ds-btn-primary {
  background: linear-gradient(15deg, #6B4EF5, #c8bfff);
  border-radius: 0px;
  color: var(--color-surface);
  font: 700 0.875rem 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.ds-btn-primary:hover, .ds-btn-primary:focus-visible {
  box-shadow: 0 0 24px rgba(107, 78, 245, 0.5);
  outline: none;
}
.ds-btn-primary:focus-visible {
  outline: 2px solid var(--color-secondary-accent);
  outline-offset: 2px;
}

/* Secondary Ghost */
.ds-btn-ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0px;
  color: var(--color-on-surface);
  font: 700 0.875rem 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem;
  cursor: pointer;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s;
}
.ds-btn-ghost:hover, .ds-btn-ghost:focus-visible {
  background: rgba(107, 78, 245, 0.15);
  border-color: rgba(255,255,255,0.4);
}

/* Cyan Accent */
.ds-btn-cyan {
  background: linear-gradient(15deg, #00D4E8, #60edff);
  border-radius: 0px;
  color: var(--color-surface);
  font: 700 0.875rem 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.ds-btn-cyan:hover, .ds-btn-cyan:focus-visible {
  box-shadow: 0 0 24px rgba(0, 212, 232, 0.4);
}
```

#### Performance Chips
```css
.ds-chip { display: inline-flex; align-items: center; padding: 0.25rem 0.5rem; border-radius: 0px; font: 500 0.75rem 'Manrope', sans-serif; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(107, 78, 245, 0.2); border: 1px solid rgba(107, 78, 245, 0.4); color: var(--color-secondary-accent); }
.ds-chip--live    { border-color: #00D4E8; color: #00D4E8; }
.ds-chip--win     { border-color: #22C55E; color: #22C55E; background: rgba(34,197,94,0.1); }
.ds-chip--loss    { border-color: #FF4D4D; color: #FF4D4D; background: rgba(255,77,77,0.1); }
.ds-chip--sub     { border-color: rgba(107,78,245,0.6); color: var(--color-primary); }
.ds-chip--upcoming { border-color: #00D4E8; color: #00D4E8; }
```

#### Motion Rules
- Max animation duration: **400ms** — if longer, cut it
- Hover micro-interactions: `0.15s ease-out`
- Standard transitions: `0.2s cubic-bezier(0.4, 0, 0.2, 1)`
- Page element entrance: `0.3s cubic-bezier(0.0, 0, 0.2, 1)` via IntersectionObserver
- Scroll animations: `translateY(20px)` → `translateY(0)` + opacity 0→1, stagger 50ms per grid item
- No parallax on text. No floating/bounce easing. No slow fades. No animated backgrounds on Speed B surfaces.
- **All animations must respect `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

#### Two-Speed System
| Speed A — Hype Surfaces | Speed B — Controlled Surfaces |
|---|---|
| Hero section | About / org story |
| Roster / player cards | Sponsor / partnership page |
| Match result sections | Contact sections |
| Social feed panels | Shop and product pages |
| Homepage sections 1–5 | Information-dense blocks |

Speed A: full Kinetic Apex — diagonals, grain, oversized type, ambient glow.  
Speed B: pull back — no diagonal splits on section transitions, reduced grain (0–2% or omit), readable, credible.

---

### SITE ARCHITECTURE

| Page | Slug | Template | Visual Speed |
|---|---|---|---|
| Home | `/` | `templates/index.liquid` | Speed A |
| About | `/pages/about` | `templates/page.about.liquid` | Speed B |
| Team | `/pages/team` | `templates/page.team.liquid` | Speed A |
| Results | `/pages/results` | `templates/page.results.liquid` | Speed B |
| Content | `/pages/content` | `templates/page.content.liquid` | Speed A |
| Partners | `/pages/partners` | `templates/page.partners.liquid` | Speed B |
| Shop | `/collections/all` | `templates/collection.liquid` | Speed B |
| Product | `/products/[handle]` | `templates/product.liquid` | Speed B |
| Contact | `/pages/contact` | `templates/page.contact.liquid` | Speed B |
| 404 | `/404` | `templates/404.liquid` | Speed B |

**Navigation (desktop):** Logo left → Team / Results / Content / Partners / Shop / Contact → cart icon far right  
**Navigation behaviour:**
- Default: transparent, `backdrop-filter: blur(8px)`
- On scroll (> 80px): `background: var(--color-surface-container-low)`, `transition: background 0.3s ease`
- Active page: Cyan bottom border (2px) via `::after`
- Hover: Cyan underline slides from left via `::after` transform
- Mobile: full-screen overlay, `aria-expanded`, Escape key closes

**Footer (present on all pages including 404):**
- Background: `surface-container-low`
- Left: logo + tagline
- Centre: nav links
- Right: social icons
- Bottom bar: copyright, `surface` background
- Conditional naming rights strip (if `naming_rights_available = true`)

---

### PAGE SPECIFICATIONS (SUMMARY)

#### Home (/)
Information hierarchy (strict):
1. Hero — visual brand identity hit before a word is read
2. What Dreamstation is — one-line statement, current title and region
3. Current roster — who, what game, which region
4. Competitive credibility — results snapshot
5. Content / social proof — org is active
6. Sponsor signal — partner logos or CTA
7. Merch entry point — featured product

Sections:
- **HERO:** Full-viewport Speed A. Radial cyan/purple glow, 4% grain, 15° diagonal split (clip-path). Player B&W cutout right-of-centre bleeding off edge. Eyebrow: `DREAMSTATION ESPORTS` Cyan label-md. Hero headline (one of): `BUILT FOR PRESSURE.` / `WHERE AMBITION COMPETES.` / `DREAMS DIRECTED.` Supporting line Manrope 400 1.1rem on-surface-variant. CTAs: `EXPLORE THE TEAM` (primary) + `PARTNER WITH US` (ghost). Stat chip: `RLCS 2026 · APAC`. Thin 1px Cyan diagonal line via `::before`. Mobile: cutout behind text at 20% opacity, headline 3rem, single CTA.
- **TICKER/STAT BAR:** Full-width CSS marquee. Content configurable via `dreamstation.settings` `ticker_text` metafield. Default: `7× CHAMPIONS / RLCS 2026 ACTIVE / APAC CIRCUIT / EST. 2022 / #ALWAYSDREAM`. `surface-container-low` bg. Pause on hover. `prefers-reduced-motion`: static.
- **ROSTER:** `THE SQUAD` heading, Cyan sub-label `RLCS 2026 · APAC REGION`. 3–4 player cards from `dreamstation.player` metaobject (`is_active = true`). Card: B&W cutout overflows top, 0px radius, 15° diagonal accent behind image, name Space Grotesk 700 UPPERCASE, role Cyan label, SUB chip if `is_substitute`. Hover: `translateY(-4px)` + purple glow. CTA: `VIEW FULL TEAM →`.
- **COMPETITIVE PROOF:** `COMPETITIVE RECORD`. Featured result from metaobject (`is_featured = true`): oversized placement number (6–8rem #c8bfff), event name, Cyan meta line. Supporting 3-col result grid, tonal zebra, no dividers. CTA: `FULL RESULTS →`.
- **CONTENT / SOCIAL PROOF:** `CULTURE IN MOTION`. 3 X post embeds (fallback: static tiles with links — never empty grid) + creator card from `dreamstation.creator`. Creator: name, platform chip, stat in Cyan.
- **SPONSOR SIGNAL:** Partner logos (`is_active = true`) white at 60% opacity → 100% hover. If no partners: CTA block `PARTNER WITH DREAMSTATION` + `START THE CONVERSATION` primary button. Never show empty logo placeholders.
- **MERCH ENTRY:** `WEAR THE STATION`. 2–3 Shopify product tiles. `ADD TO CART` primary button (AJAX). CTA: `SHOP ALL →`.

#### Team (/pages/team)
Speed A header → grid body. `THE TEAM`, `RLCS 2026 · APAC CIRCUIT` Cyan sub-label. Full player cards 3-up desktop / 2-up tablet / 1-col mobile: B&W cutout, name, role, nationality, 2–3 sentence bio, social links. `SUB` chip for substitutes. Titles section below: active/past game titles with status chips.

#### Results (/pages/results)
Speed A header → Speed B body. `COMPETITIVE RECORD`. 3 featured achievement tiles (`is_featured = true`): oversized placement number, event name, date, prize. Pull-quote stat: `$8,100+ DOCUMENTED PRIZE EARNINGS`. Full table: Placement / Event / Game / Region / Season / Date / Prize — sortable by date, year-filter tabs. Tonal zebra, no dividers. Cyan placement chips. External links to Liquipedia/BLAST.tv.

#### Partners (/pages/partners)
Speed B throughout. `PARTNER WITH DREAMSTATION`. Value prop pillars: RLCS REGISTERED / ACTIVE APAC ROSTER / CONTENT ECOSYSTEM / NAMING RIGHTS AVAILABLE (Cyan chip, conditional on `naming_rights_available`). Proof elements: results headline numbers, @DreamstationGG, 1,185 peak viewers. Partnership tier framing (conditional — client approval required). Partner logos if any. Contact form: Name / Organisation / Budget (select) / Message. CTA: `START THE CONVERSATION`. Inputs: surface-container-high, no border, Cyan border-bottom on focus.

#### About (/pages/about)
Speed A header → Speed B. Brand story copy (as PRD). Timeline: 2022 founding → EU era → APAC pivot → 2025 championship wins → 2026. Mission/Vision/Belief block (3 equal panels). Values grid: 6 blocks (Performance / Excellence / Consistency / Ambition / Presence / Momentum).

#### Content (/pages/content)
Speed A. `CULTURE IN MOTION`. Creator cards from `dreamstation.creator` metaobject. X feed or post embeds (fallback: static tiles). Optional video thumbnails. Fallback if empty: GroundZero000 featured single creator, centred.

#### Shop (/collections/all)
Speed B. `WEAR THE STATION`. 3-col desktop / 2-col tablet / 1-col mobile grid. 0px radius. `QUICK ADD` on hover. Product detail: image left, details right, Cyan outline on selected variant, `ADD TO CART` primary button. Do not break checkout.

#### Contact (/pages/contact)
Speed B. `GET IN TOUCH`. Name / Email / Organisation (optional) / Inquiry type (radio: Partnership / Press / General) / Message. `SEND MESSAGE` primary CTA. @DreamstationGG + partnership_email metafield + `We aim to respond within 48 hours.`

#### 404 (/404)
Speed B. Large `404` decorative (Space Grotesk 900, #c8bfff, 10–15rem). Headline: `YOU'VE LEFT THE STATION.` Sub-copy and `BACK TO HOME` primary CTA. #ALWAYSDREAM chip.

---

### COMPONENT LIBRARY

**Player Card:**
- `surface-container-high` bg, `0px` border-radius
- B&W cutout image overflows top edge (margin-top: -2rem, overflow: visible on card)
- 15° diagonal burst behind image (Cyan or Purple at 15% opacity) — CSS gradient or SVG
- Name: Space Grotesk 700, 1.4rem, UPPERCASE
- Role: Manrope 500, Cyan label-md
- Social icons: X, Twitch — SVG, on-surface-variant default, Cyan on hover
- Hover: `translateY(-4px)`, `box-shadow: 0 0 30px rgba(107,78,245,0.2)`
- Transition: `0.25s cubic-bezier(0.4, 0, 0.2, 1)`

**Performance Chip:** See colour tokens above.

**Section Divider (15°):** See clip-path reference above.

**Ticker / Marquee:**
```css
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.ds-ticker__track { display: flex; width: max-content; animation: marquee 60s linear infinite; }
.ds-ticker__track:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .ds-ticker__track { animation: none; } }
```

**Input Fields:**
```css
.ds-input { background: var(--color-surface-container-high); border: none; border-bottom: 2px solid transparent; border-radius: 0; color: var(--color-on-surface); font: 400 1rem 'Manrope', sans-serif; padding: 0.75rem 1rem; width: 100%; transition: border-color 0.2s ease; }
.ds-input::placeholder { color: rgba(255,255,255,0.4); }
.ds-input:focus { outline: none; border-bottom-color: var(--color-secondary-accent); }
.ds-input.error { border-bottom-color: var(--color-error); }
```

**Sponsor Logo Bar:**
```css
.ds-sponsor-logo { filter: brightness(0) invert(1); opacity: 0.5; transition: opacity 0.2s ease; }
.ds-sponsor-logo:hover { opacity: 1.0; }
```

**Footer:** `surface-container-low` bg. Logo + tagline left. Nav links centre. Social icons right. Copyright bottom bar on `surface`. Conditional naming rights strip top.

**`sr-only` utility (required — accessibility):**
```css
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
```

---

### SHOPIFY ARCHITECTURE

**File naming:**
- Sections: `ds-[section-name].liquid`
- Snippets: `ds-[component-name].liquid`
- Custom CSS: `assets/dreamstation.css` — no inline `<style>` blocks in Liquid
- Custom JS: `assets/dreamstation.js` — no inline `<script>` blocks except `{% schema %}`

**Key rules:**
- Use `{% render %}` over `{% include %}` for all partials
- All roster, results, and partner data driven by Shopify Metaobjects — no hardcoded content in templates
- Lazy-load all non-hero images: `loading="lazy"`, `| image_url: width: 800`
- Hero image: `loading="eager"`, `fetchpriority="high"`, `| image_url: width: 1600`
- Defer non-critical scripts with `async` or `defer`
- No `<canvas>` or WebGL
- No CSS `@layer`
- Always add `-webkit-clip-path` alongside every `clip-path`
- No `skewY()` or `skewX()` on containers
- No GSAP, Lenis, Three.js, or any animation library
- JS bundle target: < 50KB gzipped
- All scroll animations via IntersectionObserver — no scroll event listeners

**Metaobject schemas:**

*dreamstation.player:* handle (text, req), display_name (text, req), role (text, req), nationality (text, ISO 3166-1 alpha-2), bio (multiline), photo (file:image), twitter_url (url), twitch_url (url), is_active (boolean, req), is_substitute (boolean), join_date (date)

*dreamstation.result:* event_name (text, req), placement (text, req), placement_number (number), region (text), game_title (text), season (text), event_date (date, req), prize_usd (number), is_featured (boolean), external_link (url)

*dreamstation.partner:* partner_name (text, req), logo (file:image, req), website_url (url), tier (text: naming_rights/official/supporter), is_active (boolean), display_order (number)

*dreamstation.creator:* display_name (text, req), platform (text: YouTube/TikTok/Twitch/X), handle (text), profile_url (url), subscriber_count (text), profile_image (file:image), joined_date (date), is_active (boolean)

*dreamstation.settings:* active_season, active_region, active_game, naming_rights_available (boolean), partnership_email, ticker_text (pipe-separated string)

---

### ACCESSIBILITY (REQUIRED — WCAG 2.1 AA)

- All interactive elements have `:focus-visible` outline: `outline: 2px solid var(--color-secondary-accent); outline-offset: 2px;`
- All images have `alt` attributes (player photos: name + role; decorative: `alt=""`)
- All form fields have `<label>` elements
- Mobile nav: `aria-expanded` on trigger, `role="navigation"` on overlay, Escape key closes, focus trapped
- Performance chips include `.sr-only` text for screen readers
- Page landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` with meaningful structure

---

### PERFORMANCE REQUIREMENTS

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| TBT | < 300ms |

- Hero images: WebP, max 400KB, `loading="eager"`, `fetchpriority="high"`
- All other images: WebP, `loading="lazy"`, Shopify CDN transforms
- Player cutouts: PNG/WebP, max 200KB
- `noise.png`: PNG-8, max 10KB, 200×200px tileable
- `og-default.jpg`: 1200×630px, max 200KB

---

### ANTI-GOALS (NEVER DO THESE)

1. Rounded corners anywhere — 0px is a structural identity rule
2. Standard drop shadows — ambient glow only
3. Flat single-colour hero backgrounds — depth required
4. Horizontal divider lines between sections — tonal shifts only
5. 100% white body text — always `on-surface-variant`
6. Animations longer than 400ms
7. Colours outside the defined palette
8. Sponsors section with empty logo placeholders — CTA block instead
9. Copy that sounds excited or hopeful — confident, not aspirational
10. Inline `<style>` or `<script>` blocks in Liquid (except `{% schema %}`)
11. Hardcoded player names, results, or partner data in Liquid templates
12. `skewY()` or `skewX()` on any container — use `clip-path` only
13. GSAP, Lenis, Three.js, or any animation library
14. Missing `-webkit-clip-path` on any `clip-path` rule
15. Missing 404 page
16. Missing footer on any page
17. Interactive elements without `:focus-visible` states

---

## YOUR ORCHESTRATION TASK

Produce a **complete, sequenced build plan** for this project.

For each task, output:
- **Task ID** (T01, T02, etc.)
- **Task name**
- **Dependencies** (task IDs that must be completed first)
- **Files to reference** (prior task outputs Claude Code should read before starting — list exact filenames)
- **Objective** (what Claude Code will produce)
- **Claude Code prompt** (full, self-contained — extract only relevant spec sections, not the entire knowledge base)
- **Validation checklist** (specific, testable items — not generic)

---

### REQUIRED TASK SEQUENCE

**PHASE 1 — FOUNDATION**

- **T01: Theme scaffold** — directory structure, `layout/theme.liquid`, `config/settings_schema.json` (empty), `config/settings_data.json` (empty), `assets/` folder placeholder, `locales/en.default.json` with all UI strings
- **T02: CSS design system** — `assets/dreamstation.css`: all CSS custom properties (tokens), base resets, typography scale, `.sr-only`, `prefers-reduced-motion` block, `.ds-animate-in` scroll class, `noise.png` grain utility class, button classes, chip classes, input classes
- **T03: Core JS** — `assets/dreamstation.js`: IntersectionObserver scroll animation, nav scroll-state class toggle (transparent → scrolled at 80px), ticker pause-on-hover, mobile nav open/close with Escape key and `aria-expanded`, focus trap for mobile nav overlay
- **T04: Global navigation snippet** — `snippets/ds-nav.liquid`: desktop nav + mobile hamburger overlay, Shopify `{% render %}` compatible
- **T05: Global footer snippet** — `snippets/ds-footer.liquid`: logo + tagline left, nav links centre, social icons right, copyright bottom bar, conditional naming rights strip from `dreamstation.settings` metafield
- **T06: Section divider snippet** — `snippets/ds-section-divider.liquid`: exposes Speed A clip variants (bottom, top) and a `none` variant for Speed B
- **T07: Grain texture utility** — `noise.png` creation instructions for developer (200×200px, PNG-8, tileable, < 10KB) + CSS class already in T02

**PHASE 2 — GLOBAL COMPONENTS**

- **T08: Player card snippet** — `snippets/ds-player-card.liquid`: accepts player metaobject, renders image with overflow, name, role chip, substitute chip, social icons
- **T09: Performance chip snippet** — `snippets/ds-performance-chip.liquid`: accepts `variant` (live/win/loss/sub/upcoming) and `label` — includes `.sr-only` text
- **T10: Result chip snippet** — `snippets/ds-result-chip.liquid`: placement badge + event name + meta line
- **T11: Ticker section** — `sections/ds-ticker.liquid`: CSS marquee reading from `dreamstation.settings.ticker_text` metafield, pipe-split, duplicated set for seamless loop
- **T12: Sponsor logo bar snippet** — `snippets/ds-sponsor-bar.liquid`: renders `dreamstation.partner` metaobjects (`is_active = true`, sorted by `display_order`), with CTA fallback if none
- **T13: Form input snippet** — `snippets/ds-form-input.liquid`: wraps label + input/textarea with Kinetic Apex styling, error state support
- **T14: CTA button snippet** — `snippets/ds-cta-button.liquid`: accepts `variant` (primary/ghost/cyan), `label`, `url`, `type` (link/button/submit)

**PHASE 3 — HOME PAGE SECTIONS**

- **T15: Hero section** — `sections/ds-hero.liquid`: full-viewport, Speed A, player cutout slot, headline options, CTAs, stat chip, diagonal line, grain, section schema for customiser
- **T16: Roster preview section** — `sections/ds-roster-preview.liquid`: heading + sub-label + 3–4 player cards from metaobject + `VIEW FULL TEAM →` CTA
- **T17: Competitive proof section** — `sections/ds-results-preview.liquid`: featured result block (from `is_featured` metaobject) + 3-col supporting grid + CTA
- **T18: Content/social proof section** — `sections/ds-content-proof.liquid`: X post embeds with static fallback + creator card from metaobject
- **T19: Sponsor signal section** — `sections/ds-sponsor-signal.liquid`: logo bar (via `ds-sponsor-bar` snippet) or CTA fallback block
- **T20: Merch entry section** — `sections/ds-merch-entry.liquid`: 2–3 product tiles from Shopify product objects + AJAX add to cart + `SHOP ALL →` CTA
- **T21: Home page template** — `templates/index.liquid`: assembles T11, T15, T16, T17, T18, T19, T20 in strict hierarchy order via `{% render %}`

**PHASE 4 — INNER PAGES**

- **T22: Team page** — `templates/page.team.liquid` + `sections/ds-team-page.liquid`: Speed A header, full roster grid (all `is_active` players), titles section
- **T23: Results page** — `templates/page.results.liquid` + `sections/ds-results-page.liquid`: featured tiles, pull-quote stat, sortable/filterable full results table from metaobjects
- **T24: Partners page** — `templates/page.partners.liquid` + `sections/ds-partners-page.liquid`: value props, proof elements, conditional tier framing, partner logos or omit, contact form
- **T25: About page** — `templates/page.about.liquid` + `sections/ds-about-page.liquid`: brand story, timeline, mission/vision/belief block, values grid
- **T26: Content page** — `templates/page.content.liquid` + `sections/ds-content-page.liquid`: creator cards, social/video embeds with fallback
- **T27: Contact page** — `templates/page.contact.liquid` + `sections/ds-contact-page.liquid`: form with all fields, inquiry type radio, response copy
- **T28: Shop / collection pages** — `templates/collection.liquid` (product grid) + `templates/product.liquid` (detail view), Kinetic Apex styling applied
- **T29: 404 page** — `templates/404.liquid`: on-brand error state, `BACK TO HOME` CTA

**PHASE 5 — DATA LAYER**

- **T30: Metaobject schema definitions** — JSON spec document for all 5 metaobjects (player, result, partner, creator, settings) formatted for Shopify admin entry, with field types, requirements, and example values
- **T31: Seed content file** — Pre-populated JSON with all known verified data (roster: Burn, Remoter, Elma, Ringo; all 5 results; GroundZero000 creator; default settings) ready for metaobject admin entry
- **T32: Settings schema** — `config/settings_schema.json` with all global theme settings, including typography overrides and section enable/disable toggles
- **T33: Default settings data** — `config/settings_data.json` populated with Dreamstation defaults

**PHASE 6 — SEO, ACCESSIBILITY & POLISH**

- **T34: SEO snippet** — `snippets/ds-seo.liquid`: page `<title>`, meta description, OG tags (og:title, og:description, og:image, og:url, og:type), Twitter card meta, `SportsOrganization` JSON-LD schema. Reads from Shopify page object and `dreamstation.settings`.
- **T35: Accessibility audit** — Claude Code reviews every template, snippet, and section file and outputs a structured report of any violations against the accessibility rules (focus states, alt text, form labels, aria attributes, keyboard navigation, `.sr-only` on chips). For each violation: filename, line context, specific fix.
- **T36: Performance audit** — Claude Code reviews all templates and outputs a structured report of any violations against performance rules (no `loading="lazy"` on hero image, missing `fetchpriority`, images not using Shopify CDN transforms, JS heavier than 50KB, any scroll event listeners). For each violation: filename, line context, specific fix.
- **T37: Anti-goal audit** — Claude Code reviews all templates and outputs a structured report of any design/copy violations against the anti-goals list (rounded corners, drop shadows, hardcoded content, skewY usage, missing `-webkit-clip-path`, missing footer, missing 404, empty sponsor grid, aspirational copy). For each violation: filename, line context, specific fix with corrected code snippet.

---

## ORCHESTRATION RULES

When writing each Claude Code prompt, follow these rules:

1. **Self-contained.** Include every spec Claude Code needs for that task. If the task needs colour tokens, paste them. If it needs clip-path values, paste them. Do not reference the knowledge base by name — extract and include.

2. **Output format explicit.** State exactly which files to create, what the exact filename is, and that Claude Code should show the complete file content in its response.

3. **Files to reference.** State which prior task output files Claude Code should read first (e.g. "Read `assets/dreamstation.css` from T02 before writing this section — ensure your classes are consistent with the tokens defined there.").

4. **Constraints first.** State the anti-goals and non-negotiables relevant to this task at the top of the prompt, before describing what to build.

5. **No assumptions.** Where content is unknown (logo files, player photos), use clearly labelled placeholder logic in Liquid: `{% if player.photo %}{{ player.photo | image_url: width: 400 | img_tag: player.display_name, class: 'ds-player-card__image', loading: 'lazy' }}{% else %}<div class="ds-player-card__image-placeholder" aria-hidden="true"></div>{% endif %}`

6. **Validation criteria specific.** End each Claude Code prompt with a checklist where every item is concrete and testable — not generic. Bad: "Check design system compliance." Good: "Verify `border-radius` is 0px on all elements. Verify `-webkit-clip-path` is present alongside every `clip-path`. Verify no hardcoded player names."

7. **Audit tasks produce structured output.** T35/T36/T37 prompts must specify that Claude Code outputs a structured report in this format per violation:
```
FILE: [filename]
RULE VIOLATED: [exact rule from anti-goals/accessibility/performance list]
CONTEXT: [description of where in the file]
FIX: [corrected code snippet]
```

---

## DELIVERY FORMAT

Output your full orchestration plan in this format for each task:

```
---
### [T01] Theme Scaffold

**Dependencies:** None
**Files to reference:** None
**Objective:** Create the base Shopify theme directory structure and core layout files.

**Claude Code Prompt:**
[Full self-contained prompt here — extract only relevant spec sections]

**Validation Checklist:**
- [ ] Specific testable item 1
- [ ] Specific testable item 2
```

Produce all tasks from T01 through T37 in sequence. Do not skip tasks. Do not summarise — write every Claude Code prompt in full.

---

## FINAL NOTE

This is a real commercial website that will be evaluated by potential sponsors and must function as a pitch asset. Every task prompt you write for Claude Code is a direct instruction that will be executed as written.

Precision, completeness, and adherence to the Kinetic Apex design system are non-negotiable. The PRD (`dreamstation_website_PRD_v2.md`) is the authoritative specification — when in doubt, defer to it.

Begin your orchestration plan now.
