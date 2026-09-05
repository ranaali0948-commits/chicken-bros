import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { handleInternalNavigation } from '../../hooks/useRoute';
import { useScrolled } from '../../hooks/useScrolled';
import { scrollToOrder } from '../../utils/scrollToSection';

export function Navbar() {
  const scrolled = useScrolled(); const [open, setOpen] = useState(false); const [logoFailed, setLogoFailed] = useState(false);
  const order = () => { setOpen(false); scrollToOrder(); };
  const navClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => { setOpen(false); handleInternalNavigation(event, href); };
  const Brand = () => restaurant.logo && !logoFailed ? <img src={restaurant.logo} onError={() => setLogoFailed(true)} alt={restaurant.businessName} className="max-h-12 w-auto max-w-[180px] object-contain"/> : <span className="font-display text-lg sm:text-xl font-black leading-none tracking-tight text-heading">{restaurant.shortName}<small className="block mt-1 font-sans text-[9px] tracking-[.3em] text-muted">{restaurant.tagline}</small></span>;
  return <header className={`fixed top-0 inset-x-0 z-50 border-b bg-background transition-[box-shadow,border-color] duration-300 ${scrolled || open ? 'border-border shadow-[0_6px_24px_rgba(59,42,33,0.09)]' : 'border-transparent'}`}><div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between gap-5"><a href="/" onClick={event => navClick(event, '/')} aria-label={`Accueil ${restaurant.businessName}`}><Brand/></a><nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">{restaurant.navigation.map(link => <a key={link.href} href={link.href} onClick={event => navClick(event, link.href)} className="text-sm font-semibold text-heading hover:text-accent transition-colors">{link.label}</a>)}</nav><button type="button" onClick={order} className="btn-primary hidden lg:inline-flex">Commander</button><button className="lg:hidden rounded-full p-2 text-heading" onClick={() => setOpen(!open)} aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="lg:hidden border-t border-border bg-surface px-5 py-5 flex flex-col gap-1" aria-label="Navigation mobile">{restaurant.navigation.map(link=><a key={link.href} href={link.href} onClick={event=>navClick(event,link.href)} className="text-base font-semibold text-heading hover:text-accent rounded-lg px-3 py-2">{link.label}</a>)}<button type="button" onClick={order} className="btn-primary mt-3">Commander</button></nav>}</header>;
}
