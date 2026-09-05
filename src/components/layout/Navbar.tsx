import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { useScrolled } from '../../hooks/useScrolled';

export function Navbar() {
  const scrolled = useScrolled(); const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => { setOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
      <a href="#hero" className="font-display text-2xl font-bold tracking-tight text-white" aria-label={`${restaurant.businessName} home`}>{restaurant.shortName}<span className="text-brand-500">.</span></a>
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">{restaurant.navigation.map((link) => <button key={link} onClick={() => scrollTo(link)} className="text-sm font-medium text-charcoal-200 hover:text-brand-400 transition-colors duration-200">{link}</button>)}</nav>
      <div className="hidden md:flex items-center gap-4"><a href={`tel:${restaurant.phone}`} className="text-sm font-medium text-charcoal-200 hover:text-white transition-colors"><Phone size={14} className="inline mr-1.5 -mt-0.5" />Order Now</a><button onClick={() => scrollTo('Contact')} className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30">Book a Table</button></div>
      <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </div>
    {open && <div className="md:hidden bg-charcoal-900 border-t border-charcoal-800 px-6 py-4 flex flex-col gap-4">{restaurant.navigation.map((link) => <button key={link} onClick={() => scrollTo(link)} className="text-left text-base font-medium text-charcoal-200 hover:text-brand-400 transition-colors">{link}</button>)}<button onClick={() => scrollTo('Contact')} className="mt-2 bg-brand-500 text-white font-semibold py-3 rounded-xl">Book a Table</button></div>}
  </header>;
}
