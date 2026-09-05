import { AboutSection } from '../components/sections/AboutSection';
import { CategoryTeaser } from '../components/sections/CategoryTeaser';
import { GallerySection } from '../components/sections/GallerySection';
import { Hero } from '../components/sections/Hero';
import { LocationTeaser } from '../components/sections/LocationTeaser';
import { OrderSection } from '../components/sections/OrderSection';
import { SignatureSection } from '../components/sections/SignatureSection';

export function HomePage() { return <main><Hero/><SignatureSection/><AboutSection/><CategoryTeaser/><OrderSection/><GallerySection/><LocationTeaser/></main>; }
