import { ArrowUpRight, Bike, ShoppingBag, Store } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { SectionLabel } from '../ui/SectionHeading';

const platforms = [
  { name: 'Uber Eats', label: restaurant.order.uberEatsLabel, url: restaurant.ordering.uberEatsUrl, Icon: Bike },
  { name: 'Deliveroo', label: restaurant.order.deliverooLabel, url: restaurant.ordering.deliverooUrl, Icon: ShoppingBag },
  { name: 'Click & Collect', label: restaurant.order.clickAndCollectLabel, url: restaurant.ordering.clickCollectUrl, Icon: Store },
];
export function OrderSection() {
  const visiblePlatforms = platforms.filter(platform => platform.url);
  return <section id="order" className="bg-accent px-5 py-20 sm:py-28"><div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-[1fr_.9fr] gap-8 items-end"><div><SectionLabel>{restaurant.order.eyebrow}</SectionLabel><h2 className="font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[.9] font-black text-footer-text">{restaurant.order.heading}</h2></div><p className="text-footer-text/70 text-lg lg:pb-2 max-w-xl">{restaurant.order.description}</p></div>
    {visiblePlatforms.length > 0 && <div className="grid md:grid-cols-2 gap-4 mt-10">{visiblePlatforms.map(({name,label,url,Icon},index) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={`group rounded-[2rem] p-7 sm:p-9 flex items-center gap-5 hover:-translate-y-1 transition-all ${index===0?'bg-primary text-heading':'bg-surface text-heading'}`}><span className="w-14 h-14 rounded-2xl bg-heading text-white flex items-center justify-center"><Icon/></span><span className="flex-1"><strong className="block font-display text-2xl font-black">{name}</strong><span className="text-sm opacity-70">{label}</span></span><ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></a>)}</div>}
  </div></section>;
}
