# Chicken Bros — SEO production

## Référentiel

- Domaine de production : <https://chickenbros.fr>
- URL canonique principale : <https://chickenbros.fr>
- Routes indexables : `/`, `/menu`, `/contact`
- Langue : français (`fr`)
- Sitemap : <https://chickenbros.fr/sitemap.xml>
- Robots : <https://chickenbros.fr/robots.txt>

Les titres, descriptions, chemins canoniques et paramètres sociaux sont centralisés dans `src/config/restaurant.ts`. Le build Vite génère également des documents HTML avec des métadonnées propres pour `/menu` et `/contact`.

## Checklist de mise en production

- [ ] Ajouter et valider `https://chickenbros.fr` dans Google Search Console.
- [ ] Envoyer `https://chickenbros.fr/sitemap.xml` dans Search Console.
- [ ] Inspecter puis demander l’indexation de `/`, `/menu` et `/contact`.
- [ ] Vérifier ou revendiquer la fiche Google Business Profile de Chicken Bros.
- [ ] Vérifier le JSON-LD avec le Rich Results Test de Google.
- [ ] Tester les trois routes avec PageSpeed Insights sur mobile et ordinateur.
- [ ] Fournir l’image Open Graph dédiée en 1200 × 630 à `public/images/seo/chicken-bros-og.webp`, puis remplacer le fallback local configuré dans `restaurant.seo.ogImage`.
- [ ] Ajouter uniquement les véritables liens Instagram, Facebook et TikTok dans `restaurant.social` lorsqu’ils sont disponibles.
- [ ] Tester les aperçus de partage Facebook, LinkedIn et X après publication.

## Notes

- Aucun avis, classement, récompense, coordonnée GPS ou profil social non vérifié n’est inclus dans les données structurées.
- Les pages restent une application React côté client. Les métadonnées critiques sont présentes dans le HTML généré, mais le contenu visible complet dépend toujours de JavaScript.
