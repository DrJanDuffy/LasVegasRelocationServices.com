# Las Vegas Relocation Services - Amp Agent Configuration

## Project Overview
This is a Next.js 14 real estate relocation services website for Dr. Jan Duffy and Berkshire Hathaway. The site helps clients relocate to Las Vegas from various cities across the US and internationally.

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── services/          # Service pages (residential, corporate, international, etc.)
│   ├── relocating-from/   # City-specific relocation guides
│   ├── about/             # Company information
│   └── layout.tsx         # Root layout with navigation
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation with dropdowns
│   ├── Hero.tsx          # Hero section component
│   └── motion/           # Framer-motion wrapper
└── styles/               # Global styles and Tailwind config
```

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer-motion with custom wrapper
- **Icons**: Lucide React
- **Deployment**: Vercel (cloud-build only, no local builds)

## Key Conventions

### Page Structure
All service and relocation pages follow this consistent structure:
1. Hero section with gradient background and CTA buttons
2. Services/Features overview (4-column grid)
3. Pricing packages (3-column grid)
4. Benefits section (4-column grid)
5. Contact form with consultation request

### Design System
- **Primary Colors**: #0A2540 (dark blue), #3A8DDE (blue), #F7F9FC (light gray), #16B286 (green)
- **Gradients**: Use consistent gradient patterns for hero sections
- **Spacing**: py-20 for sections, consistent gap-8 for grids
- **Typography**: text-4xl md:text-5xl lg:text-6xl for main headings

### Component Patterns
- Use `'use client'` directive for pages with animations
- Import motion from `@/components/motion` (not directly from framer-motion)
- Use `motion.div` with consistent animation patterns
- Implement responsive design with Tailwind breakpoints

### File Naming
- Service pages: `src/app/services/[service-name]/page.tsx`
- Relocation pages: `src/app/relocating-from/[city-name]/page.tsx`
- Use kebab-case for URLs and file names

## Build & Development Commands
```bash
# Development
npm run dev          # Start development server

# Testing
npm run build        # Build for production (Vercel handles this)
npm run type-check   # TypeScript checking
npm run lint         # ESLint checking

# NEVER run npm run build locally - Vercel handles builds
```

## Common Tasks & Patterns

### Creating New Service Pages
1. Create directory: `src/app/services/[service-name]/`
2. Create `page.tsx` with consistent structure
3. Update `src/components/Navigation.tsx`
4. Update `src/app/sitemap.ts`
5. Use consistent color scheme and layout

### Creating New Relocation Pages
1. Create directory: `src/app/relocating-from/[city-name]/`
2. Use city-specific color scheme (blue for NYC, red for Chicago, etc.)
3. Include city-specific benefits and neighborhoods
4. Update navigation and sitemap
5. Maintain consistent form structure

### Navigation Updates
- Always update both the navigation component and sitemap
- Keep menu items organized logically
- Use descriptive names for better UX

## Performance Guidelines
- Use `viewport={{ once: true }}` for scroll animations
- Implement lazy loading for images when possible
- Keep bundle sizes optimized
- Use consistent icon imports from lucide-react

## SEO Best Practices
- Include proper meta descriptions
- Use semantic HTML structure
- Implement proper heading hierarchy
- Include structured data where appropriate
- Update sitemap with all new pages

## Common Issues & Solutions
- **Build Errors**: Check for missing 'use client' directives
- **Animation Issues**: Use motion wrapper, not direct framer-motion imports
- **Styling Conflicts**: Use Tailwind classes consistently
- **Navigation Issues**: Ensure all links are properly updated

## Amp Optimization Tips
- Use explicit file paths when asking for specific changes
- Break large tasks into smaller, focused requests
- Reference existing pages as templates for new ones
- Always test builds after making changes
- Keep context focused on current task

## Project Goals
- Create comprehensive relocation service coverage
- Maintain consistent user experience across all pages
- Optimize for conversion and lead generation
- Ensure mobile-first responsive design
- Build scalable, maintainable codebase
