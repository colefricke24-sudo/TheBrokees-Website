const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "script-src 'self'",
    "style-src 'self' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://media-photos.depop.com https://media-assets.grailed.com",
    "frame-src https://www.instagram.com",
    "connect-src 'self'",
    "upgrade-insecure-requests"
  ].join("; "),
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN"
};

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(SECURITY_HEADERS).forEach(([name, value]) => headers.set(name, value));
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return withSecurityHeaders(new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } }));
    }

    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/index.html";
    if (url.pathname === "/about" || url.pathname === "/about/") url.pathname = "/about.html";

    return withSecurityHeaders(await env.ASSETS.fetch(new Request(url, request)));
  }
};
