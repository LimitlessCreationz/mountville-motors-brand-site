/**
 * Site-wide constants for Mountville Motors brand site (mountvillemotors.com).
 *
 * Routing per Master Doc §8 / §11-G + Jordan decision 2026-04-24 (phone strategy B):
 *
 *   SALES        → Jordan @ 717-282-9188 (GHL/Marty-managed, lead-gen funnel)
 *   GENERAL/MAIN → 717-681-9610 (default brand line, also Service via ext 108)
 *   PAYMENTS     → Barbara @ 717-681-9612 (separate phone — pays go here)
 *   ESCALATIONS  → Chris @ 717-681-9610 ext 102 (NEVER for general inquiries)
 *
 * Personal cell 717-324-3397 is NEVER customer-facing (privacy rule).
 */

export const SITE = {
  name: 'Mountville Motors',
  legalName: 'Mountville Motor Sales',
  tagline: 'Family-owned BHPH dealer in Columbia, PA · Since 2001',

  // Default brand "Call us" — routes through main line (Service ext 108 = Katalina)
  phone: '717-681-9610',
  phoneTel: '+17176819610',
  phoneFormatted: '(717) 681-9610',

  // Lead-gen / sales — routes to Jordan via Marty workflow
  applyPhone: '717-282-9188',
  applyPhoneTel: '+17172829188',

  // Existing-customer payments — Barbara directly
  paymentsPhone: '717-681-9612',
  paymentsPhoneTel: '+17176819612',

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

  // Click-to-text: routes to Marty/Jordan lead-gen line (not Katalina's main line).
  // Brand-site visitors who prefer SMS enter the same funnel as landing traffic.
  smsHref: (body = 'Hi Jordan, saw your site. Looking for info.') =>
    `sms:+17172829188?&body=${encodeURIComponent(body)}`,

  // Pricing claims (verified by Jordan)
  pricing: {
    downRange: '$1,000 – $3,000',
    weeklyRange: '$80 – $100 / week',
    weeklyNote: 'Or $160 – $200 biweekly. We match the schedule you get paid on.',
    inventoryRange: '$6,999 – $11,999',
  },
} as const;
