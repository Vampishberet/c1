# DREAMSTATION ESPORTS — CLAUDE CODE INSTRUCTIONS
**v3.0 · March 2026 · Read this entire file before writing any code.**

---

## 1. PROJECT

| | |
|---|---|
| Client | Dreamstation Esports — dreamstationesports.com |
| Platform | Fully custom Shopify Liquid theme. No third-party base. |
| Design system | Kinetic Apex |
| Objective | Build a website that makes Dreamstation impossible to ignore: elite in posture, electric in presentation, credible to sponsors within 10 seconds of landing. |
| Spec doc | `dreamstation_website_PRD_v2.md` — authoritative reference for all page and section detail |

**Org seed data:**
- Founded 2022 · RLCS 2026 APAC (Rocket League) · Roster: Burn, Remoter, Elma + Ringo (sub)
- Results: 1st Champions Road 2025 APAC · 1st Arctic Games Major · Raleigh Major appearances · ~$8,100 earned
- Seeking naming rights sponsor · Creator: GroundZero000 (joined Aug 2025)

---

## 2. TECH STACK — HARD RULES

**Allowed:** Vanilla Shopify Liquid · HTML5 · CSS3 · ES6+ JS · Google Fonts CDN

**Banned — no exceptions:**
- Build tools: Webpack, Vite, Rollup, or any bundler
- Libraries: Tailwind, Bootstrap, GSAP, Lenis, Three.js, React, Vue, jQuery, Anime.js
- `<canvas>` or WebGL · CSS `@layer`
- `window.addEventListener('scroll')` for animations — use `IntersectionObserver` only
- `skewY()` or `skewX()` on containers — use `clip-path` only
- `{% include %}` — use `{% render %}` only
- Inline `<style>` or `<script>` in `.liquid` files (exception: `{% schema %}`)
- Hardcoded player names, results, or partner data — metaobjects only

**File conventions:**
```
sections/  → ds-[section-name].liquid
snippets/  → ds-[component-name].liquid
assets/    → dreamstation.css · dreamstation.js · noise.png · og-default.jpg
templates/ → index.liquid · page.[handle].liquid · collection.liquid · product.liquid · 404.liquid
```

---

## 3. DESIGN SYSTEM: KINETIC APEX

Challenger esports brand. Elite, controlled aggression, performance. Not SaaS. Not a community hub.

### 3.1 CSS Tokens — paste into `:root` in `assets/dreamstation.css`

```css
:root {
  /* Surfaces */
  --color-surface:                   #131315;
  --color-surface-container-low:     #1a1a1d;
  --color-surface-container-high:    #222226;
  --color-surface-container-highest: #2a2a2f;

  /* Brand */
  --color-primary:           #c8bfff;   /* light purple — decorative numbers, highlights */
  --color-primary-container: #6B4EF5;   /* deep purple — hero, primary CTAs */
  --color-secondary:         #60edff;   /* cyan hover */
  --color-secondary-accent:  #00D4E8;   /* cyan — chips, metadata, focus rings */

  /* Text — NEVER #FFFFFF or #000000 */
  --color-on-surface:         rgba(255,255,255,0.87);
  --color-on-surface-variant: rgba(255,255,255,0.6);

  /* Utility */
  --color-error: #FF4D4D;
  --color-win:   #22C55E;

  /* Glows — replace all standard box-shadows */
  --glow-ambient:  0 0 40px rgba(107,78,245,0.06);
  --glow-primary:  0 0 24px rgba(107,78,245,0.5);
  --glow-cyan:     0 0 24px rgba(0,212,232,0.4);
  --glow-card:     0 0 30px rgba(107,78,245,0.2);
}
```

### 3.2 Typography

| Role | Font | Weight | Size | CSS |
|---|---|---|---|---|
| Display / Hero | Space Grotesk | 700–900 | 3.5–7rem | `uppercase; letter-spacing: -0.02em` |
| Headline | Space Grotesk | 700 | 2–3rem | `uppercase` |
| Title | Manrope | 600 | 1.25–1.5rem | Sentence case |
| Body | Manrope | 400 | 1rem min | `line-height: 1.6` |
| Label / Meta | Manrope | 500 | 0.75rem | `color: var(--color-secondary-accent); uppercase; letter-spacing: 0.08em` |
| CTA | Space Grotesk | 700 | 0.875rem | `uppercase; letter-spacing: 0.08em` |

Body copy always uses `--color-on-surface-variant`. Cyan labels are metadata only (stats, chips, tournament names). Display headers may bleed off-canvas or overlap imagery intentionally. Min size: 16px.

**Font loading — in `<head>` of `layout/theme.liquid`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Manrope:wght@400;500;600&display=swap">
```

### 3.3 The 15-Degree Rule

`clip-path: polygon()` only for all diagonal splits. Always `-webkit-clip-path` alongside every `clip-path`. Always add compensating padding.

```css
.ds-clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%);
  padding-bottom: 64px;
}
.ds-clip-top {
  clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  padding-top: 64px;
}
.ds-clip-image {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

Applies to: Speed A hero splits, section transitions, player card masks, decorative accents.
Does NOT apply to: Speed B pages, forms, nav, footer.

### 3.4 Two-Speed System

| Speed A — Hype | Speed B — Business |
|---|---|
| Home, Team, Content | About, Results, Partners, Shop, Contact, 404 |
| 15° clip-path on splits | Straight horizontal edges only |
| Grain 3–5% opacity | No grain or max 2% |
| Display type 3.5rem+ | Headlines 2–3rem |
| Radial purple/cyan bg | Flat `--color-surface` bg |

### 3.5 Grain (Speed A surfaces only)

Asset: `assets/noise.png` — 200×200px PNG-8, <10KB.

```css
.ds-surface { position: relative; }
.ds-surface::after {
  content: ''; position: absolute; inset: 0;
  background-image: url('{{ "noise.png" | asset_url }}');
  background-size: 200px 200px; opacity: 0.03;
  pointer-events: none; z-index: 0;
}
.ds-surface > * { position: relative; z-index: 1; }
```

### 3.6 Elevation & Glass

No drop shadows. Use tonal surface shifts for hierarchy.  
Floating elements: `box-shadow: var(--glow-ambient)`  
Glass panels (nav, overlays): `background: rgba(19,19,21,0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);`

---

## 4. COMPONENTS

All CSS in `assets/dreamstation.css`. All classes `ds-` prefixed. BEM: `ds-block__element--modifier`.

### Buttons — 0px border-radius, no exceptions

```css
.ds-btn-primary, .ds-btn-ghost, .ds-btn-cyan {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 0; font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.08em;
  padding: 0.875rem 1.75rem; cursor: pointer; text-decoration: none;
  transition: box-shadow 0.2s cubic-bezier(0.4,0,0.2,1);
}
.ds-btn-primary { background: linear-gradient(15deg,#6B4EF5,#c8bfff); color: var(--color-surface); border: none; }
.ds-btn-primary:hover { box-shadow: var(--glow-primary); }

.ds-btn-ghost { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: var(--color-on-surface); transition: background 0.2s cubic-bezier(0.4,0,0.2,1), border-color 0.2s; }
.ds-btn-ghost:hover { background: rgba(107,78,245,0.15); border-color: rgba(255,255,255,0.4); }

.ds-btn-cyan { background: linear-gradient(15deg,#00D4E8,#60edff); color: var(--color-surface); border: none; }
.ds-btn-cyan:hover { box-shadow: var(--glow-cyan); }

.ds-btn-primary:focus-visible,
.ds-btn-ghost:focus-visible,
.ds-btn-cyan:focus-visible { outline: 2px solid var(--color-secondary-accent); outline-offset: 2px; }
```

### Performance Chips

```css
.ds-chip {
  display: inline-flex; align-items: center; padding: 0.25rem 0.5rem; border-radius: 0;
  font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 0.75rem;
  text-transform: uppercase; letter-spacing: 0.08em; line-height: 1;
  background: rgba(107,78,245,0.2); border: 1px solid rgba(107,78,245,0.4);
  color: var(--color-secondary-accent);
}
.ds-chip--live, .ds-chip--upcoming { border-color: #00D4E8; color: #00D4E8; background: rgba(0,212,232,0.1); }
.ds-chip--win    { border-color: #22C55E; color: #22C55E; background: rgba(34,197,94,0.1); }
.ds-chip--loss   { border-color: #FF4D4D; color: #FF4D4D; background: rgba(255,77,77,0.1); }
.ds-chip--sub    { border-color: rgba(107,78,245,0.6); color: var(--color-primary); }
.ds-chip--inactive { border-color: rgba(255,255,255,0.2); color: var(--color-on-surface-variant); }
```

Always pair with `.sr-only` for screen readers:
```html
<span class="ds-chip ds-chip--win" aria-hidden="true">W</span>
<span class="sr-only">Win</span>
```

### Player Card

```css
.ds-player-card {
  background: var(--color-surface-container-high); border-radius: 0; overflow: visible; position: relative;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1);
}
.ds-player-card:hover { transform: translateY(-4px); box-shadow: var(--glow-card); }
.ds-player-card__image-wrap { overflow: visible; margin-top: -2rem; position: relative; z-index: 1; }
.ds-player-card__image { display: block; width: 100%; filter: grayscale(100%) contrast(1.1); }
.ds-player-card__image-placeholder { width: 100%; aspect-ratio: 3/4; background: var(--color-surface-container-highest); }
.ds-player-card__accent {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(15deg,rgba(107,78,245,0.15),transparent);
  clip-path: polygon(0 0,100% 0,100% 70%,0 100%);
  -webkit-clip-path: polygon(0 0,100% 0,100% 70%,0 100%);
}
.ds-player-card__name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.4rem; text-transform: uppercase; color: var(--color-on-surface); margin: 0 0 0.25rem; }
.ds-player-card__role { font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary-accent); margin: 0 0 0.75rem; }
.ds-player-card__social-link { color: var(--color-on-surface-variant); transition: color 0.15s ease-out; }
.ds-player-card__social-link:hover,
.ds-player-card__social-link:focus-visible { color: var(--color-secondary-accent); outline: 2px solid var(--color-secondary-accent); outline-offset: 2px; }
```

### Input Fields

```css
.ds-label { display: block; font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-on-surface-variant); margin-bottom: 0.5rem; }
.ds-input {
  display: block; width: 100%; background: var(--color-surface-container-high);
  border: none; border-bottom: 2px solid transparent; border-radius: 0;
  color: var(--color-on-surface); font-family: 'Manrope', sans-serif; font-size: 1rem;
  padding: 0.75rem 1rem; transition: border-color 0.2s ease; appearance: none;
}
.ds-input::placeholder { color: rgba(255,255,255,0.4); }
.ds-input:focus { outline: none; border-bottom-color: var(--color-secondary-accent); }
.ds-input:focus-visible { outline: 2px solid var(--color-secondary-accent); outline-offset: 2px; }
.ds-input.is-error { border-bottom-color: var(--color-error); }
.ds-field { margin-bottom: 1.5rem; }
.ds-error-message { font-family: 'Manrope', sans-serif; font-size: 0.75rem; color: var(--color-error); margin-top: 0.375rem; }
```

### Navigation

```css
.ds-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 64px;
  display: flex; align-items: center; justify-content: space-between; padding: 0 2rem;
  background: transparent; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: background 0.3s ease;
}
.ds-nav.is-scrolled { background: var(--color-surface-container-low); }
.ds-nav__link {
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 0.8125rem;
  text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-on-surface-variant);
  text-decoration: none; position: relative; padding-bottom: 4px;
}
.ds-nav__link::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
  background: var(--color-secondary-accent); transform: scaleX(0); transform-origin: left;
  transition: transform 0.2s ease;
}
.ds-nav__link:hover::after,
.ds-nav__link[aria-current="page"]::after { transform: scaleX(1); }
.ds-nav__link:focus-visible { outline: 2px solid var(--color-secondary-accent); outline-offset: 4px; }
```

Nav scroll JS — place `<div id="ds-nav-sentinel"></div>` at top of `<main>`:
```javascript
const nav = document.querySelector('.ds-nav');
const sentinel = document.getElementById('ds-nav-sentinel');
if (nav && sentinel)
  new IntersectionObserver(([e]) => nav.classList.toggle('is-scrolled', !e.isIntersecting), { threshold: 0 }).observe(sentinel);
```

### Ticker / Marquee

```css
.ds-ticker { background: var(--color-surface-container-low); overflow: hidden; padding: 0.75rem 0; }
.ds-ticker__track { display: inline-flex; width: max-content; animation: ds-marquee 60s linear infinite; }
.ds-ticker__track:hover { animation-play-state: paused; }
.ds-ticker__item { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-on-surface-variant); padding: 0 1.5rem; }
.ds-ticker__separator { color: var(--color-secondary-accent); }
@keyframes ds-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .ds-ticker__track { animation: none; } }
```

Ticker content must be **duplicated in HTML** for seamless loop. Read from `dreamstation_settings.ticker_text` (pipe-separated), render the full set twice.

### Sponsor Logo Bar

```css
.ds-sponsor-bar { display: flex; align-items: center; flex-wrap: wrap; gap: 3rem; justify-content: center; }
.ds-sponsor-bar__logo { filter: brightness(0) invert(1); opacity: 0.5; max-height: 40px; transition: opacity 0.2s ease; }
.ds-sponsor-bar__logo:hover { opacity: 1; }
```

### Scroll Animation

```css
.ds-animate-in { opacity: 0; transform: translateY(20px); transition: opacity 0.3s ease, transform 0.3s ease; }
.ds-animate-in.is-visible { opacity: 1; transform: translateY(0); }
.ds-grid .ds-animate-in:nth-child(2) { transition-delay: 50ms; }
.ds-grid .ds-animate-in:nth-child(3) { transition-delay: 100ms; }
.ds-grid .ds-animate-in:nth-child(4) { transition-delay: 150ms; }
@media (prefers-reduced-motion: reduce) { .ds-animate-in { opacity: 1; transform: none; transition: none; } }
```

```javascript
document.querySelectorAll('.ds-animate-in').forEach(el =>
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); }
  }, { threshold: 0.15 }).observe(el)
);
```

### Global utilities — add at end of `dreamstation.css`

```css
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
:focus-visible { outline: 2px solid var(--color-secondary-accent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
```

---

## 5. MOTION REFERENCE

| Interaction | Duration | Easing |
|---|---|---|
| Hover | `0.15s` | `ease-out` |
| Transition | `0.2s` | `cubic-bezier(0.4,0,0.2,1)` |
| Scroll entrance | `0.3s` | `cubic-bezier(0.0,0,0.2,1)` |
| **Max** | **0.4s** | — |

| Element | Hover |
|---|---|
| Nav links | Cyan underline `scaleX(0→1)` from left |
| `.ds-btn-primary` | `var(--glow-primary)` |
| `.ds-btn-cyan` | `var(--glow-cyan)` |
| `.ds-btn-ghost` | Purple fill + border brightens |
| Player cards | `translateY(-4px)` + `var(--glow-card)` |
| Sponsor logos | Opacity 0.5 → 1.0 |
| Social icons | → `--color-secondary-accent` |

---

## 6. METAOBJECT SCHEMAS

Access: `shop.metaobjects.[type_handle].values`

### `dreamstation_player`
| Field | Type | Req | Notes |
|---|---|---|---|
| `handle` | text | ✓ | Unique slug |
| `display_name` | text | ✓ | In-game name |
| `role` | text | ✓ | "Attacker" / "Midfielder" / "Substitute" |
| `nationality` | text | | ISO 3166-1 alpha-2 |
| `bio` | multiline_text | | 2–3 sentences |
| `photo` | file_reference | | B&W cutout PNG, transparent bg |
| `twitter_url` | url | | |
| `twitch_url` | url | | |
| `is_active` | boolean | ✓ | `where: 'is_active', true` |
| `is_substitute` | boolean | | Renders `ds-chip--sub` |
| `join_date` | date | | |

### `dreamstation_result`
| Field | Type | Req | Notes |
|---|---|---|---|
| `event_name` | text | ✓ | |
| `placement` | text | ✓ | "1st", "3rd–4th" |
| `placement_number` | number | | Sort key |
| `region` | text | | "APAC", "EU" |
| `game_title` | text | | "Rocket League" |
| `season` | text | | "RLCS 2026" |
| `event_date` | date | ✓ | Sort descending |
| `prize_usd` | number | | `\| money_without_trailing_zeros` |
| `is_featured` | boolean | | Homepage + featured tiles |
| `external_link` | url | | Liquipedia / BLAST.tv |

### `dreamstation_partner`
| Field | Type | Req | Notes |
|---|---|---|---|
| `partner_name` | text | ✓ | |
| `logo` | file_reference | ✓ | White SVG/PNG, transparent bg |
| `website_url` | url | | |
| `tier` | text | | "naming_rights" / "official" / "supporter" |
| `is_active` | boolean | | `where: 'is_active', true` |
| `display_order` | number | | Lower = first |

### `dreamstation_creator`
| Field | Type | Req | |
|---|---|---|---|
| `display_name` | text | ✓ | |
| `platform` | text | | "YouTube" / "TikTok" / "Twitch" / "X" |
| `handle` | text | | |
| `profile_url` | url | | |
| `subscriber_count` | text | | "12.4K" |
| `profile_image` | file_reference | | |
| `joined_date` | date | | |
| `is_active` | boolean | | |

### `dreamstation_settings` (single record)
| Field | Type | Notes |
|---|---|---|
| `active_season` | text | "RLCS 2026" |
| `active_region` | text | "APAC" |
| `active_game` | text | "Rocket League" |
| `naming_rights_available` | boolean | Footer strip + Partners callout |
| `partnership_email` | email | Partners + Contact pages |
| `ticker_text` | multiline_text | Pipe-separated items |

**Key Liquid patterns:**
```liquid
{% assign settings = shop.metaobjects.dreamstation_settings.values.first %}

{% assign players = shop.metaobjects.dreamstation_player.values | where: 'is_active', true %}
{% if players.size > 0 %}
  {% for player in players %}{% render 'ds-player-card', player: player %}{% endfor %}
{% else %}
  <div class="ds-empty-state"><p>Roster announcement coming soon.</p></div>
{% endif %}

{% comment %} Images — always CDN transforms, never hardcoded src {% endcomment %}
{% if player.photo != blank %}
  {{ player.photo | image_url: width: 600 | image_tag: alt: player.display_name, class: 'ds-player-card__image', loading: 'lazy' }}
{% else %}
  <div class="ds-player-card__image-placeholder" aria-hidden="true"></div>
{% endif %}
```

Hero images: `loading: 'eager'`, `fetchpriority: 'high'`. All others: `loading: 'lazy'`.

---

## 7. PAGE ARCHITECTURE

### Homepage section order (strict)
1. `ds-hero` · 2. `ds-ticker` · 3. `ds-roster-preview` · 4. `ds-results-preview` · 5. `ds-content-proof` · 6. `ds-sponsor-signal` · 7. `ds-merch-entry`

### Hero (`sections/ds-hero.liquid`)
- `min-height: 100vh` · Speed A · `.ds-surface` grain
- Background: `radial-gradient(ellipse at 30% 50%, rgba(107,78,245,0.2) 0%, transparent 60%)`
- 15° diagonal split: left `surface-container-low` / right `surface`
- Player B&W cutout: right-of-centre, bleeds off right edge
- Content left-aligned: Cyan eyebrow → `.ds-chip` (`RLCS 2026 · APAC`) → headline (900wt, 5–7rem) → supporting line → CTA row (primary + ghost)
- Mobile: cutout at 20% bg opacity, headline 3rem, primary CTA only

### Sponsor Signal (`sections/ds-sponsor-signal.liquid`)
Two mutually exclusive states — never both, never empty grid:
```liquid
{% assign partners = shop.metaobjects.dreamstation_partner.values | where: 'is_active', true %}
{% if partners.size > 0 %}
  <section class="ds-sponsor-signal">
    <h2>OUR PARTNERS</h2>
    <div class="ds-sponsor-bar">
      {% for p in partners %}
        <a href="{{ p.website_url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ p.partner_name }}">
          {{ p.logo | image_url: width: 200 | image_tag: alt: p.partner_name, class: 'ds-sponsor-bar__logo', loading: 'lazy' }}
        </a>
      {% endfor %}
    </div>
  </section>
{% else %}
  <section class="ds-sponsor-cta">
    <h2>PARTNER WITH DREAMSTATION</h2>
    <p>Naming rights available for the RLCS 2026 APAC roster. Join the station.</p>
    <a href="/pages/partners" class="ds-btn-primary">START THE CONVERSATION</a>
  </section>
{% endif %}
```

### 404 (`templates/404.liquid`) — required
```html
<span aria-hidden="true" class="ds-404__number">404</span>
<h1>YOU'VE LEFT THE STATION.</h1>
<p>This page doesn't exist — but Dreamstation does. Head back.</p>
<a href="/" class="ds-btn-primary">BACK TO HOME</a>
```

### Footer — on every page including 404
Speed B · `surface-container-low` bg · Logo + tagline left · Nav links centre · X/@DreamstationGG right · Copyright bottom bar on `surface` · Conditional naming rights strip (`settings.naming_rights_available`)

---

## 8. SHOPIFY RULES

- `{% render %}` not `{% include %}` — always
- Full `{% schema %}` block on every section
- Never remove `{{ content_for_header }}` or `{{ content_for_layout }}` from `theme.liquid`
- Native Shopify AJAX cart API only — no custom cart
- Ghost border `1px solid rgba(255,255,255,0.15)` — Speed B data tables only, never Speed A

---

## 9. ACCESSIBILITY (WCAG 2.1 AA — NON-NEGOTIABLE)

- Every `<img>` has `alt`: players → name + role · partners → name · decorative → `alt=""`
- Every `<input>`/`<textarea>` has a `<label for="...">` pair
- Error messages linked via `aria-describedby`
- Required fields: `aria-required="true"` + visual indicator
- One `<h1>` per page · Heading levels never skip
- Landmarks: `<header>` `<main>` `<nav>` `<footer>` `<section>`
- Mobile nav: `aria-expanded` on hamburger · `role="navigation"` on overlay · Escape closes · Focus trapped while open · Returns to trigger on close
- All chips paired with `.sr-only` text

---

## 10. PERFORMANCE

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| JS bundle | < 50KB gzipped |

- Hero: WebP, max 400KB, `loading="eager"`, `fetchpriority="high"`
- All other images: WebP, `loading="lazy"`, Shopify CDN transforms
- Cutouts: PNG/WebP max 200KB · `noise.png`: PNG-8 <10KB · `og-default.jpg`: 1200×630 <200KB
- Images always via `| image_url: width: N | image_tag:` — no hardcoded paths
- Non-critical JS: `defer` or `async`

---

## 11. COPY TONE

| ❌ Off-brand | ✅ On-brand |
|---|---|
| We are excited to announce our next match. | Next up. Time to prove it. |
| We always strive for excellence. | Standards stay high. |
| We hope to make our supporters proud. | Built to give our supporters something worth backing. |
| Welcome to the Dreamstation family. | Dreamstation. Where ambition competes. |

**Use:** elite · performance · standards · pressure · momentum · execute · precision · rise · prove  
**Ban:** family · wholesome · cozy · excited · hope · journey · vibes · fun-first

---

## 12. ANTI-GOALS — NEVER DO THESE

| # | Rule |
|---|---|
| 1 | `border-radius` > 0 anywhere |
| 2 | `skewY()` or `skewX()` on containers |
| 3 | `clip-path` without `-webkit-clip-path` |
| 4 | Standard `box-shadow` with offsets |
| 5 | Any external CSS/JS library |
| 6 | `window.addEventListener('scroll')` for animations |
| 7 | Hardcoded roster, results, or partner data |
| 8 | `#FFFFFF` or `#000000` for text |
| 9 | Friendly/hopeful placeholder copy |
| 10 | Empty sponsor grid — always CTA fallback |
| 11 | Inline `<style>` or `<script>` in Liquid (except `{% schema %}`) |
| 12 | Missing `:focus-visible` on any interactive element |
| 13 | Missing `<label>` on any form field |
| 14 | Missing footer on any page |
| 15 | Missing `templates/404.liquid` |
| 16 | `{% include %}` |
| 17 | Animations > 400ms |
| 18 | Speed A treatment on Speed B pages |
| 19 | `<canvas>` or WebGL |
| 20 | CSS `@layer` |
| 21 | Missing `alt` on any `<img>` |
| 22 | `border-top: 1px solid` for section separation |

---

## 13. AGENT WORKFLOW

Operate as **Orchestrator**. Delegate to specialised subagents. Do not execute everything in the main thread.

```
Orchestrator → Frontend Engineer → [Copywriter if text involved] → QA Reviewer
```

**Orchestrator:** Reads PRD + this file. Plans task. Spawns subagents with self-contained prompts — include only the spec extracts relevant to that task.

**Frontend Engineer:** Writes Liquid, CSS, JS. Must use `frontend-design` and `brand-guidelines` skills.

**Copywriter** *(only when task involves user-facing text):* Reviews copy against Section 11. Must use `copywriting` skill.

**QA Reviewer:** Audits output against Section 12. Must use `web-design-reviewer`, `web-design-guidelines`, and `code-reviewer` skills. If a bug is found, use `systematic-debugging` — never guess the fix. Use `self-improving-agent` to log failure patterns after each fix. Task is not complete until QA signs off.

QA output format per issue:
```
FILE: [filename]
RULE: [rule number from Section 12]
CONTEXT: [where in the file]
FIX: [corrected snippet]
```

**Lesson logging:** After any correction, append to `tasks/lessons.md`:
```
[YYYY-MM-DD] | [what went wrong] | [rule to apply next time]
```
Read `tasks/lessons.md` at the start of every session before touching any code.

---

## 14. AVAILABLE SKILLS

| Skill | When to use |
|---|---|
| `frontend-design` | Every UI component build |
| `brand-guidelines` | Enforce Kinetic Apex design rules — use alongside `frontend-design` |
| `web-design-guidelines` | QA and accessibility audits |
| `web-design-reviewer` | Visual inspection of rendered output — take screenshots, audit against design spec |
| `copywriting` | Any user-facing text or placeholder copy |
| `code-reviewer` | Liquid correctness, JS quality, logic review |
| `systematic-debugging` | Shopify schema errors, clip-path issues, JS bugs — never guess a fix |
| `self-improving-agent` | After QA flags an issue — log the failure pattern so the Production team doesn't repeat it |
| `dev-browser` | Navigate and screenshot rendered pages |
| `playwright-skill` | Test forms, responsive layouts, nav keyboard behaviour |
| `simplify` | Refactor after a section is complete |
| `excalidraw-diagram` | Diagram component structure before building |

---

*CLAUDE.md v3.0 · March 2026 · Dreamstation Esports*  
*Authoritative spec: `dreamstation_website_PRD_v2.md`*
