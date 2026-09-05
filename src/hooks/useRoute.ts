import { useEffect, useState } from 'react';

const routeEvent = 'chicken-bros:navigate';

export function navigate(href: string) {
  window.history.pushState({}, '', href);
  window.dispatchEvent(new Event(routeEvent));
}

export function useRoute() {
  const [location, setLocation] = useState(() => `${window.location.pathname}${window.location.search}${window.location.hash}`);
  useEffect(() => {
    const update = () => setLocation(`${window.location.pathname}${window.location.search}${window.location.hash}`);
    window.addEventListener('popstate', update);
    window.addEventListener(routeEvent, update);
    return () => { window.removeEventListener('popstate', update); window.removeEventListener(routeEvent, update); };
  }, []);
  return location;
}

export function handleInternalNavigation(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(href);
}
