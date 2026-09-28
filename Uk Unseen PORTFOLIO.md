# UK Unseen

**Role:** Full-stack developer  
**Product:** Membership platform for UK travel, stays, and services  
**Live:** [ukunseen.co.uk](https://ukunseen.co.uk)

UK Unseen is part of GTO Global Travel Organization. Members browse hotels, attractions, business services, study offers, and events, then send a booking request instead of checking out on a public marketplace. Staff confirm availability, payment, and traveller details with the member.

## What I built

A bilingual web app (English and Arabic, including right-to-left layout) with three products in one codebase:

- **Public site.** Home page with a hero carousel, category grid, exclusive deals, partner promo, and service search. Category pages, a services catalogue, events with a countdown, and legal pages.
- **Member flow.** Email, Google, and Facebook sign-in. A multi-step request form for hotels and other services, with the draft kept if the member has to log in halfway through.
- **Operations.** An admin control panel for categories, services, home content, deals, events, partners, and a WhatsApp number used by the site-wide button. Partners get a dashboard for their own services and incoming requests.

Coming Soon is a switch on each category. Locked categories show a lock on the card and do not open. Adding or removing a category recomposes the home grid so the last row stays full.

## Stack

| Area | Choice |
| --- | --- |
| App | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS 4, Framer Motion |
| Data | MySQL, Prisma |
| Auth | Auth.js (credentials, Google, Facebook) |
| Languages | next-intl |
| Email | Hostinger SMTP |
| Images | Sharp, WebP, on-disk cache |
| Hosting | Hostinger, domain on Namecheap |

## Engineering notes

- Uploaded photos are resized to WebP once and reused, so later visits do not re-encode the original file.
- Public pages stay cached on the server. Saving from the admin panel clears that cache so the next visit shows the new content. Image files stay cached for a long time.
- Auth and session endpoints are never cached, so a login is not mistaken for a logged-out page.
- Security headers, rate limiting, and role checks separate members, partners, and admins.

## Outcome

A production site the client can run without a developer for day-to-day content: categories, offers, events, legal copy, and the WhatsApp contact number are all edited in the control panel.
