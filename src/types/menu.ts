export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  fallbackImage?: string;
  badge?: string;
  featured?: boolean;
  available?: boolean;
  dietaryTags?: string[];
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  image: string;
  fallbackImage: string;
  items: MenuItem[];
}

export interface RestaurantMenu {
  categories: MenuCategory[];
}
