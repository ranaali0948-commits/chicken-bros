import { ArrowUpRight, Bike, ShoppingBag, Store } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { SectionLabel } from '../ui/SectionHeading';

const platforms = [
  { name: 'Uber Eats', label: restaurant.order.uberEatsLabel, url: restaurant.ordering.uberEats, Icon: Bike },
  { name: 'Deliveroo', label: restaurant.order.deliverooLabel, url: restaurant.ordering.deliveroo, Icon: ShoppingBag },
  { name: 'Click & Collect', label: restaurant.order.clickAndCollectLabel, url: restaurant.ordering.clickAndCollect, Icon: Store },
];
export function OrderSection() {
  const visiblePlatforms = platforms.filter(platform => platform.url || import.meta.env.DEV);
  return <section id="order" className="bg-background px-5 py-16 sm:py-20"><div className="max-w-6xl mx-auto">
    <div className="text-center"><SectionLabel>{restaurant.order.eyebrow}</SectionLabel><h2 className="font-display text-4xl sm:text-5xl font-black text-heading">{restaurant.order.heading}</h2><p className="text-muted mt-4 max-w-2xl mx-auto leading-relaxed">{restaurant.order.description}</p></div>
    {visiblePlatforms.length > 0 && <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">{visiblePlatforms.map(({name,label,url,Icon}) => url ? <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="group bg-surface border border-border rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-primary transition-all"><span className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-heading"><Icon/></span><span className="flex-1"><strong className="block text-heading">{name}</strong><span className="text-muted text-sm">{label}</span></span><ArrowUpRight className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/></a> : <div key={name} className="bg-surface/70 border border-dashed border-border rounded-2xl p-6 flex items-center gap-4" aria-label={`${name}, ${restaurant.order.missingLinkLabel}`}><span className="w-12 h-12 rounded-xl bg-background-alt flex items-center justify-center text-muted"><Icon/></span><span><strong className="block text-heading">{name}</strong><span className="text-muted text-sm">{restaurant.order.missingLinkLabel}</span></span></div>)}</div>}
  </div></section>;
}
