import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
await rm(new URL('dist/', root), { recursive: true, force: true });
await mkdir(new URL('dist/', root), { recursive: true });
await cp(new URL('public/', root), new URL('dist/', root), { recursive: true });
// Configure SITE_URL for a custom domain; Vercel can supply its project origin.
const configuredOrigin = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '');
if (configuredOrigin) {
  const parsed = new URL(configuredOrigin);
  if (!['https:', 'http:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error('SITE_URL must be an HTTP(S) origin without credentials');
  const origin = parsed.origin;
  const paths = [['index.html', '/'], ['terms.html', '/terms'], ['privacy.html', '/privacy']];
  for (const [file, path] of paths) {
    const url = new URL(`dist/${file}`, root);
    const html = (await readFile(url, 'utf8')).replace('</head>', `<link rel="canonical" href="${origin}${path}"><meta property="og:url" content="${origin}${path}"></head>`).replace('content="/assets/yoga.png"', `content="${origin}/assets/yoga.png"`);
    await writeFile(url, html);
  }
  await writeFile(new URL('dist/sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(([, path]) => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>\n`);
  await writeFile(new URL('dist/robots.txt', root), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
}
console.log('Built dist/ — FlowCut static website ready.');
