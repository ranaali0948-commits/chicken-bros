export interface OpeningHours { label: string; value: string }
export interface NavigationItem { label: string; target: string }

export interface RestaurantConfig {
  businessName: string; shortName: string; tagline: string; description: string; logo: string; favicon: string;
  phone: string; phoneDisplay: string; email: string; address: string; city: string; postcode: string; country: string;
  googleMapsUrl: string; openingHours: OpeningHours[];
  social: { instagram: string; facebook: string; tiktok: string };
  ordering: { uberEats: string; deliveroo: string; clickAndCollect: string; whatsapp: string };
  navigation: NavigationItem[];
  hero: { eyebrow: string; heading: string; highlightedHeading: string; description: string; primaryCTA: string; secondaryCTA: string; image: string; imageAlt: string; benefits: Array<{ icon: 'quality' | 'home' | 'leaf' | 'speed'; title: string; description: string }> };
  menu: { eyebrow: string; heading: string; description: string; fullMenuCTA: string; popularHeading: string };
  about: { eyebrow: string; heading: string; highlightedHeading: string; description: string; secondaryDescription: string; primaryImage: string; primaryImageAlt: string; secondaryImage: string; secondaryImageAlt: string; pillars: Array<{ icon: 'flame' | 'leaf' | 'heart' | 'truck'; title: string; description: string }> };
  gallery: { eyebrow: string; heading: string };
  reviews: { eyebrow: string; heading: string; summary: string; emptyState: string };
  order: { eyebrow: string; heading: string; description: string };
  contact: { eyebrow: string; heading: string; highlightedHeading: string; description: string; promptHeading: string; promptDescription: string; callLabel: string; directionsLabel: string; orderLabel: string };
  footer: { tagline: string; rightsText: string };
  sections: { hero: boolean; menu: boolean; about: boolean; gallery: boolean; reviews: boolean; order: boolean; contact: boolean };
  seo: { title: string; description: string; keywords: string; ogImage: string };
}
