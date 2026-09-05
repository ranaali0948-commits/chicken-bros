import { ArrowRight } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { FallbackImage } from '../ui/FallbackImage';
import { scrollToOrder } from '../../utils/scrollToSection';
import { navigate } from '../../hooks/useRoute';
export function Hero() {
  return <section id="hero" className="relative overflow-hidden bg-accent pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <span className="absolute -left-24 bottom-[-9rem] h-80 w-80 rounded-full border-[4rem] border-white/10" aria-hidden="true"/>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] gap-9 lg:gap-12 items-center">
        <div className="relative z-10 min-w-0 animate-fade-up">
          <p className="text-primary text-xs sm:text-sm font-extrabold tracking-[.16em] mb-5">{restaurant.hero.eyebrow}</p>
          <h1 className="font-display text-[clamp(3.4rem,8vw,7.5rem)] font-black text-white leading-[.84] tracking-[-.04em]">{restaurant.hero.heading}<span className="block text-primary mt-2">{restaurant.hero.highlightedHeading}</span></h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mt-7 max-w-lg">{restaurant.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8"><button type="button" onClick={() => navigate('/menu')} className="btn-primary group">{restaurant.hero.primaryCTA}<ArrowRight size={17} className="inline ml-2 group-hover:translate-x-1 transition-transform" /></button><button type="button" onClick={scrollToOrder} className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-heading">{restaurant.hero.secondaryCTA}</button></div>
        </div>
        <div className="relative min-h-[390px] sm:min-h-[520px] lg:min-h-[620px] animate-fade-in">
          <div className="absolute inset-[8%_2%_3%_8%] organic-shape bg-primary" aria-hidden="true" />
          <div className="absolute inset-[0_3%_7%_0] overflow-hidden rounded-[42%_58%_48%_52%/50%_42%_58%_50%] shadow-[0_28px_70px_rgba(59,42,33,0.32)] rotate-2"><FallbackImage src={restaurant.hero.image} fallbackSrc={restaurant.hero.imageFallback} alt={restaurant.hero.imageAlt} className="w-full h-full object-cover object-center scale-105" /></div>
          <div className="absolute right-0 bottom-0 z-10 bg-white rounded-2xl py-3 px-4 shadow-xl"><span className="text-accent font-black text-sm">OUVERT 7J/7</span><span className="block text-heading font-bold text-xs mt-0.5">11h00 – 00h00</span></div>
        </div>
      </div>
    </section>;
}
