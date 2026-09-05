import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { useScrolled } from '../../hooks/useScrolled';

const orderUrl = Object.values(restaurant.ordering).find(Boolean);
export function Navbar() {
  const scrolled = useScrolled(); const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const Brand = () => restaurant.logo ? <img src={restaurant.logo} alt={restaurant.businessName} className="h-11 w-auto" /> : <span className="font-display text-lg sm:text-xl font-black leading-none tracking-tight text-heading">{restaurant.shortName}<small className="block mt-1 font-sans text-[9px] tracking-[.3em] text-muted">{restaurant.tagline}</small></span>;
  return <header className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${scrolled || open ? 'bg-background/95 border-border shadow-sm backdrop-blur-md' : 'bg-background/90 border-transparent backdrop-blur-sm'}`}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-5">
      <button onClick={() => scrollTo('hero')} aria-label={`Accueil ${restaurant.businessName}`}><Brand /></button>
      <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">{restaurant.navigation.map(link => <button key={link.target} onClick={() => scrollTo(link.target)} className="relative text-sm font-semibold text-heading hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary after:absolute after:h-0.5 after:w-0 after:bg-accent after:left-0 after:-bottom-2 hover:after:w-full after:transition-all">{link.label}</button>)}</nav>
      <div className="hidden lg:block">{orderUrl ? <a href={orderUrl} className="btn-primary">Commander</a> : <button onClick={() => scrollTo('order')} className="btn-primary">Commander</button>}</div>
      <button className="lg:hidden rounded-full p-2 text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="lg:hidden border-t border-border bg-surface px-5 py-5 flex flex-col gap-1" aria-label="Navigation mobile">{restaurant.navigation.map(link => <button key={link.target} onClick={() => scrollTo(link.target)} className="text-left text-base font-semibold text-heading hover:text-accent rounded-lg px-3 py-2">{link.label}</button>)}<button onClick={() => scrollTo('order')} className="btn-primary mt-3 text-center">Commander</button></nav>}
  </header>;
}
