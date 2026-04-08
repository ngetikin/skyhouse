# Sky House Community — Project Context

## Project Overview

**Sky House Community** is a modern, single-page landing website for a Discord community called "Sky House" — an Indonesian Discord server focused on entertainment, events, horror storytelling, and social interaction. The site serves as a marketing/landing page to attract new members to the community.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, the site features a dark-themed UI with purple/blue accent colors, smooth scroll animations via **Framer Motion**, and a component-based architecture inspired by **shadcn/ui** patterns.

### Key Features
- Hero section with community branding
- About section describing the community
- Stats showcase (members, events, partnerships)
- Core values highlights
- Events gallery with posters
- Experience/testimonials section
- Call-to-action (CTA) to join Discord
- Responsive navbar with navigation
- Scroll progress indicator
- Noise/grain texture overlay for visual depth

## Tech Stack

| Category        | Technology                          |
|-----------------|-------------------------------------|
| Framework       | React 19                            |
| Language        | TypeScript (~5.8.2)                 |
| Build Tool      | Vite 6                              |
| Styling         | Tailwind CSS v4                     |
| Animations      | Motion (Framer Motion v12)          |
| Icons           | Lucide React                        |
| UI Components   | Custom + shadcn-inspired patterns   |
| Fonts           | Inter (body), Space Grotesk (display) |
| Fonts (var)     | Geist Variable                      |
| CSS Variables   | @base-ui/react                      |
| Utility         | clsx, tailwind-merge, CVA           |

## Project Structure

```
skyhouse/
├── src/
│   ├── components/          # Page section components
│   │   ├── About.tsx        # About the community
│   │   ├── CTA.tsx          # Call-to-action section
│   │   ├── Events.tsx       # Events gallery
│   │   ├── Experience.tsx   # Testimonials/experience
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Stats.tsx        # Community stats
│   │   └── Values.tsx       # Core values
│   ├── components/ui/       # Reusable UI primitives (shadcn-style)
│   ├── App.tsx              # Main app component (layout + sections)
│   ├── constants.ts         # Community data, assets, social links
│   ├── index.css            # Global styles + Tailwind theme config
│   └── main.tsx             # Entry point (React DOM render)
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   ├── logo+favicon-skyhouse.png
│   └── manifest.json        # PWA manifest
├── index.html               # HTML entry with SEO/meta tags
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # (inline in index.css via @theme)
├── components.json          # shadcn/ui configuration
└── package.json             # Dependencies + scripts
```

## Building and Running

### Prerequisites
- Node.js (latest LTS recommended)

### Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000, binds 0.0.0.0)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check (lint)
npm run lint

# Clean build artifacts
npm run clean
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

| Variable        | Description                                      |
|-----------------|--------------------------------------------------|
| `GEMINI_API_KEY`| Gemini API key (for AI features, if enabled)     |
| `APP_URL`       | App URL (auto-injected in AI Studio environments)|
| `DISABLE_HMR`   | Set to `true` to disable Hot Module Replacement  |

## Development Conventions

### Path Aliases
The project uses `@/*` path aliasing pointing to the project root. For example:
- `@/components/Hero` → `./src/components/Hero`
- `@/lib/utils` → `./lib/utils`

### Styling Approach
- **Tailwind CSS v4** with configuration done inline via `@theme` directive in `src/index.css`
- Custom theme colors defined as CSS custom properties (`--color-background`, `--color-primary`, etc.)
- Custom utilities defined with `@utility` directive (`glow-purple`, `glow-blue`, `text-gradient`, `container-custom`)
- Uses **class-variance-authority (CVA)** for component variant patterns
- **clsx** + **tailwind-merge** for conditional class composition

### Component Patterns
- Components are organized as individual section files under `src/components/`
- UI primitives live in `src/components/ui/` (shadcn-style colocated components)
- Data/content is externalized in `src/constants.ts` for easy updates
- Animations use `motion/react` (Framer Motion) with scroll-driven effects

### TypeScript
- Strict mode is not explicitly enforced; `noEmit: true` is used for type-checking only
- `skipLibCheck: true` to speed up compilation
- `experimentalDecorators: true` enabled
- JSX transform: `react-jsx`

### Design System
- **Dark theme** — Background: `#0B0F1A`, Foreground: `#F8FAFC`
- **Primary accent** — Purple: `#7B3FE4`
- **Secondary accent** — Blue: `#3B82F6`
- **Accent** — Light purple: `#A855F7`
- Font stack: **Inter** for body text, **Space Grotesk** for headings

## Key Data & Content

Community data is centralized in `src/constants.ts`:
- `ASSETS` — Logo, Discord preview, event poster paths
- `COMMUNITYDATA` — Name, tagline, founding date, stats, values, events, social links
- Social links: Discord (`dsc.gg/skyhouse`), Instagram (`@skyhouse.offcl`)

## SEO & Metadata

The `index.html` includes:
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card metadata
- Google site verification tag
- PWA manifest link
- Custom title and description (in Indonesian, targeting Indonesian audience)
