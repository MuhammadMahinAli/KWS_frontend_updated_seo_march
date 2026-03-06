/**
 * Pre-render Script — Puppeteer-based Full JS Rendering
 *
 * For each route:
 *   1. Serves the /build folder via a local static HTTP server
 *   2. Opens the page in headless Chromium (Puppeteer) and waits for networkidle0
 *   3. Saves the fully-rendered HTML to build/[route]/index.html
 *
 * Run after build:  node scripts/prerender.js
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'fs';
import { resolve, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Config ──────────────────────────────────────────────────────────────────

const PORT = 4321;

/** All 8 pages of the site */
const ROUTES = [
  '/',
  '/about-us',
  '/portfolio',
  '/products',
  '/industries',
  '/blog',
  '/career',
  '/contact',
];

// ─── Static file server ───────────────────────────────────────────────────────

const MIME = {
  '.html':  'text/html; charset=utf-8',
  '.js':    'application/javascript',
  '.mjs':   'application/javascript',
  '.css':   'text/css',
  '.png':   'image/png',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.gif':   'image/gif',
  '.webp':  'image/webp',
  '.svg':   'image/svg+xml',
  '.ico':   'image/x-icon',
  '.json':  'application/json',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
  '.ttf':   'font/ttf',
  '.txt':   'text/plain',
  '.xml':   'application/xml',
};

/**
 * Starts a minimal static HTTP server that serves `buildDir`.
 * Unknown paths fall back to root index.html so the SPA router can take over.
 */
function startStaticServer(buildDir) {
  return new Promise((resolvePromise, reject) => {
    const server = createServer((req, res) => {
      const urlPath = req.url.split('?')[0];
      let filePath = resolve(buildDir, urlPath.replace(/^\//, ''));

      // Directory → try index.html inside it
      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        filePath = resolve(filePath, 'index.html');
      }

      // File not found → SPA fallback (root index.html)
      if (!existsSync(filePath)) {
        filePath = resolve(buildDir, 'index.html');
      }

      const ext = extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';

      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(500);
        res.end('Internal Server Error');
      }
    });

    server.listen(PORT, 'localhost', () => {
      console.log(`  📡  Static server → http://localhost:${PORT}\n`);
      resolvePromise(server);
    });

    server.on('error', reject);
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function prerender() {
  const buildDir  = resolve(__dirname, '../build');
  const indexPath = resolve(buildDir, 'index.html');

  if (!existsSync(indexPath)) {
    console.error('❌  Build output not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('🚀  Pre-rendering with Puppeteer…\n');

  let server;
  let browser;

  try {
    // 1. Serve the built site locally
    server = await startStaticServer(buildDir);

    // 2. Launch headless Chromium
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });

    const page = await browser.newPage();

    // Silence page-level console / error noise in our terminal
    page.on('console', () => {});
    page.on('pageerror', () => {});

    // 3. Render each route
    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      process.stdout.write(`  🔄  ${route.padEnd(16)} `);

      // Navigate and wait until the network is fully idle
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 60_000,
      });

      // Give any CSS transitions / deferred renders a moment to settle
      await new Promise((r) => setTimeout(r, 600));

      // 4. Grab the full serialised DOM (all JS already executed)
      const html = await page.content();

      // 5. Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = indexPath; // overwrite build/index.html
      } else {
        const routeDir = resolve(buildDir, route.slice(1)); // strip leading /
        if (!existsSync(routeDir)) {
          mkdirSync(routeDir, { recursive: true });
        }
        outputPath = resolve(routeDir, 'index.html');
      }

      writeFileSync(outputPath, html, 'utf-8');

      // Pretty-print the relative output path
      const rel = 'build' + (route === '/' ? '/index.html' : `${route}/index.html`);
      console.log(`✅  → ${rel}`);
    }

    console.log(`\n✨  Pre-rendered ${ROUTES.length} routes successfully!`);

  } finally {
    if (browser) await browser.close();
    if (server)  server.close();
  }
}

prerender().catch((err) => {
  console.error('\n❌  Pre-render failed:', err.message ?? err);
  process.exit(1);
});
