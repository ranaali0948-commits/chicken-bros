import { useEffect } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { GallerySection } from './components/sections/GallerySection';
import { Hero } from './components/sections/Hero';
import { MenuSection } from './components/sections/MenuSection';
import { MapSection } from './components/sections/MapSection';
import { OrderSection } from './components/sections/OrderSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { restaurant } from './config/restaurant';
import { theme } from './config/theme';

export default function App() {
  useEffect(() => {
    document.title = restaurant.seo.title;
    const setMeta = (selector: string, value: string) => document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
    setMeta('meta[name="description"]', restaurant.seo.description);
    setMeta('meta[name="keywords"]', restaurant.seo.keywords);
    setMeta('meta[property="og:image"]', restaurant.seo.ogImage);
  }, []);

  return <div className="bg-background text-heading antialiased" style={{ fontFamily: theme.fontBody }}>
    <Navbar />
    {restaurant.sections.hero && <Hero />}
    {restaurant.sections.menu && <MenuSection />}
    {restaurant.sections.about && <AboutSection />}
    {restaurant.sections.gallery && <GallerySection />}
    {restaurant.sections.reviews && <ReviewsSection />}
    {restaurant.sections.order && <OrderSection />}
    {restaurant.sections.contact && <ContactSection />}
    <MapSection />
    <Footer />
  </div>;
}
