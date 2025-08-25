# Biome Code Quality Guide - Las Vegas Relocation Services

## Overview
This project uses [Biome](https://biomejs.dev/) as the primary code quality tool, replacing ESLint and Prettier for a unified, fast, and comprehensive development experience.

## Quick Start Commands

### Basic Quality Checks
```bash
# Check code quality without fixing
npm run biome:check

# Fix all auto-fixable issues
npm run biome:fix

# Format code only
npm run biome:format

# Organize imports
npm run biome:organize
```

### Comprehensive Quality Assurance
```bash
# Full code quality check (recommended for development)
npm run code:quality

# Fix all issues and check quality
npm run code:quality:fix

# Strict quality check (for pre-commit)
npm run code:quality:strict

# Real estate industry specific quality check
npm run real-estate:quality
```

### CI/CD and Pre-commit
```bash
# Pre-commit hook (run before committing)
npm run pre-commit

# Pre-push hook (run before pushing)
npm run pre-push

# CI environment check (zero tolerance)
npm run biome:ci
```

## Configuration Details

### Biome Rules Applied

#### Code Correctness
- **Unused variables/imports**: Error (prevents dead code)
- **Unreachable code**: Error (maintains code flow)
- **Undeclared variables**: Error (catches typos)
- **Useless else/return**: Error (cleaner logic)

#### Code Style & Consistency
- **Naming conventions**: 
  - Variables/parameters: camelCase
  - Classes/Functions: PascalCase
- **Template literals**: Required over string concatenation
- **Const assertions**: Required where appropriate
- **Import organization**: Automatic

#### Accessibility (Real Estate Focus)
- **Button types**: Required (critical for forms)
- **Label associations**: Required (form accessibility)
- **ARIA properties**: Warned (enhanced UX)
- **HTML validation**: Warned (SEO and accessibility)

#### Security (Real Estate Compliance)
- **Dangerous HTML**: Error (prevents XSS)
- **Global eval**: Error (security risk)
- **Unsafe operations**: Error (data integrity)

#### Performance & Complexity
- **Cognitive complexity**: Warned (maintainable code)
- **Excessive nesting**: Warned (readable code)
- **Unused imports**: Error (bundle optimization)

## Real Estate Industry Specific Rules

### Form Validation & Accessibility
- All contact forms must have proper labels
- Button types are enforced for form submissions
- ARIA properties for enhanced user experience

### SEO & Performance
- HTML validation for search engine optimization
- Import organization for faster builds
- Unused code removal for smaller bundles

### Compliance & Security
- No dangerous HTML injection
- Secure form handling practices
- Clean, maintainable code structure

## VS Code Integration

### Auto-formatting
- Format on save is enabled
- Biome is set as the default formatter
- Import organization on save

### Linting
- Real-time error highlighting
- Auto-fix suggestions
- Quick-fix actions available

### File Associations
- TypeScript React files properly configured
- Tailwind CSS integration
- Emmet support for HTML generation

## File Coverage

### Included Files
- `src/**/*.{js,jsx,ts,tsx}` - All source code
- `*.config.{js,ts,mjs}` - Configuration files
- `*.{js,jsx,ts,tsx,json}` - Root level files

### Excluded Files
- `.next/` - Build output
- `node_modules/` - Dependencies
- `public/` - Static assets
- `documentation/` - Docs
- `templates/` - Template files

## Best Practices

### Development Workflow
1. **Before coding**: Run `npm run biome:check` to see current issues
2. **During coding**: Let VS Code auto-format and lint in real-time
3. **Before commit**: Run `npm run pre-commit` to ensure quality
4. **Before push**: Run `npm run pre-push` for final validation

### Code Organization
- Use consistent naming conventions
- Organize imports automatically
- Maintain consistent formatting
- Follow accessibility guidelines

### Performance Optimization
- Remove unused imports and variables
- Keep functions simple and focused
- Use proper TypeScript types
- Avoid excessive nesting

## Troubleshooting

### Common Issues

#### "Unable to find the Biome binary"
```bash
# Reinstall Biome
npm install @biomejs/biome --save-dev

# Clear npm cache
npm cache clean --force
```

#### Performance Issues
- Check `.biomeignore` file
- Ensure large directories are excluded
- Use `--max-diagnostics` flag for large projects

#### Rule Conflicts
- Check `biome.json` overrides section
- Verify file patterns in includes/excludes
- Review rule severity levels

### Getting Help
- [Biome Documentation](https://biomejs.dev/)
- [Biome GitHub](https://github.com/biomejs/biome)
- [VS Code Biome Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## Migration from ESLint/Prettier

### What's Replaced
- **ESLint**: All linting rules migrated to Biome
- **Prettier**: All formatting handled by Biome
- **Import sorting**: Automatic with Biome

### Benefits
- **Faster**: Single tool for all operations
- **Unified**: Consistent rule application
- **Modern**: Latest JavaScript/TypeScript support
- **Real-time**: Better VS Code integration

### Migration Steps
1. Biome is already configured
2. Old ESLint/Prettier configs can be removed
3. Use new Biome commands instead
4. Update CI/CD pipelines if needed

## CI/CD Integration

### Vercel Deployment
- Biome runs automatically on Vercel builds
- Zero tolerance for errors in production
- Automatic code quality enforcement

### GitHub Actions (if needed)
```yaml
- name: Biome Check
  run: npm run biome:ci
```

## Performance Metrics

### Expected Results
- **Format time**: < 1 second for typical files
- **Lint time**: < 2 seconds for full project
- **Memory usage**: < 100MB for large projects
- **CPU usage**: Minimal impact during development

### Optimization Tips
- Use `.biomeignore` effectively
- Run checks on changed files only
- Use VS Code integration for real-time feedback
- Schedule full checks during off-peak hours
