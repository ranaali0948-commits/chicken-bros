export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
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
  items: MenuItem[];
}

export interface RestaurantMenu {
  categories: MenuCategory[];
}
