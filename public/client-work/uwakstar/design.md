# Uwakstar Designs — Global Design System

## Theme

**Theme name:** Soft Luxury Boutique  
**Visual direction:** airy, premium, feminine, cultural, handmade, timeless, elegant.

Uwakstar Designs should feel like a luxury boutique for handcrafted African-print accessories. The site should be calm and refined, allowing the bold Ankara fabrics to provide the color and energy. The interface itself should stay soft, spacious, warm, and editorial.

The chosen visual reference is the homepage concept with the hero headline:

> Elevate the everyday

This is the design language for the whole site.

---

## Brand Feeling

Users should immediately feel:

> Handmade. Cultural. Premium. Warm. Beautiful. Made with care.

The website should feel special and giftable, but still human and approachable. It should not feel like a generic Shopify theme or a crowded marketplace.

---

## Visual Keywords

- Soft luxury
- Boutique ecommerce
- Editorial fashion
- Premium handmade
- African-print inspired
- Feminine but not childish
- Calm and spacious
- Warm ivory and champagne
- Minimal, refined, high-end
- Human, founder-led, intentional

---

## What to Avoid

Do **not** make the site feel:

- Loud or overly colorful
- Discount-heavy
- Corporate
- Generic Shopify
- Streetwear
- Dark and moody overall
- Overcrowded
- Pattern-heavy in the interface
- Like a craft fair site

The Ankara prints should be bold. The website shell should be calm.

---

## Color Palette

Use a warm, soft, luxury palette. The bold colors should come from product imagery.

```css
:root {
  --color-ivory: #F8F5EE;
  --color-soft-cream: #EFE8DA;
  --color-warm-white: #FFFCF7;
  --color-champagne: #C8A45D;
  --color-muted-gold: #B7924A;
  --color-soft-taupe: #B8AA98;
  --color-light-stone: #E7DFD1;
  --color-charcoal: #24211D;
  --color-soft-black: #111111;
  --color-muted-brown: #7A6040;
  --color-border: #E6DED2;
  --color-muted-text: #6F665C;
}
```

### Color Usage

| Role | Color |
|---|---|
| Main page background | `--color-warm-white` or `--color-ivory` |
| Alternate section background | `--color-soft-cream` |
| Primary text | `--color-charcoal` |
| Secondary text | `--color-muted-text` |
| Accent text | `--color-muted-gold` |
| Primary button | `--color-muted-gold` |
| Secondary button | transparent with charcoal border |
| Borders/dividers | `--color-border` |
| Footer text | charcoal on light background |

---

## Typography

Use an elegant serif for headings and a clean sans-serif for UI/body copy.

### Recommended font pairing

```css
--font-heading: "Cormorant Garamond", "Playfair Display", Georgia, serif;
--font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Hero Headline

```css
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(56px, 6.5vw, 96px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--color-charcoal);
}
```

### Section Headings

```css
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4vw, 56px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-charcoal);
}
```

### Eyebrow Labels

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--color-muted-gold);
}
```

### Body Copy

```css
.body-copy {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-muted-text);
}
```

### Navigation

```css
.nav-link {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-charcoal);
}
```

---

## Layout System

Use wide containers, generous margins, and lots of vertical spacing.

```css
.container {
  width: min(100% - 64px, 1280px);
  margin-inline: auto;
}

@media (max-width: 768px) {
  .container {
    width: min(100% - 32px, 1280px);
  }
}
```

### Section Spacing

```css
:root {
  --section-padding-xl: 112px;
  --section-padding-lg: 96px;
  --section-padding-md: 72px;
  --section-padding-sm: 48px;
}
```

Desktop sections should breathe. Do not compress sections tightly.

---

## Grid Guidelines

### Desktop

- Hero: 2 columns, roughly 38–42% text and 58–62% image.
- Shop by Collection: 3 columns.
- Product row: 4 columns.
- Why Uwakstar: 5 columns.
- Founder Spotlight: 2 columns, image left and text right.
- Footer: 5 columns.

### Tablet

- Hero can remain 2 columns if space allows.
- Product row becomes 2 columns.
- Values become 3 + 2 columns.
- Footer becomes 2–3 columns.

### Mobile

- Header becomes logo + hamburger + cart.
- Hero stacks text first, image second.
- Collection cards stack vertically.
- Products become 2 columns or horizontal carousel.
- Why Uwakstar becomes 1–2 columns.
- Founder section stacks image above text.
- Footer stacks or uses accordions.

---

## Button System

### Primary Button

Use for main purchase or browsing actions.

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-muted-gold);
  color: #fff;
  border: 1px solid var(--color-muted-gold);
  padding: 14px 30px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  min-height: 46px;
}
```

### Secondary Button

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--color-charcoal);
  border: 1px solid var(--color-charcoal);
  padding: 14px 30px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  min-height: 46px;
}
```

### Text Link

```css
.text-link {
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
}
```

---

## Image Art Direction

All images should match the chosen homepage concept: soft luxury boutique.

### Global Image Rules

1. Use ivory, champagne, cream, beige, pale stone, and muted gold styling.
2. Let the Ankara fabric be the strongest color.
3. Use soft natural light, preferably window light.
4. Use gentle shadows, not harsh studio shadows.
5. Keep compositions clean and uncluttered.
6. Use subtle props only: white rose, cream linen, stone pedestal, minimal greenery, gold stand, folded fabric.
7. Avoid loud backgrounds.
8. Avoid overly saturated props.
9. Avoid plain harsh white ecommerce backgrounds except where needed for product consistency.
10. Images should feel premium, handmade, feminine, and editorial.

---

## Master AI Image Prompt Template

Use this for future generated imagery after uploading real Ankara fabric/product references.

```text
Using the uploaded Ankara fabric/product reference as the exact design inspiration, create a premium product or lifestyle image for Uwakstar Designs. The image should match a soft luxury boutique ecommerce website. Use an ivory, champagne, cream, beige, pale stone, and muted gold environment with warm natural light and gentle shadows. The Ankara fabric should appear naturally on the product, and the product should feel handcrafted, elegant, high quality, and culturally inspired. Keep the composition spacious, refined, feminine, and editorial. Avoid clutter, harsh shadows, bright white studio lighting, and overly saturated backgrounds. The final image should blend seamlessly with a luxury homepage theme using soft cream backgrounds, elegant serif typography, and gold accents. No text, no fake labels, no busy background unless specifically requested.
```

---

## Icon Style

Use thin line icons. Icons should feel refined and quiet.

```css
.icon-line {
  width: 36px;
  height: 36px;
  stroke: var(--color-muted-gold);
  stroke-width: 1.25;
  fill: none;
}
```

Recommended icons:

- Hands/heart for handcrafted
- Leaf for quality materials
- Africa outline for culture
- Star for made for you
- Heart for small business
- Bag outline for crossbody bags
- Earring outline for earrings
- Clutch outline for clutches

---

## Motion / Interaction

Keep animations subtle and premium.

Recommended interactions:

- Product cards: slight image scale on hover, max `scale(1.03)`.
- Links: thin underline reveal.
- Buttons: background darkens slightly on hover.
- Section reveals: gentle fade-up with small movement.
- No bouncy animations.
- No flashy transitions.

```css
.luxury-hover {
  transition: transform 350ms ease, opacity 350ms ease;
}

.luxury-hover:hover {
  transform: translateY(-2px);
}
```

---

## Accessibility

- Maintain strong contrast between text and background.
- Use semantic headings.
- Buttons and links must be keyboard-focusable.
- Product images need descriptive alt text.
- Do not rely only on color for meaning.
- Touch targets should be at least 44px tall on mobile.

---

## Claude Build Notes

When building the site, use the provided assets exactly. Do not invent a different visual direction.

Important build instruction:

```text
Build this as a soft luxury boutique ecommerce homepage. Keep the site airy, premium, calm, and spacious. Use the provided image assets from /public/images/home exactly according to the asset manifest. Do not generate image placeholders. Do not make the layout busy. The Ankara prints should supply the color; the UI should remain ivory, champagne, gold, and charcoal.
```
