# Textile Machinery Website - Next.js

A professional website for Kattaqo'rg'on Paxtamash textile machinery company, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with custom animations
- 🌐 Multi-language support (Russian/Uzbek)
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- ⚡ Built with Next.js 14 App Router
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 📦 Product showcase with detailed specifications
- 📝 Contact forms with validation
- 🗺️ Interactive map integration

## Pages

1. **Homepage** (`/`) - Hero section, product showcase, contact form
2. **About** (`/about`) - Company timeline, team, statistics
3. **Products** (`/products`) - Product grid with filters
4. **Product Detail** (`/products/[id]`) - Detailed specifications
5. **Contact** (`/contact`) - Contact form and information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** CSS animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
textile-machinery/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.tsx      # Product detail page
│   │   └── page.tsx          # Products listing
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Footer.tsx            # Footer component
│   ├── Header.tsx            # Navigation header
│   ├── ProductCard.tsx       # Product card component
│   └── WaveDecoration.tsx    # Decorative wave SVG
├── public/
│   └── images/               # Static images
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#1a3e3e",  // Dark teal
    dark: "#0f2525",
    light: "#254545",
  },
  accent: {
    DEFAULT: "#c4ff61",  // Lime green
    dark: "#a8e04d",
    light: "#d4ff8a",
  },
}
```

### Content

- Update text content in each page component
- Add product data in `/app/products/page.tsx`
- Modify team members in `/app/about/page.tsx`

### Images

Replace placeholder SVGs with actual product images:
1. Add images to `/public/images/`
2. Update image paths in components

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

© 2025 Kattaqo'rg'on Paxtamash. All rights reserved.

## Support

For questions or support, contact:
- Phone: +998(90)123-45-67
- Email: info@paxtamash.uz
# Paxtamash
