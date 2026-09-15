import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { restaurant } from './src/config/restaurant';

const absoluteUrl = (path: string) => new URL(path, `${restaurant.seo.siteUrl}/`).href;
const escapeHtml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.businessName,
  url: restaurant.seo.siteUrl,
  telephone: restaurant.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: restaurant.address,
    postalCode: restaurant.postcode,
    addressLocality: restaurant.city,
    addressCountry: 'FR',
  },
  openingHoursSpecification: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => ({
    '@type': 'OpeningHoursSpecification', dayOfWeek: day, opens: '11:00', closes: '00:00',
  })),
  hasMenu: absoluteUrl('/menu'),
  logo: absoluteUrl(restaurant.logo),
  image: absoluteUrl(restaurant.hero.image),
  ...(Object.values(restaurant.social).some(Boolean) ? { sameAs: Object.values(restaurant.social).filter(Boolean) } : {}),
};

type SeoPage = typeof restaurant.seo.pages.home;

function seoHead(page: SeoPage) {
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(restaurant.seo.ogImage);
  return `
    <title data-seo="title">${escapeHtml(page.title)}</title>
    <meta data-seo="description" name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="index, follow" />
    <link data-seo="canonical" rel="canonical" href="${canonical}" />
    <meta data-seo="og:title" property="og:title" content="${escapeHtml(page.title)}" />
    <meta data-seo="og:description" property="og:description" content="${escapeHtml(page.description)}" />
    <meta data-seo="og:url" property="og:url" content="${canonical}" />
    <meta property="og:type" content="${restaurant.seo.type}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="${escapeHtml(restaurant.seo.siteName)}" />
    <meta property="og:locale" content="${restaurant.seo.locale}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta data-seo="twitter:title" name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta data-seo="twitter:description" name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json" data-restaurant-schema>${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`;
}

function replaceSeoHead(html: string, page: SeoPage) {
  return html.replace(/\s*<title data-seo="title">[\s\S]*?<\/title>[\s\S]*?<script type="application\/ld\+json" data-restaurant-schema>[\s\S]*?<\/script>/, seoHead(page));
}

function productionSeoPlugin() {
  return {
    name: 'chicken-bros-production-seo',
    transformIndexHtml(html: string) {
      return html.replace('<!-- SEO_HEAD -->', seoHead(restaurant.seo.pages.home));
    },
    async closeBundle() {
      const outputDirectory = resolve('dist');
      const homeHtml = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
      for (const page of [restaurant.seo.pages.menu, restaurant.seo.pages.contact]) {
        const routeHtml = replaceSeoHead(homeHtml, page);
        const routeDirectory = resolve(outputDirectory, page.path.slice(1));
        await mkdir(routeDirectory, { recursive: true });
        await writeFile(resolve(outputDirectory, `${page.path.slice(1)}.html`), routeHtml);
        await writeFile(resolve(routeDirectory, 'index.html'), routeHtml);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), productionSeoPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
