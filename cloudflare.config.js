// Cloudflare Configuration for Las Vegas Relocation Services
// This file contains optimized settings for Cloudflare CDN

module.exports = {
  // Cloudflare-specific settings
  cloudflare: {
    zoneId: process.env.NEXT_PUBLIC_CLOUDFLARE_ZONE_ID || '48655987a584eb3068e3820930b6cd91',
    accountId: process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID || '2cc579c1ec9e426ed585e933ebf4753b',
    apiToken: process.env.CLOUDFLARE_API_TOKEN || 'your-api-token',
  },

  // Performance optimizations
  performance: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_ANALYTICS === 'true',
    enableSpeedInsights: process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_SPEED_INSIGHTS === 'true',
    enableWebVitals: process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_WEB_VITALS === 'true',
  },

  // Caching settings
  caching: {
    staticTTL: parseInt(process.env.NEXT_PUBLIC_STATIC_CACHE_TTL, 10) || 31536000,
    pageTTL: parseInt(process.env.NEXT_PUBLIC_PAGE_CACHE_TTL, 10) || 3600,
    apiTTL: parseInt(process.env.NEXT_PUBLIC_API_CACHE_TTL, 10) || 300,
  },

  // Security settings
  security: {
    enableHSTS: process.env.NEXT_PUBLIC_ENABLE_HSTS === 'true',
    enableCSP: process.env.NEXT_PUBLIC_ENABLE_CSP === 'true',
    enableReferrerPolicy: process.env.NEXT_PUBLIC_ENABLE_REFERRER_POLICY === 'true',
  },

  // Image optimization
  images: {
    domain: process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DOMAIN || 'imagedelivery.net',
    enabled: process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_IMAGES === 'true',
  },

  // Worker settings
  workers: {
    enabled: process.env.NEXT_PUBLIC_WORKER_ENABLED === 'true',
    environment: process.env.NEXT_PUBLIC_WORKER_ENVIRONMENT || 'production',
  },

  // Analytics and monitoring
  analytics: {
    token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN || 'your-analytics-token',
    enableRUM: process.env.NEXT_PUBLIC_ENABLE_REAL_USER_MONITORING === 'true',
  },

  // Edge computing
  edge: {
    enableCaching: process.env.NEXT_PUBLIC_ENABLE_EDGE_CACHING === 'true',
    enableComputing: process.env.NEXT_PUBLIC_ENABLE_EDGE_COMPUTING === 'true',
  },

  // Default configuration
  defaults: {
    // Cache-Control headers
    cacheControl: {
      static: 'public, max-age=31536000, immutable',
      page: 'public, max-age=3600, s-maxage=86400',
      api: 'public, max-age=300, s-maxage=600',
    },

    // Security headers
    securityHeaders: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },

    // CDN-specific headers
    cdnHeaders: {
      'CDN-Cache-Control': 'public, max-age=31536000',
      'Cloudflare-CDN-Cache-Control': 'public, max-age=31536000',
    },
  },
};
