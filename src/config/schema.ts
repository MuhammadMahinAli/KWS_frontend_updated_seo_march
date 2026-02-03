/**
 * JSON-LD Schema Generator for Structured Data
 * Generates schema.org structured data per route
 */

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://kws.technology';

// Organization schema - used site-wide
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KWS Technology',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'We build production-ready AI agents, automations, and web apps—lead gen, booking, CRM workflows, support, and more.',
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'support@kws.technology',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      email: 'kwstechnology.info@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  ],
};

// WebSite schema - used site-wide
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KWS Technology',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// Service schema for home page
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Agent Development',
  provider: {
    '@type': 'Organization',
    name: 'KWS Technology',
  },
  description: 'Production-ready AI agents, automations, and web apps for lead gen, booking, CRM workflows, and support.',
  areaServed: 'Worldwide',
};

// Products/Services offered
const productsData = [
  {
    name: 'AI Voice + Chat Agent Builder',
    description: 'Production-ready voice/chat agent + automation with n8n and APIs',
  },
  {
    name: 'Clinic AI Appointment System',
    description: 'Web app + AI voice/chat assistant to book, reschedule, cancel appointments',
  },
  {
    name: 'AI Booking & Clinic Automation',
    description: '24/7 voice + chat booking, CRM pipeline, smart reminders/deposits',
  },
];

// Portfolio projects data
const portfolioProjects = [
  {
    name: 'KWS Smart Appointment System',
    description: 'Multi-tenant clinic management platform with AI booking agent support',
    category: 'AI Agent',
  },
  {
    name: 'ResearchBuddy',
    description: 'Platform for researchers to manage projects and generate AI-assisted reports',
    category: 'Research Platform',
  },
  {
    name: 'NFT ClosetX',
    description: 'Fashion NFT marketplace connecting digital fashion with physical products',
    category: 'Web3',
  },
  {
    name: 'DataM',
    description: 'AI business mentor for founders with structured insights and planning support',
    category: 'AI Mentor',
  },
];

// Job postings data
const jobPostings = [
  {
    title: 'Marketing Specialist',
    description: 'Own KWS growth across content, outreach, and partnerships for AI agent and automation services.',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UI/UX Designer',
    description: 'Design clean, premium interfaces and prototypes for KWS websites, dashboards, and agent experiences.',
    location: 'San Francisco',
    type: 'Full-time',
  },
  {
    title: 'Full Stack Web Developer',
    description: 'Build scalable web applications using modern technologies.',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'AI Engineer',
    description: 'Work on cutting-edge AI models and agent technology.',
    location: 'San Francisco',
    type: 'Full-time',
  },
];

// Industries served
const industriesData = [
  'Beauty, Aesthetics & Personal Care',
  'Dental, Nutrition, Mental Health & Day Care',
  'Fitness, Sports & Lifestyle',
  'Coaching Centers',
  'Hospitality, Travel & Tourism',
  'Brokerages & Property Management',
  'Architecture & Interior Design Firms',
  'Manufacturing & Industrial',
  'Car Dealerships & Garages',
  'Legal & Case Intake',
  'HR, Recruiting & Staffing',
  'Marketing, Sales & Lead Businesses',
  'Nonprofits & Communities',
];

// Generate schema per route
export function getSchemaForRoute(path: string): object[] {
  const baseSchemas = [organizationSchema, websiteSchema];

  switch (path) {
    case '/':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AI Agent Development & Automation — KWS Technology',
          description: 'We build production-ready AI agents, automations, and web apps.',
          url: `${SITE_URL}/`,
        },
        serviceSchema,
      ];

    case '/products':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Products — AI Agents & Automation Builds',
          description: 'Explore ready-to-customize AI agent products and automation systems.',
          url: `${SITE_URL}/products`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: productsData.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Product',
                name: product.name,
                description: product.description,
              },
            })),
          },
        },
      ];

    case '/portfolio':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Portfolio — AI Agents, Platforms & Product Design',
          description: 'Selected work across AI agents, web platforms, and product experiences.',
          url: `${SITE_URL}/portfolio`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: portfolioProjects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.name,
                description: project.description,
                genre: project.category,
              },
            })),
          },
        },
      ];

    case '/industries':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Industries We Serve',
          description: 'AI agents and automation for teams across multiple industries.',
          url: `${SITE_URL}/industries`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: industriesData.map((industry, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: industry,
                provider: {
                  '@type': 'Organization',
                  name: 'KWS Technology',
                },
              },
            })),
          },
        },
      ];

    case '/career':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Careers at KWS Technology',
          description: 'Join a small, fast team shipping production AI agents and automation systems.',
          url: `${SITE_URL}/career`,
        },
        ...jobPostings.map((job) => ({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: job.title,
          description: job.description,
          employmentType: job.type.toUpperCase().replace('-', '_'),
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: job.location === 'Remote' ? undefined : job.location,
              addressCountry: 'US',
            },
          },
          jobLocationType: job.location === 'Remote' ? 'TELECOMMUTE' : undefined,
          hiringOrganization: {
            '@type': 'Organization',
            name: 'KWS Technology',
            sameAs: SITE_URL,
          },
          datePosted: new Date().toISOString().split('T')[0],
        })),
      ];

    case '/contact':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact KWS Technology',
          description: 'Send a message to KWS Technology.',
          url: `${SITE_URL}/contact`,
          mainEntity: {
            '@type': 'Organization',
            name: 'KWS Technology',
            email: ['support@kws.technology', 'kwstechnology.info@gmail.com'],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'support@kws.technology',
                contactType: 'customer service',
              },
              {
                '@type': 'ContactPoint',
                email: 'kwstechnology.info@gmail.com',
                contactType: 'customer service',
              },
            ],
          },
        },
      ];

    case '/about-us':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About KWS Technology',
          description: 'We build practical AI systems that save time, reduce manual work, and ship reliably.',
          url: `${SITE_URL}/about-us`,
          mainEntity: {
            '@type': 'Organization',
            name: 'KWS Technology',
            description: 'A product-minded team building practical AI systems for businesses.',
            knowsAbout: [
              'AI Agents',
              'Automation',
              'Web Development',
              'Machine Learning',
            ],
          },
        },
      ];

    case '/blog':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'KWS Technology Blog',
          description: 'Guides, examples, and insights on building AI agents and workflow automation.',
          url: `${SITE_URL}/blog`,
          publisher: {
            '@type': 'Organization',
            name: 'KWS Technology',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/logo.png`,
            },
          },
        },
      ];

    default:
      return baseSchemas;
  }
}
