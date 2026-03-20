# noise.png — Asset Specification
## T07: Grain Texture · Dreamstation Esports

**File:** `assets/noise.png`
**Usage:** Speed A grain overlay via `.ds-surface::after` in `dreamstation.css`

### Required specifications

| Property | Value |
|---|---|
| Dimensions | 200 × 200 px |
| Format | PNG-8 (indexed colour, not PNG-24) |
| File size | < 10 KB |
| Colour | Monochrome noise / film grain |
| Transparency | None required |
| Tileability | Must tile seamlessly — no visible seam |

### How to create it

**Option A — Photoshop / GIMP:**
1. New document: 200×200px, 72dpi, Grayscale
2. Fill with 50% grey (#808080)
3. Filter → Noise → Add Noise: Amount 15–25%, Gaussian, Monochromatic
4. Export: File → Export As → PNG-8, no alpha

**Option B — Online tool:**
- Use grainy-gradient.com or similar noise texture generator
- Settings: 200×200px, monochrome, low intensity (15–20%)
- Export as PNG-8

**Option C — CSS fallback (while asset is pending):**
The `.ds-surface::after` pseudo-element already uses `opacity: 0.03`, so if
`noise.png` is missing in development the surface simply has no grain overlay.
No visual breakage occurs — it degrades gracefully.

### CSS reference (already in dreamstation.css)

```css
.ds-surface::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('{{ "noise.png" | asset_url }}');
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.03;   /* Speed A: 3–5% */
  pointer-events: none;
  z-index: 0;
}
```

Grain intensity guide:
- Speed A surfaces: 0.03–0.05 opacity
- Speed B surfaces: 0–0.02 opacity (or omit the class entirely)
