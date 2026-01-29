# Argentina's Golden Visa

A high-end, luxury landing page for immigration and residency services in Argentina.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond (headings) + Outfit (body)

## Getting Started

1. **Install dependencies:**

```bash
cd argentina-golden-visa
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
argentina-golden-visa/
├── app/
│   ├── globals.css      # Global styles and Tailwind utilities
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
├── components/
│   ├── Header.tsx       # Navigation with mega menu
│   ├── Hero.tsx         # Full-screen hero section
│   ├── FourPillars.tsx  # Visa options grid
│   ├── Destinations.tsx # Location carousel
│   ├── FeaturedOpportunities.tsx # Property listings
│   ├── Testimonials.tsx # Client testimonials
│   ├── Editorial.tsx    # Blog/guide section
│   └── Footer.tsx       # Site footer
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## Features

- ✨ Luxury aesthetic inspired by premium brands
- 📱 Fully responsive design
- 🎬 Smooth animations with Framer Motion
- 🎠 Touch-friendly carousels
- 🌓 Scroll-aware navigation
- 🎨 Custom color palette (gold accents + navy tones)
- 🔤 Sophisticated typography pairing

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:
- `gold-*` for accent colors
- `navy-*` for dark backgrounds

### Fonts
Fonts are loaded via `next/font/google` in `app/layout.tsx`. Current pairing:
- **Cormorant Garamond** - elegant serif for headings
- **Outfit** - clean sans-serif for body text

### Images
Replace Unsplash placeholder images with your own high-resolution imagery:
- Hero background (Buenos Aires, Patagonia, or vineyard video)
- Property listings
- Destination cards
- Team photos

## Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

Or deploy directly via Vercel CLI:

```bash
vercel
```

## License

© 2026 Argentina's Golden Visa. All rights reserved.
