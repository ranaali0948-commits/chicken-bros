export interface OpeningHours { label: string; value: string }
export interface NavigationItem { label: string; target: string }

export interface RestaurantConfig {
  businessName: string; shortName: string; tagline: string; description: string; logo: string; favicon: string;
  phone: string; phoneDisplay: string; email: string; address: string; city: string; postcode: string; country: string;
  googleMapsUrl: string; googleMapsEmbedUrl: string; openingHours: OpeningHours[];
  social: { instagram: string; facebook: string; tiktok: string };
  ordering: { uberEatsUrl: string; deliverooUrl: string; clickCollectUrl: string };
  navigation: NavigationItem[];
  hero: { eyebrow: string; heading: string; highlightedHeading: string; description: string; primaryCTA: string; secondaryCTA: string; image: string; imageFallback: string; imageAlt: string; benefits: Array<{ icon: 'quality' | 'home' | 'leaf' | 'speed'; title: string; description: string }> };
  menu: { eyebrow: string; heading: string; description: string; fullMenuCTA: string; popularHeading: string };
  about: { eyebrow: string; heading: string; highlightedHeading: string; description: string; secondaryDescription: string; primaryImage: string; primaryImageFallback: string; primaryImageAlt: string; secondaryImage: string; secondaryImageAlt: string; pillars: Array<{ icon: 'flame' | 'leaf' | 'heart' | 'truck'; title: string; description: string }> };
  gallery: { eyebrow: string; heading: string };
  reviews: { eyebrow: string; heading: string; summary: string; emptyState: string };
  order: { eyebrow: string; heading: string; description: string; uberEatsLabel: string; deliverooLabel: string; clickAndCollectLabel: string; missingLinkLabel: string };
  map: { eyebrow: string; heading: string; buttonLabel: string };
  contact: { eyebrow: string; heading: string; highlightedHeading: string; description: string; promptHeading: string; promptDescription: string; callLabel: string; directionsLabel: string; orderLabel: string };
  footer: { tagline: string; rightsText: string };
  sections: { hero: boolean; menu: boolean; about: boolean; gallery: boolean; reviews: boolean; order: boolean; contact: boolean };
  seo: { title: string; description: string; keywords: string; ogImage: string };
}
