import { ArrowRight, ChefHat, Clock3, HeartHandshake, Leaf } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { FallbackImage } from '../ui/FallbackImage';
import { scrollToOrder, scrollToSection } from '../../utils/scrollToSection';
const benefitIcons = { quality: ChefHat, home: HeartHandshake, leaf: Leaf, speed: Clock3 };
export function Hero() {
  return <>
    <section id="hero" className="overflow-hidden bg-background pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] gap-9 lg:gap-12 items-center">
        <div className="relative z-10 min-w-0 animate-fade-up">
          <p className="text-accent text-xs sm:text-sm font-extrabold tracking-[.13em] mb-5">{restaurant.hero.eyebrow}</p>
          <h1 className="font-display text-[2.7rem] sm:text-6xl lg:text-[3.35rem] xl:text-[3.75rem] font-black text-heading leading-[.98] tracking-tight">{restaurant.hero.heading}<span className="block text-accent mt-2 lg:text-[2.1rem] xl:text-[2.3rem] lg:whitespace-nowrap">{restaurant.hero.highlightedHeading}</span></h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed mt-6 max-w-lg">{restaurant.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7"><button type="button" onClick={() => scrollToSection('menu')} className="btn-primary group">{restaurant.hero.primaryCTA}<ArrowRight size={17} className="inline ml-2 group-hover:translate-x-1 transition-transform" /></button><button type="button" onClick={scrollToOrder} className="btn-secondary">{restaurant.hero.secondaryCTA}</button></div>
        </div>
        <div className="relative min-h-[340px] sm:min-h-[480px] lg:min-h-[550px] px-2 pb-7 animate-fade-in">
          <div className="absolute inset-[8%_2%_5%_9%] organic-shape bg-primary" aria-hidden="true" />
          <div className="absolute inset-[0_4%_8%_1%] overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-[0_24px_60px_rgba(59,42,33,0.18)] rotate-1"><FallbackImage src={restaurant.hero.image} fallbackSrc={restaurant.hero.imageFallback} alt={restaurant.hero.imageAlt} className="w-full h-full object-cover object-center" /></div>
          <div className="absolute right-[2%] bottom-0 z-10 bg-surface border border-border rounded-2xl py-3 px-4 shadow-lg"><span className="text-accent font-black text-sm">OUVERT 7J/7</span><span className="block text-heading font-bold text-xs mt-0.5">11h00 – 00h00</span></div>
        </div>
      </div>
    </section>
    <section aria-label="Nos engagements" className="bg-background pb-12 sm:pb-14"><div className="max-w-7xl mx-auto px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{restaurant.hero.benefits.map(benefit => { const Icon = benefitIcons[benefit.icon]; return <article key={benefit.title} className="bg-surface border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm transition-transform hover:-translate-y-0.5"><span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0"><Icon className="text-heading" size={20} /></span><div><h2 className="font-bold text-heading text-sm">{benefit.title}</h2><p className="text-muted text-xs mt-0.5">{benefit.description}</p></div></article>; })}</div></section>
  </>;
}
