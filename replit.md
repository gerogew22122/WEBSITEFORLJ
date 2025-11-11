# LJ Pickz Landing Page

## Overview
LJ Pickz is a minimalist marketing landing page for a sports picks service, built with Next.js 15. Its primary purpose is to attract and convert users through a professional, visually appealing, and high-converting website. The application features a dark theme, an animated loading screen with a typing effect, and promotional popups. It integrates region-based dynamic pricing and showcases customer reviews in a carousel positioned between the hero section and pricing. The single-page design includes smooth-scrolling navigation to Reviews and Packages sections, aiming to establish credibility and drive subscriptions to the sports betting/investing community.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application is built with Next.js 15 using the App Router and React Server Components (RSC). Client-side interactivity uses the "use client" directive. UI components are developed with shadcn/ui and Radix UI primitives, styled using Tailwind CSS with a custom dark theme and OKLCH color space. Animations are handled with custom CSS and `tw-animate-css`. State management primarily uses React hooks (useState, useEffect) for local component state. Typography utilizes Inter for body text and Bebas Neue for display headings.

### Key Design Patterns

**Component Structure:** Modular, single-responsibility components organized by feature, with shared UI components in `components/ui`.

**Animation Strategy:** Features a multi-stage loading screen with a typing effect and timed transitions (6.5s total), including a smooth fade-out. CSS-based animations are prioritized for performance.

**Responsive Design:** Adopts a mobile-first approach using Tailwind breakpoints, ensuring text and layouts scale appropriately across all devices.

**User Flow:** The user experience begins with a loading screen, transitions to a professional hero section with a high-converting CTA and social proof, followed by an auto-popup offering a free trial, feature highlights, and customer reviews. Navigation is streamlined to "Home", "Packages", and "Reviews".

### Performance Considerations
Next.js Image component is used for image optimization, with priority loading for hero images. Code splitting is handled automatically by Next.js App Router, and metadata is configured for SEO.

### Notable Architecture Decisions
**No Backend/Database:** The current implementation is a static landing page with no server-side data fetching, API routes, or database integration; content is hardcoded.
**Dark Theme Default:** The application defaults to a dark theme with professional navy-to-black gradient backgrounds.
**Professional UX Design:** Emphasizes a polished user experience through animated loading screens, smooth transitions, and scroll prevention during loading.
**Credible Messaging & Conversion Focus:** The design focuses on credibility with social proof, clear value propositions, and high-converting CTAs, including an auto-popup and promo code banners.
**Region-Based Pricing:** Implements automatic geolocation detection (using `ipapi.co`) to display localized pricing (GBP, USD, AUD, EUR) and links to the correct Whop product URLs.

## External Dependencies

### Core Framework
*   **Next.js 15.2.4:** React framework.
*   **React 18+:** UI library.
*   **TypeScript:** For type safety.

### UI Libraries
*   **Radix UI:** Headless UI component primitives (e.g., Accordion, Dialog, Dropdown Menu).
*   **shadcn/ui:** Pre-built component patterns.
*   **Lucide React:** Icon library.

### Styling
*   **Tailwind CSS:** Utility-first CSS framework.
*   **tw-animate-css:** Animation utilities.
*   **class-variance-authority:** Type-safe component variants.
*   **clsx + tailwind-merge:** Class name merging.

### Form Handling
*   **React Hook Form:** Form state management.
*   **@hookform/resolvers:** Validation resolvers.

### Fonts
*   **Inter:** Primary sans-serif font.
*   **Bebas Neue:** Display font.

### Development & Deployment Tools
*   **embla-carousel-react:** For carousels.
*   **ipapi.co:** Geolocation API for region-based pricing.
*   **pnpm:** Package manager, configured for Next.js 15 compatibility.
*   **@vercel/analytics:** For analytics (though deployed on Replit).
*   **Replit:** Deployment platform.