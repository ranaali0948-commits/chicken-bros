import { AboutSection } from '../components/sections/AboutSection';
import { BenefitsStrip } from '../components/sections/BenefitsStrip';
import { CategoryTeaser } from '../components/sections/CategoryTeaser';
import { ContactSection } from '../components/sections/ContactSection';
import { GallerySection } from '../components/sections/GallerySection';
import { Hero } from '../components/sections/Hero';
import { HomeSeoSection } from '../components/sections/HomeSeoSection';
import { MapSection } from '../components/sections/MapSection';
import { OrderSection } from '../components/sections/OrderSection';
import { PopularMenuTeaser } from '../components/sections/PopularMenuTeaser';
import { SignatureSection } from '../components/sections/SignatureSection';

export function HomePage() { return <main><Hero/><CategoryTeaser/><BenefitsStrip/><SignatureSection/><PopularMenuTeaser/><AboutSection/><OrderSection/><GallerySection/><HomeSeoSection/><ContactSection/><MapSection/></main>; }
