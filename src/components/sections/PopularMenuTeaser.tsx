import { ArrowRight } from 'lucide-react';
import { menu } from '../../data/menu';
import { handleInternalNavigation } from '../../hooks/useRoute';

const popularNames = ['Filet Chicken', 'Tender Wrap & Naan', 'Butter Chicken', 'Poulet Biryani'];
const popularItems = popularNames.map(name => menu.categories.flatMap(category => category.items).find(item => item.name === name)!);

export function PopularMenuTeaser() {
  return <section className="bg-background px-5 py-20 sm:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Les incontournables</p><h2 className="editorial-title">LES FAVORIS<br/><span className="text-accent">DU MOMENT.</span></h2></div><a href="/menu" onClick={event => handleInternalNavigation(event, '/menu')} className="text-link">Voir tout le menu <ArrowRight size={17}/></a></div><div className="mt-10 grid gap-x-10 md:grid-cols-2">{popularItems.map((item, index) => <a key={item.id} href={`/menu?category=${item.category}`} onClick={event => handleInternalNavigation(event, `/menu?category=${item.category}`)} className={`group flex items-baseline justify-between gap-5 border-b border-border py-6 ${index < 2 ? 'md:border-t' : ''}`}><strong className="font-display text-xl font-black text-heading transition-colors group-hover:text-accent sm:text-2xl">{item.name}</strong><span className="shrink-0 font-bold text-accent">{item.price}</span></a>)}</div></div></section>;
}
