import { restaurant } from '../../config/restaurant';

export function Footer() {
  const footerTargets = new Set(['hero', 'menu', 'about', 'gallery', 'contact']);
  const navigation = restaurant.navigation.filter(link => footerTargets.has(link.target));
  const socials = Object.entries(restaurant.social).filter(([, url]) => url);
  const delivery = [
    { label: restaurant.order.uberEatsLabel, url: restaurant.ordering.uberEats },
    { label: restaurant.order.deliverooLabel, url: restaurant.ordering.deliveroo },
  ].filter(link => link.url);
  return <footer className="bg-footer text-footer py-14 px-5"><div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div><p className="font-display text-2xl font-black">{restaurant.businessName}</p><p className="text-primary uppercase text-xs font-bold tracking-[.25em] mt-2">{restaurant.footer.tagline}</p></div>
    <div><p className="footer-heading">Adresse</p><p className="leading-relaxed">{restaurant.address}<br/>{restaurant.postcode} {restaurant.city}</p></div>
    <div><p className="footer-heading">Contact</p><a href={`tel:${restaurant.phone}`} className="hover:text-primary transition-colors">{restaurant.phoneDisplay}</a><p className="mt-3 leading-relaxed">{restaurant.openingHours[0].label}<br/>{restaurant.openingHours[0].value}</p></div>
    <div><p className="footer-heading">Navigation</p><nav className="flex flex-col items-start gap-2">{navigation.map(link => <button key={link.target} onClick={() => document.getElementById(link.target)?.scrollIntoView({behavior:'smooth'})} className="hover:text-primary text-sm transition-colors">{link.label}</button>)}</nav></div>
  </div>
  {(delivery.length > 0 || socials.length > 0) && <div className="max-w-7xl mx-auto mt-9 pt-7 border-t border-white/15 flex flex-wrap items-center gap-3">{delivery.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary/50 px-4 py-2 text-sm font-bold hover:bg-primary hover:text-heading transition-colors">{link.label}</a>)}{socials.map(([label,url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="capitalize text-sm hover:text-primary transition-colors">{label}</a>)}</div>}
  <div className="max-w-7xl mx-auto mt-9 pt-6 border-t border-white/15 text-xs text-footer/70">© {new Date().getFullYear()} {restaurant.businessName}. {restaurant.footer.rightsText}</div></footer>;
}
