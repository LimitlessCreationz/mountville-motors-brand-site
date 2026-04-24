/**
 * Schema.org structured data builders for Mountville Motors.
 * Used in Base.astro <head> per page.
 *
 * AEO (Answer Engine Optimization) strategy:
 * - LocalBusiness/AutoDealer schema → indexable by Google + AI assistants
 * - FAQPage schema on /financing → AI assistants extract Q&A pairs directly
 * - Service schema → highlights in-house financing as a distinct service
 * - Review aggregate → cites our 4.2★ / 338 reviews
 */

import { SITE } from './site';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  '@id': 'https://mountvillemotors.com/#dealer',
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: 'MMS',
  description: `Family-owned buy here, pay here car dealership in Columbia, PA. In continuous operation since ${SITE.established}. We work with all credit situations through in-house financing.`,
  url: 'https://mountvillemotors.com',
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: `${SITE.established}-07-01`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.0359,
    longitude: -76.5044,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Lancaster County' },
    { '@type': 'AdministrativeArea', name: 'York County' },
    { '@type': 'State', name: 'Pennsylvania' },
  ],
  priceRange: SITE.pricing.inventoryRange,
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Debit Card', 'In-House Financing'],
  openingHoursSpecification: SITE.hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '09:00',
      closes: h.open.includes('5 PM') ? '17:00' : '18:00',
    })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.reviews.rating,
    reviewCount: SITE.reviews.count,
    bestRating: 5,
    worstRating: 1,
  },
  knowsAbout: [
    'Buy here pay here financing',
    'Bad credit auto loans',
    'No credit auto loans',
    'Bankruptcy car loans',
    'In-house auto financing',
    'Used car sales',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vehicle Financing Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'In-house buy here pay here financing',
          description: `${SITE.pricing.downRange} down payment range, ${SITE.pricing.weeklyRange} weekly payments. Income-based approval.`,
          provider: { '@id': 'https://mountvillemotors.com/#dealer' },
        },
      },
    ],
  },
  sameAs: [
    SITE.reviewWallUrl,
    'https://maps.google.com/?q=Mountville+Motor+Sales+Columbia+PA',
  ],
};

export const financingFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What if I\'ve been turned down everywhere else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Welcome. That\'s most of who we work with. We fund the loans ourselves — no bank means no score cutoff. Steady income is the signal we need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about a recent bankruptcy or repo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with bankruptcy, past repos, charge-offs, all of it. Bring the pay stubs and your story. We\'ve seen most of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you check my credit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'ll verify income, address, and identity — but we don\'t make decisions off your score. You won\'t see surprise hits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the payments balloon later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No balloon. Fixed weekly schedule from day one. Late fees and interest are spelled out in your loan paperwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents should I bring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Driver\'s license, recent pay stubs (last 2-4), proof of address (utility bill works), and your down payment. That\'s the whole list.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical down payment at Mountville Motors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Most buyers land in the ${SITE.pricing.downRange} range. The down is the drive-away amount — covers tax, tags, title, and plate. Doc fee and interest are spelled out in your loan paperwork.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical weekly payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Most weekly payments fall in the ${SITE.pricing.weeklyRange} range. ${SITE.pricing.weeklyNote}`,
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can I drive home from Mountville Motors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For qualified buyers with paperwork ready and a vehicle that fits, typically same-day or next-day.',
      },
    },
  ],
};

export function buildBreadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
