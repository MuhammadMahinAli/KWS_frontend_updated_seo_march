/**
 * SEO Configuration for all routes
 * Contains meta tags, titles, descriptions, and OG data per route
 */

// Get site URL from environment or use default
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.kws.technology';

// Check if we're in production
const isProduction = import.meta.env.PROD;

export interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  ogImage?: string;
  noindex?: boolean;
  ogType?: string;
}

export interface SeoConfigMap {
  [key: string]: SeoConfig;
}

// Default OG image for social sharing
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

// Site-wide SEO defaults
export const SITE_SEO = {
  siteName: 'KWS Technology',
  siteUrl: SITE_URL,
  defaultImage: DEFAULT_OG_IMAGE,
  twitterHandle: '@kwstechnology',
  locale: 'en_US',
  // Meta robots based on environment
  robots: isProduction ? 'index,follow' : 'noindex,nofollow',
};

// Per-route SEO configuration
export const SEO_CONFIG: SeoConfigMap = {
  '/': {
    title: 'AI Agent Development & Automation — KWS Technology',
    description: 'We build production-ready AI agents, automations, and web apps—lead gen, booking, CRM workflows, support, and more.',
    canonical: `${SITE_URL}/`,
    h1: 'Bring AI agents to life.',
    ogType: 'website',
  },
  '/products': {
    title: 'Products — AI Agents & Automation Builds | KWS Technology',
    description: 'Explore ready-to-customize AI agent products, automation systems, and production builds you can deploy fast.',
    canonical: `${SITE_URL}/products`,
    h1: 'Client-Ready Builds',
    ogType: 'website',
  },
  '/blog': {
    title: 'Blog — Practical AI Agents & Automation | KWS Technology',
    description: 'Guides, examples, and insights on building AI agents, workflow automation, and production-ready systems.',
    canonical: `${SITE_URL}/blog`,
    h1: 'Blog',
    ogType: 'blog',
  },
  '/about-us': {
    title: 'About Us — Product-Minded AI Delivery Team | KWS Technology',
    description: 'We build practical AI systems that save time, reduce manual work, and ship reliably—fast iterations, quality first.',
    canonical: `${SITE_URL}/about-us`,
    h1: 'About KWS',
    ogType: 'website',
  },
  '/portfolio': {
    title: 'Portfolio — AI Agents, Platforms & Product Design | KWS Technology',
    description: 'Selected work across AI agents, web platforms, and product experiences—case studies and real deliverables.',
    canonical: `${SITE_URL}/portfolio`,
    h1: 'Portfolio',
    ogType: 'website',
  },
  '/industries': {
    title: 'Industries We Serve — AI Agents for Real Workflows | KWS Technology',
    description: 'AI agents and automation for teams that book, follow up, answer questions, and manage operations across industries.',
    canonical: `${SITE_URL}/industries`,
    h1: 'Industries we serve',
    ogType: 'website',
  },
  '/career': {
    title: 'Careers — Build AI Agents & Products with KWS Technology',
    description: 'Join a small, fast team shipping production AI agents, automation systems, and web apps—remote-friendly roles.',
    canonical: `${SITE_URL}/career`,
    h1: 'Careers at KWS',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact — Tell Us What You Want to Automate | KWS Technology',
    description: 'Send a message to KWS Technology. We\'ll reply with next steps, clarifying questions, or a quick call.',
    canonical: `${SITE_URL}/contact`,
    h1: 'Contact',
    ogType: 'website',
  },
};

// Helper function to get SEO config for a path
export function getSeoConfig(path: string): SeoConfig {
  return SEO_CONFIG[path] || SEO_CONFIG['/'];
}

// All routes for sitemap generation
export const ALL_ROUTES = Object.keys(SEO_CONFIG);
