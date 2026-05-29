# Uwakstar Designs — Homepage Design Spec

## Homepage Theme

**Theme:** Soft Luxury Boutique  
**Reference concept:** the chosen homepage mockup with the headline “Elevate the everyday.”

This homepage should look and feel like a premium boutique ecommerce site for handcrafted African-print accessories. The page should be light, warm, elegant, spacious, and editorial. The design should use ivory, champagne, cream, muted gold, and charcoal. The bold Ankara products are the color moments.

---

## Homepage Sections

1. Announcement Bar
2. Header / Navigation
3. Hero Section
4. Shop by Collection
5. Bestsellers / Customer Favorites
6. Why Uwakstar
7. Founder Spotlight
8. As Seen In
9. Testimonial
10. Newsletter Signup
11. Footer

---

## Asset Folder Structure

Use this folder structure in the project:

```text
/public
  /images
    /home
      hero-luxury-still-life.jpg
      collection-clutches.jpg
      collection-crossbody-bags.jpg
      collection-fabric-wrapped-earrings.jpg
      product-ankara-zip-clutch-red-wave.jpg
      product-luxe-crossbody-champagne-gold.jpg
      product-royal-wrap-hoops.jpg
      product-sunset-wrap-drops.jpg
      founder-spotlight.jpg
      newsletter-soft-linen-bg.jpg
      texture-ivory-linen.jpg
      detail-nameplate-hardware.jpg
      detail-artisan-workbench.jpg
      detail-packaging-gift.jpg
```

---

## First 14 Homepage Image Assets

These are the first 14 images to generate and hand to Claude.

| # | File name | Use on homepage | Recommended size |
|---:|---|---|---|
| 1 | `hero-luxury-still-life.jpg` | Hero right-side still life | 1800 × 950 |
| 2 | `collection-clutches.jpg` | Shop by Collection card: Clutches | 1000 × 650 |
| 3 | `collection-crossbody-bags.jpg` | Shop by Collection card: Crossbody Bags | 1000 × 650 |
| 4 | `collection-fabric-wrapped-earrings.jpg` | Shop by Collection card: Fabric-Wrapped Earrings | 1000 × 650 |
| 5 | `product-ankara-zip-clutch-red-wave.jpg` | Bestseller product 1 | 900 × 700 |
| 6 | `product-luxe-crossbody-champagne-gold.jpg` | Bestseller product 2 | 900 × 700 |
| 7 | `product-royal-wrap-hoops.jpg` | Bestseller product 3 | 900 × 700 |
| 8 | `product-sunset-wrap-drops.jpg` | Bestseller product 4 | 900 × 700 |
| 9 | `founder-spotlight.jpg` | Founder Spotlight section | 1400 × 750 |
| 10 | `newsletter-soft-linen-bg.jpg` | Newsletter background texture | 1800 × 500 |
| 11 | `texture-ivory-linen.jpg` | Subtle section background / fallback texture | 1800 × 1200 |
| 12 | `detail-nameplate-hardware.jpg` | Optional detail/hover image or future About/Story use | 900 × 700 |
| 13 | `detail-artisan-workbench.jpg` | Optional craftsmanship detail or future About/Process use | 1200 × 800 |
| 14 | `detail-packaging-gift.jpg` | Optional gift/packaging image or future product/checkout use | 1200 × 800 |

The visible selected design mainly needs the first 10 images. Images 11–14 are supporting brand assets that keep the site consistent and give Claude enough visual material for hover states, future sections, or other pages.

---

## Image Batch Plan

Generate in three batches:

### Batch 1 — Core hero and collection images

1. `hero-luxury-still-life.jpg`
2. `collection-clutches.jpg`
3. `collection-crossbody-bags.jpg`
4. `collection-fabric-wrapped-earrings.jpg`
5. `texture-ivory-linen.jpg`

### Batch 2 — Product grid images

6. `product-ankara-zip-clutch-red-wave.jpg`
7. `product-luxe-crossbody-champagne-gold.jpg`
8. `product-royal-wrap-hoops.jpg`
9. `product-sunset-wrap-drops.jpg`
10. `detail-nameplate-hardware.jpg`

### Batch 3 — Founder and supporting brand imagery

11. `founder-spotlight.jpg`
12. `newsletter-soft-linen-bg.jpg`
13. `detail-artisan-workbench.jpg`
14. `detail-packaging-gift.jpg`

Batch 3 has 4 required images. If a 15th image is desired later, generate `social-community-still-life.jpg` for a future Instagram/community strip.

---

# Section-by-Section Homepage Spec

## 1. Announcement Bar

### Copy

```text
Handcrafted with purpose. Inspired by culture. Made for you.
```

### Layout

- Full-width slim bar.
- Soft beige/champagne background.
- Centered text.
- Height: about 32px.

### Style

```css
.announcement-bar {
  height: 32px;
  background: #EDE3D2;
  color: #6F6255;
  font-size: 13px;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## 2. Header / Navigation

### Navigation Items

- Shop
- New In
- Collections
- About
- The Story

### Right Icons

- Search
- Account
- Cart

### Logo

Use text-based logo if no final logo file is provided:

```text
UWAKSTAR
DESIGNS
```

Logo should be gold, spaced, elegant, and understated.

### Layout

- Logo on left.
- Nav centered.
- Icons right.
- White/ivory background.
- Border-bottom should be extremely subtle.

---

## 3. Hero Section

### Purpose

This sets the entire luxury tone of the homepage.

### Layout

Two-column layout:

- Left: text content with lots of whitespace.
- Right: large hero still-life image.

### Copy

Eyebrow:

```text
Handcrafted. Cultural. Timeless.
```

Headline:

```text
Elevate the everyday
```

Body:

```text
African-print clutches, crossbody bags, and fabric-wrapped earrings—designed to celebrate your style and your story.
```

Button:

```text
Shop the Collection
```

### Image

Use:

```text
/public/images/home/hero-luxury-still-life.jpg
```

### Hero Image Prompt

Use this prompt when generating `hero-luxury-still-life.jpg`:

```text
Create a luxury ecommerce hero still-life for Uwakstar Designs using the uploaded Ankara fabric or product reference as the textile inspiration. Show a handcrafted cream-and-gold crossbody clutch or bag with a slim gold chain, champagne-gold hardware, and a subtle premium nameplate detail. Place the bag on an ivory stone or soft linen surface with a pair of fabric-wrapped hoop earrings beside it. Add one soft white rose and minimal greenery. Use a warm ivory, champagne, cream, and muted gold color palette. Lighting should be soft natural window light with gentle shadows. The image should feel premium, feminine, handmade, editorial, and boutique. Leave generous negative space around the objects. No busy background. No text except a tiny realistic brand plate if needed. High-end product photography, shallow depth of field, clean luxury ecommerce aesthetic.
```

---

## 4. Shop by Collection

### Heading

Eyebrow:

```text
Shop by Collection
```

Title:

```text
Find your perfect piece
```

### Cards

#### Card 1

Title:

```text
Clutches
```

Description:

```text
Effortless style for every occasion.
```

CTA:

```text
Shop Now →
```

Image:

```text
collection-clutches.jpg
```

#### Card 2

Title:

```text
Crossbody Bags
```

Description:

```text
Designed for life on the go.
```

CTA:

```text
Shop Now →
```

Image:

```text
collection-crossbody-bags.jpg
```

#### Card 3

Title:

```text
Fabric-Wrapped Earrings
```

Description:

```text
Bold, lightweight, unforgettable.
```

CTA:

```text
Shop Now →
```

Image:

```text
collection-fabric-wrapped-earrings.jpg
```

### Collection Image Prompt Template

```text
Create a premium ecommerce category image for Uwakstar Designs using the uploaded Ankara fabric/product reference as inspiration. The image should show [clutches / crossbody bags / fabric-wrapped earrings] arranged on a soft ivory or champagne background with warm natural light, muted gold accents, and gentle shadows. Keep the composition minimal, refined, and spacious. The product should be the hero. Use cream, ivory, beige, and muted gold styling so the colorful Ankara fabric stands out without overwhelming the image. Luxury boutique product photography, clean editorial style, no text, no clutter.
```

---

## 5. Bestsellers / Customer Favorites

### Heading

Eyebrow:

```text
Bestsellers
```

Title:

```text
Customer favorites
```

### Products

| Product image | Product name | Price |
|---|---|---:|
| `product-ankara-zip-clutch-red-wave.jpg` | Ankara Zip Clutch — Red Wave | $35.00 |
| `product-luxe-crossbody-champagne-gold.jpg` | Luxe Crossbody — Champagne Gold | $129.00 |
| `product-royal-wrap-hoops.jpg` | Royal Wrap Hoops | $24.00 |
| `product-sunset-wrap-drops.jpg` | Sunset Wrap Drops | $26.00 |

### CTA

```text
Shop All Bestsellers
```

### Product Image Prompt Template

```text
Generate a clean luxury ecommerce product photo for Uwakstar Designs. Use the uploaded Ankara fabric/product reference as the product design inspiration. The product is [clutch bag / crossbody bag / fabric-wrapped hoop earrings / drop earrings]. Place it on a warm ivory, champagne, or pale stone background with soft natural shadows. Styling should be minimal, elegant, and premium. Use subtle champagne-gold accents if appropriate. The image should match a high-end boutique website with lots of whitespace. No props unless they are very minimal, such as a white rose, cream linen, or a small stone stand. No text, no fake logo, no busy background.
```

---

## 6. Why Uwakstar

### Heading

Eyebrow:

```text
Why Uwakstar
```

Title:

```text
More than accessories—made with meaning
```

### Values

1. **Handcrafted**  
   Each piece is carefully handmade.

2. **Quality Materials**  
   Premium fabrics and thoughtful details.

3. **Rooted in Culture**  
   Inspired by African heritage and art.

4. **Made for You**  
   Timeless designs that celebrate your style.

5. **Small Business**  
   Thank you for supporting a dream and a purpose.

### Icon Direction

Use thin muted-gold line icons. Keep them simple and elegant.

---

## 7. Founder Spotlight

### Layout

- Left: founder image.
- Right: text content.
- Soft ivory/champagne background.

### Copy

Eyebrow:

```text
Founder Spotlight
```

Heading:

```text
Designed with heart,
made to inspire
```

Paragraph:

```text
Uwakstar Designs was born from a love of fabric, culture, and the desire to create pieces that empower. Every item is handmade with care and a deep respect for tradition.
```

Button:

```text
Meet the Founder
```

### Image

Use:

```text
founder-spotlight.jpg
```

### Founder Image Prompt

```text
Create a warm luxury brand portrait for Uwakstar Designs. Show a Black woman founder in a bright, elegant studio holding a handcrafted Ankara-print clutch. She should look welcoming, confident, and creative. The setting should feel premium but personal: ivory walls, soft shelves, folded fabrics, subtle plants or flowers, warm natural window light. Clothing should be neutral cream, beige, white, or soft black so the colorful Ankara product stands out. The mood should be feminine, handmade, inspiring, and boutique. Use soft depth of field, editorial photography, natural expression, no harsh shadows, no busy background, no text.
```

---

## 8. As Seen In

### Heading

```text
As Seen In
```

### Placeholder Publication Names

Use these until real press logos/names are provided:

- bella & co.
- VERVE
- The Collective
- WOVEN
- LUXE LIVING
- STYLE & SOUL

### Style

- Text only, no boxed logos.
- Low contrast charcoal/taupe.
- Elegant serif typography.
- Lots of spacing between names.

---

## 9. Testimonial

### Quote

```text
The quality is exceptional and the pieces are even more beautiful in person. I get compliments every time I wear them!
```

### Attribution

```text
— Jasmine R.
```

### Style

- Centered.
- Large elegant serif.
- Muted gold quote mark.
- Optional small carousel arrows and dots.

---

## 10. Newsletter Signup

### Heading

```text
Be the first to know
```

### Body

```text
New arrivals, exclusive offers, and behind-the-scenes access—straight to your inbox.
```

### Placeholder

```text
Enter your email
```

### Button

```text
Sign Me Up
```

### Background Image

Use softly and subtly if needed:

```text
newsletter-soft-linen-bg.jpg
```

### Newsletter Background Prompt

```text
Create a subtle luxury background texture for a boutique ecommerce newsletter section. Use warm ivory linen, champagne beige, soft folds of fabric, very gentle natural light, and minimal shadows. The image should be abstract and spacious, with no product, no text, no logo, and no busy pattern. It should work behind text on a soft luxury website.
```

---

## 11. Footer

### Brand Column

Logo text:

```text
UWAKSTAR
DESIGNS
```

Description:

```text
Handcrafted accessories inspired by culture and made for you.
```

Social icons:

- Instagram
- Facebook
- Pinterest

### Shop Column

- All Products
- Clutches
- Crossbody Bags
- Earrings
- New In

### Customer Care Column

- Shipping & Delivery
- Returns & Exchanges
- FAQ
- Contact Us

### About Column

- Our Story
- Founder
- Sustainability
- Care Instructions

### Community Column

```text
Follow us for style inspiration and behind-the-scenes.
```

---

# Supporting Image Prompts

## `texture-ivory-linen.jpg`

```text
Create a subtle ivory linen texture background for a premium boutique ecommerce website. The texture should be warm, soft, elegant, and very minimal. Use champagne and cream tones with gentle natural shadows. No objects, no text, no logo, no strong pattern. It should be suitable as a soft website section background.
```

## `detail-nameplate-hardware.jpg`

```text
Create a premium close-up detail photo for Uwakstar Designs showing champagne-gold hardware, a delicate chain strap, stitching, and a small elegant nameplate area on a handcrafted bag made with cream and gold fabric. The mood should be luxurious, handmade, and refined. Use soft natural light, shallow depth of field, ivory background, and gentle shadows. No readable text is required. No busy background.
```

## `detail-artisan-workbench.jpg`

```text
Create an elegant artisan workbench detail image for Uwakstar Designs. Show hands working with Ankara fabric, sewing tools, thread, and a partially finished handmade accessory in a bright ivory studio. The styling should feel premium and calm, not messy. Use warm natural light, cream surfaces, subtle gold details, and shallow depth of field. No text, no logos, no clutter.
```

## `detail-packaging-gift.jpg`

```text
Create a premium packaging and gifting image for Uwakstar Designs. Show a handcrafted Ankara-print accessory partially wrapped in soft ivory tissue paper with a muted gold ribbon, a small neutral gift box, and minimal floral or greenery detail. The image should feel luxurious, thoughtful, handmade, and giftable. Use cream, champagne, ivory, and muted gold tones with gentle natural light. No text, no logo, no clutter.
```

---

# Claude Implementation Prompt

Paste this into Claude when building the homepage:

```text
Build the Uwakstar Designs homepage using the attached reference screenshot, design.md, homepagedesign.md, and the provided image assets in /public/images/home.

This is a soft luxury boutique ecommerce homepage for handcrafted African-print clutches, crossbody bags, and fabric-wrapped earrings. The site should feel premium, airy, feminine, cultural, handmade, and elegant.

Use the image assets exactly according to the manifest in homepagedesign.md. Do not invent new placeholder image concepts. Use the specified filenames and section placements.

Design requirements:
- Warm ivory/champagne/cream backgrounds
- Muted gold buttons and accents
- Charcoal typography
- Elegant serif headings
- Clean sans-serif UI text
- Large editorial product photography
- Lots of whitespace
- Minimal, refined product cards
- The Ankara products provide the bold color; the UI stays calm
- Avoid a generic Shopify template look
- Make the layout responsive for desktop, tablet, and mobile

Build these sections in order:
1. Announcement Bar
2. Header / Navigation
3. Hero Section
4. Shop by Collection
5. Bestsellers / Customer Favorites
6. Why Uwakstar
7. Founder Spotlight
8. As Seen In
9. Testimonial
10. Newsletter Signup
11. Footer

Use semantic HTML, accessible buttons and links, descriptive alt text, and clean reusable components.
```

---

# Alt Text Suggestions

Use these alt text examples:

```text
hero-luxury-still-life.jpg: Cream and gold handcrafted Uwakstar crossbody bag with fabric-wrapped earrings and white rose on ivory surface.
collection-clutches.jpg: Colorful Ankara-print clutch arranged on a soft ivory boutique surface.
collection-crossbody-bags.jpg: Champagne gold crossbody bag styled on a neutral luxury background.
collection-fabric-wrapped-earrings.jpg: Fabric-wrapped Ankara hoop earrings displayed on a minimal gold stand.
product-ankara-zip-clutch-red-wave.jpg: Red and blue Ankara-print zip clutch with handcrafted details.
product-luxe-crossbody-champagne-gold.jpg: Champagne gold handcrafted crossbody bag with chain strap.
product-royal-wrap-hoops.jpg: Blue and orange fabric-wrapped hoop earrings on a soft ivory background.
product-sunset-wrap-drops.jpg: Orange and black fabric-wrapped drop earrings on a neutral background.
founder-spotlight.jpg: Uwakstar Designs founder holding a handcrafted Ankara-print clutch in a bright studio.
newsletter-soft-linen-bg.jpg: Soft ivory linen texture with warm natural light.
```
