export interface Review { id: number; name: string; rating: number; text: string; date: string; source: string }
export const reviews: Review[] = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'Hands down the best burger in the city. The Truffle Royale is something else — rich, indulgent, perfectly balanced. Worth every penny.', date: 'March 2025', source: 'Google' },
  { id: 2, name: 'James R.', rating: 5, text: 'Obsessed with the Smoke & Fire. The heat is real but the flavour is even better. Fast delivery too — still arrived hot.', date: 'April 2025', source: 'Google' },
  { id: 3, name: 'Priya K.', rating: 5, text: 'As a vegan I was sceptical, but the Garden Ember completely won me over. That cashew cheese is incredible. Will be back weekly.', date: 'May 2025', source: 'Google' },
];
