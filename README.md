# Worod Hazem — Digital Systems in Motion

A complete personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Included

- Editorial responsive homepage
- Six full project case-study routes
- Dedicated résumé page
- Downloadable PDF résumé
- Intro sequence shown once per browser session
- Responsive desktop and mobile navigation
- Scroll progress and controlled motion
- `prefers-reduced-motion` support
- Keyboard-friendly navigation and accessible form labels
- Contact form that opens a prepared email
- SEO metadata, Open Graph image, sitemap and robots.txt
- Custom generated project artwork stored locally

## Run locally

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

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` with the final production URL.
4. Deploy.

## Main content files

- `data/site.ts` — personal information, experience, capabilities and case-study content
- `app/page.tsx` — homepage structure
- `app/work/[slug]/page.tsx` — dynamic case-study template
- `app/resume/page.tsx` — résumé page
- `app/globals.css` — complete visual system and responsive behavior
- `public/projects/` — project artwork
- `public/worod-hazem-resume.pdf` — downloadable résumé

## Contact form

The form opens the visitor's default email application with the inquiry fields already composed. To connect a form service later, replace the submit function in `components/contact-form.tsx`.
