import { ArrowRight, MapPin } from 'lucide-react';
import { restaurant } from '../../config/restaurant';
import { handleInternalNavigation } from '../../hooks/useRoute';

export function HomeSeoSection() {
  return (
    <section className="bg-background px-5 py-14 sm:py-16" aria-labelledby="home-local-heading">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border bg-surface px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-3xl">
          <h2 id="home-local-heading" className="font-display text-3xl font-black leading-tight text-heading sm:text-4xl">
            {restaurant.homeSeo.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {restaurant.homeSeo.description}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
          <a href="/menu" onClick={event => handleInternalNavigation(event, '/menu')} className="btn-primary">
            {restaurant.homeSeo.menuLabel}<ArrowRight size={17} className="ml-2" />
          </a>
          <a href="/contact" onClick={event => handleInternalNavigation(event, '/contact')} className="btn-secondary">
            <MapPin size={17} className="mr-2" />{restaurant.homeSeo.contactLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
