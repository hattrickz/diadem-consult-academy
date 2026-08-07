# Diadem Consult Academy

Premium marketing website for Diadem Consult Academy — built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — for appointment email notifications (get one at resend.com). If left empty, form submissions succeed but no email is sent.
- `ADMIN_NOTIFICATION_EMAIL` — where appointment requests are sent.
- `NEXT_PUBLIC_SITE_URL` — your production URL, used in metadata.

## Images

Every image in `public/images/` is a generated placeholder labeled with what belongs there
(e.g. "HERO IMAGE — replace: students / office"). Replace each file **using the same filename**
so no code changes are needed:

- `public/images/brand/logo.png`, `logo-white.png`
- `public/images/hero/hero-main.jpg`
- `public/images/about/about-office.jpg`, `why-choose-us.jpg`
- `public/images/testimonials/testimonial-1.jpg` … `testimonial-6.jpg`
- `public/images/gallery/gallery-01.jpg` … `gallery-12.jpg`
- `public/images/og/og-image.png` (1200×630)
- `public/images/team/team-01.jpg`, `team-02.jpg`

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import it at vercel.com/new.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — no other configuration needed.

## Project Structure

- `app/` — routes (App Router), one folder per page
- `components/layout/` — navbar, footer
- `components/sections/` — homepage sections, reused across pages
- `components/shared/` — small reusable pieces (section heading, counter, WhatsApp button)
- `lib/data.ts` — services, testimonials, gallery, stats (edit this to change site content)
- `lib/validations.ts` — Zod schemas for forms
- `app/api/appointment/route.ts` — appointment form submission handler
