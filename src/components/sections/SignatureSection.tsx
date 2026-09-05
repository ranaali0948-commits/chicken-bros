import { ArrowRight } from 'lucide-react';
import { menu } from '../../data/menu';
import { handleInternalNavigation } from '../../hooks/useRoute';
import { FallbackImage } from '../ui/FallbackImage';

const signatureNames = ['Smash Burger', 'Tender Wrap & Naan', 'Butter Chicken'];
const signatures = signatureNames.map(name => {
  const item = menu.categories.flatMap(category => category.items).find(candidate => candidate.name === name)!;
  const category = menu.categories.find(candidate => candidate.id === item.category)!;
  return { ...item, image: `/images/menu/signature-${item.id}.webp`, fallbackImage: category.fallbackImage };
});

export function SignatureSection() { return <section className="bg-surface py-20 sm:py-28 px-5 overflow-hidden"><div className="max-w-7xl mx-auto"><div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"><div><p className="eyebrow">Les signatures</p><h2 className="editorial-title max-w-3xl">TROIS ENVIES.<br/><span className="text-accent">ZÉRO HÉSITATION.</span></h2></div><a href="/menu" onClick={event => handleInternalNavigation(event, '/menu')} className="text-link">Découvrir la carte <ArrowRight size={17}/></a></div>
  <div className="grid lg:grid-cols-[1.35fr_.8fr] gap-4 lg:h-[650px]"><a href={`/menu?category=${signatures[0].category}`} onClick={event => handleInternalNavigation(event, `/menu?category=${signatures[0].category}`)} className="signature-tile group min-h-[430px]"><FallbackImage src={signatures[0].image} fallbackSrc={signatures[0].fallbackImage} alt={signatures[0].name} loading="lazy" className="tile-image"/><span className="tile-overlay"/><span className="tile-copy"><small>La signature burger</small><strong>{signatures[0].name}</strong><b>{signatures[0].price}</b></span></a><div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">{signatures.slice(1).map((item,index) => <a key={item.id} href={`/menu?category=${item.category}`} onClick={event => handleInternalNavigation(event, `/menu?category=${item.category}`)} className="signature-tile group min-h-[300px]" style={{animationDelay:`${(index+1)*100}ms`}}><FallbackImage src={item.image} fallbackSrc={item.fallbackImage} alt={item.name} loading="lazy" className="tile-image"/><span className="tile-overlay"/><span className="tile-copy"><small>À découvrir</small><strong>{item.name}</strong><b>{item.price}</b></span></a>)}</div></div></div></section>; }
