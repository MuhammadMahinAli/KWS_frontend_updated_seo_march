/**
 * Sitemap Generator Script
 * Generates sitemap.xml for all routes at build time
 * Run with: node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Site URL - defaults to production if not set
const SITE_URL = process.env.VITE_SITE_URL || 'https://kws.technology';

// All routes to include in sitemap
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/products', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/about-us', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/industries', priority: '0.8', changefreq: 'monthly' },
  { path: '/career', priority: '0.7', changefreq: 'weekly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
];

// Get current date in W3C format
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
function generateSitemap() {
  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return sitemap;
}

// Write sitemap to build output
function writeSitemap() {
  const sitemap = generateSitemap();
  
  // Write to both public (for dev) and build (for production)
  const publicPath = resolve(__dirname, '../public/sitemap.xml');
  const buildPath = resolve(__dirname, '../build/sitemap.xml');

  try {
    writeFileSync(publicPath, sitemap);
    console.log(`✅ Sitemap generated: ${publicPath}`);
  } catch (error) {
    console.log(`ℹ️  Could not write to public folder: ${error.message}`);
  }

  try {
    writeFileSync(buildPath, sitemap);
    console.log(`✅ Sitemap generated: ${buildPath}`);
  } catch (error) {
    console.log(`ℹ️  Build folder not found (run after build): ${error.message}`);
  }
}

writeSitemap();

console.log(`
📋 Sitemap includes ${routes.length} routes:
${routes.map((r) => `   - ${SITE_URL}${r.path}`).join('\n')}
`);
