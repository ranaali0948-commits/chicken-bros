import { Facebook, Instagram, Music2 } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { galleryImages } from '../../data/gallery';
import { SectionHeading } from '../ui/SectionHeading';
export function GallerySection() {
  const social = [{ Icon: Instagram, url: restaurant.social.instagram, label: 'Instagram' }, { Icon: Facebook, url: restaurant.social.facebook, label: 'Facebook' }, { Icon: Music2, url: restaurant.social.tiktok, label: 'TikTok' }].filter(link => link.url);
  return <section id="gallery" className="bg-background py-20 sm:py-24 px-5"><div className="max-w-7xl mx-auto"><div className="text-center mb-12"><SectionHeading eyebrow={restaurant.gallery.eyebrow} heading={restaurant.gallery.heading}/></div><div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[220px] gap-3">{galleryImages.map(image => <div key={image.id} className={`overflow-hidden rounded-2xl group ${image.span ?? ''}`}><img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/></div>)}</div>{social.length > 0 && <div className="flex justify-center mt-8 gap-3">{social.map(({Icon,url,label}) => <a key={label} href={url} aria-label={label} className="social-button"><Icon size={17}/></a>)}</div>}</div></section>;
}
