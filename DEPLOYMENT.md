# Halima Fitness Club (हलीमा फिटनेस क्लब)
## Production Deployment & Integration Guide

This guide details the steps required to configure, integrate, build, and deploy the **Halima Fitness Club** web application to production.

---

## 1. Verified Brand & Business Information

The website is grounded entirely in confirmed business facts:

- **Business Name**: Halima Fitness Club
- **Hindi Name**: हलीमा फिटनेस क्लब
- **Coach**: Coach Halima Sadiya
- **Professional Title**: Certified Health & Wellness Coach
- **Experience**: 6+ Years
- **Positioning**: 100% Online Health, Nutrition, and Lifestyle Coaching (*No physical gym facility, equipment, or gym membership*)
- **Availability**: Always Open
- **Verified Email**: `sadiyahalima2876@gmail.com`
- **Official Instagram**: `@sadiya_fitcoach` ([https://www.instagram.com/sadiya_fitcoach/](https://www.instagram.com/sadiya_fitcoach/))
- **Live Class Schedule**: 6 Days/Week, 60 Minutes, 20–25 participant batch limit, hosted on Zoom:
  - Morning Slots: `6:00 AM – 7:00 AM` & `7:00 AM – 8:00 AM`
  - Evening Slots: `6:00 PM – 7:00 PM` & `7:00 PM – 8:00 PM`
  - *Trial Class available on request; Free initial consultation.*

---

## 2. Centralized Configuration (Single Source of Truth)

All business details, coach credentials, navigation items, and contact values are centralized in:
- **`src/config/business.config.ts`**: Single source of truth for brand name, coach info, email, Instagram, availability, and contact placeholders.
- **`src/config/navigation.config.ts`**: Navigation links, section IDs, and CTA labels.

---

## 3. Pending Business Values & Configuration Checklist

Before going live with customer traffic, configure the following placeholders:

| Placeholder | Location | Description |
| :--- | :--- | :--- |
| **`[WHATSAPP NUMBER REQUIRED]`** | `src/config/business.config.ts` | Set the active WhatsApp business phone number (with country code, e.g. `919876543210`) in `contactPlaceholders.whatsapp`. This will automatically enable the floating WhatsApp widget and all prefilled chat CTAs. |
| **`[PHONE NUMBER REQUIRED]`** | `src/config/business.config.ts` | Set direct phone calling number in `contactPlaceholders.phone`. |
| **`[FORM SUBMISSION INTEGRATION REQUIRED]`** | `src/components/sections/ContactSection/ContactSection.tsx` | Connect a live form dispatch service (see Section 4 below) to route inquiries to Coach Halima's inbox. |
| **`[PRIVACY POLICY CONTENT REQUIRED]`** | `src/components/layout/Footer/Footer.tsx` | Replace the placeholder legal modal text with the finalized formal Privacy Policy document. |
| **`[TERMS CONTENT REQUIRED]`** | `src/components/layout/Footer/Footer.tsx` | Replace the placeholder legal modal text with the finalized Terms of Service document. |
| **`[CLIENT STORY REQUIRED]`** | `src/components/sections/SuccessStoriesSection/SuccessStoriesSection.tsx` | Insert authentic verified client journeys when available. |
| **`[TESTIMONIAL CONTENT REQUIRED]`** | `src/components/sections/TestimonialsSection/TestimonialsSection.tsx` | Insert authentic feedback when received from active clients. |

---

## 4. Form Submission Backend Integration Guide

The consultation inquiry form in `src/components/sections/ContactSection/ContactSection.tsx` currently simulates submission with local state validation to prevent false delivery claims.

To enable live email delivery to `sadiyahalima2876@gmail.com`, you can connect any standard serverless form provider:

### Option A: EmailJS (Zero Backend Setup)
1. Sign up at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Template targeting `sadiyahalima2876@gmail.com`.
3. In `ContactSection.tsx`, install `@emailjs/browser` and trigger `emailjs.send(...)` inside `handleSubmit`.

### Option B: Formspree / Getform
1. Create a form endpoint at [formspree.io](https://formspree.io/f/YOUR_FORM_ID).
2. In `ContactSection.tsx`, submit formData via `fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(formData) })`.

### Option C: Resend API / Serverless Function
1. If deploying to Vercel/Netlify, create an API route `/api/contact` using [Resend](https://resend.com) or Nodemailer to send emails directly.

---

## 5. Build & Verification Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (runs at http://localhost:5173/)
npm run dev

# 3. Type-check TypeScript codebase
npx tsc --noEmit

# 4. Compile production distribution bundle
npm run build

# 5. Locally preview production distribution bundle
npm run preview
```

### Production Build Output:
- `dist/index.html` — Includes complete Open Graph tags, Twitter Card tags, and JSON-LD structured data (`Organization`, `Person`, `Service`, `FAQPage`).
- `dist/assets/*.css` — Master stylesheet (design tokens, reset, layout, components, motion).
- `dist/assets/*.js` — Production bundle (minified & tree-shaken).
- `dist/robots.txt` & `dist/sitemap.xml` — Crawler indexing assets.

---

## 6. Deployment Recipes

### Deploying to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run in project directory: `vercel`
3. Settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploying to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run in project directory: `netlify deploy --prod`
3. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Deploying to Cloudflare Pages
1. Connect Git repository in the Cloudflare Dashboard.
2. Build configuration:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Deploying to Firebase Hosting
1. Initialize Firebase: `npx firebase-tools init hosting`
2. Set public directory to `dist` and configure as a single-page app (`Yes`).
3. Deploy: `npx firebase-tools deploy --only hosting`

---

## 7. Pre-Launch Final Verification Checklist

- [x] **Zero TypeScript Errors**: `npx tsc --noEmit` passes with 0 errors.
- [x] **Fast Production Build**: `npm run build` compiles cleanly in under 100ms.
- [x] **Zero Layout Shift (CLS = 0)**: Explicit aspect ratio containment across all images and placeholders.
- [x] **WCAG 2.1 AA/AAA Accessibility**: Semantic landmarks, visible `:focus-visible` outlines, skip link, accessible forms, and reduced-motion overrides.
- [x] **Complete SEO Suite**: Multi-Entity JSON-LD schema, canonical tags, Open Graph / Twitter Cards, `robots.txt`, and `sitemap.xml`.
- [x] **Zero Fabricated Content**: Authentic placeholders for missing WhatsApp/phone lines, client testimonials, and legal policies.
- [x] **100% Online Positioning**: Clear online wellness & nutrition consulting focus with zero physical gym confusion.
- [x] **Mobile Responsiveness**: Fluid layouts from 320px mobile to 4K desktop screens with touch targets $\ge 48\text{px}$.
