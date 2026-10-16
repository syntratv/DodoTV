// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (MULTI-REGION: UK / USA / AUSTRALIA)
// ---------------------------------------------------------------------------
const DOMAIN = 'dodoiptv.vip';
const BRAND_NAME = 'Dodo IPTV';
const SITE_URL = `https://${DOMAIN}`;

// Focus keywords (priority order)
const FOCUS_KEYWORD = 'Dodo IPTV';
const SECONDARY_FOCUS_KEYWORD = 'Dodo IPTV USA';
const TERTIARY_FOCUS_KEYWORD = 'IPTV Provider';

const LOCALE = 'en_US';
const LANGUAGE = 'en-US';
const ADDRESS_COUNTRY = 'US';
const CURRENCY = 'USD';

// Multi-region locale configuration (UK / USA / AUSTRALIA)
const TARGET_LOCALES = [
  { locale: 'en_GB', language: 'en-GB', country: 'GB', region: 'United Kingdom' },
  { locale: 'en_US', language: 'en-US', country: 'US', region: 'United States' },
  { locale: 'en_AU', language: 'en-AU', country: 'AU', region: 'Australia' },
] as const;

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,

  // Focus keywords
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  TERTIARY_FOCUS_KEYWORD,

  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Multi-region locale map
  TARGET_LOCALES,

  // Primary High-Intent Keywords (Global + Regional)
  PRIMARY_KEYWORDS: [
    'Dodo IPTV',
    'Dodo IPTV USA',
    'IPTV Provider',
    'IPTV Subscription',
    'Dodo IPTV UK',
    'Dodo IPTV Australia',
    'Best IPTV Provider',
    'IPTV service',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'Dodo IPTV Subscription',
    'Best IPTV Provider in USA',
    'Best IPTV Provider in UK',
    'Best IPTV Provider in Australia',
    'IPTV Provider with All Channels',
    '4K IPTV',
    'Buy IPTV',
    'Cheap IPTV Provider',
    'Premium IPTV',
    'Free IPTV Trial',
    'Sports IPTV Provider',
    'Live TV Streaming Provider',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@dodoiptv.vip',
    phone: '+1 555 000 0000', // ⚠️ Replace with your real number
    whatsapp: '+1 555 000 0000', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://support-tv.online', // ⚠️ Replace with your real wa.me link
    supportHours: '24/7 Customer Support via Email and Live Chat',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/dodoiptv', // ⚠️ Replace
    instagram: 'https://instagram.com/dodoiptv', // ⚠️ Replace
    facebook: 'https://facebook.com/dodoiptv', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities across UK, USA, and Australia
  TARGET_REGIONS: [
    // United States
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
    // United Kingdom
    'London',
    'Manchester',
    'Birmingham',
    'Glasgow',
    'Liverpool',
    // Australia
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide',
  ],

  // Value Propositions for UK, USA & Australian Viewers
  USPS: [
    'Buffer-free 4K & Full HD streaming backed by dedicated edge servers in London, New York, and Sydney',
    'Access to 20,000+ live channels including all major UK, US, and Australian networks, local news, and premium entertainment',
    'Instant service activation within 5 minutes of subscription approval',
    'Full coverage of NFL, NBA, MLB, NHL, Premier League, AFL, NRL, UFC, PPV events, Sky Sports, ESPN, Fox, NBC, CBS, BBC, and more',
    'Universal device support: Amazon Firestick, Smart TV, Android, iOS, Apple TV, Roku, and MAG Box',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimisation
  const defaultDescription =
    description ||
    `Looking for the best IPTV Provider? Dodo IPTV delivers 20,000+ live channels, premium IPTV Subscription plans, and 4K streaming across the UK, USA, and Australia. Start your free trial today!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} - Premium IPTV Provider`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'en-GB': fullCanonicalUrl,
        'en-US': fullCanonicalUrl,
        'en-AU': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Dodo IPTV is a premium IPTV Provider delivering high-definition live television, local broadcasts, premium IPTV Subscription plans, and 4K sports streaming across the UK, USA, and Australia.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ['GB', 'US', 'AU'],
      availableLanguage: ['English'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Australia' },
      ],
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (UK / USA / AU Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Dodo IPTV Subscription service offering 4K live TV, sports, and VOD streaming to households across London, New York, Sydney, and major cities throughout the UK, USA, and Australia.',
    priceRange: '$$',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};