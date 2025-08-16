export const revalidate = 60;

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const host = request.headers.get('host') || 'thilakaayurveda.lk';
  const baseUrl = `https://${host}`;

  const staticRoutes = ['/', '/about', '/products', '/contact'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
