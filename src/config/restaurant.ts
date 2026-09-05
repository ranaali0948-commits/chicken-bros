import type { RestaurantConfig } from '../types/restaurant';

export const restaurant: RestaurantConfig = {
  businessName: 'Chicken Bros', shortName: 'CHICKEN BROS', tagline: 'Fast Food',
  description: 'Burgers, chicken, wraps, naans, biryani, plats et bien plus à Paris 18.',
  logo: '/images/logo/chicken-bros-logo.webp',
  favicon: '', phone: '+33765272890', phoneDisplay: '07 65 27 28 90', email: '',
  address: '92 Avenue de Saint-Ouen', city: 'Paris', postcode: '75018', country: 'France',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=92%20Avenue%20de%20Saint-Ouen%2075018%20Paris',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=92%20Avenue%20de%20Saint-Ouen%2075018%20Paris&output=embed',
  openingHours: [{ label: 'Ouvert 7j/7', value: '11h00 – 00h00' }],
  social: { instagram: '', facebook: '', tiktok: '' },
  ordering: { uberEatsUrl: '', deliverooUrl: '', clickCollectUrl: '' },
  navigation: [
    { label: 'Accueil', target: 'hero' }, { label: 'Menu', target: 'menu' }, { label: 'Nos spécialités', target: 'specialites' },
    { label: 'À propos', target: 'about' }, { label: 'Galerie', target: 'gallery' }, { label: 'Avis', target: 'reviews' }, { label: 'Contact', target: 'contact' },
  ],
  hero: {
    eyebrow: 'CHICKEN BROS • PARIS 18', heading: 'LE GOÛT', highlightedHeading: 'QUI FAIT LA DIFFÉRENCE.',
    description: 'Burgers, chicken, wraps, naans et plats généreux.',
    primaryCTA: 'Voir le menu', secondaryCTA: 'Commander',
    image: '/images/hero/hero-food.webp', imageFallback: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1400', imageAlt: 'Burger généreux servi avec des frites',
    benefits: [
      { icon: 'quality', title: 'Poulet de qualité', description: 'Des produits sélectionnés' }, { icon: 'home', title: 'Recettes maison', description: 'Du goût à chaque bouchée' },
      { icon: 'leaf', title: 'Options veggie', description: 'Pour tous les goûts' }, { icon: 'speed', title: 'Service rapide', description: 'À emporter ou en livraison' },
    ],
  },
  menu: { eyebrow: 'Notre carte', heading: 'À CHACUN SON ENVIE', description: 'Découvrez nos grandes catégories et une sélection de nos incontournables.', fullMenuCTA: 'Voir le menu complet', popularHeading: 'Les incontournables' },
  about: {
    eyebrow: 'À propos', heading: 'UNE PASSION POUR LE', highlightedHeading: 'BON GOÛT',
    description: 'Chez Chicken Bros, nous aimons les recettes généreuses, les saveurs qui font plaisir et les repas à partager.',
    secondaryDescription: 'Burgers, chicken, wraps, naans et plats : notre menu réunit différentes saveurs pour satisfaire toutes les envies.',
    primaryImage: '/images/about/about-main.webp', primaryImageFallback: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=900', primaryImageAlt: 'Burger fraîchement préparé',
    secondaryImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', secondaryImageAlt: 'Repas généreux à partager',
    pillars: [
      { icon: 'flame', title: 'Des saveurs généreuses', description: 'Une carte pensée pour les grandes comme les petites faims.' }, { icon: 'leaf', title: 'Pour tous les goûts', description: 'Des recettes variées, avec plusieurs options veggie.' },
      { icon: 'heart', title: 'Le plaisir avant tout', description: 'Des repas simples, savoureux et faits pour être partagés.' }, { icon: 'truck', title: 'Sur place ou à emporter', description: 'Choisissez la formule qui vous convient.' },
    ],
  },
  gallery: { eyebrow: 'Galerie', heading: 'NOS MEILLEURS MOMENTS' },
  reviews: { eyebrow: 'Avis', heading: 'VOTRE AVIS COMPTE', summary: '', emptyState: 'Les avis vérifiés de nos clients seront bientôt disponibles ici.' },
  order: { eyebrow: 'Commande', heading: 'COMMANDEZ EN LIGNE', description: 'Choisissez votre plateforme préférée et commandez Chicken Bros en quelques clics.', uberEatsLabel: 'Commander sur Uber Eats', deliverooLabel: 'Commander sur Deliveroo', clickAndCollectLabel: 'Click & Collect', missingLinkLabel: 'Lien à ajouter' },
  map: { eyebrow: 'Nous trouver', heading: 'CHICKEN BROS · PARIS 18', buttonLabel: 'Ouvrir dans Google Maps' },
  contact: { eyebrow: 'Contact', heading: 'CHICKEN BROS', highlightedHeading: '', description: 'Sur place, à emporter ou en livraison : nous sommes ouverts tous les jours.', promptHeading: 'UNE ENVIE DE CHICKEN BROS ?', promptDescription: 'Appelez-nous, trouvez votre itinéraire ou commandez auprès de votre plateforme préférée.', callLabel: 'Appeler', directionsLabel: 'Itinéraire', orderLabel: 'Commander' },
  footer: { tagline: 'Fast Food', rightsText: 'Tous droits réservés.' },
  sections: { hero: true, menu: true, about: true, gallery: true, reviews: false, order: true, contact: true },
  seo: { title: 'Chicken Bros | Fast Food à Paris 18', description: 'Découvrez Chicken Bros au 92 Avenue de Saint-Ouen, Paris 18 : burgers, chicken, wraps, naans, biryani, plats et bien plus. Sur place, à emporter ou en livraison.', keywords: 'Chicken Bros, fast food Paris 18, burgers, chicken, wraps, naans, biryani', ogImage: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200' },
};
