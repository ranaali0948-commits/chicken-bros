import { ChefHat, Clock3, HeartHandshake, Leaf } from 'lucide-react';
import { restaurant } from '../../config/restaurant';

const benefitIcons = { quality: ChefHat, home: HeartHandshake, leaf: Leaf, speed: Clock3 };

export function BenefitsStrip() {
  return <section aria-label="Nos engagements" className="bg-primary px-5 py-10 sm:py-12"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">{restaurant.hero.benefits.map(benefit => { const Icon = benefitIcons[benefit.icon]; return <article key={benefit.title} className="flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/75 text-heading"><Icon size={21}/></span><div><h2 className="font-display text-sm font-black text-heading sm:text-base">{benefit.title}</h2><p className="mt-0.5 text-xs text-heading/65">{benefit.description}</p></div></article>; })}</div></section>;
}
