# Amp Quick Reference Guide
## Las Vegas Relocation Services Project

### 🚀 Quick Start Commands

**Create New Service Page:**
```
Create a new service page for [Service Name] using the template at templates/service-page-template.tsx. 
Use [PRIMARY_COLOR] and [SECONDARY_COLOR] placeholders for consistent styling.
```

**Create New Relocation Page:**
```
Create a new relocation page for [City Name] using the template at templates/relocation-page-template.tsx.
Use [PRIMARY_COLOR] placeholders and customize city-specific content.
```

**Update Navigation:**
```
Update src/components/Navigation.tsx to include the new [page-name] page in the appropriate submenu.
```

**Update Sitemap:**
```
Update src/app/sitemap.ts to include the new page with proper priority and change frequency.
```

### 🎯 Common Amp Prompts

**For Service Pages:**
- "Create a new service page for [Service Name] with [specific features]"
- "Use the service page template and customize for [Service Name]"
- "Update the navigation and sitemap for the new [Service Name] page"

**For Relocation Pages:**
- "Create a relocation page for [City Name] with city-specific benefits"
- "Use the relocation page template and customize colors for [City Name]"
- "Add [City Name] to the navigation and sitemap"

**For Maintenance:**
- "Check if all navigation links are working correctly"
- "Verify the sitemap includes all current pages"
- "Run a build check to ensure no errors"

### 🔧 Project-Specific Commands

**Build & Test:**
```bash
npm run type-check    # TypeScript checking
npm run lint          # ESLint checking
npm run dev           # Development server
```

**Git Operations:**
```bash
git status            # Check current status
git add .             # Stage all changes
git commit -m "message" # Commit changes
git push              # Push to remote
```

### 📁 File Structure Reference

```
src/
├── app/
│   ├── services/           # Service pages
│   ├── relocating-from/    # Relocation guides
│   ├── about/              # Company info
│   └── layout.tsx          # Root layout
├── components/
│   ├── Navigation.tsx      # Main navigation
│   └── motion/             # Framer-motion wrapper
└── templates/              # Amp templates
    ├── service-page-template.tsx
    └── relocation-page-template.tsx
```

### 🎨 Color Scheme Reference

**Primary Colors:**
- `[PRIMARY_COLOR]` - Main brand color (varies by page)
- `[SECONDARY_COLOR]` - Secondary accent color
- `blue` - NYC pages
- `red` - Chicago pages
- `orange` - Moving & Transportation
- `indigo` - Relocation Planning

**Design System:**
- `#0A2540` - Dark blue
- `#3A8DDE` - Blue
- `#F7F9FC` - Light gray
- `#16B286` - Green

### ⚡ Amp Optimization Tips

**1. Use Explicit File Paths:**
- "Update src/components/Navigation.tsx"
- "Check src/app/sitemap.ts"

**2. Reference Templates:**
- "Use templates/service-page-template.tsx"
- "Follow the pattern from templates/relocation-page-template.tsx"

**3. Break Down Tasks:**
- "First, create the page structure"
- "Then, update the navigation"
- "Finally, update the sitemap"

**4. Use Context:**
- "Based on the existing [Service Name] page"
- "Following the same pattern as [City Name] page"

### 🚫 Common Issues & Solutions

**Build Errors:**
- Check for missing `'use client'` directive
- Verify motion imports use `@/components/motion`
- Remove metadata exports from client components

**Navigation Issues:**
- Update both Navigation.tsx and sitemap.ts
- Use consistent naming conventions
- Test all links after updates

**Styling Issues:**
- Use Tailwind classes consistently
- Replace color placeholders with actual colors
- Maintain responsive design patterns

### 📋 Template Usage

**Service Page Template:**
1. Copy `templates/service-page-template.tsx`
2. Replace `[Service Name]` with actual service name
3. Replace `[PRIMARY_COLOR]` and `[SECONDARY_COLOR]` with actual colors
4. Customize features, packages, and benefits
5. Update navigation and sitemap

**Relocation Page Template:**
1. Copy `templates/relocation-page-template.tsx`
2. Replace `[City Name]` with actual city name
3. Replace `[PRIMARY_COLOR]` with city-specific color
4. Customize city-specific benefits and neighborhoods
5. Update navigation and sitemap

### 🎯 Best Practices

**1. Consistency:**
- Use the same section structure across all pages
- Maintain consistent spacing and typography
- Follow the established color scheme

**2. Performance:**
- Use `viewport={{ once: true }}` for animations
- Implement lazy loading where possible
- Keep bundle sizes optimized

**3. SEO:**
- Update sitemap with all new pages
- Use semantic HTML structure
- Include proper meta descriptions

**4. Accessibility:**
- Use proper heading hierarchy
- Include ARIA labels where needed
- Ensure keyboard navigation works

### 🔍 Quick Checks

**Before Committing:**
- [ ] All new pages are accessible via navigation
- [ ] Sitemap includes all pages
- [ ] No build errors
- [ ] Responsive design works
- [ ] All links are functional

**After Updates:**
- [ ] Run type-check
- [ ] Run lint check
- [ ] Test navigation
- [ ] Verify sitemap
- [ ] Check responsive design
