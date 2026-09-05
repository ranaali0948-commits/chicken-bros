export interface GalleryImage { id: number; src: string; alt: string; span?: string }
export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Freshly prepared dishes', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Chef preparing food' },
  { id: 3, src: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Craft burger' },
  { id: 4, src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Restaurant interior' },
  { id: 5, src: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Burger close-up' },
];
