export interface GalleryImage { id: number; src: string; fallbackSrc: string; alt: string; span?: string }
// Temporary photography: replace with approved local Chicken Bros assets under /public/images/gallery/.
export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/gallery-01.webp', fallbackSrc: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Burger généreux fraîchement préparé', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/images/gallery/gallery-02.webp', fallbackSrc: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Poulet croustillant doré' },
  { id: 3, src: '/images/gallery/gallery-03.webp', fallbackSrc: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Wrap garni servi chaud' },
  { id: 4, src: '/images/gallery/gallery-04.webp', fallbackSrc: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Plat en sauce aux épices' },
  { id: 5, src: '/images/gallery/gallery-05.webp', fallbackSrc: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=700', alt: 'Burger et accompagnement prêts à déguster' },
];
