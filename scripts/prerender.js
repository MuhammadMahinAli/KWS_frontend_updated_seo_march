/**
 * Pre-render Script for Static HTML Generation
 * Generates static HTML files for each route at build time
 * Run with: node scripts/prerender.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes to pre-render
const routes = [
  '/',
  '/products',
  '/blog',
  '/about-us',
  '/portfolio',
  '/industries',
  '/career',
  '/contact',
];

// SEO metadata per route for SSR fallback
const seoData = {
  '/': {
    title: 'AI Agent Development & Automation — KWS Technology',
    description: 'We build production-ready AI agents, automations, and web apps—lead gen, booking, CRM workflows, support, and more.',
  },
  '/products': {
    title: 'Products — AI Agents & Automation Builds | KWS Technology',
    description: 'Explore ready-to-customize AI agent products, automation systems, and production builds you can deploy fast.',
  },
  '/blog': {
    title: 'Blog — Practical AI Agents & Automation | KWS Technology',
    description: 'Guides, examples, and insights on building AI agents, workflow automation, and production-ready systems.',
  },
  '/about-us': {
    title: 'About Us — Product-Minded AI Delivery Team | KWS Technology',
    description: 'We build practical AI systems that save time, reduce manual work, and ship reliably—fast iterations, quality first.',
  },
  '/portfolio': {
    title: 'Portfolio — AI Agents, Platforms & Product Design | KWS Technology',
    description: 'Selected work across AI agents, web platforms, and product experiences—case studies and real deliverables.',
  },
  '/industries': {
    title: 'Industries We Serve — AI Agents for Real Workflows | KWS Technology',
    description: 'AI agents and automation for teams that book, follow up, answer questions, and manage operations across industries.',
  },
  '/career': {
    title: 'Careers — Build AI Agents & Products with KWS Technology',
    description: 'Join a small, fast team shipping production AI agents, automation systems, and web apps—remote-friendly roles.',
  },
  '/contact': {
    title: 'Contact — Tell Us What You Want to Automate | KWS Technology',
    description: "Send a message to KWS Technology. We'll reply with next steps, clarifying questions, or a quick call.",
  },
};

const SITE_URL = process.env.VITE_SITE_URL || 'https://kws.technology';

function prerender() {
  const buildDir = resolve(__dirname, '../build');
  const indexPath = resolve(buildDir, 'index.html');

  if (!existsSync(indexPath)) {
    console.error('❌ Build folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Read the base index.html
  let baseHtml = readFileSync(indexPath, 'utf-8');

  console.log('🔄 Pre-rendering routes...\n');

  routes.forEach((route) => {
    const seo = seoData[route] || seoData['/'];
    const canonical = `${SITE_URL}${route}`;

    // Create route-specific HTML with SEO meta tags injected
    let html = baseHtml;

    // Replace title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${seo.title}</title>`
    );

    // Add/update meta description
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${seo.description}">`
      );
    } else {
      html = html.replace(
        '</head>',
        `  <meta name="description" content="${seo.description}">\n  </head>`
      );
    }

    // Add canonical link
    if (!html.includes('rel="canonical"')) {
      html = html.replace(
        '</head>',
        `  <link rel="canonical" href="${canonical}">\n  </head>`
      );
    }

    // Add Open Graph tags if not present
    if (!html.includes('property="og:title"')) {
      const ogTags = `
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${seo.title}">
  <meta property="og:description" content="${seo.description}">
  <meta property="og:image" content="${SITE_URL}/og-default.png">
  <meta property="og:site_name" content="KWS Technology">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${seo.title}">
  <meta name="twitter:description" content="${seo.description}">
  <meta name="twitter:image" content="${SITE_URL}/og-default.png">
`;
      html = html.replace('</head>', `${ogTags}</head>`);
    }

    // Determine output path
    let outputDir;
    let outputPath;

    if (route === '/') {
      outputPath = indexPath; // Overwrite root index.html
    } else {
      outputDir = resolve(buildDir, route.slice(1)); // Remove leading slash
      outputPath = resolve(outputDir, 'index.html');

      // Create directory if it doesn't exist
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }
    }

    // Write the file
    writeFileSync(outputPath, html);
    console.log(`  ✅ ${route} -> ${outputPath.replace(buildDir, 'build')}`);
  });

  console.log(`\n✨ Pre-rendered ${routes.length} routes successfully!`);
}

prerender();
