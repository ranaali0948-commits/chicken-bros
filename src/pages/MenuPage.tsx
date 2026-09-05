import { useEffect, useMemo, useRef, useState } from 'react';
import { menu } from '../data/menu';
import { navigate } from '../hooks/useRoute';
import { FallbackImage } from '../components/ui/FallbackImage';

function categoryFromUrl() {
  const requested = new URLSearchParams(window.location.search).get('category');
  return menu.categories.some(category => category.id === requested) ? requested! : menu.categories[0].id;
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const categoryNav = useRef<HTMLElement>(null);
  const category = useMemo(() => menu.categories.find(item => item.id === activeCategory) ?? menu.categories[0], [activeCategory]);
  const selectCategory = (id: string) => { setActiveCategory(id); navigate(`/menu?category=${id}`); };
  useEffect(() => {
    const nav = categoryNav.current; const active = nav?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (nav && active) nav.scrollTo({ left: active.offsetLeft - nav.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' });
  }, [activeCategory]);
  return <main className="bg-background min-h-screen pt-28 pb-20"><header className="max-w-7xl mx-auto px-5 pt-10 sm:pt-16 pb-10"><p className="eyebrow">Notre carte</p><h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[.88] font-black text-heading">À CHACUN<br/><span className="text-accent">SON ENVIE.</span></h1><p className="text-muted mt-6 max-w-lg text-lg">Choisissez une catégorie et découvrez toutes nos recettes.</p></header>
  <div className="sticky top-20 z-30 bg-background/95 border-y border-border py-3"><nav ref={categoryNav} className="max-w-7xl mx-auto px-5 flex gap-2 overflow-x-auto menu-tabs" aria-label="Catégories du menu">{menu.categories.map(item => <button key={item.id} onClick={() => selectCategory(item.id)} aria-pressed={activeCategory === item.id} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${activeCategory === item.id ? 'bg-heading text-white' : 'bg-surface text-heading border border-border hover:border-accent'}`}>{item.name}</button>)}</nav></div>
  <section className="max-w-7xl mx-auto px-5 pt-12 sm:pt-16 grid lg:grid-cols-[.72fr_1.28fr] gap-10 lg:gap-16 items-start"><div className="lg:sticky lg:top-40"><div className="relative h-[300px] sm:h-[420px] overflow-hidden rounded-[2rem]"><FallbackImage src={category.image} fallbackSrc={category.fallbackImage} alt={category.name} className="w-full h-full object-cover"/><span className="absolute inset-0 bg-gradient-to-t from-heading/60 to-transparent"/><span className="absolute left-6 bottom-6 font-display text-3xl font-black text-white">{category.name}</span></div></div><div><div className="flex items-end justify-between gap-5 pb-6 border-b-2 border-heading"><h2 className="font-display text-3xl sm:text-5xl font-black text-heading">{category.name}</h2><span className="text-muted text-sm">{category.items.length} choix</span></div><ul>{category.items.filter(item => item.category === activeCategory).map(item => <li key={item.id} className="py-5 sm:py-6 border-b border-border"><div className="flex items-baseline justify-between gap-5"><h3 className="font-display text-lg sm:text-xl font-extrabold text-heading">{item.name}</h3><strong className="text-accent whitespace-nowrap text-lg">{item.price}</strong></div>{item.description && <p className="text-muted mt-2 max-w-xl">{item.description}</p>}</li>)}</ul></div></section></main>;
}
