# Mountville Motors — Brand Site (Build 6b)

**Live (Vercel preview):** https://main-site-ten-zeta.vercel.app
**Eventual domain:** mountvillemotors.com
**Stack:** Astro 5 (static-first) + Vercel
**Phone:** 717-681-9610 (main brand line per phone strategy B)

## Pages (9 total, all static, mobile-first)

- `/` — home (hero, value pillars, customer story, inventory teaser)
- `/about` — brand story, "what we're not", how we work
- `/contact` — 3 ways to reach + hours
- `/financing` — how BHPH works, 3-question conversation, FAQ
- `/inventory` — placeholder (live data via IDMS/Drive coming)
- `/reviews` — embeds MMSreview.com/wall (DealerEcho)
- `/appointments` — booking paths + what to bring
- `/payments` — 3 payment methods (online portal, phone, in-person)
- `/bad-no-credit` — 301 redirect to /financing (preserves SEO slug from old GHL Sites)

## Companion projects

- **Lead-gen funnel:** [mountville-motors-landing](https://github.com/LimitlessCreationz/mountville-motors-landing) → apply.mountvillemotors.com (Build 6a)
- **GHL workflows:** location `fQiT6tA026tzxAjXFopP` (Marty v2 funnel)
- **Review wall:** https://mmsreview.com/wall (DealerEcho — Mountville's live tenant)

## Brand tokens (carried from Build 6a for consistency)

- Navy `#0F2556`, Amber `#E8A64B`, Off-white `#F7F5F2`
- Inter (sans) + JetBrains Mono
- Mobile-first: tap targets ≥44px, font ≥17px on inputs

## SEO

- LocalBusiness schema embedded on every page
- Open Graph tags
- Existing URL slugs preserved from old GHL Sites (`/inventory`, `/contact`, `/bad-no-credit`, `/appointments`)
- `/bad-no-credit` → 301 redirect to `/financing`

---

*Built with Claude Code. Auto-deploys on push to `master` via Vercel-GitHub integration.*
