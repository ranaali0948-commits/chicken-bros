import { restaurant } from '../config/restaurant';
import type { SeoPage } from '../types/restaurant';

export function getSeoPage(pathname: string): SeoPage {
  if (pathname === '/menu' || pathname.startsWith('/menu/')) return restaurant.seo.pages.menu;
  if (pathname === '/contact' || pathname.startsWith('/contact/')) return restaurant.seo.pages.contact;
  return restaurant.seo.pages.home;
}

export function absoluteUrl(path: string) {
  return new URL(path, `${restaurant.seo.siteUrl}/`).href;
}

export function restaurantStructuredData() {
  const sameAs = Object.values(restaurant.social).filter(Boolean);
  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return {
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
    openingHoursSpecification: dayOfWeek.map(day => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: '11:00',
      closes: '00:00',
    })),
    hasMenu: absoluteUrl('/menu'),
    logo: absoluteUrl(restaurant.logo),
    image: absoluteUrl(restaurant.hero.image),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
}

export function applySeo(pathname: string) {
  const page = getSeoPage(pathname);
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(restaurant.seo.ogImage);

  document.title = page.title;
  document.documentElement.lang = 'fr';
  setCanonical(canonical);
  setMeta('meta[name="description"]', { name: 'description', content: page.description });
  setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' });
  setMeta('meta[property="og:title"]', { property: 'og:title', content: page.title });
  setMeta('meta[property="og:description"]', { property: 'og:description', content: page.description });
  setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
  setMeta('meta[property="og:type"]', { property: 'og:type', content: restaurant.seo.type });
  setMeta('meta[property="og:image"]', { property: 'og:image', content: image });
  setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: restaurant.seo.siteName });
  setMeta('meta[property="og:locale"]', { property: 'og:locale', content: restaurant.seo.locale });
  setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: page.title });
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: page.description });
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

  let structuredData = document.head.querySelector<HTMLScriptElement>('script[data-restaurant-schema]');
  if (!structuredData) {
    structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.dataset.restaurantSchema = '';
    document.head.appendChild(structuredData);
  }
  structuredData.textContent = JSON.stringify(restaurantStructuredData());
}
