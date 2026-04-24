/**
 * Site-wide constants for Mountville Motors brand site (mountvillemotors.com).
 *
 * IMPORTANT phone allocation per Jordan decision 2026-04-24 (phone strategy B):
 * - 717-681-9610 = MAIN BRAND line. Used here on the brand site.
 * - 717-282-9188 = Lead-gen line. Used on apply.mountvillemotors.com (Build 6a).
 *
 * Personal cell 717-324-3397 is NEVER customer-facing (privacy rule).
 */

export const SITE = {
  name: 'Mountville Motors',
  legalName: 'Mountville Motor Sales',
  tagline: 'Family-owned BHPH dealer in Columbia, PA · Since 2001',

  phone: '717-681-9610',
  phoneTel: '+17176819610',
  phoneFormatted: '(717) 681-9610',

  // Lead-gen alternative (apply funnel) — surface where clearly tied to "apply"
  applyPhone: '717-282-9188',
  applyPhoneTel: '+17172829188',

  email: 'info@mountvillemotors.com', // verify with Jordan

  address: {
    street: '806 Lancaster Ave',
    city: 'Columbia',
    state: 'PA',
    zip: '17512',
    full: '806 Lancaster Ave, Columbia, PA 17512',
  },

  hours: [
    { day: 'Monday',    open: '9 AM – 6 PM' },
    { day: 'Tuesday',   open: '9 AM – 5 PM' },
    { day: 'Wednesday', open: '9 AM – 6 PM' },
    { day: 'Thursday',  open: '9 AM – 6 PM' },
    { day: 'Friday',    open: '9 AM – 6 PM' },
    { day: 'Saturday',  open: 'Closed' },
    { day: 'Sunday',    open: 'Closed' },
  ],

  established: 2001,

  // Pulled from Google Business Profile (verified 2026-04-24)
  reviews: {
    rating: 4.2,
    count: 338,
    source: 'Google',
    url: 'https://maps.google.com/?q=Mountville+Motor+Sales',
  },

  // Related properties
  applyUrl: 'https://apply.mountvillemotors.com',
  reviewWallUrl: 'https://mmsreview.com/wall', // Mountville's live DealerEcho instance

  // Pricing claims (verified by Jordan)
  pricing: {
    downRange: '$1,000 – $3,000',
    weeklyRange: '$80 – $100 / week',
    weeklyNote: 'Or $160 – $200 biweekly. We match the schedule you get paid on.',
    inventoryRange: '$6,999 – $11,999',
  },
} as const;
