// app/reseller/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();
const PAGE_URL = `${SITE_URL}/reseller`;

// ---------------------------------------------------------------------------
// SEO STRINGS — no price in title, no fake hreflang
// ---------------------------------------------------------------------------
const PAGE_TITLE = `IPTV Reseller Program | ${BRAND}`;

const PAGE_DESCRIPTION =
  `Become a ${BRAND} IPTV reseller. Buy wholesale credits, ` +
  `sell subscriptions at your own price, and manage every customer ` +
  `from a private reseller panel. Instant activation.`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    'iptv reseller program',
    'become iptv reseller',
    'iptv reseller panel',
    'iptv credits',
    'iptv wholesale',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: PAGE_URL,
    // hreflang removed — no localized versions exist
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} IPTV Reseller Program`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/blog/article-reseller/cover.webp`],
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
  category: 'business',
};

// ---------------------------------------------------------------------------
// JSON-LD — WebPage + Service + FAQ + Breadcrumb. NO Product.
// ---------------------------------------------------------------------------
const ResellerSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Reseller Program',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#service`,
        name: 'IPTV Reseller Program',
        description:
          `Become a ${BRAND} IPTV reseller. Buy wholesale credits, ` +
          `sell subscriptions at your own price, and manage every ` +
          `customer from a private reseller panel.`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Worldwide',
        serviceType: 'IPTV Reseller Panel',
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What exactly is an IPTV reseller panel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `A reseller panel is a private dashboard that lets you create and manage IPTV subscriptions for your own customers. You buy credits from ${BRAND} in bulk, then use those credits to activate yearly, monthly, or trial subscriptions for anyone you sell to.`,
            },
          },
          {
            '@type': 'Question',
            name: 'How much can I realistically earn as an IPTV reseller?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Customers typically pay between $60 and $120 per year. Your wholesale cost starts around $30 per credit, so your profit per sale ranges from $30 to $90.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need technical skills to become a reseller?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The reseller panel is designed to be simple. If you can use WhatsApp and a web browser, you can run a reseller business.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do the reseller credits expire?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Your credits stay in your account indefinitely. There is no expiration date and no monthly minimum.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which currencies can I sell in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can sell in any currency you prefer. Your wholesale cost is fixed in USD. Your retail price is up to you.',
            },
          },
          {
            '@type': 'Question',
            name: 'What kind of support do I get as a reseller?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Every reseller gets direct WhatsApp support from our team, with priority response times on higher tiers.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reseller-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#04208B] text-[#EDEADE]">
      <ResellerSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}