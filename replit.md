# LJ Pickz Landing Page

## Overview

LJ Pickz is a sports betting/investing community landing page built with Next.js 15. The application serves as a minimalist marketing website for a sports picks service, featuring a professional hero section with credible messaging, animated loading screen with typing effect, and promotional popups. The site is designed with a dark theme and emphasizes visual appeal with clean animations and professional gradient effects.

## Recent Changes

**October 15, 2025 - Hero Section Redesign, Loading Screen & Conversion Optimization:**
- Completely redesigned hero section for professional, credible appearance
- Removed competing celebrity visuals (LeBron, horse) for cleaner focus
- Implemented centralized vertical layout with clear hierarchy
- High-converting CTA button: "🎯 GET 7 DAYS FREE NOW" with gradient, pulse animation
- Enhanced loading screen with typing effect (45ms per character)
- Consistent Inter font family across all loading screen text (fixed using inter.className)
- Mobile-responsive text sizing (3xl on mobile, scales to 7xl on desktop)
- Smooth fade-out transition (700ms) between loading screen and main page
- Auto-popup appears 5 seconds after loading with updated copy: "Get LJ Free for 7 Days! Start your free trial today — just use code FREE at checkout."
- Slower loading start (800ms delay) for better pacing
- Removed promo banner component
- Added Whop logo with "4.7 Stars on Whop" rating to social proof
- Social proof displays: 1,000+ Active Members (Discord), 4.7 Stars on Whop, Since 2021
- Updated value proposition: "Get inside sport and racing picks and pro analysis from full time experts"
- Cleaned up unused assets (lebron-hero.png 2.4MB, horse-racing-hero.png 1.5MB, Discord bet screenshots)
- Removed Features, Results, and Reviews sections for cleaner, more focused landing page
- Added Pricing section with two packages: 7-day trial ($34.44) and Monthly ($119.99 with money-back guarantee)
- Monthly package highlighted as "MOST VALUE" with profit guarantee messaging
- Navigation simplified to "Home" only
- All CTA buttons and popups now scroll to pricing section on same page
- Created separate /packages route for dedicated pricing page
- Added dual 3D phone mockups below social proof section, above pricing
- Left phone: Discord sports bet screenshot
- Right phone: Racing bet screenshot (Lyrical Angel + Same Race Multi)
- Responsive design: compact (160px) side-by-side on mobile, medium (240px) on tablet, large (280px) spread out on desktop
- Mobile: 4px gap between phones, Desktop: 20px gap for spread-out effect
- 3D perspective with 15deg Y-rotation and 5deg X-rotation for depth effect
- Physical side buttons: volume up, volume down, silent switch, power button
- Enhanced with multi-layer shadows, screen glow, and glass reflection effect
- Bottom margin (mb-20) to prevent cut-off on full screen
- Page structure: Loading Screen → Hero → Social Proof → Dual 3D Phone Mockups → Pricing → Footer

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** Next.js 15 with App Router
- Uses React Server Components (RSC) architecture
- Client-side interactivity handled with "use client" directive
- Pages are built as React components in the `app` directory

**UI Component Library:** shadcn/ui with Radix UI primitives
- Custom theme configuration using "new-york" style
- Components use Tailwind CSS with CSS variables for theming
- Icon library: Lucide React

**Styling:** Tailwind CSS with custom configuration
- Uses OKLCH color space for better color management
- Dark mode as default theme
- Custom CSS variables defined in `globals.css`
- Animated elements using custom CSS animations and tw-animate-css

**State Management:** React hooks (useState, useEffect)
- Local component state for UI interactions
- No global state management library (Redux, Zustand, etc.)
- Loading states and popup visibility managed at page level

**Typography:** Custom font configuration
- Inter: Primary sans-serif font (weights: 300-900)
- Bebas Neue: Display font for headings

### Key Design Patterns

**Component Structure:**
- Modular component architecture with single-responsibility components
- Components organized by feature (hero, navigation, features, etc.)
- Shared UI components in `components/ui` directory
- Business logic components in root `components` directory

**Animation Strategy:**
- Multi-stage loading screen with typing effect and timed transitions (6.5s total)
- Typing animation at 45ms per character with consistent Inter font
- Fade-out transition (700ms + 800ms delay) to main page
- CSS-based animations for performance (transform, opacity)
- Clean gradient backgrounds with subtle blue accent glow
- Scroll-based navigation state changes

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints (sm, md, lg)
- Text scales appropriately across devices (3xl → 7xl for headlines)
- Loading screen text optimized for mobile viewports
- Clean, centered layouts that work on all screen sizes
- No competing visuals - focus on content and clarity

**User Flow:**
1. Loading screen with brand reveal animation and typing effect (6.5s)
2. Smooth fade transition to main page (700ms fade + 800ms delay)
3. Professional hero section with high-converting CTA and credible metrics
4. Auto-popup appears after 5 seconds with "use code FREE at checkout" offer
5. Promo banner with discount code
6. Feature highlights in card grid
7. Results/statistics section
8. Customer reviews
9. Footer with navigation and social links
10. Manual promotional popup triggered by CTA button click

### Performance Considerations

**Image Optimization:**
- Next.js Image component for automatic optimization
- Priority loading for hero images
- Lazy loading for below-fold content

**Code Splitting:**
- Automatic code splitting via Next.js App Router
- Suspense boundaries for loading states
- Dynamic imports where appropriate

**SEO:**
- Metadata configuration in layout.tsx
- Semantic HTML structure
- Proper heading hierarchy

## External Dependencies

### Core Framework
- **Next.js 15.2.4:** React framework with App Router, Server Components, and Image optimization
- **React 18+:** UI library (implied by Next.js 15)
- **TypeScript:** Type safety throughout the application

### UI Libraries
- **Radix UI:** Headless UI component primitives (@radix-ui/react-*)
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Label, Navigation Menu, Popover, Progress, Radio Group
  - Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Tooltip
- **shadcn/ui:** Pre-built component patterns using Radix UI
- **Lucide React:** Icon library for UI elements

### Styling
- **Tailwind CSS:** Utility-first CSS framework
- **tw-animate-css:** Animation utilities for Tailwind
- **class-variance-authority:** Type-safe component variants
- **clsx + tailwind-merge:** Class name merging utilities

### Form Handling
- **React Hook Form:** Form state management
- **@hookform/resolvers:** Validation resolvers for forms

### Fonts
- **Inter:** Google Font for body text
- **Bebas Neue:** Google Font for display text
- **Geist:** Vercel's font system

### Analytics & Deployment
- **@vercel/analytics:** Analytics integration for Vercel
- **Deployment Platform:** Replit (migrated from Vercel on October 14, 2025)

### Development Tools
- **Autoprefixer:** CSS vendor prefixing
- **date-fns:** Date manipulation library
- **embla-carousel-react:** Carousel component library
- **cmdk:** Command menu component
- **input-otp:** OTP input component

### Notable Architecture Decisions

**No Backend/Database:**
- Static landing page with no server-side data fetching
- No API routes or database integration currently
- Content is hardcoded in components
- Future expansion could add form submissions or user authentication

**Dark Theme Default:**
- HTML element has `dark` class by default
- CSS variables configured for dark mode color scheme
- Professional navy-to-black gradient backgrounds
- No theme toggle currently implemented

**Professional UX Design:**
- Loading screen with typing effect (6.5-second sequence)
- Smooth fade transitions (700ms) for polished feel
- Scroll prevention during loading
- Timed transitions between animation stages
- Performance considerations with CSS transforms over layout changes
- Mobile-responsive text sizing for all devices

**Credible Messaging & Conversion Focus:**
- Hero section emphasizes credibility: "Verified 72% Win Rate Since 2021"
- Single high-converting CTA: "🎯 GET 7 DAYS FREE NOW" with pulse animation
- Clean, professional design without distracting imagery
- Social proof: "1,000+ Active Members"
- Clear value proposition: "Get verified picks and pro analysis from full-time experts"
- Auto-popup appears 5 seconds after loading with "use code FREE at checkout" message
- Manual popup modal triggered by CTA button
- Promo code banner for discount awareness

## Replit Migration Configuration

**Migration Date:** October 14, 2025

### Port & Host Configuration
- Development server: `next dev -p 5000 -H 0.0.0.0`
- Production server: `next start -p 5000 -H 0.0.0.0`
- Port 5000 is required for Replit compatibility
- Binding to 0.0.0.0 allows external access through Replit's proxy

### Package Manager
- **pnpm** with special configuration for Next.js 15 compatibility
- `.npmrc` settings:
  - `shamefully-hoist=true` - Hoists all dependencies to root for better module resolution
  - `auto-install-peers=true` - Automatically installs peer dependencies
  - `strict-peer-dependencies=false` - Allows flexibility in peer dependency versions

### Next.js Configuration Adjustments
- `transpilePackages: ['lucide-react', '@radix-ui/react-slot']` - Required for ESM module compatibility
- `experimental.esmExternals: 'loose'` - Enables loose ESM external handling for pnpm
- `images.unoptimized: true` - Disables image optimization for simpler deployment

### Workflow
- **Dev Server:** `pnpm run dev` on port 5000
- Configured with webview output type for browser preview
- Auto-restarts on file changes via Next.js Fast Refresh

### Deployment
- **Target:** Autoscale (stateless website)
- **Build command:** `pnpm run build`
- **Run command:** `pnpm run start`
- Production deployment uses Next.js standalone output for efficiency