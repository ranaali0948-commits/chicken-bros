import { Clock, MapPin, Phone } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { SectionLabel } from '../ui/SectionHeading';
export function ContactSection() {
  const orderUrl = Object.values(restaurant.ordering).find(Boolean);
  return <section id="contact" className="bg-background-alt py-20 sm:py-24 px-5"><div className="max-w-7xl mx-auto grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-stretch">
    <div><SectionLabel>{restaurant.contact.eyebrow}</SectionLabel><h2 className="font-display text-4xl sm:text-5xl font-black text-heading">{restaurant.contact.heading}<span className="block text-accent">{restaurant.contact.highlightedHeading}</span></h2><p className="text-muted mt-5">{restaurant.contact.description}</p><div className="mt-8 space-y-4">
      <div className="detail-row"><MapPin/><div><span>Adresse</span><strong>{restaurant.address}<br/>{restaurant.postcode} {restaurant.city}</strong></div></div>
      <div className="detail-row"><Phone/><div><span>Téléphone</span><strong>{restaurant.phoneDisplay}</strong></div></div>
      <div className="detail-row"><Clock/><div><span>Horaires</span><strong>{restaurant.openingHours[0].label}<br/>{restaurant.openingHours[0].value}</strong></div></div>
    </div></div>
    <div className="bg-surface border border-border rounded-[2rem] p-7 sm:p-10 flex flex-col justify-center"><h3 className="font-display text-2xl sm:text-3xl font-black text-heading">{restaurant.contact.promptHeading}</h3><p className="text-muted mt-3">{restaurant.contact.promptDescription}</p><div className="grid sm:grid-cols-2 gap-3 mt-8"><a href={`tel:${restaurant.phone}`} className="btn-primary text-center"><Phone size={17} className="inline mr-2"/>{restaurant.contact.callLabel}</a><a href={restaurant.googleMapsUrl} target="_blank" rel="noreferrer" className="btn-secondary text-center"><MapPin size={17} className="inline mr-2"/>{restaurant.contact.directionsLabel}</a>{orderUrl && <a href={orderUrl} className="btn-secondary text-center sm:col-span-2">{restaurant.contact.orderLabel}</a>}</div></div>
  </div></section>;
}
