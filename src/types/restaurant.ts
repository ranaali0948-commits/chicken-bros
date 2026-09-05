export interface OpeningHours {
  label: string;
  value: string;
}

export interface RestaurantConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
  googleMapsUrl: string;
  openingHours: OpeningHours[];
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  ordering: {
    uberEats: string;
    deliveroo: string;
    clickAndCollect: string;
    whatsapp: string;
  };
  navigation: string[];
  hero: {
    eyebrow: string;
    heading: string;
    highlightedHeading: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    image: string;
    imageAlt: string;
    stats: Array<{ label: string; value: string }>;
  };
  menu: { eyebrow: string; heading: string; description: string; fullMenuCTA: string };
  about: {
    eyebrow: string;
    heading: string;
    highlightedHeading: string;
    description: string;
    secondaryDescription: string;
    primaryImage: string;
    primaryImageAlt: string;
    secondaryImage: string;
    secondaryImageAlt: string;
    experienceValue: string;
    experienceLabel: string;
    pillars: Array<{ icon: 'flame' | 'leaf' | 'award' | 'truck'; title: string; description: string }>;
  };
  gallery: { eyebrow: string; heading: string };
  reviews: { eyebrow: string; heading: string; summary: string };
  contact: { eyebrow: string; heading: string; highlightedHeading: string; description: string };
  booking: {
    heading: string;
    description: string;
    submitLabel: string;
    successHeading: string;
    successDescription: string;
  };
  footer: { tagline: string; businessText: string; rightsText: string };
  sections: { hero: boolean; menu: boolean; about: boolean; gallery: boolean; reviews: boolean; order: boolean; contact: boolean };
  seo: { title: string; description: string; keywords: string; ogImage: string };
}
