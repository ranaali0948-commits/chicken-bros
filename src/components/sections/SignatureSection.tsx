import { ArrowRight } from 'lucide-react';
import { menu } from '../../data/menu';
import { handleInternalNavigation } from '../../hooks/useRoute';
import { FallbackImage } from '../ui/FallbackImage';

const item = menu.categories.flatMap(category => category.items).find(candidate => candidate.name === 'Smash Burger')!;
const category = menu.categories.find(candidate => candidate.id === item.category)!;
const signature = { ...item, image: `/images/menu/signature-${item.id}.webp`, fallbackImage: category.fallbackImage };

export function SignatureSection() { return <section className="bg-heading py-20 sm:py-28 px-5 overflow-hidden text-footer-text"><div className="max-w-7xl mx-auto grid lg:grid-cols-[1.25fr_.75fr] gap-10 lg:gap-16 items-center"><a href={`/menu?category=${signature.category}`} onClick={event => handleInternalNavigation(event, `/menu?category=${signature.category}`)} className="group relative block h-[430px] sm:h-[580px] overflow-hidden rounded-[2.5rem]"><FallbackImage src={signature.image} fallbackSrc={signature.fallbackImage} alt={signature.name} loading="lazy" className="tile-image"/><span className="tile-overlay"/><span className="absolute left-7 bottom-7 font-display text-4xl font-black">{signature.name}</span></a><div><p className="text-primary text-xs font-extrabold uppercase tracking-[.24em]">La signature</p><h2 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[.88] font-black mt-5">LE BURGER<br/><span className="text-accent">QUI MARQUE.</span></h2><p className="text-footer-text/70 text-lg leading-relaxed mt-7">Une recette généreuse, pensée pour les grandes faims et les envies de vrai goût.</p><a href="/menu?category=burgers" onClick={event => handleInternalNavigation(event, '/menu?category=burgers')} className="mt-8 inline-flex items-center gap-2 font-bold text-primary">Voir les burgers <ArrowRight size={18}/></a></div></div></section>; }
