# Cloudflare Optimization Quick Reference

## 🚀 Quick Commands

```bash
# Deploy with Cloudflare optimizations
npm run deploy:cloudflare

# Check code quality before deployment
npm run code:quality

# Analyze bundle size
npm run analyze
```

## 📁 Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| `_headers` | Cloudflare headers & caching | `/public/_headers` |
| `_redirects` | URL redirects & routing | `/public/_redirects` |
| `wrangler.toml` | Workers configuration | `/wrangler.toml` |
| `src/worker.js` | Edge computing logic | `/src/worker.js` |
| `cloudflare.config.js` | Cloudflare settings | `/cloudflare.config.js` |

## 🔧 Key Optimizations

### Caching Strategy
- **Static Assets**: 1 year (31536000s)
- **Images**: 1 year + immutable
- **CSS/JS**: 1 year + immutable
- **Pages**: 1 hour + 24h CDN
- **API**: 5 min + 10min CDN

### Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Performance Features
- ✅ WebP/AVIF image formats
- ✅ Brotli compression
- ✅ Early hints
- ✅ Rocket loader
- ✅ Edge computing

## 🌐 Cloudflare Dashboard Setup

1. **Add Domain**: `lasvegasrelocationservices.com`
2. **Update Nameservers**: Point to Cloudflare
3. **Enable Features**:
   - Auto Minify (HTML, CSS, JS)
   - Brotli
   - Early Hints
   - Rocket Loader
   - HSTS
   - WAF

## 📊 Environment Variables

```bash
NEXT_PUBLIC_CLOUDFLARE_ZONE_ID=your-zone-id
NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID=your-account-id
CLOUDFLARE_API_TOKEN=your-api-token
NEXT_PUBLIC_ENABLE_CLOUDFLARE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CLOUDFLARE_SPEED_INSIGHTS=true
NEXT_PUBLIC_ENABLE_CLOUDFLARE_WEB_VITALS=true
```

## 🎯 Expected Results

- **Page Load**: 40-60% faster
- **Core Web Vitals**: 20-30% improvement
- **Cache Hit Rate**: 90%+ for static assets
- **Security**: Enterprise-grade protection
- **Global CDN**: 200+ locations worldwide

## 🔍 Verification Steps

1. **Check Headers**: Browser dev tools → Network tab
2. **Cache Status**: Look for `cf-cache-status` header
3. **Performance**: PageSpeed Insights, WebPageTest
4. **Analytics**: Cloudflare dashboard metrics

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Cache not working | Check `_headers` file syntax |
| Workers not loading | Verify `wrangler.toml` config |
| Headers missing | Ensure files are in `/public` |
| Performance issues | Check Cloudflare dashboard settings |

## 📚 Resources

- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare Analytics](https://developers.cloudflare.com/analytics/)
- [Performance Tools](https://pagespeed.web.dev/)
- [Next.js Optimization](https://nextjs.org/docs/advanced-features/performance)
