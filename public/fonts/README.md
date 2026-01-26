# Custom Fonts Setup

To use the actual Rohyt Geometric Light and Modica fonts, follow these steps:

## 1. Add Font Files

Place your font files in this directory:
- `RohytGeometric-Light.woff2` (or .woff, .ttf)
- `Modica-Regular.woff2` (or .woff, .ttf)
- `Modica-Medium.woff2`
- `Modica-Bold.woff2`

## 2. Update globals.css

Add the following @font-face declarations at the top of `app/globals.css`:

```css
@font-face {
  font-family: 'Rohyt Geometric';
  src: url('/fonts/RohytGeometric-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Modica';
  src: url('/fonts/Modica-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Modica';
  src: url('/fonts/Modica-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Modica';
  src: url('/fonts/Modica-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## 3. Update CSS Variables

In globals.css, update the typography section:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Modica', var(--font-heading), sans-serif;
}

p, span, li, a, label, input, textarea, button {
  font-family: 'Rohyt Geometric', var(--font-paragraph), sans-serif;
}
```

## Current Setup (Google Font Alternatives)

Currently using similar Google Fonts:
- **Space Grotesk** - For headings (similar to Modica)
- **Quicksand** - For paragraphs (similar to Rohyt Geometric Light)
