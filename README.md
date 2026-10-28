# FlowCut website

Official website source for FlowCut, a yoga video editing app by SWINK AI INC.

Repository: https://github.com/diifan/flowcut-website

## Development

Static HTML/CSS with Bun 1.2+ tooling and no third-party dependencies.

```sh
bun run dev
bun run build
bun run preview
```

The local server listens on http://127.0.0.1:4173. Source lives in `public/`; build output is `dist/`. Both local preview and Vercel support `/terms` and `/privacy` clean URLs. FAQ controls and legal links work without JavaScript.

## Design and source

The layout follows AceCut’s editorial website: large photographic hero, feature grid, workflow, FAQ, closing CTA and company footer. Colors use FlowCut’s confirmed cream, blush, berry and plum brand palette.

Assets were obtained read-only from `soda@192.168.0.109`, under `/Users/soda/Swi-app/FlowCut/`:

- Official installed icon: `products/FlowCut/XCut/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon.png`.
- Hero: `products/FlowCut/design/studio-demos/yoga-color-source.png`.
- Four illustrative product panels: `design/app-store/01-live-v1.png` through `04-studio-v1.png`.
- Product behavior verified against the product README, product.json, latest `memory/OPEN_ISSUES.md` and app privacy manifest on October 29, 2026. Newer implementation notes take precedence over the older README.

Terms and Privacy adapt AceCut’s structure to FlowCut’s yoga recognition, editing, local video processing, account service and sharing behavior. No tennis analytics, scoring or tracer claims were carried over. Footer on every page: © 2026 SWINK AI INC., hello@goswie.com, Terms and Privacy.

## App availability

The project records App Store ID 6827605284. Apple’s public lookup returned no listing on October 29, 2026, so the website retains a Coming soon availability note. The hero and closing App Store badges point to the registered app’s direct URL, https://apps.apple.com/app/id6827605284; the public listing will become available when Apple releases it. Product panels are labeled illustrative; they are not claimed to be actual release screenshots.

## Hosting and metadata

GitHub publication is separate from hosting. No hosting project or custom domain is provisioned by this change.

For Vercel, import this repository with Root Directory `./`, framework Other, build command `bun run build`, output `dist`. The supplied `vercel.json` sets these values.

Set `SITE_URL` to the confirmed production origin when a custom domain is assigned. Otherwise, builds use `VERCEL_PROJECT_PRODUCTION_URL` if available. With a configured origin the build generates canonical and Open Graph URLs, robots and a sitemap including `/`, `/terms` and `/privacy`. Without an origin the build deliberately omits canonical URLs and sitemap instead of inventing a domain.

## Validation

Bun 1.4.3 build passed. Chromium HTTP checks passed for the homepage, Terms and Privacy at 1440, 768, 390 and 320 px: no horizontal overflow or JavaScript errors, all images loaded, one H1 per page, correct copyright/email/legal links. FAQ expansion, clean URLs with and without trailing slash, missing-page 404 and static resource links were verified. Desktop and mobile screenshots were reviewed. Local evidence lives in ignored `validation/` and is not published.
