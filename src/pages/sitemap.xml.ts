import type { APIRoute } from 'astro';
import { site } from '@data/site';
import { treatments } from '@data/treatments';
import { concerns } from '@data/concerns';
import { protocols } from '@data/protocols';

// Hand-rolled sitemap (no extra dependency). Enumerates static pages plus the
// dynamic treatment, concern and protocol routes.
const staticPaths = [
  '/',
  '/treatments',
  '/concerns',
  '/protocols',
  '/modalities',
  '/menu',
  '/plan',
  '/candidacy',
  '/memberships',
  '/contact',
  '/accessibility',
  '/privacy',
  '/terms',
];

export const GET: APIRoute = () => {
  const base = site.url.replace(/\/$/, '');
  const urls = [
    ...staticPaths,
    ...treatments.map((t) => `/treatments/${t.slug}`),
    ...concerns.map((c) => `/concerns/${c.slug}`),
    ...protocols.map((p) => `/protocols/${p.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
