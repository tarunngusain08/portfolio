# Tarunn Gusain — Engineering Portfolio

A portfolio built with Next.js 14, React, TypeScript/JavaScript, MDX and the existing Once UI design system. It presents backend and distributed-systems experience, sanitized professional case studies, and a small set of public engineering projects.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Content structure

- `src/app/resources/portfolio.ts` contains the curated experience timeline, case studies, public project cards, skills and site identity.
- `src/app/work/projects/*.mdx` contains project notes. Public project links point to their source repositories.
- `src/app/resources/config.js` contains the site URL, route visibility and Once UI theme configuration.
- `/experience`, `/work` and `/about` are the recruiter-facing routes. Older blog and gallery routes are kept out of navigation and the sitemap.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

There is no separate test script in `package.json`.

## Résumé follow-up

The current résumé PDF was provided as a reference but is not published by the site. To offer a download, add an approved public copy at `public/resume.pdf`, remove the TODO next to `resumePath` in `src/app/resources/portfolio.ts`, and add the résumé download CTA.
