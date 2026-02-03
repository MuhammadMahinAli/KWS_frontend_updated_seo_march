import { Helmet } from 'react-helmet-async';
import { SITE_SEO, DEFAULT_OG_IMAGE } from '../config/seo.config';
import { getSchemaForRoute } from '../config/schema';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
  ogType?: string;
  path?: string;
}

/**
 * SeoHead Component
 * Manages all SEO-related meta tags in the document head
 * Uses react-helmet-async for SSR-safe head management
 */
export function SeoHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  ogType = 'website',
  path = '/',
}: SeoHeadProps) {
  // Get JSON-LD schemas for this route
  const schemas = getSchemaForRoute(path);

  // Determine robots meta based on environment and noindex prop
  const robotsContent = noindex ? 'noindex,nofollow' : SITE_SEO.robots;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_SEO.siteName} />
      <meta property="og:locale" content={SITE_SEO.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}

export default SeoHead;
