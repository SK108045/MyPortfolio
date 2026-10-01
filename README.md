# John Wakaba — Portfolio

A Next.js portfolio for my web, mobile, business systems, and data tooling work. The current collection includes Multi-station POS, Offline Android POS, Nicoo Furniture Hub, Parseify, and SketchSync.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3002. For a production build:

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The site uses a bundled Inter font, so builds do not need Google Fonts access. Existing MDX project and blog URLs remain available.

## Update the portfolio

- **Project collection and case studies:** `src/app/resources/projects.ts`. Keep descriptions tied to implemented behavior. Set `source` only for publicly accessible repositories and `live` only for a verified destination.
- **Homepage:** `src/app/[locale]/page.tsx`.
- **About:** `src/app/[locale]/about/page.tsx`.
- **Contact email:** `contactEmail` in `src/app/resources/projects.ts`.
- **Navigation and footer:** `src/components/Header.tsx` and `src/components/Footer.tsx`.
- **Design and responsive styles:** `src/components/portfolio/portfolio.css`.
- **Project artwork:** `src/components/portfolio/ProjectVisual.tsx`. These are illustrative system overviews, not application screenshots.
- **Older projects and writing:** existing MDX files under `src/app/[locale]/work/projects` and `src/app/[locale]/blog/posts`.
- **Canonical hostname:** `baseURL` in `src/app/resources/config.js`. Update it when moving to a custom domain.

The project filters are local and do not depend on GitHub availability. Private projects have public summaries with no inaccessible source-code link. Email contact uses `mailto:` and clipboard copy; there is no unconfigured contact form or newsletter on the new pages.

## Content review

Project descriptions were reviewed against repository source and documentation on 1 October 2026:

- Multi-Station_POS: `docs/SHARED_SHOP.md` and backend dependencies; shared PostgreSQL inventory, cash checkout, till enrollment, and separate staff identity.
- POS_APK: `README.md` and Capacitor dependencies; standalone device storage and browser-preview backups.
- furniture: `README.md`, account/payment documentation, and package dependencies; Astro storefront, Clerk, Supabase, and Swifta integration.
- Shopify: pipeline README and public-site documentation; conversion tooling is separate from the pilot marketing site.
- SketchSync: existing case study and Node.js dependencies; canvas collaboration, WebSocket, and Firebase.

Built with Next.js and [Once UI](https://once-ui.com).

Inter is bundled under the SIL Open Font License; see `public/fonts/Inter-LICENSE.txt`.
