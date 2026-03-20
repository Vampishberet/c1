# Dreamstation Esports — Website PRD
### Product Requirements Document · Version 2.0 · March 2026
**Project:** dreamstationesports.com  
**Platform:** Shopify (custom Liquid theme — no third-party theme base)  
**Design System:** Kinetic Apex  
**Classification:** Internal & Development Reference  
**Paired with:** `dreamstation_brand_positioning_v2.pdf` · `dreamstation_gemini_orchestrator_prompt_v2.md`

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Strategic Context](#2-strategic-context)
3. [Target Audiences](#3-target-audiences)
4. [Design System — Kinetic Apex](#4-design-system--kinetic-apex)
5. [Site Architecture](#5-site-architecture)
6. [Page Specifications](#6-page-specifications)
7. [Component Library](#7-component-library)
8. [Motion & Interaction System](#8-motion--interaction-system)
9. [Data Architecture & Shopify Schema](#9-data-architecture--shopify-schema)
10. [Content Requirements](#10-content-requirements)
11. [SEO & Metadata](#11-seo--metadata)
12. [Accessibility Requirements](#12-accessibility-requirements)
13. [Performance Requirements](#13-performance-requirements)
14. [Shopify Constraints & Implementation Rules](#14-shopify-constraints--implementation-rules)
15. [Anti-Goals & Non-Negotiables](#15-anti-goals--non-negotiables)
16. [Glossary](#16-glossary)

---

## 1. PROJECT OVERVIEW

### 1.1 What We Are Building

A fully custom Shopify theme for **Dreamstation Esports** — a competitive Rocket League organisation founded in 2022, currently active in the RLCS 2026 APAC circuit. The site replaces a holding page and functions simultaneously as:

- A **brand world** — the visual home of the Dreamstation identity
- A **competitive credibility hub** — proof of results, roster, and org history
- A **commercial asset** — a destination sponsors evaluate before committing
- A **fan home base** — content, roster, and community entry point
- A **merch storefront** — native Shopify commerce integration

### 1.2 Single Sentence Objective

> Build a website that makes Dreamstation impossible to ignore: elite in posture, electric in presentation, and credible to sponsors within 10 seconds of landing.

### 1.3 Core Brand Positioning

**Primary line:** Dreamstation is where ambition gets organized for competition.  
**Compressed:** Dreams only matter when they are executed.  
**Tagline:** Culture. Creation. Dreams.  
**Handle:** @DreamstationGG

### 1.4 Org Snapshot

| Field | Detail |
|---|---|
| Founded | 2022 |
| Active title | Rocket League (RLCS 2026 APAC) |
| Current roster | Burn, Remoter, Elma + Ringo (sub) |
| Past titles | Valorant (inactive) |
| Claim | 7-Time Champions |
| Merch | Active via Shopify (ridebrand.com partnership) |
| Sponsorship status | Actively seeking naming rights partner |
| Peak viewership | 1,185 — RLCS 2025 Raleigh Major APAC Open 6 |

---

## 2. STRATEGIC CONTEXT

### 2.1 Why This Website Matters Now

Dreamstation's current public footprint consists of a holding page, an active X account (@DreamstationGG), and a third-party merch storefront. The org has real competitive credentials — two 1st-place finishes (Champions Road APAC 2025, Arctic Games Championship Series Major), Raleigh Major appearances, and an RLCS 2026 APAC circuit presence — but none of this is surfaced in a controlled, credible brand environment.

**The website is the lever that converts scattered public signals into a single, investable brand story.**

The sponsorship opportunity is concrete: naming rights for the RLCS roster is actively available. Sponsors will land on this website before making any commitment. It must communicate seriousness before a single word is read.

### 2.2 Brand Archetype Stack

| Layer | Archetype | Expression on Website |
|---|---|---|
| Primary | The Ruler | Commanding layouts, results presented as expected, confident structure |
| Secondary | The Hero / Warrior | Tension-led copy, pressure framing, moment-dramatisation |
| Tertiary | The Creator | Applied lightly — cultural polish on content/merch pages only |

**The balance in practice:** cold in posture, electric in presentation. Neither corporate stiffness nor hollow hype.

### 2.3 Two-Speed Visual System

Not every page carries the same intensity. This controls brand energy across the full site.

| Speed A — Hype Surfaces | Speed B — Controlled Surfaces |
|---|---|
| Hero section | About / org story |
| Roster / player feature sections | Sponsor / partnership page |
| Match result announcements | Contact sections |
| Campaign and event pages | Shop and product pages |
| Social feed integration panels | Information-dense content blocks |

Speed A uses full Kinetic Apex aggression. Speed B pulls back on diagonal framing and grain — cleaner, readable, credible.

### 2.4 What Sponsors Expect When They Land Here

The esports sponsorship market (2025–2026) has shifted decisively toward data-backed, multi-channel proof of value. When a sponsor visits this site, they need to see within 10 seconds:

1. What org this is and what game they compete in
2. The current active roster
3. Evidence of competitive results
4. Signs of audience and content activity
5. A clear, low-friction path to initiate a partnership conversation

**The site must never make a sponsor hunt for legitimacy.** Credibility signals go above the fold or immediately adjacent to it.

---

## 3. TARGET AUDIENCES

Three distinct audiences must be served simultaneously. Every design and copy decision is tested against all three.

### 3.1 Fans & Followers

**Profile:** Esports-native audience, likely mobile-first, familiar with Rocket League and RLCS. Follow the org on X or encountered Dreamstation through tournament streams.

**What they want:** Current roster, match updates, highlights, identity, reasons to affiliate and back the team.

**What they respond to:** Hype, bold visuals, player storytelling, momentum signals, the feeling that this org belongs on stage.

**Design implication:** Speed A surfaces must deliver emotional impact. Player cards need personality. Results need to feel like proof of status, not just data.

### 3.2 Sponsors & Commercial Partners

**Profile:** Brand marketing managers and esports partnership leads. May have limited knowledge of RLCS specifically. Evaluating Dreamstation's commercial readiness and value as a partner.

**What they want:** Professionalism, demonstrable reach, structured partnership options, evidence the org is going somewhere.

**What they respond to:** Credible visual presentation, clean information architecture, performance proof points, social proof, a path to contact that requires no effort.

**Design implication:** Speed B surfaces must be immaculate. The sponsor page is a pitch asset, not an afterthought. Partnership CTA must be prominent on homepage.

### 3.3 Players & Content Creators

**Profile:** Competitive players or creators considering joining Dreamstation. Looking for signs that the org is serious, growing, and worth associating with.

**What they want:** Standards, trajectory, evidence of real investment in talent and presentation.

**What they respond to:** Elevated brand identity, clear mission, sense of momentum, the feeling that Dreamstation looks and acts like a credible org.

**Design implication:** Roster section must feel prestigious. About page narrative must convey intentional org-building. Visual quality of the site itself is the proof.

---

## 4. DESIGN SYSTEM — KINETIC APEX

### 4.1 Creative North Star

**"The Kinetic Apex"** — a controlled-aggressive editorial aesthetic for high-performance esports environments. Rejects static, boxy SaaS layouts. Built on three maneuvers:

1. **Intentional Asymmetry** — 15-degree diagonal framing applied to containers, splits, and image masks to create forward momentum
2. **Tonal Depth** — deep radial textures and grainy gradients replacing flat surfaces. Mimics high-end broadcast production
3. **High-Contrast Scale** — oversized typography bleeding off-canvas or overlapping subject matter to create layered, multi-dimensional space

### 4.2 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#c8bfff` | On-dark text, subtle highlights |
| `--color-primary-container` | `#6B4EF5` | Deep Purple — hero elements, key CTAs, brand markers |
| `--color-secondary` | `#60edff` | Cyan — interaction highlights, hover states |
| `--color-secondary-accent` | `#00D4E8` | Performance Cyan — active states, stat callouts, secondary CTAs |
| `--color-surface` | `#131315` | The Void — base background |
| `--color-surface-container-low` | `#1a1a1d` | Content grouping sections |
| `--color-surface-container-high` | `#222226` | Interactive cards, elevated panels |
| `--color-surface-container-highest` | `#2a2a2f` | Modals, top-layer elements |
| `--color-on-surface` | `rgba(255,255,255,0.87)` | Primary text — never full 100% white |
| `--color-on-surface-variant` | `rgba(255,255,255,0.6)` | Secondary text, body copy |
| `--color-error` | `#FF4D4D` | Form validation errors only |

**The No-Line Rule:** 1px solid borders are strictly prohibited for sectioning. All structural boundaries are defined through background color shifts only. Sections must read as "carved," not "pasted."

**The Ghost Border Fallback:** In high-density data views only (Results table, Speed B surfaces), use `border: 1px solid rgba(255,255,255,0.15)` for container definition. Never on Speed A surfaces.

### 4.3 Typography

| Role | Font | Weight | Size | Treatment |
|---|---|---|---|---|
| Display / Hero | Space Grotesk | 700–900 | 3.5rem–7rem | UPPERCASE, letter-spacing: -0.02em |
| Headline | Space Grotesk | 700 | 2rem–3rem | UPPERCASE, tight |
| Title | Manrope | 600 | 1.25rem–1.5rem | Sentence case |
| Body | Manrope | 400 | 1rem | line-height: 1.6+ |
| Label / Meta | Manrope | 500 | 0.75rem | `--color-secondary-accent` (Cyan), UPPERCASE, tracked |
| CTA | Space Grotesk | 700 | 0.875rem | UPPERCASE, letter-spacing: 0.08em |

**Typography Rules:**
- Display headers may bleed off-canvas or overlap player imagery — this is intentional
- `label-md` in Cyan is reserved exclusively for metadata: match times, tournament names, player stats, status indicators
- Body copy must never be 100% white. Use `--color-on-surface-variant`
- Minimum body font size: 16px (1rem) — do not reduce below this for accessibility

**Font Loading:** Import via Google Fonts. Preload Space Grotesk 700 and Manrope 400 in `<head>`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
```

### 4.4 Elevation & Tonal Layering

Traditional shadows are forbidden. Hierarchy is expressed through surface tone shifts.

| Layer | Token | Color | Use |
|---|---|---|---|
| Base | `surface` | `#131315` | Page background with radial noise |
| Section | `surface-container-low` | `#1a1a1d` | Content section blocks |
| Card | `surface-container-high` | `#222226` | Player cards, stat blocks, product tiles |
| Modal / Overlay | `surface-container-highest` | `#2a2a2f` | Drawers, modals, floating panels |

**Ambient Glow Rule:** Floating elements that require a shadow use `box-shadow: 0 0 40px rgba(107, 78, 245, 0.06)` — tinted to the primary colour, large blur, low opacity. This mimics LED screen ambient glow.

**Glass Panels:** Floating content panels (e.g., match ticker, stat overlays) use `backdrop-filter: blur(20px)` with `background: rgba(19, 19, 21, 0.7)`. Background texture must bleed through.

### 4.5 The 15-Degree Rule

All major layout containers, section dividers, image masks, and compositional splits must follow a **15-degree diagonal shear**. This is a structural rule, not a decoration.

**Implementation:** Use CSS `clip-path` on sections and containers. Do **not** use `skewY()` — skewing causes child element distortion and is unreliable in Shopify's rendering environment. Use polygon clip-paths only.

```css
/* Section bottom clip — bottom-left raised */
.ds-clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
}

/* Section top clip — top-right raised (for incoming section) */
.ds-clip-top {
  clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
}

/* Image mask — diagonal crop on player images */
.ds-clip-image {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

**Always include `-webkit-clip-path` alongside `clip-path`.** Safari requires it. Test all clip-path usage on Safari before finalising.

**Where 15° applies:**
- Hero background split between image and colour fill
- Section transition overlaps between Speed A and Speed B surfaces
- Player card image masks
- CTA button accent lines
- Stat block decorative elements

**Where 15° does NOT apply:**
- Speed B surfaces (About, Contact, Partners body content, Shop product tiles)
- Form fields and inputs
- Navigation elements

### 4.6 Grain & Texture

Every Speed A background surface must have a subtle noise overlay to prevent gradient banding and to reinforce the broadcast/print editorial aesthetic.

```css
.ds-surface::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('{{ "noise.png" | asset_url }}');
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}
```

**Implementation note:** The `noise.png` asset must be included in the `assets/` folder. Use a 200×200px tileable noise texture (PNG-8 or PNG-24, < 10KB). All content inside a `.ds-surface` container must have `position: relative; z-index: 1` to sit above the grain overlay.

Grain intensity: 3–5% opacity. Speed B surfaces: 0–2% opacity or omit entirely.

### 4.7 CTA & Button Styles

**Primary Button:**
```css
.ds-btn-primary {
  background: linear-gradient(15deg, #6B4EF5, #c8bfff);
  border-radius: 0px;
  color: var(--color-surface);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.ds-btn-primary:hover,
.ds-btn-primary:focus-visible {
  box-shadow: 0 0 24px rgba(107, 78, 245, 0.5);
  outline: none;
}
.ds-btn-primary:focus-visible {
  outline: 2px solid var(--color-secondary-accent);
  outline-offset: 2px;
}
```

**Secondary Button (Ghost):**
```css
.ds-btn-ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0px;
  color: var(--color-on-surface);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem;
  cursor: pointer;
  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s;
}
.ds-btn-ghost:hover,
.ds-btn-ghost:focus-visible {
  background: rgba(107, 78, 245, 0.15);
  border-color: rgba(255,255,255,0.4);
  outline: none;
}
.ds-btn-ghost:focus-visible {
  outline: 2px solid var(--color-secondary-accent);
  outline-offset: 2px;
}
```

**Cyan Accent Button:**
```css
.ds-btn-cyan {
  background: linear-gradient(15deg, #00D4E8, #60edff);
  border-radius: 0px;
  color: var(--color-surface);
  /* Same font/size/padding as primary */
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.ds-btn-cyan:hover,
.ds-btn-cyan:focus-visible {
  box-shadow: 0 0 24px rgba(0, 212, 232, 0.4);
}
```

Use Cyan Accent Button for secondary CTAs only. Never compete with primary purple.

### 4.8 Performance Chips

Small status indicators for live match status, results, player role, or roster state.

```css
.ds-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(107, 78, 245, 0.2);
  border: 1px solid rgba(107, 78, 245, 0.4);
  color: var(--color-secondary-accent);
}
.ds-chip--live   { border-color: #00D4E8; color: #00D4E8; }
.ds-chip--win    { border-color: #22C55E; color: #22C55E; background: rgba(34,197,94,0.1); }
.ds-chip--loss   { border-color: #FF4D4D; color: #FF4D4D; background: rgba(255,77,77,0.1); }
.ds-chip--sub    { border-color: rgba(107,78,245,0.6); color: var(--color-primary); }
.ds-chip--upcoming { border-color: #00D4E8; color: #00D4E8; }
```

Variants: `LIVE`, `W`, `L`, `1ST`, `SUB`, `UPCOMING`, `PRO`

---

## 5. SITE ARCHITECTURE

### 5.1 Page Map

| Page | Slug | Primary Job | Visual Speed |
|---|---|---|---|
| Home | `/` | Brand impact, roster, results, sponsor CTA | Speed A |
| About | `/pages/about` | Org narrative, belief system, legitimacy | Speed B |
| Team | `/pages/team` | Current roster, player profiles, titles | Speed A |
| Results | `/pages/results` | Tournament history, placements, prize records | Speed B |
| Content | `/pages/content` | Creator network, video content, social integration | Speed A |
| Partners | `/pages/partners` | Sponsor showcase, partnership contact, commercial proof | Speed B |
| Shop | `/collections/all` | Merchandise — jerseys, apparel, accessories | Speed B |
| Contact | `/pages/contact` | Sponsor inquiries, press, general contact | Speed B |
| 404 | `/404` | Error state — on-brand, low friction redirect | Speed B |

### 5.2 Navigation Structure

**Primary Nav (Desktop):** Logo left — Team / Results / Content / Partners / Shop / Contact right — cart icon far right

**Mobile Nav:** Hamburger menu — full-screen overlay with same links, stacked vertically

**Nav Behaviour:**
- Default: fully transparent with `backdrop-filter: blur(8px)` on scroll
- On scroll (> 80px from top): transitions to `surface-container-low` background, `transition: background 0.3s ease`
- Active state: Cyan bottom border (2px) on current page link
- Hover state: Cyan underline slides in from left using `::after` pseudo-element
- Logo: SVG, white version only, 140px width desktop / 100px mobile, `32px` height minimum on mobile
- Cart icon: visible only if store has products

### 5.3 Footer

The footer is a Speed B surface. It must be present on all pages.

**Footer layout:**
- Background: `surface-container-low`
- Left: Dreamstation logo (SVG, white) + tagline: `Culture. Creation. Dreams.`
- Centre: Navigation links — Team / Results / Content / Partners / Shop / Contact
- Right: Social icons — X (@DreamstationGG) + any active platform
- Bottom bar: `© 2026 Dreamstation Esports. All rights reserved.` — Manrope 400, label-md, `on-surface-variant`
- No divider lines — tonal separation between footer body and bottom bar via `surface` background
- Naming rights callout (conditional — if `naming_rights_available = true`): small Cyan label strip above main footer: `NAMING RIGHTS AVAILABLE — RLCS 2026 APAC ROSTER | ENQUIRE →`

---

## 6. PAGE SPECIFICATIONS

### 6.1 HOME PAGE

**Strategic objective:** Convince fans, sponsors, and potential players within 10 seconds. No hunting for legitimacy.

**Information hierarchy (strict order):**

1. Visual identity hit — hero communicates brand before a word is read
2. What Dreamstation is — one-line brand statement, current title and region
3. Current roster — who, what game, which region
4. Competitive credibility — results snapshot
5. Content / social proof — org is active
6. Sponsor signal — partner logos or partnership CTA
7. Merch entry point — featured product

---

#### SECTION 1: HERO

**Type:** Full-viewport, Speed A

**Layout:**
- Full-bleed background: `--color-surface` with radial cyan/purple glow emanating from centre-left
- Grain overlay at 4% opacity (`::after` pseudo, pointer-events none)
- 15-degree diagonal split dividing background into two tonal zones (left: `surface-container-low`, right: `surface` / pure void)
- Player or team image: high-contrast B&W cutout, positioned right-of-centre, partially bleeding off the right edge of the viewport
- Purple/cyan diagonal accent burst behind player image at 15-degree angle (SVG or CSS gradient, low opacity)

**Typography:**
- Eyebrow: `DREAMSTATION ESPORTS` — Manrope 500, 0.75rem, Cyan (`--color-secondary-accent`), UPPERCASE, letter-spacing: 0.12em, top-left position
- Hero headline: Space Grotesk 700–900, 5–7rem, UPPERCASE, letter-spacing: -0.02em. Use one of:
  - `BUILT FOR PRESSURE.`
  - `WHERE AMBITION COMPETES.`
  - `DREAMS DIRECTED.`
- Supporting line: Manrope 400, 1.1rem, `--color-on-surface-variant`, max 12 words
  - e.g. `Elite competition. Standout moments. A brand that plays to be remembered.`
- Headline may partially overlap the player cutout — this is intentional and expected

**CTAs (stacked vertically on desktop, single on mobile):**
- Primary: `EXPLORE THE TEAM` — `.ds-btn-primary`
- Secondary: `PARTNER WITH US` — `.ds-btn-ghost`

**Decorative elements:**
- Small Cyan performance chip: `RLCS 2026 · APAC` positioned near the eyebrow
- A thin diagonal line (1px, Cyan, 15% opacity) running from bottom-left to mid-right of hero — CSS-only, `::before` pseudo

**Mobile adaptation:**
- Player cutout moves behind text as a background layer at 20% opacity
- Headline reduces to 3rem
- Single CTA (`EXPLORE THE TEAM`) only
- Eyebrow and stat chip remain

---

#### SECTION 2: STAT BAR / TICKER

**Type:** Full-width marquee/ticker, Speed A→B transition zone

**Content:**
```
7× CHAMPIONS  /  RLCS 2026 ACTIVE  /  APAC CIRCUIT  /  EST. 2022  /  #ALWAYSDREAM  /
```

Content is configurable via `dreamstation.settings` metafield (`ticker_text`, pipe-separated).

**Style:**
- Background: `surface-container-low`
- Text: Space Grotesk 600, 0.75rem, `--color-on-surface-variant`, UPPERCASE, letter-spacing: 0.1em
- Slash separators: `--color-secondary-accent` (Cyan)
- CSS `animation: marquee linear infinite`, ~60s full cycle
- Duplicate content set inline to prevent gap
- `animation-play-state: paused` on hover
- Respects `prefers-reduced-motion`: if set, marquee is static, no animation

---

#### SECTION 3: CURRENT ROSTER

**Type:** Featured section, Speed A

**Heading:** `THE SQUAD` — Space Grotesk 700, display size, UPPERCASE
**Sub-label:** `RLCS 2026 · APAC REGION` — Cyan label-md above heading

**Layout:** Horizontal row of 3–4 player cards (responsive: 2-col on tablet, single horizontal scroll snap on mobile)

**Player Card Spec:**
- Background: `surface-container-high`
- Image: B&W high-contrast cutout, positioned to break out of card top edge (overflow: visible)
- Card frame: 0px border-radius. 15-degree diagonal accent element behind image (Cyan or Purple at 15% opacity)
- Player name: Space Grotesk 700, 1.4rem, UPPERCASE
- Role/position: Manrope 500, 0.75rem, `--color-secondary-accent` (Cyan), UPPERCASE
- Substitute: displays `SUB` performance chip
- Social links: minimal icon row (X, Twitch if applicable) — SVG icons, `on-surface-variant` default, Cyan on hover
- Hover state: `transform: translateY(-4px)`, `box-shadow: 0 0 30px rgba(107,78,245,0.2)`
- Transition: `0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- Data source: `dreamstation.player` metaobject, filtered `is_active = true`

**CTA below roster:** `VIEW FULL TEAM →` — Cyan label-md link, arrow animates right on hover

---

#### SECTION 4: COMPETITIVE PROOF

**Type:** Results showcase, Speed A→B

**Heading:** `COMPETITIVE RECORD` — Space Grotesk 700, UPPERCASE

**Layout:** Large featured result + supporting grid of smaller results

**Featured result block:**
- Background: `surface-container-low` with 15-degree diagonal top edge clip
- Large placement number: Space Grotesk 900, 6–8rem, `--color-primary` (#c8bfff), positioned offset and overlapping decoratively (not readable as primary text — presentational)
- Event name: Space Grotesk 700, 1.5rem, UPPERCASE, `--color-on-surface`
- Meta line: Cyan label-md — e.g. `1ST PLACE · CHAMPIONS ROAD 2025 · APAC`
- Prize line if applicable: Manrope 400, `on-surface-variant`
- Data source: `dreamstation.result` metaobject where `is_featured = true`, sorted by `event_date` descending

**Supporting result grid:** 3-column grid of smaller result chips
- Format: `[PLACEMENT BADGE]  [EVENT NAME]  [DATE / SEASON]`
- Zebra-striped with tonal shifts — no divider lines
- Maximum 6 results shown

**CTA:** `FULL RESULTS →` — Cyan label-md link

---

#### SECTION 5: CONTENT / SOCIAL PROOF

**Type:** Social integration, Speed A

**Heading:** `CULTURE IN MOTION` — Space Grotesk 700, UPPERCASE

**Layout:** Grid of 3 recent X posts + featured content creator card

**X posts integration:**
- Preferred: embed via X oEmbed API or Twitter widgets.js (Shopify-compatible)
- Fallback if embeds unavailable or blocked: static screenshot tiles with `@DreamstationGG` attribution and link to full post. Never show an empty grid.
- Post tiles: `surface-container-high` background, 0px radius, Cyan handle label

**Creator card:**
- Name, handle, platform icons (SVG)
- Platform stat (subscriber/follower count): Cyan label-md
- Optional: embedded video thumbnail with play icon overlay
- CTA: `VIEW CONTENT →` — ghost link
- Data source: `dreamstation.creator` metaobject, `is_active = true`

---

#### SECTION 6: SPONSOR SIGNAL

**Type:** Partner bar, Speed B

**Heading:** `OUR PARTNERS` — Space Grotesk 700, UPPERCASE (omit if using CTA fallback)

**Layout:** Horizontal logo row
- Logos: `filter: brightness(0) invert(1)` to force white rendering
- Default opacity: 0.5
- Hover: opacity 1.0, `transition: opacity 0.2s`
- Logos from `dreamstation.partner` metaobject filtered `is_active = true`, sorted by `display_order`

**If no active partners exist:** Replace the entire section with a CTA block:
- Heading: `PARTNER WITH DREAMSTATION`
- Sub-copy: `Naming rights available for the RLCS 2026 APAC roster. Join the station.`
- Button: `START THE CONVERSATION` — `.ds-btn-primary`
- Do not show empty logo placeholders or a "coming soon" grid. Either logos exist, or the CTA block shows.

---

#### SECTION 7: MERCH ENTRY

**Type:** Shop preview, Speed B

**Heading:** `WEAR THE STATION` — Space Grotesk 700, UPPERCASE

**Layout:** 2–3 featured product tiles using Shopify `product` objects from a `featured_merch` collection or metafield-linked products
- Product tile: image dominant (0px radius), product name, price
- `ADD TO CART` — `.ds-btn-primary` (triggers Shopify AJAX cart)
- Tile hover: subtle `translateY(-2px)` + ambient glow

**CTA:** `SHOP ALL →` — Cyan label-md link to `/collections/all`

---

### 6.2 TEAM PAGE

**Strategic objective:** Make each player feel like a feature-level subject. Reinforce org credibility through roster presentation quality.

**Template:** `templates/page.team.liquid`

**Header block:**
- Full-width Speed A header section
- Title: `THE TEAM` — oversized, Space Grotesk 900, diagonal background element
- Sub-label: `RLCS 2026 · APAC CIRCUIT` — Cyan label-md
- Grain overlay at 4%

**Roster grid:**
- Large featured cards, one per player
- Each card: full-height player image (B&W cutout), name, role, nationality flag (emoji or SVG), bio (2–3 sentences from metaobject), social links
- Cards arranged 3-up on desktop, 2-up on tablet, 1-col stack on mobile
- Substitute player: displayed with `SUB` performance chip, visually differentiated (slightly smaller card or positioned at end of grid)
- Data source: `dreamstation.player` metaobject, `is_active = true`, sorted alphabetically or by `join_date`

**Title/Titles section (below roster):**
- Compact display of all active and past titles the org has competed in
- Each entry: game title, region label, active/inactive status chip
- Current: Rocket League — RLCS 2026 APAC — `ACTIVE` chip (Cyan)
- Past: Valorant — `INACTIVE` chip (subdued, ghost styling)

---

### 6.3 RESULTS PAGE

**Strategic objective:** Prove competitive legitimacy through comprehensive, well-presented tournament history.

**Template:** `templates/page.results.liquid`

**Header:** Speed A — `COMPETITIVE RECORD`, sub-label `EST. 2022` Cyan label

**Featured achievements (top of page):**
- 3 large achievement tiles for standout results — pulled from metaobjects where `is_featured = true`
- Each: placement (oversized number 4–6rem, `--color-primary`), event name (Space Grotesk 700), date, prize if applicable

**Stat callout:**
- Pull-quote stat block: `$8,100+ DOCUMENTED PRIZE EARNINGS`
- Space Grotesk 700, large scale, `--color-primary`

**Full results table:**
- Columns: Placement / Event / Game / Region / Season / Date / Prize
- Default sort: most recent `event_date` first
- Year filter tabs: All / 2026 / 2025 / 2024 / Earlier — Space Grotesk 600, Cyan underline on active
- No divider lines — tonal zebra striping using `surface-container-low` / `surface` alternation
- Placement values rendered as performance chips (1st = green chip, top-4 = purple chip, other = default)
- External link icon on each row linking to Liquipedia or BLAST.tv (`external_link` metafield)
- Data source: `dreamstation.result` metaobject, all entries, sorted descending

---

### 6.4 PARTNERS PAGE

**Strategic objective:** Function as a pitch asset. Convert sponsors researching the org into outbound contacts.

**Template:** `templates/page.partners.liquid`

**Header:** Speed B — controlled, clean. Title: `PARTNER WITH DREAMSTATION`. Sub-label: `COMMERCIAL PARTNERSHIPS & SPONSORSHIP` — Cyan label-md

**Value proposition block:**
- 3–4 short proof pillars in a horizontal row (2-col on mobile):
  - `RLCS REGISTERED` — Brief descriptor: "Active in the world's premier Rocket League circuit."
  - `ACTIVE APAC ROSTER` — Brief descriptor: "Competing at the highest regional level, 2026 season."
  - `CONTENT ECOSYSTEM` — Brief descriptor: "Growing creator network driving content beyond match day."
  - `NAMING RIGHTS AVAILABLE` — Brief descriptor: "Attach your brand to the RLCS APAC roster." — This pillar gets a Cyan highlight chip and `naming_rights_available` conditional rendering

**Proof elements section:**
- Tournament results headline numbers — link to Results page for full detail
- Social presence: @DreamstationGG, platform icon, note on active content
- Creator network mention
- Viewership milestone: `1,185 PEAK VIEWERS — RLCS 2025 RALEIGH MAJOR`

**Partnership tier framing (conditional — label as "sample structure, confirm with client before publishing"):**
- 3 tiers: `SUPPORTER PARTNER` / `OFFICIAL PARTNER` / `NAMING RIGHTS`
- Each tier: 3–4 benefit bullets, tier-specific CTA

**Current partners logo grid:**
- White logos, hover brightens to 100% opacity
- If no current partners: omit section entirely — do not show empty state or placeholder logos

**Contact form:**
- Fields: Name / Organisation / Budget range (optional select: `< £1,000 / £1,000–£5,000 / £5,000+ / Prefer not to say`) / Message
- CTA: `START THE CONVERSATION` — `.ds-btn-primary`
- Input style: `surface-container-high` background, no border default, Cyan `border-bottom: 2px solid` on focus, 0px radius
- Form submission: Shopify native contact form or Shopify Forms app integration

---

### 6.5 ABOUT PAGE

**Strategic objective:** Establish the org as intentional, not accidental. Deliver the brand story in a way that sounds like a company with a point of view.

**Template:** `templates/page.about.liquid`

**Hero block:** Speed A header transitioning to Speed B body

**Brand story copy (approved draft):**
> Dreamstation was built around a simple idea — ambition means nothing unless it shows up under pressure. In esports, respect is earned through performance, consistency, and the moments people remember. Dreamstation exists to compete with intent, build with clarity, and turn vision into something visible: in the server, in the content, and in the culture around the team.

**Timeline section:**
- Vertical timeline on mobile, horizontal on desktop (scroll-triggered horizontal) — or vertical throughout for simplicity
- Key milestones:
  - 2022: Organisation founded
  - 2023–2024: European Rocket League roster era
  - Mid-2025: APAC pivot — Lokomotiv Esports roster acquired (ballerrees, LCT, Kevin)
  - 2025: Champions Road APAC — 1st place. Arctic Games Major — 1st place.
  - September 2025: Roster transition
  - November 2025: Fire force roster signed (Burn, Remoter, Elma, Ringo)
  - 2026: RLCS 2026 APAC circuit — active

**Mission / Vision / Belief block:**
- Three equal-weight blocks in a horizontal row (Speed B, clean)
- Mission: `To build a recognizable esports organization that earns respect through elite competition, standout moments, and a culture of visible ambition.`
- Vision: `To become a modern esports brand known not just for participating — but for competing at a level that makes Dreamstation impossible to ignore.`
- Belief: `Dreams only matter when they are executed.`

**Values grid:**
- 6-block grid: Performance / Excellence / Consistency / Ambition / Presence / Momentum
- Each block: value name Space Grotesk 700 UPPERCASE, brief 1-line descriptor in Manrope 400

---

### 6.6 CONTENT PAGE

**Strategic objective:** Demonstrate that Dreamstation is a living, active brand — not just a tournament entry. Surface the creator network and social presence.

**Template:** `templates/page.content.liquid`

**Header:** Speed A — `CULTURE IN MOTION` or `CONTENT` — Space Grotesk 900, oversized

**Creator cards section:**
- Grid of all active creators from `dreamstation.creator` metaobject (`is_active = true`)
- Each card: profile image, display name, platform label (Cyan chip), handle, subscriber/follower count in Cyan
- CTA per card: platform-specific link (YouTube, TikTok, Twitch)
- Fallback if no creators: display GroundZero000 as a single featured creator, centre-aligned

**Social / video feed section:**
- Embedded X feed (`@DreamstationGG`) or 3 featured post embeds
- Optional: embedded YouTube/TikTok video tiles with thumbnail preview and play icon
- Fallback if embeds unavailable: static tiles with platform attribution and link — never empty grid

**Match content section (optional — add when video VOD library exists):**
- Grid of match highlight thumbnails
- Each: thumbnail, match name, date label, `WATCH →` CTA

---

### 6.7 SHOP PAGE

**Strategic objective:** Extend brand world into commerce. Merch must feel like part of the brand, not an afterthought.

**Templates:** `templates/collection.liquid`, `templates/product.liquid`

**Collection page layout:**
- Speed B surface — no aggressive hero
- Page header: `WEAR THE STATION` — Space Grotesk 700
- Product grid: 3-col desktop, 2-col tablet, 1-col mobile
- Product tile: image dominant, name (Manrope 600), price (Manrope 400, `on-surface-variant`), `QUICK ADD` button on hover
- 0px border-radius on all tiles, buttons, and images
- Shopify `collection` object — standard product loop

**Product detail page:**
- Clean layout: product image left (large), product details right
- Title: Space Grotesk 700
- Price: large, prominent, Manrope 600
- Variant selector: 0px radius, tonal background, Cyan outline on selected state
- `ADD TO CART` button: `.ds-btn-primary`, full width on mobile
- Do not break default Shopify checkout flow

---

### 6.8 CONTACT PAGE

**Strategic objective:** Remove all friction from sponsor and press inquiries.

**Template:** `templates/page.contact.liquid`

**Header:** `GET IN TOUCH` — Space Grotesk 700, Speed B

**Form fields:**
- Name (required)
- Email (required)
- Organisation / Company (optional)
- Inquiry type: radio or select — `Partnership` / `Press` / `General`
- Message (required, textarea, min 10 chars)
- Submit: `SEND MESSAGE` — `.ds-btn-primary`

**Accessibility:** All form fields have associated `<label>` elements. Error states are announced to screen readers via `aria-describedby`.

**Additional contact block:**
- X handle: @DreamstationGG with icon and link
- Email address (if public — populate from `partnership_email` metafield)
- Response expectation: `We aim to respond within 48 hours.` — Manrope 400, `on-surface-variant`

---

### 6.9 404 PAGE

**Strategic objective:** Retain users who hit a broken URL. On-brand, no dead ends.

**Template:** `templates/404.liquid`

**Layout:**
- Speed B surface
- Large `404` — Space Grotesk 900, `--color-primary`, decorative scale (10–15rem)
- Headline: `YOU'VE LEFT THE STATION.`
- Sub-copy: `This page doesn't exist — but Dreamstation does. Head back.`
- CTA: `BACK TO HOME` — `.ds-btn-primary`
- Optional: small Cyan stat chip — `#ALWAYSDREAM`

---

## 7. COMPONENT LIBRARY

### 7.1 Global Navigation

```
[DREAMSTATION LOGO]    TEAM  RESULTS  CONTENT  PARTNERS  SHOP  CONTACT    [🛒]
```

```css
.ds-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: transparent;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.3s ease;
}
.ds-nav.scrolled {
  background: var(--color-surface-container-low);
}
```

- Link hover: Cyan `::after` underline slides in from left, `0.2s ease`
- Active: persistent Cyan underline
- Logo: inline SVG or optimised PNG, always white, `140px` width desktop / `100px` mobile

**Mobile hamburger overlay:**
- Trigger: hamburger icon (3 lines → X on open), top-right on mobile
- Overlay: full-screen `surface-container-highest` at 95% opacity, `backdrop-filter: blur(20px)`
- Links: stacked vertically, Space Grotesk 700, large (1.5rem)
- Closes on link click or Escape key
- Aria: `aria-expanded` on hamburger button, `role="navigation"` on overlay

### 7.2 Player Card

```
┌──────────────────────────────┐
│  [B&W player cutout]         │
│   ↑ overflows card top edge  │
│                              │
│  [15° diagonal burst behind] │
│                              │
│  PLAYER NAME       [role]    │
│  [x] [twitch]               │
└──────────────────────────────┘
```

```css
.ds-player-card {
  background: var(--color-surface-container-high);
  border-radius: 0px;
  overflow: visible;
  position: relative;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.ds-player-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(107, 78, 245, 0.2);
}
.ds-player-card__image {
  overflow: visible;
  margin-top: -2rem; /* bleeds above card */
}
```

### 7.3 Result Chip / Stat Block

```
[1ST]  CHAMPIONS ROAD 2025 · APAC  ·  $3,000
```

- Placement badge: `.ds-chip` variant (green for 1st, purple for top-4)
- Event name: Manrope 500, `on-surface`
- Metadata (date, prize): Cyan label-md, `on-surface-variant`

### 7.4 Performance Chip

See Section 4.8 for full spec and CSS.

### 7.5 Section Divider (15°)

```css
.ds-clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
}
.ds-clip-top {
  clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
}
```

Always use padding-bottom on the clipped section to prevent content being cut off.

### 7.6 Ticker / Marquee

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.ds-ticker__track {
  display: flex;
  width: max-content;
  animation: marquee 60s linear infinite;
}
.ds-ticker__track:hover {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .ds-ticker__track { animation: none; }
}
```

Duplicate content set inline to prevent gap during loop.

### 7.7 Sponsor Logo Bar

```css
.ds-sponsor-logo {
  filter: brightness(0) invert(1);
  opacity: 0.5;
  transition: opacity 0.2s ease;
}
.ds-sponsor-logo:hover { opacity: 1.0; }
```

Layout: `display: flex; gap: 3rem; align-items: center; flex-wrap: wrap;`

### 7.8 Input Fields

```css
.ds-input {
  background: var(--color-surface-container-high);
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  color: var(--color-on-surface);
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  transition: border-color 0.2s ease;
}
.ds-input::placeholder {
  color: rgba(255,255,255,0.4);
}
.ds-input:focus {
  outline: none;
  border-bottom-color: var(--color-secondary-accent);
}
.ds-input.error {
  border-bottom-color: var(--color-error);
}
```

---

## 8. MOTION & INTERACTION SYSTEM

### 8.1 Core Principles

Motion must feel **fast, precise, and controlled**. No slow fades. No floaty animations. No delayed entrances that make the page feel unloaded.

Motion communicates: performance, confidence, precision.

All animations must respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.2 Timing & Easing

| Use | Duration | Easing |
|---|---|---|
| Hover micro-interactions | `0.15s` | `ease-out` |
| Standard transitions | `0.2s` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Page element entrance | `0.3s` | `cubic-bezier(0.0, 0, 0.2, 1)` |
| Section transitions | `0.4s` | `cubic-bezier(0.4, 0, 0.2, 1)` |

Maximum animation duration: **400ms**. If it takes longer than 400ms, cut it.

### 8.3 Hover States

| Element | Hover Behaviour |
|---|---|
| Nav links | Cyan underline slides in from left via `::after` transform |
| Primary buttons | Purple glow `box-shadow` activates |
| Cyan buttons | Cyan glow activates |
| Player cards | `translateY(-4px)` + purple glow shadow |
| Sponsor logos | Opacity 0.5 → 1.0 |
| Ghost buttons | Background fills with `rgba(107,78,245,0.15)` |
| Social icons | Cyan fill |
| Result rows | `surface-container-high` background tint |

### 8.4 Scroll Animations

All major content elements enter on scroll via **IntersectionObserver** — no scroll event listeners.

```css
.ds-animate-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ds-animate-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.ds-animate-in').forEach(el => observer.observe(el));
```

- Max translate: `20px` — never more
- Grid item stagger: 50ms `transition-delay` per item (`nth-child` rule)
- Do not re-trigger on scroll back up — `observer.unobserve()` after first fire

### 8.5 Prohibited Motion

- No slow fades (> 400ms)
- No floating or bounce easing
- No parallax on text — background parallax layers only, max 20% speed difference
- No animated backgrounds on Speed B surfaces
- No scroll event listeners — IntersectionObserver only
- No GSAP, Lenis, or Three.js

---

## 9. DATA ARCHITECTURE & SHOPIFY SCHEMA

### 9.1 System Overview

All dynamic content (roster, results, partners) must be driven by **Shopify Metaobjects**. No hardcoded player names, event results, or partner logos in Liquid templates. This allows non-developer updates through the Shopify admin.

### 9.2 Metaobject: Player

```
namespace: dreamstation.player

fields:
  - handle (text, required)               → player_handle (used in Liquid as unique identifier)
  - display_name (text, required)         → player_name
  - role (text, required)                 → e.g. "Attacker", "Midfielder", "Substitute"
  - nationality (text)                    → ISO 3166-1 alpha-2 country code (e.g. "JP", "ID")
  - bio (multiline text)                  → 2-3 sentence player bio
  - photo (file: image)                   → B&W cutout PNG, transparent background
  - twitter_url (url)
  - twitch_url (url)
  - is_active (boolean, required)         → show/hide on team page
  - is_substitute (boolean)               → renders SUB chip; treated as secondary position in grid
  - join_date (date)
```

### 9.3 Metaobject: Result

```
namespace: dreamstation.result

fields:
  - event_name (text, required)
  - placement (text, required)            → "1st", "3rd–4th", "13th–16th"
  - placement_number (number)             → for sorting (1, 3, 13)
  - region (text)                         → e.g. "APAC", "EU"
  - game_title (text)                     → "Rocket League", "Valorant"
  - season (text)                         → "RLCS 2025", "RLCS 2026"
  - event_date (date, required)
  - prize_usd (number)                    → numeric value only; format as currency in template
  - is_featured (boolean)                 → surface on homepage and as featured tile on Results page
  - external_link (url)                   → Liquipedia or BLAST.tv event link
```

### 9.4 Metaobject: Partner

```
namespace: dreamstation.partner

fields:
  - partner_name (text, required)
  - logo (file: image, required)          → SVG or PNG, white version on transparent bg
  - website_url (url)
  - tier (text)                           → "naming_rights" | "official" | "supporter"
  - is_active (boolean)
  - display_order (number)               → lower numbers appear first
```

### 9.5 Metaobject: Content Creator

```
namespace: dreamstation.creator

fields:
  - display_name (text, required)
  - platform (text)                       → "YouTube" | "TikTok" | "Twitch" | "X"
  - handle (text)
  - profile_url (url)
  - subscriber_count (text)               → display string: "12.4K" — not a number, formatted manually
  - profile_image (file: image)
  - joined_date (date)
  - is_active (boolean)
```

### 9.6 Global Settings Metafields

```
namespace: dreamstation.settings

fields:
  - active_season (text)                  → "RLCS 2026"
  - active_region (text)                  → "APAC"
  - active_game (text)                    → "Rocket League"
  - naming_rights_available (boolean)     → shows/hides naming rights callout on partners page and footer strip
  - partnership_email (email)
  - ticker_text (multiline text)          → pipe-separated ticker items: "7× CHAMPIONS|RLCS 2026 ACTIVE|..."
```

### 9.7 Shopify Section Schema (Example: Roster Section)

```json
{
  "name": "Roster Feature",
  "settings": [
    {
      "type": "text",
      "id": "section_heading",
      "label": "Section Heading",
      "default": "THE SQUAD"
    },
    {
      "type": "select",
      "id": "game_filter",
      "label": "Filter by game",
      "options": [
        { "value": "all", "label": "All" },
        { "value": "rocket_league", "label": "Rocket League" }
      ],
      "default": "all"
    },
    {
      "type": "checkbox",
      "id": "show_substitutes",
      "label": "Show substitutes",
      "default": true
    }
  ]
}
```

---

## 10. CONTENT REQUIREMENTS

### 10.1 Required Before Build Starts

| Content | Owner | Status |
|---|---|---|
| Dreamstation logo — SVG white version | Client | **Needed** |
| Player photos — B&W cutout PNGs (transparent bg, min 800px height) | Client | **Needed** |
| Partner logos — white SVG versions | Client | If applicable |
| Player bios (2–3 sentences each, Burn / Remoter / Elma / Ringo) | Client | **Needed** |
| Player social handles (X, Twitch if applicable) | Client | **Needed** |
| Brand story / About copy approval | Review against PRD draft | Review needed |
| Partnership email address | Client | **Needed** |
| Featured merch products (which products to highlight on homepage) | Shopify admin | Existing |
| Noise texture asset — `noise.png` (200×200px PNG, tileable, < 10KB) | Developer to create | Create at build start |

### 10.2 Pre-populated Content (Seed at Build Time)

Verified public data that can be entered into metaobjects at build time. Confirm with client before making live.

| Content | Source | Notes |
|---|---|---|
| Current roster: Burn, Remoter, Elma, Ringo (sub) | Liquipedia | Verify with client |
| Result: 1st — Champions Road 2025 APAC ($3,000) | Esports Earnings | Verified |
| Result: 1st — Arctic Games Championship Series Major | Liquipedia | Verify prize amount |
| Result: 3rd–4th — RLCS 2025 Raleigh Major APAC Open 5 | BLAST.tv | Verified |
| Result: 5th–6th — RLCS 2025 Raleigh Major APAC Open 6 | BLAST.tv | Verified |
| Result: 13th–16th — RLCS 2026 APAC Open 3 ($600) | Liquipedia | Verified |
| Content creator: GroundZero000 (joined Aug 2025) | X post | Verify current active status |

### 10.3 Copywriting Tone Reference

Test all copy against these two columns:

| Off-Brand | On-Brand |
|---|---|
| We are excited to announce our next match. | Next up. Time to prove it. |
| We always strive for excellence. | Standards stay high. |
| We hope to make our supporters proud. | Built to give our supporters something worth backing. |
| Check out our new partnership announcement. | New allies. Same standards. |
| Welcome to the Dreamstation family. | Dreamstation. Where ambition competes. |

**Language to use:** elite, performance, standards, ambition, pressure, momentum, legacy, execute, compete, prove, precision, rise, impact, recognized, built for more.

**Language to avoid:** family, wholesome, cozy, casual, fun-first, vibes, luxury (without proof).

---

## 11. SEO & METADATA

### 11.1 Core Keyword Targets

All page titles, meta descriptions, H1s, and body copy should include relevant combinations of:

- `Dreamstation esports organization`
- `Dreamstation Rocket League`
- `Dreamstation APAC` / `Dreamstation RLCS`
- `Dreamstation roster`
- `Dreamstation results`
- `Dreamstation sponsors / partnerships`
- `Dreamstation merch / shop`

### 11.2 Page Meta Specifications

| Page | Title Tag | Meta Description |
|---|---|---|
| Home | `Dreamstation Esports — Where Ambition Competes` | Performance-first esports org competing in RLCS 2026 APAC. Built for elite competition, standout moments, and visible ambition. |
| Team | `Team — Dreamstation Esports \| RLCS 2026 APAC Roster` | Meet the Dreamstation Rocket League roster competing in RLCS 2026 APAC. |
| Results | `Results — Dreamstation Esports \| Tournament History` | Dreamstation competitive record: RLCS placements, tournament results, and prize history. |
| Partners | `Partner with Dreamstation Esports \| Sponsorship` | Commercial partnerships and sponsorship opportunities with Dreamstation Esports. Naming rights available for RLCS 2026 APAC roster. |
| About | `About Dreamstation Esports — Our Story` | Founded in 2022. Built around the belief that dreams only matter when they are executed. |
| Content | `Content — Dreamstation Esports \| Creators & Culture` | Dreamstation content creators, highlights, and the culture driving the brand beyond match day. |
| Contact | `Contact Dreamstation Esports` | Get in touch with Dreamstation Esports for partnership, press, and general enquiries. |

### 11.3 Structured Data

Implement `SportsOrganization` schema via JSON-LD in `snippets/ds-seo.liquid` on all pages:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "name": "Dreamstation Esports",
  "url": "https://dreamstationesports.com",
  "sameAs": [
    "https://twitter.com/DreamstationGG",
    "https://x.com/DreamstationGG"
  ],
  "sport": "Esports",
  "foundingDate": "2022"
}
```

### 11.4 Open Graph & Social

```html
<meta property="og:title" content="{{ page_title }}">
<meta property="og:description" content="{{ page_description }}">
<meta property="og:image" content="{{ 'og-default.jpg' | asset_url }}">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@DreamstationGG">
```

`og-default.jpg` — a 1200×630px branded social card image — is a required asset.

---

## 12. ACCESSIBILITY REQUIREMENTS

These are non-negotiable. The site must meet WCAG 2.1 AA standard.

### 12.1 Colour Contrast

- All body text (`--color-on-surface-variant` on `--color-surface`) must meet 4.5:1 contrast ratio minimum
- Large text (18px+ or 14px+ bold) must meet 3:1 minimum
- Cyan label text (`#00D4E8` on `#131315`) — check contrast; supplement with Manrope 600 weight if ratio is borderline
- Interactive elements (buttons, links) must have visible focus states at all times

### 12.2 Focus States

All interactive elements must have a visible focus style. Default browser outline is not acceptable. Use:

```css
:focus-visible {
  outline: 2px solid var(--color-secondary-accent);
  outline-offset: 2px;
}
```

Remove default outline only when custom `:focus-visible` is present.

### 12.3 Keyboard Navigation

- Navigation must be fully operable by keyboard
- Mobile nav overlay must trap focus when open
- Escape key closes mobile nav overlay
- Tab order must follow visual reading order

### 12.4 Semantic HTML

- All page sections use appropriate landmark elements: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`
- All images have `alt` attributes — player photos: player name + role; decorative elements: `alt=""`
- Form fields have associated `<label>` elements
- Buttons have descriptive text or `aria-label`
- Performance chips include screen-reader-accessible text (e.g. `<span class="sr-only">Win</span>` alongside `[W]`)

### 12.5 Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```

---

## 13. PERFORMANCE REQUIREMENTS

### 13.1 Core Web Vitals Targets

| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay / INP | < 200ms |
| Total Blocking Time (TBT) | < 300ms |

### 13.2 Asset Rules

- Hero images: WebP, max 400KB, `loading="eager"`, `fetchpriority="high"`
- All other images: WebP, `loading="lazy"`, Shopify CDN served
- Player cutouts: PNG with transparency (WebP where alpha channel supported), max 200KB per image
- SVG logos: inline where possible to avoid extra HTTP requests
- Fonts: Preload `Space Grotesk 700` and `Manrope 400`, use `font-display: swap`
- `og-default.jpg`: JPG, max 200KB
- `noise.png`: PNG-8, max 10KB

### 13.3 JavaScript Rules

- No GSAP, Lenis, Three.js, or any animation library
- No external JS dependencies beyond Shopify's native scripts
- All scroll animations via IntersectionObserver — no scroll event listeners
- Ticker implemented in CSS `animation` only — no JS for the animation itself
- Total JS bundle (custom `dreamstation.js`): target < 50KB gzipped

### 13.4 Shopify Performance Specifics

- Use `{% render %}` over `{% include %}` for all partials
- Lazy-load all non-hero section images via `loading="lazy"` attribute
- Use Shopify image CDN transforms: `| image_url: width: 800` for all product and player images
- Defer all non-critical scripts with `async` or `defer`
- Avoid rendering blocking resources in `<head>` beyond font preloads and critical CSS

---

## 14. SHOPIFY CONSTRAINTS & IMPLEMENTATION RULES

### 14.1 Theme Architecture

- All sections use Shopify's native section/block schema system
- Custom CSS lives in `assets/dreamstation.css` — no inline `<style>` blocks in Liquid
- Custom JS lives in `assets/dreamstation.js` — no inline `<script>` blocks except Shopify schema JSON (`{% schema %}`)
- Snippets: `ds-[component-name].liquid`
- Sections: `ds-[section-name].liquid`
- Templates: standard Shopify naming (`index.liquid`, `page.[handle].liquid`, `collection.liquid`, `product.liquid`, `404.liquid`)

### 14.2 Dynamic Content Rules

- Roster: rendered from `dreamstation.player` metaobjects via Liquid `{% for %}` loop
- Results: rendered from `dreamstation.result` metaobjects, sorted by `event_date` descending
- Partners: rendered from `dreamstation.partner` metaobjects, filtered `is_active = true`
- No content hardcoded directly in Liquid templates — placeholder/fallback states for empty metaobject lists only

### 14.3 Commerce Integration

- Shop uses standard Shopify `product` and `collection` objects
- Cart: standard Shopify AJAX cart API
- Product pages inherit Kinetic Apex styling — 0px radius, dark surfaces, Cyan CTAs
- Do not break default Shopify checkout flow
- Do not override `{{ content_for_header }}` or `{{ content_for_layout }}` in `theme.liquid`

### 14.4 Shopify Theme Limitations to Respect

- No `<canvas>` or WebGL — not reliable in Shopify's rendering environment
- Avoid CSS `@layer` — limited cross-browser support
- **Always test all CSS `clip-path` usage on Safari** — add `-webkit-clip-path` fallbacks on every instance
- Custom fonts loaded via Google Fonts CDN (not self-hosted unless licensed)
- Do not use `skewY()` or `skewX()` on containers — use `clip-path` polygon only
- Liquid's `metaobject` API requires Shopify 2.0 theme structure — confirm store is on a 2.0-compatible plan

---

## 15. ANTI-GOALS & NON-NEGOTIABLES

### 15.1 What This Website Must Never Be

| Anti-Goal | Reason |
|---|---|
| Generic Shopify Dawn template with esports graphics pasted on | Destroys brand credibility instantly |
| Soft, rounded, SaaS-style UI | Wrong archetype — Dreamstation is The Ruler, not a productivity app |
| Rounded corners anywhere | 0px border-radius is a structural identity rule |
| Standard drop shadows | Too soft — use tonal layering and ambient glow only |
| Flat single-colour hero backgrounds | Kills the depth and broadcast energy |
| Horizontal divider lines between sections | Use tonal shifts only |
| 100% white body text | Always `on-surface-variant` — never pure white |
| Slow animations (> 400ms) | Signals sluggishness — antithetical to the brand |
| Colours outside the defined palette | No improvised accent colours |
| Sponsors section with empty logo placeholders | Either populate it or replace with a CTA — never show an empty grid |
| Copy that sounds "excited" or "hopeful" | Dreamstation sounds confident, not aspirational |
| `skewY()` or `skewX()` on layout containers | Causes child content distortion — use `clip-path` only |
| GSAP, Lenis, Three.js or any animation library | Performance and bundle size — vanilla CSS/JS only |
| Hardcoded player names or results in Liquid templates | Content must come from metaobjects only |
| Missing 404 page | Every URL path must resolve to an on-brand experience |
| Non-accessible focus states | WCAG 2.1 AA compliance is required |

### 15.2 Non-Negotiable Design Rules (Summary)

1. **0px border-radius everywhere** — no exceptions
2. **No 1px solid borders for structure** — tonal shifts only (Ghost Border Fallback permitted on Speed B data tables only)
3. **15-degree diagonal framing** via `clip-path` on all Speed A major layout splits — include `-webkit-clip-path`
4. **Grain overlay** on all Speed A surface backgrounds (3–5% opacity) via `::after` pseudo-element
5. **Space Grotesk for display** / **Manrope for body** — no other fonts
6. **Cyan is for interaction and metadata only** — not decorative fill
7. **All roster/results/partner data driven by metafields** — no hardcoded content in templates
8. **No animation longer than 400ms** — and all motion respects `prefers-reduced-motion`
9. **Two-Speed system respected** — Speed B surfaces carry no diagonal splits and minimal grain
10. **`-webkit-clip-path` alongside every `clip-path`** — Safari compatibility required
11. **Accessible focus states on all interactive elements** — `outline: 2px solid Cyan`
12. **Footer present on all pages** — including 404

---

## 16. GLOSSARY

| Term | Definition |
|---|---|
| Kinetic Apex | The design system codename for this project — controlled-aggressive editorial esports aesthetic |
| Speed A | Hype surfaces — full brand energy, diagonal framing, grain, bold typography |
| Speed B | Controlled surfaces — readable, credible, stripped-back version of the design language |
| The Void | `#131315` — the base background colour |
| 15-Degree Rule | Structural rule requiring all major Speed A containers and splits to use 15-degree diagonal shear via `clip-path` |
| Performance Chip | Small rectangular status indicator (0px radius) for LIVE / W / L / SUB / UPCOMING states |
| Ghost Border Fallback | `1px solid rgba(255,255,255,0.15)` — only permitted on Speed B high-density data views |
| Tonal Layering | Elevation expressed through dark-tone colour shifts, not shadows |
| Ambient Glow | `box-shadow: 0 0 40px rgba(107, 78, 245, 0.06)` — mimics LED screen ambient glow |
| Metaobject | Shopify's custom content type system — used for players, results, partners, and creators |
| Naming Rights | Sponsorship tier where a brand's name is attached to the Dreamstation RLCS roster designation |
| RLCS | Rocket League Championship Series — the premier Rocket League competitive circuit |
| APAC | Asia-Pacific — Dreamstation's current competitive region in RLCS 2026 |
| `.sr-only` | Screen-reader-only utility class — visually hidden but accessible to assistive technology |

---

*Document prepared: March 2026 — Version 2.0*  
*Paired with: `dreamstation_brand_positioning_v2.pdf` and `dreamstation_gemini_orchestrator_prompt_v2.md`*  
*Build target: dreamstationesports.com — Shopify custom Liquid theme*
