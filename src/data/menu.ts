import type { MenuItem, RestaurantMenu } from '../types/menu';

let id = 0;
const productImages: Record<string, string> = {
  'Filet Chicken': '/images/menu/burgers-filet-chicken.jpg',
  'Empire Filet': '/images/menu/burgers-empire-filet.jpg',
  'Chicken Tikka': '/images/menu/burgers-chicken-tikka.jpg',
  'Chicken Steak': '/images/menu/burgers-chicken-steak.jpg',
  'Bacon Chicken': '/images/menu/burgers-bacon-chicken.jpg',
  'Cheese Burger': '/images/menu/burgers-cheese-burger.jpg',
  'Double Cheese': '/images/menu/burgers-double-cheese.jpg',
  'Triple Cheese Burger': '/images/menu/burgers-triple-cheese.jpg',
  'Royal Bacon': '/images/menu/burgers-royal-bacon.jpg',
  'Bacon Special': '/images/menu/burgers-bacon-special.jpg',
  'Veggie': '/images/menu/burgers-veggie.jpg',
  'Royal Chicken': '/images/menu/burgers-royal-chicken.jpg',
  'Steak de bœuf': '/images/menu/burgers-steak-boeuf.jpg',
  'Fish Burger': '/images/menu/burgers-fish-burger.jpg',
  'Smash Burger': '/images/menu/burgers-smash-burger.jpg',
  'Smash Bacon': '/images/menu/burgers-smash-bacon.jpg',
  'Vegan Deluxe': '/images/menu/burgers-vegan-deluxe.jpg',
  'Menu 6 Wings': '/images/menu/chicken-6-wings.jpg',
  'Menu 10 Wings': '/images/menu/chicken-10-wings.jpg',
  'Menu 15 Wings': '/images/menu/chicken-15-wings.jpg',
  'Menu 3 Grands Pcs': '/images/menu/chicken-3-grands.jpg',
  'Menu 3 Tenders + 4 Wings': '/images/menu/chicken-3-tenders-4-wings.jpg',
  'Menu 2 Grands + 4 Wings': '/images/menu/chicken-2-grands-4-wings.jpg',
  'Menu 5 Tenders': '/images/menu/chicken-5-tenders.jpg',
  'Menu Nuggets': '/images/menu/chicken-nuggets.jpg',
  'Tender Wrap & Naan': '/images/menu/wraps-tender.jpg',
  'Tikka Wrap & Naan': '/images/menu/wraps-tikka.jpg',
  'Beef Wrap & Naan': '/images/menu/wraps-beef.jpg',
  'Seekh Wrap & Naan': '/images/menu/wraps-seekh.jpg',
  'Veg Wrap & Naan': '/images/menu/wraps-veg.jpg',
  'Mix Wrap & Naan': '/images/menu/wraps-mix.jpg',
  'Nature Naan': '/images/menu/naans-nature.jpg',
  'Cheese Naan': '/images/menu/naans-cheese.jpg',
  'Garlic Naan': '/images/menu/naans-garlic.jpg',
  'Veg Biryani': '/images/menu/biryani-veg.jpg',
  'Poulet Biryani': '/images/menu/biryani-poulet.jpg',
  'Tikka Biryani': '/images/menu/biryani-tikka.jpg',
  'Riz Crousti': '/images/menu/crousty-riz.jpg',
  'Tikka Crousti': '/images/menu/crousty-tikka.jpg',
  'Kebab': '/images/menu/kebab.jpg',
  'Savoyard Raclette': '/images/menu/specialites-savoyard-raclette.jpg',
  'Signature Chicken Bros': '/images/menu/specialites-signature.jpg',
  'Florida': '/images/menu/specialites-florida.jpg',
  'Columbus': '/images/menu/specialites-columbus.jpg',
  'Royal Fumé': '/images/menu/specialites-royal-fume.jpg',
  'Butter Chicken': '/images/menu/plats-butter-chicken.jpg',
  'Poulet Tikka Masala': '/images/menu/plats-tikka-masala.jpg',
  'Merguez Special': '/images/menu/plats-merguez.jpg',
  'Salade Fraîche': '/images/menu/salades-fraiche.jpg',
  'Salade Chicken': '/images/menu/salades-chicken.jpg',
  'Salade Tikka': '/images/menu/salades-tikka.jpg',
  'Salade Pasta': '/images/menu/salades-pasta.jpg',
  'Menu Enfant 01': '/images/menu/menu-enfant-01.jpg',
  'Menu Enfant 02': '/images/menu/menu-enfant-02.jpg',
  'Frites au Cheddar': '/images/menu/accompagnements-frites-cheddar.jpg',
  'Frites Normal': '/images/menu/accompagnements-frites-normal.jpg',
  'Frites Moyenne': '/images/menu/accompagnements-frites-moyenne.jpg',
  'Frites Grande': '/images/menu/accompagnements-frites-grande.jpg',
  '6 Jalapeños Cheddar': '/images/menu/extras-jalapenos-cheddar.jpg',
  '6 Bouchées de Camembert': '/images/menu/extras-camembert.jpg',
  '6 Mozzarella Sticks': '/images/menu/extras-mozzarella.jpg',
  '6 Chili Cheese': '/images/menu/extras-chili-cheese.jpg',
};

const productImagePositions: Record<string, string> = {
  'Filet Chicken': '50% 55%',
  'Empire Filet': '50% 55%',
  'Chicken Tikka': '50% 55%',
  'Chicken Steak': '50% 55%',
  'Cheese Burger': '50% 55%',
  'Tender Wrap & Naan': '50% 56%',
  'Cheese Naan': '50% 56%',
  'Poulet Biryani': '50% 54%',
  'Signature Chicken Bros': '50% 58%',
};

const item = (category: string, name: string, price: string, description = '', featured = false, image?: string): MenuItem => ({
  id: ++id, category, name, price, description, featured, image: productImages[name] ?? image,
  imagePosition: productImagePositions[name], available: true, dietaryTags: [],
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
  { id: 'burgers', name: 'Burgers', image: '/images/categories/burgers.jpg', fallbackImage: images.burgers, items: [
    item('burgers','Filet Chicken','7,90 €','2 tenders, salade, tomate, oignons, sauce mayonnaise.',true,images.burgers),
    item('burgers','Empire Filet','8,90 €','2 tenders, galette de pommes de terre, sauce mayonnaise.'),
    item('burgers','Chicken Tikka','8,50 €','Poulet tikka, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Chicken Steak','7,00 €','Steak de poulet, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Bacon Chicken','8,50 €','2 tenders, bacon, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Cheese Burger','6,00 €','1 steak de bœuf 90 g, fromage, salade, tomate, oignons, sauce Biggy.'),
    item('burgers','Double Cheese','7,50 €','2 steaks de bœuf 90 g, fromage, salade, tomate, oignons, sauce Biggy.'),
    item('burgers','Triple Cheese Burger','8,90 €','3 steaks de bœuf 90 g, fromage, salade, tomate, oignons, sauce Biggy.'),
    item('burgers','Royal Bacon','9,90 €','2 steaks de bœuf, bacon, fromage, salade, tomate, oignons, sauce Biggy.'),
    item('burgers','Bacon Special','9,90 €','Œuf, steak de bœuf, bacon, fromage, salade, tomate, oignons, sauce Biggy.'),
    item('burgers','Veggie','8,50 €','Galette de pommes de terre, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Royal Chicken','9,90 €','Steak de poulet, 2 tenders, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Steak de bœuf','9,90 €','Steak de poulet, 2 tenders, salade, tomate, oignons, sauce Biggy, sauce mayonnaise.'),
    item('burgers','Fish Burger','8,50 €','Steak de poisson, salade, tomate, oignons, sauce mayonnaise.'),
    item('burgers','Smash Burger','10,00 €','2 steaks smashés, cheddar, iceberg, tomate, oignons caramélisés, cornichons, sauce miel moutarde.',true,images.burgers),
    item('burgers','Smash Bacon','10,90 €','2 steaks smashés, bacon, cheddar, iceberg, tomate, oignons caramélisés, cornichons, sauce maison.'),
    item('burgers','Vegan Deluxe','7,50 €','Steak végétal, fromage végétal, salade, tomate, oignons rouges, sauce.'),
  ]},

  { id: 'chicken', name: 'Chicken', image: '/images/categories/chicken.jpg', fallbackImage: images.chicken, items: [
    item('chicken','Menu 6 Wings','7,50 €','',true,images.chicken),
    item('chicken','Menu 10 Wings','8,90 €'),
    item('chicken','Menu 15 Wings','11,90 €'),
    item('chicken','Menu 3 Grands Pcs','8,50 €'),
    item('chicken','Menu 3 Tenders + 4 Wings','8,90 €'),
    item('chicken','Menu 2 Grands + 4 Wings','8,90 €'),
    item('chicken','Menu 5 Tenders','8,90 €'),
    item('chicken','Menu Nuggets','6,90 €'),
  ]},

  { id: 'wraps-naans', name: 'Wraps & Naans', image: '/images/categories/wraps-naans.jpg', fallbackImage: images.wraps, items: [
    item('wraps-naans','Tender Wrap & Naan','8,90 €','Tenders, salade, tomate, oignons, sauce mayonnaise.',true,images.wraps),
    item('wraps-naans','Tikka Wrap & Naan','8,90 €','Poulet tikka, salade, tomate, oignons, sauce mayonnaise.'),
    item('wraps-naans','Beef Wrap & Naan','8,90 €','Steak de bœuf, salade, tomate, oignons, sauce Biggy.'),
    item('wraps-naans','Seekh Wrap & Naan','8,90 €','Seekh d’agneau, salade, tomate, oignons, sauce mayonnaise.'),
    item('wraps-naans','Veg Wrap & Naan','8,90 €','Galette de pommes de terre, salade, tomate, oignons, sauce mayonnaise.'),
    item('wraps-naans','Mix Wrap & Naan','8,90 €','Tenders, steak de bœuf, salade, tomate, oignons, sauce mayonnaise.'),
  ]},

  { id: 'naans', name: 'Naans', image: '/images/categories/naans.jpg', fallbackImage: images.wraps, items: [
    item('naans','Nature Naan','2,00 €'),
    item('naans','Cheese Naan','3,50 €'),
    item('naans','Garlic Naan','3,50 €'),
  ]},

  { id: 'biryani', name: 'Biryani', image: '/images/categories/biryani.jpg', fallbackImage: images.biryani, items: [
    item('biryani','Veg Biryani','10,00 €'),
    item('biryani','Poulet Biryani','10,00 €','',true,images.biryani),
    item('biryani','Tikka Biryani','10,00 €'),
  ]},

  { id: 'crousty', name: 'Crousty', image: '/images/categories/crousty.jpg', fallbackImage: images.crousty, items: [
    item('crousty','Riz Crousti','8,00 €','Riz croustillant, tenders maison, oignons frits, sauce sucrée ou piquante.',true,images.crousty),
    item('crousty','Tikka Crousti','8,00 €','Riz croustillant, chicken tikka, oignons frits, sauce sucrée ou piquante.'),
  ]},

  { id: 'kebab', name: 'Kebab', image: '/images/categories/kebab.jpg', fallbackImage: images.wraps, items: [
    item('kebab','Kebab','7,50 €','Pain normal, kebab de poulet, salade, tomate, oignon, sauce mayonnaise.'),
  ]},

  { id: 'specialites', name: 'Nos spécialités', image: '/images/categories/specialites.jpg', fallbackImage: images.specialites, items: [
    item('specialites','Savoyard Raclette','10,50 €','Steak de bœuf ou escalope de poulet, galette de pommes de terre, raclette, pain naan ou tortilla.',true,images.specialites),
    item('specialites','Signature Chicken Bros','9,90 €','Poulet tikka, 2 steaks de bœuf grillés, fromage, pain naan ou tortilla.'),
    item('specialites','Florida','9,90 €','Tenders, galette de pommes de terre, œuf, fromage, pain naan ou tortilla.'),
    item('specialites','Columbus','9,90 €','2 steaks de bœuf, œuf, fromage Boursin, pain naan ou tortilla.'),
    item('specialites','Royal Fumé','9,90 €','Steak, galette de pommes de terre, œuf, fromage, pain naan ou tortilla.'),
  ]},

  { id: 'plats', name: 'Plats', image: '/images/categories/plats.jpg', fallbackImage: images.plats, items: [
    item('plats','Butter Chicken','12,90 €','Butter chicken, riz, boisson au choix.',true,images.plats),
    item('plats','Poulet Tikka Masala','12,90 €','Poulet tikka masala, riz, boisson au choix.'),
    item('plats','Merguez Special','12,90 €','2 merguez, 2 tender, riz, boisson au choix.'),
  ]},

  { id: 'salades', name: 'Salades', image: '/images/categories/salades.jpg', fallbackImage: images.salades, items: [
    item('salades','Salade Fraîche','4,90 €','Salade iceberg, concombre, maïs, olives, tomate, sauce salade.'),
    item('salades','Salade Chicken','6,90 €','Tenders de poulet, salade iceberg, concombre, maïs, olives, tomate, sauce salade.'),
    item('salades','Salade Tikka','7,90 €','Poulet tikka, salade iceberg, concombre, maïs, olives, tomate, sauce salade.'),
    item('salades','Salade Pasta','8,90 €','Pâtes, salade iceberg, concombre, maïs, olives, tomate, sauce salade.'),
  ]},

  { id: 'menu-enfant', name: 'Menu enfant', image: '/images/categories/menu-enfant.jpg', fallbackImage: images.burgers, items: [
    item('menu-enfant','Menu Enfant 01','5,50 €','Cheeseburger, frites, Capri-Sun.'),
    item('menu-enfant','Menu Enfant 02','5,50 €','5 nuggets, frites, Capri-Sun.'),
  ]},

  { id: 'accompagnements', name: 'Accompagnements', image: '/images/categories/accompagnements.jpg', fallbackImage: images.crousty, items: [
    item('accompagnements','Frites au Cheddar','3,50 €','Frites, sauce cheddar.'),
    item('accompagnements','Frites Cheddar Bacon','4,50 €','Frites, sauce cheddar, bacon.'),
    item('accompagnements','Frites Normal','2,00 €'),
    item('accompagnements','Frites Moyenne','2,90 €'),
    item('accompagnements','Frites Grande','3,50 €'),
  ]},

  { id: 'extras', name: 'Extras', image: '/images/categories/extras.jpg', fallbackImage: images.chicken, items: [
    item('extras','6 Jalapeños Cheddar','4,50 €'),
    item('extras','6 Bouchées de Camembert','4,50 €'),
    item('extras','6 Mozzarella Sticks','4,50 €'),
    item('extras','6 Chili Cheese','4,50 €'),
  ]},

  { id: 'boissons', name: 'Boissons', image: '/images/categories/boissons.jpg', fallbackImage: images.salades, items: [
    item('boissons','Canette 33 cl','1,50 €'),
    item('boissons','Eau minérale 50 cl','1,00 €'),
    item('boissons','Bouteille 1,5 L','2,90 €'),
    item('boissons','Red Bull','2,50 €'),
  ]},
] };

export const homepageCategories = ['burgers','chicken','wraps-naans','specialites','plats','biryani','crousty','salades'].map(categoryId => menu.categories.find(category => category.id === categoryId)!);

const findItem = (name: string) => menu.categories.flatMap(category => category.items).find(menuItem => menuItem.name === name)!;

export const featuredMenuItems = [
  { ...findItem('Menu 6 Wings'), fallbackImage: images.chicken },
  { ...findItem('Tender Wrap & Naan'), fallbackImage: images.wraps },
  { ...findItem('Savoyard Raclette'), fallbackImage: images.specialites },
  { ...findItem('Butter Chicken'), fallbackImage: images.plats },
];
