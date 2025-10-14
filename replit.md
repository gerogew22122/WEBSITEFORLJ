# LJ Pickz Landing Page

## Overview

LJ Pickz is a sports betting/investing community landing page built with Next.js 15. The application serves as a marketing website for a sports picks service, featuring an animated hero section, feature highlights, results statistics, customer reviews, and promotional popups. The site is designed with a dark theme and emphasizes visual appeal with animated elements and gradient effects.

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
- Multi-stage loading screen with timed transitions
- CSS-based animations for performance (transform, opacity)
- Gradient backgrounds with animated orbs for visual depth
- Scroll-based navigation state changes

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints (md, lg)
- Grid layouts that adapt to screen size
- Hidden elements on mobile (athlete images in hero)

**User Flow:**
1. Loading screen with brand reveal animation
2. Hero section with call-to-action
3. Promo banner with discount code
4. Feature highlights in card grid
5. Results/statistics section
6. Customer reviews
7. Footer with navigation and social links
8. Promotional popup triggered by CTA buttons

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
- No theme toggle currently implemented

**Animation-Heavy UX:**
- Loading screen with multi-stage reveal (5-second sequence)
- Scroll prevention during loading
- Timed transitions between animation stages
- Performance considerations with CSS transforms over layout changes

**Promotional Focus:**
- Multiple CTAs throughout the page
- Popup modal for conversion
- Promo code banner for discount awareness
- Social proof through reviews section

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