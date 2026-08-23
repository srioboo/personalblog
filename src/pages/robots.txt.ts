import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
