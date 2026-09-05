import { ArrowRight } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { FallbackImage } from '../ui/FallbackImage';
import { scrollToOrder } from '../../utils/scrollToSection';
import { navigate } from '../../hooks/useRoute';
export function Hero() {
  const highlightedWords = restaurant.hero.highlightedHeading.split(' ');
  const finalWord = highlightedWords.pop();
  const highlightedLead = highlightedWords.join(' ');
  return <section id="hero" className="relative isolate min-h-[690px] overflow-hidden bg-[var(--color-hero-red)] pt-24 sm:min-h-[760px] sm:pt-28 lg:min-h-[720px] lg:pt-32">
    <div className="absolute inset-x-0 bottom-[-1px] z-[2] h-[23%] sm:h-[25%] lg:h-[31%]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1440 260" preserveAspectRatio="none"><path fill="var(--color-hero-cream)" d="M0,132 C235,24 420,66 617,143 C835,228 1040,252 1440,74 L1440,260 L0,260 Z"/></svg>
    </div>

    <span className="hero-crumb left-[6%] top-[31%] h-3 w-3 bg-primary" aria-hidden="true"/>
    <span className="hero-crumb right-[7%] top-[22%] h-2 w-5 rotate-45 bg-white/80" aria-hidden="true"/>
    <span className="hero-crumb right-[43%] top-[18%] h-2 w-2 bg-primary" aria-hidden="true"/>
    <svg className="absolute right-[4%] top-[16%] z-50 hidden h-16 w-24 text-primary lg:block" viewBox="0 0 96 64" fill="none" aria-hidden="true"><path d="M5 45c19-30 44-36 82-29M14 57c20-20 39-25 68-23" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/></svg>
    <img src="/images/hero/hero-wrap.png" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-5 -left-36 z-10 w-56 rotate-12 object-contain drop-shadow-[0_16px_14px_rgba(59,42,33,.16)] sm:-left-40 sm:w-64 lg:-bottom-20 lg:-left-48 lg:w-[360px]"/>
    <img src="/images/hero/hero-fries.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-28 top-24 z-10 w-44 -rotate-12 object-contain drop-shadow-[0_16px_14px_rgba(59,42,33,.14)] sm:-right-32 sm:w-52 lg:-right-48 lg:top-36 lg:w-[330px]"/>

    <div className="relative z-30 mx-auto grid max-w-7xl grid-cols-1 px-5 lg:grid-cols-[.82fr_1.18fr] lg:grid-rows-[auto_1fr] lg:gap-x-4 lg:px-8">
      <div className="relative min-w-0 animate-fade-up pt-5 sm:pt-8 lg:row-start-1 lg:pt-12">
        <p className="mb-4 text-xs font-extrabold tracking-[.18em] text-primary sm:text-sm">{restaurant.hero.eyebrow}</p>
        <h1 className="hero-mobile-word pointer-events-none absolute left-0 top-16 z-0 whitespace-nowrap font-display text-[clamp(4.8rem,23vw,7rem)] font-black leading-none text-white/10 lg:hidden">{restaurant.hero.heading}</h1>
        <h1 className="hidden font-display font-black leading-[.82] tracking-[-.045em] text-white lg:block lg:text-[clamp(4.3rem,5.7vw,5.8rem)]">{restaurant.hero.heading}<span className="mt-2 block text-primary"><span className="block whitespace-nowrap">{highlightedLead}</span><span className="block">{finalWord}</span></span></h1>
      </div>

      <div className="hero-burger-enter relative z-40 -mx-16 -mt-1 h-[390px] sm:-mx-10 sm:-mt-6 sm:h-[470px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:-mt-5 lg:h-[620px] xl:-mr-10">
        <FallbackImage src={restaurant.hero.image} fallbackSrc={restaurant.hero.imageFallback} alt={restaurant.hero.imageAlt} className="h-full w-full object-contain object-center drop-shadow-[0_22px_18px_rgba(59,42,33,.24)] lg:object-right" />
      </div>

      <div className="relative z-50 -mt-16 pb-20 sm:-mt-20 sm:pb-24 lg:col-start-1 lg:row-start-2 lg:mt-7 lg:self-start lg:pb-36">
        <p className="hidden max-w-md text-lg leading-relaxed text-white/85 lg:block">{restaurant.hero.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row lg:mt-6"><button type="button" onClick={() => navigate('/menu')} className="btn-primary group">{restaurant.hero.primaryCTA}<ArrowRight size={17} className="ml-2 inline transition-transform group-hover:translate-x-1" /></button><button type="button" onClick={scrollToOrder} className="inline-flex items-center justify-center rounded-full border border-[var(--color-hero-cream)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--color-hero-cream)] hover:text-heading">{restaurant.hero.secondaryCTA}</button></div>
      </div>
    </div>
  </section>;
}
