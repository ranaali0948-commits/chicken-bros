import type { MenuItem, RestaurantMenu } from '../types/menu';

let id = 0;
const item = (category: string, name: string, price: string, description = '', featured = false, image?: string): MenuItem => ({
  id: ++id, category, name, price, description, featured, image, available: true, dietaryTags: [],
});
const images = {
  burgers: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
  chicken: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
  wraps: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
  specialites: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
  plats: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
  biryani: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
  crousty: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=800',
  salades: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const menu: RestaurantMenu = { categories: [
  { id: 'burgers', name: 'Burgers', image: '/images/categories/burgers.webp', fallbackImage: images.burgers, items: [
    item('burgers','Filet Chicken','7,90 €','',true,images.burgers), item('burgers','Empire Filet','8,90 €'), item('burgers','Chicken Tikka','8,50 €'), item('burgers','Chicken Steak','7,00 €'), item('burgers','Bacon Chicken','8,50 €'), item('burgers','Cheese Burger','6,00 €'), item('burgers','Double Cheese','7,50 €'), item('burgers','Triple Cheese Burger','8,90 €'), item('burgers','Royal Bacon','9,90 €'), item('burgers','Bacon Special','9,90 €'), item('burgers','Veggie','8,50 €'), item('burgers','Royal Chicken','9,90 €'), item('burgers','Steak de bœuf','9,90 €'), item('burgers','Fish Burger','8,50 €'), item('burgers','Smash Burger','10,00 €','',true,images.burgers), item('burgers','Smash Bacon','10,90 €'), item('burgers','Vegan Deluxe','7,50 €'),
  ]},
  { id: 'chicken', name: 'Chicken', image: '/images/categories/chicken.webp', fallbackImage: images.chicken, items: [item('chicken','Menu 6 Wings','7,50 €','',true,images.chicken),item('chicken','Menu 10 Wings','8,90 €'),item('chicken','Menu 15 Wings','11,90 €'),item('chicken','Menu 3 Grands Pcs','8,50 €'),item('chicken','Menu 3 Tenders + 4 Wings','8,90 €'),item('chicken','Menu 2 Grands + 4 Wings','8,90 €'),item('chicken','Menu 5 Tenders','8,90 €'),item('chicken','Menu Nuggets','6,90 €')]},
  { id: 'wraps-naans', name: 'Wraps & Naans', image: '/images/categories/wraps-naans.webp', fallbackImage: images.wraps, items: [item('wraps-naans','Tender Wrap & Naan','8,90 €','',true,images.wraps),item('wraps-naans','Tikka Wrap & Naan','8,90 €'),item('wraps-naans','Beef Wrap & Naan','8,90 €'),item('wraps-naans','Seekh Wrap & Naan','8,90 €'),item('wraps-naans','Veg Wrap & Naan','8,90 €'),item('wraps-naans','Mix Wrap & Naan','8,90 €')]},
  { id: 'naans', name: 'Naans', image: '/images/categories/naans.webp', fallbackImage: images.wraps, items: [item('naans','Nature Naan','2,00 €'),item('naans','Cheese Naan','3,50 €'),item('naans','Garlic Naan','3,50 €')]},
  { id: 'biryani', name: 'Biryani', image: '/images/categories/biryani.webp', fallbackImage: images.biryani, items: [item('biryani','Veg Biryani','10,00 €','',false),item('biryani','Poulet Biryani','10,00 €','',true,images.biryani),item('biryani','Tikka Biryani','10,00 €')]},
  { id: 'crousty', name: 'Crousty', image: '/images/categories/crousty.webp', fallbackImage: images.crousty, items: [item('crousty','Riz Crousti','8,00 €','',true,images.crousty),item('crousty','Tikka Crousti','8,00 €')]},
  { id: 'kebab', name: 'Kebab', image: '/images/categories/kebab.webp', fallbackImage: images.wraps, items: [item('kebab','Kebab','7,50 €')]},
  { id: 'specialites', name: 'Nos spécialités', image: '/images/categories/specialites.webp', fallbackImage: images.specialites, items: [item('specialites','Savoyard Raclette','10,50 €','',true,images.specialites),item('specialites','Signature Chicken Bros','9,90 €'),item('specialites','Florida','9,90 €'),item('specialites','Columbus','9,90 €'),item('specialites','Royal Fumé','9,90 €')]},
  { id: 'plats', name: 'Plats', image: '/images/categories/plats.webp', fallbackImage: images.plats, items: [item('plats','Butter Chicken','12,90 €','',true,images.plats),item('plats','Poulet Tikka Masala','12,90 €'),item('plats','Merguez Special','12,90 €')]},
  { id: 'salades', name: 'Salades', image: '/images/categories/salades.webp', fallbackImage: images.salades, items: [item('salades','Salade Fraîche','4,90 €'),item('salades','Salade Chicken','6,90 €'),item('salades','Salade Tikka','7,90 €'),item('salades','Salade Pasta','8,90 €')]},
  { id: 'menu-enfant', name: 'Menu enfant', image: '/images/categories/menu-enfant.webp', fallbackImage: images.burgers, items: [item('menu-enfant','Menu Enfant 01','5,50 €','Cheeseburger, frites, Capri-Sun'),item('menu-enfant','Menu Enfant 02','5,50 €','5 nuggets, frites, Capri-Sun')]},
  { id: 'accompagnements', name: 'Accompagnements', image: '/images/categories/accompagnements.webp', fallbackImage: images.crousty, items: [item('accompagnements','Frites au Cheddar','3,50 €'),item('accompagnements','Frites Cheddar Bacon','4,50 €'),item('accompagnements','Frites Normal','2,00 €'),item('accompagnements','Frites Moyenne','2,90 €'),item('accompagnements','Frites Grande','3,50 €')]},
  { id: 'extras', name: 'Extras', image: '/images/categories/extras.webp', fallbackImage: images.chicken, items: [item('extras','6 Jalapeños Cheddar','4,50 €'),item('extras','6 Bouchées de Camembert','4,50 €'),item('extras','6 Mozzarella Sticks','4,50 €'),item('extras','6 Chili Cheese','4,50 €')]},
  { id: 'boissons', name: 'Boissons', image: '/images/categories/boissons.webp', fallbackImage: images.salades, items: [item('boissons','Canette 33 cl','1,50 €'),item('boissons','Eau minérale 50 cl','1,00 €'),item('boissons','Bouteille 1,5 L','2,90 €'),item('boissons','Red Bull','2,50 €')]},
] };

export const homepageCategories = ['burgers','chicken','wraps-naans','specialites','plats','biryani','crousty','salades'].map(categoryId => menu.categories.find(category => category.id === categoryId)!);
const findItem = (name: string) => menu.categories.flatMap(category => category.items).find(menuItem => menuItem.name === name)!;
export const featuredMenuItems = [
  { ...findItem('Menu 6 Wings'), image: '/images/menu/menu-wings.webp', fallbackImage: images.chicken },
  { ...findItem('Tender Wrap & Naan'), image: '/images/menu/menu-wrap.webp', fallbackImage: images.wraps },
  { ...findItem('Savoyard Raclette'), image: '/images/menu/menu-specialite.webp', fallbackImage: images.specialites },
  { ...findItem('Butter Chicken'), image: '/images/menu/menu-butter-chicken.webp', fallbackImage: images.plats },
];
