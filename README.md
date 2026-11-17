# Mastery Nexus — Next.js Website

A complete, responsive Next.js website for **Mastery Nexus**, designed as an original premium career-education experience inspired by the editorial, rounded, people-first visual language shown in the Learning People references — without copying their branding, assets or page structure.

## What is included

- Premium responsive homepage
- 12-week Data Analytics + AI programme page
- Personalised learning / skill-gap assessment page
- Career & placement support page
- SEO-focused blog index + 8 long-form guides
- About and consultation pages
- Interactive mega-menu, accordion panels, floating career guide, cursor glow and parallax hero
- Lead form with optional CRM webhook forwarding
- SEO metadata, canonical URLs, Open Graph, sitemap and robots.txt
- JSON-LD for EducationalOrganization, Course, FAQPage and Article
- `public/llms.txt` for machine-readable entity/programme context
- Source-aware article structure using official UK Government and Microsoft references where relevant

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local`.

```bash
NEXT_PUBLIC_SITE_URL=https://masterynexus.co.uk
CRM_WEBHOOK_URL=https://your-crm-or-n8n-webhook.example/lead
```

If `CRM_WEBHOOK_URL` is empty, the form works in preview mode and logs submissions server-side instead of forwarding them.

## Before going live

1. Replace the placeholder phone/email in `lib/site.ts` with the real Mastery Nexus details.
2. Replace Unsplash demo photography with owned/licensed brand photography if preferred.
3. Connect `CRM_WEBHOOK_URL` to your CRM, n8n or Make endpoint.
4. Add real learner stories only after you have permission and verifiable outcomes. The current design deliberately does not invent testimonials or placement statistics.
5. Publish the exact programme/placement terms and link them before payment if you advertise a guarantee.
6. Add analytics/consent tooling (GA4/GTM, Meta Pixel) only after configuring your cookie/consent policy.
7. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## SEO / AEO / GEO choices built in

- Search-intent pages with clear H1/H2 topic hierarchy
- Direct-answer blocks and FAQ content for answer engines
- Entity clarity around Mastery Nexus, the programme and the UK audience
- Structured data for courses, FAQs and articles
- Original topic clusters with internal linking
- Source links to authoritative first-party references where useful
- Explicit author/review metadata on guides
- No fabricated salary, placement or student-count claims
- Machine-readable `llms.txt`

## Design notes

The UI uses a warm editorial palette, large serif display headings, rounded navigation and cards, bold human photography, horizontal expandable panels, soft geometric loops and subtle pointer interactions. It is intentionally differentiated from Learning People rather than being a clone.
