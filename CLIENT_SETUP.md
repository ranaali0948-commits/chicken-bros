# New restaurant client setup

The shared components define the current layout and behaviour. For a normal client website, update only:

1. `src/config/restaurant.ts` — restaurant details, copy, links, SEO, and enabled sections
2. `src/styles/theme.css` — semantic brand colours, radii, spacing, and container width
3. `src/data/menu.ts` — menu categories and items
4. `src/data/reviews.ts` — customer reviews
5. `src/data/gallery.ts` — gallery images and layout spans
6. `public/images/` — logo, hero, about, menu, category, and gallery assets

## Client checklist

- [ ] Restaurant information
- [ ] Logo and favicon
- [ ] Brand colours
- [ ] Hero copy and image
- [ ] Menu and pricing
- [ ] About and gallery photos
- [ ] Reviews
- [ ] Social links
- [ ] Ordering links
- [ ] Map, address, and opening hours
- [ ] SEO title, description, keywords, and social image
- [ ] Section switches

Run `npm run typecheck`, `npm run lint`, and `npm run build` before delivery. Core components should only need editing when a client requests a custom layout or behaviour.
