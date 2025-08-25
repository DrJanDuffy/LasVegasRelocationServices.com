// Cloudflare Worker for Las Vegas Relocation Services
// This worker provides advanced caching, security, and performance optimizations

export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle different request types
    if (path.startsWith('/_next/static/') || path.startsWith('/_next/image/')) {
      return handleStaticAssets(request, env);
    }

    if (path.startsWith('/api/')) {
      return handleAPIRequest(request, env);
    }

    if (path.endsWith('.css') || path.endsWith('.js') || path.endsWith('.woff2')) {
      return handleAssetRequest(request, env);
    }

    // Default page request
    return handlePageRequest(request, env);
  },
};

// Handle static assets with aggressive caching
async function handleStaticAssets(request, _env) {
  const response = await fetch(request);

  if (response.ok) {
    const newResponse = new Response(response.body, response);

    // Set aggressive caching headers for static assets
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=31536000');
    newResponse.headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=31536000');
    newResponse.headers.set('Vary', 'Accept-Encoding');

    return newResponse;
  }

  return response;
}

// Handle API requests with appropriate caching
async function handleAPIRequest(request, _env) {
  const response = await fetch(request);

  if (response.ok) {
    const newResponse = new Response(response.body, response);

    // Set shorter caching for API responses
    newResponse.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=300');

    return newResponse;
  }

  return response;
}

// Handle asset requests (CSS, JS, fonts)
async function handleAssetRequest(request, _env) {
  const response = await fetch(request);

  if (response.ok) {
    const newResponse = new Response(response.body, response);

    // Set long-term caching for assets
    newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=31536000');
    newResponse.headers.set('Vary', 'Accept-Encoding');

    return newResponse;
  }

  return response;
}

// Handle page requests with security headers
async function handlePageRequest(request, _env) {
  const response = await fetch(request);

  if (response.ok) {
    const newResponse = new Response(response.body, response);

    // Set security headers
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newResponse.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Set appropriate caching for pages
    newResponse.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    newResponse.headers.set('CDN-Cache-Control', 'public, max-age=3600');

    return newResponse;
  }

  return response;
}

// Error handling
function _handleError(error) {
  return new Response(`Error: ${error.message}`, { status: 500 });
}
