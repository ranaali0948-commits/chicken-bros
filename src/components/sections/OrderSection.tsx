import { Bike, ShoppingBag, Store } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { SectionLabel } from '../ui/SectionHeading';
const options = [
  { label: 'Uber Eats', url: restaurant.ordering.uberEats, Icon: Bike },
  { label: 'Deliveroo', url: restaurant.ordering.deliveroo, Icon: ShoppingBag },
  { label: 'Click & Collect', url: restaurant.ordering.clickAndCollect, Icon: Store },
].filter(option => option.url);
export function OrderSection() { return <section id="order" className="bg-background px-5 py-20"><div className="max-w-6xl mx-auto rounded-[2rem] bg-surface border border-border shadow-lg overflow-hidden grid lg:grid-cols-[1fr_.7fr]">
  <div className="p-8 sm:p-12 lg:p-16"><SectionLabel>{restaurant.order.eyebrow}</SectionLabel><h2 className="font-display text-4xl sm:text-5xl font-black text-heading">{restaurant.order.heading}</h2><p className="text-muted mt-5 max-w-xl leading-relaxed">{restaurant.order.description}</p>
  {options.length > 0 ? <div className="flex flex-wrap gap-3 mt-8">{options.map(({label,url,Icon}) => <a key={label} href={url} className="btn-primary"><Icon size={17} className="inline mr-2"/>{label}</a>)}</div> : <p className="mt-7 rounded-xl bg-background-alt border border-border p-4 text-sm text-muted">La commande en ligne sera bientôt disponible. En attendant, venez directement au restaurant.</p>}</div>
  <div className="bg-primary p-8 flex items-center justify-center"><div className="text-center text-heading"><Store size={52} className="mx-auto mb-4"/><p className="font-display text-2xl font-black">SUR PLACE</p><p className="font-semibold mt-2">{restaurant.address}<br/>{restaurant.postcode} {restaurant.city}</p><p className="mt-4 text-sm">{restaurant.openingHours[0].label} · {restaurant.openingHours[0].value}</p></div></div>
  </div></section>; }
