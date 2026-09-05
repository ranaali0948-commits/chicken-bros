import type { RestaurantMenu } from '../types/menu';

export const menu: RestaurantMenu = { categories: [{ id: 'burgers', name: 'Burgers', items: [
  { id: 1, name: 'The Ember Classic', description: 'Dry-aged beef, smoked cheddar, caramelised onion, ember sauce', price: '£12.50', badge: 'Bestseller', featured: true, available: true, dietaryTags: [], category: 'burgers', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Truffle Royale', description: 'Wagyu patty, black truffle mayo, aged gruyère, pickled shallots', price: '£18.00', badge: 'Premium', featured: true, available: true, dietaryTags: [], category: 'burgers', image: 'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Smoke & Fire', description: 'Double smash patty, chipotle glaze, jalapeños, pepper jack, crispy onions', price: '£14.50', badge: 'Spicy', featured: true, available: true, dietaryTags: ['spicy'], category: 'burgers', image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Garden Ember', description: 'Chargrilled portobello, cashew cheese, roasted peppers, pesto aioli', price: '£11.00', badge: 'Vegan', featured: true, available: true, dietaryTags: ['vegan'], category: 'burgers', image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600' },
] }] };

export const featuredMenuItems = menu.categories.flatMap((category) => category.items).filter((item) => item.featured && item.available);
