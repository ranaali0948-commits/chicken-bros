import { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { featuredMenuItems, homepageCategories, menu, menuGroups } from '../../data/menu';
import { FallbackImage } from '../ui/FallbackImage';
import { SectionHeading } from '../ui/SectionHeading';

export function MenuSection() {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string>('burgers');
  const active = menuGroups.find(group => group.id === activeGroup) ?? menuGroups[0];
  const activeCategories = active.categoryIds.map(categoryId => menu.categories.find(category => category.id === categoryId)!).filter(Boolean);
  const openCategory = (categoryId: string) => {
    const group = menuGroups.find(candidate => (candidate.categoryIds as readonly string[]).includes(categoryId));
    if (group) setActiveGroup(group.id);
    setShowFullMenu(true);
    window.setTimeout(() => document.getElementById('full-menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };
  return <section id="menu" className="bg-background-alt py-16 sm:py-20 px-5"><div className="max-w-7xl mx-auto">
    <div className="text-center mb-10"><SectionHeading eyebrow={restaurant.menu.eyebrow} heading={restaurant.menu.heading} description={restaurant.menu.description} /></div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">{homepageCategories.map(category => <button key={category.id} onClick={() => openCategory(category.id)} className="group relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-2xl text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"><FallbackImage src={category.image} fallbackSrc={category.fallbackImage} alt={`Catégorie ${category.name}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"/><span className="absolute inset-0 bg-gradient-to-t from-heading/85 via-heading/10 to-transparent"/><span className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white font-display font-black text-base sm:text-xl drop-shadow-sm">{category.name}</span></button>)}</div>
    <h3 id="specialites" className="font-display text-2xl sm:text-3xl font-black text-heading mt-14 mb-6 scroll-mt-24">{restaurant.menu.popularHeading}</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{featuredMenuItems.map(menuItem => <article key={menuItem.id} className="bg-surface rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"><FallbackImage src={menuItem.image} fallbackSrc={menuItem.fallbackImage!} alt={`Photo temporaire représentative de ${menuItem.name}`} loading="lazy" className="h-44 w-full object-cover"/><div className="p-5 flex items-start justify-between gap-4"><h4 className="font-bold text-heading">{menuItem.name}</h4><span className="font-black text-accent whitespace-nowrap">{menuItem.price}</span></div></article>)}</div>
    <div className="text-center mt-9"><button onClick={() => setShowFullMenu(!showFullMenu)} aria-expanded={showFullMenu} aria-controls="full-menu" className="btn-primary">{showFullMenu ? 'Réduire le menu' : restaurant.menu.fullMenuCTA}{showFullMenu ? <ChevronUp size={17} className="ml-2"/> : <ArrowRight size={17} className="ml-2"/>}</button></div>
    {showFullMenu && <div id="full-menu" className="mt-10 scroll-mt-24 animate-fade-up">
      <div className="flex gap-2 overflow-x-auto pb-3 menu-tabs" role="tablist" aria-label="Catégories du menu">{menuGroups.map(group => <button key={group.id} role="tab" aria-selected={activeGroup === group.id} aria-controls="menu-panel" onClick={() => setActiveGroup(group.id)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${activeGroup === group.id ? 'bg-heading text-white' : 'bg-surface border border-border text-heading hover:border-accent'}`}>{group.label}</button>)}</div>
      <div id="menu-panel" role="tabpanel" className="mt-4 grid lg:grid-cols-2 gap-4">{activeCategories.map(category => <article key={category.id} className="bg-surface border border-border rounded-2xl p-5 sm:p-6"><h3 className="font-display text-lg font-black text-heading pb-3 border-b border-border">{category.name}</h3><ul className="divide-y divide-border">{category.items.map(menuItem => <li key={menuItem.id} className="py-3"><div className="flex items-baseline justify-between gap-4"><span className="font-semibold text-heading text-sm">{menuItem.name}</span><span className="font-black text-accent text-sm whitespace-nowrap">{menuItem.price}</span></div>{menuItem.description && <p className="text-muted text-xs mt-1 max-w-xl">{menuItem.description}</p>}</li>)}</ul></article>)}</div>
    </div>}
  </div></section>;
}
