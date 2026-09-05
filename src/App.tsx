import { useEffect } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { restaurant } from './config/restaurant';
import { useRoute } from './hooks/useRoute';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { theme } from './config/theme';

export default function App() {
  const route = useRoute();
  const pathname = window.location.pathname;
  useEffect(() => {
    const title = pathname === '/menu' ? restaurant.seo.menuTitle : pathname === '/contact' ? restaurant.seo.contactTitle : restaurant.seo.title;
    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', restaurant.seo.description);
    if (window.location.hash) window.setTimeout(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView({behavior:'smooth'}), 50);
    else window.scrollTo({ top: 0, left: 0 });
  }, [route, pathname]);
  const page = pathname === '/menu' ? <MenuPage key={route}/> : pathname === '/contact' ? <ContactPage/> : <HomePage/>;
  return <div className="bg-background text-heading antialiased" style={{ fontFamily: theme.fontBody }}><Navbar/>{page}<Footer/></div>;
}
