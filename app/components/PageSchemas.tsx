// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;

// ---------------------------------------------------------------------------
// SERVICE SCHEMA (replaces old ProductSchema)
//
// Why Service instead of Product:
//   • You sell a digital IPTV service, not a physical product.
//   • Product schema requires review, aggregateRating, or offers to trigger
//     a rich result — you have none that are legitimate.
//   • The old file contained a fake aggregateRating (4.9 / 1255) and 9
//     hardcoded offers with shipping details for a digital service. Both
//     are structured-data policy violations that can trigger a manual action.
//   • Service is semantically correct for an IPTV subscription.
// ---------------------------------------------------------------------------
export function ServiceSchema() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: `${CONSTANTS.BRAND_NAME} IPTV Service`,
    serviceType: 'IPTV Streaming Service',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
    description: `Premium IPTV streaming from ${CONSTANTS.BRAND_NAME}. Live TV channels and on-demand movies in 4K Ultra HD, with instant setup and free trial.`,
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      id="service-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// FAQ SCHEMA
//
// Notes:
//   • Google deprecated FAQ rich results in May 2026 — no visible Q&A boxes
//     in Google search anymore. Still useful for Bing and AI crawlers.
//   • Policy: every question here MUST be visible on the same page.
//     If your homepage renders fewer than 8 FAQs, delete the extra entries
//     below so the schema stays accurate.
// ---------------------------------------------------------------------------
export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What makes ${CONSTANTS.BRAND_NAME} a premium ${CONSTANTS.SECONDARY_FOCUS_KEYWORD}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${CONSTANTS.BRAND_NAME} delivers excellent ${CONSTANTS.FOCUS_KEYWORD} TV streaming. Instead of traditional cable or satellite connections, we transmit live channels and video-on-demand titles directly over your high-speed internet connection. Enjoy 4K quality on smart TVs, streaming sticks, and mobile devices.`,
        },
      },
      {
        '@type': 'Question',
        name: `Why is ${CONSTANTS.BRAND_NAME} considered the best choice for ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} customers?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a leading specialist for ${CONSTANTS.TERTIARY_FOCUS_KEYWORD} content, we offer a huge channel lineup covering every major sport, movie, and TV show category. From live sports events to the latest cinema highlights, customers benefit from uninterrupted anti-freeze servers for maximum stability.`,
        },
      },
      {
        '@type': 'Question',
        name: `Which devices can I use with ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service is 100% compatible with Amazon Fire TV Stick, Samsung & LG Smart TVs, Android TV, Apple TV, MAG boxes, Formuler, as well as smartphones and tablets (iOS/Android). Our technical support team is happy to help you choose the right device.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the setup process work after ordering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After selecting your preferred plan, we contact you directly via WhatsApp. Our team supports you step by step with the installation of common player apps (such as TiviMate, IBO Player, or Smart IPTV) and activates your access credentials immediately.',
        },
      },
      {
        '@type': 'Question',
        name: `Does ${CONSTANTS.BRAND_NAME} offer a no-obligation trial?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! You can secure a free 24-hour trial access via WhatsApp. Experience the outstanding picture quality, the huge channel selection, and the perfectly smooth playback before committing to a subscription.',
        },
      },
      {
        '@type': 'Question',
        name: `Which apps are best for ${CONSTANTS.FOCUS_KEYWORD} streaming?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For the best experience, we recommend high-end players such as TiviMate, IPTV Smarters Pro, IBO Player, or IPTV Extreme. If you need help with setup, our WhatsApp support team is always available.',
        },
      },
      {
        '@type': 'Question',
        name: `Which payment options are available at ${CONSTANTS.BRAND_NAME}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept secure payments via PayPal, credit card, and cryptocurrencies. All plans are transparently priced with no hidden fees and do not commit you to automatic contract renewal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get help with technical questions or connection issues?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our multilingual customer support is reachable 7 days a week directly via WhatsApp. Whether it is setup questions, app recommendations, or server updates — we provide immediate and competent support for your perfect streaming experience.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="faq-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}