import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { menu } from '../data/menu';
import { restaurant } from '../config/restaurant';
import { navigate } from '../hooks/useRoute';
import { FallbackImage } from '../components/ui/FallbackImage';
import type { MenuItem } from '../types/menu';

function categoryFromUrl() {
  const requested = new URLSearchParams(window.location.search).get('category');
  return menu.categories.some(category => category.id === requested)
    ? requested!
    : menu.categories[0].id;
}

interface MenuPageProps {
  route: string;
}

const categoryLooks: Record<string, { bg: string; ink: string; accent: string }> = {
  burgers: { bg: '#F2C230', ink: '#291C16', accent: '#D8292F' },
  chicken: { bg: '#D8292F', ink: '#FFF5E8', accent: '#F2C230' },
  'wraps-naans': { bg: '#E8B36A', ink: '#291C16', accent: '#D8292F' },
  naans: { bg: '#F4D9AA', ink: '#291C16', accent: '#D8292F' },
  biryani: { bg: '#C75D32', ink: '#FFF5E8', accent: '#F2C230' },
  crousty: { bg: '#F2C230', ink: '#291C16', accent: '#D8292F' },
  kebab: { bg: '#2D211C', ink: '#FFF5E8', accent: '#F2C230' },
  specialites: { bg: '#D8292F', ink: '#FFF5E8', accent: '#F2C230' },
  plats: { bg: '#E9793E', ink: '#291C16', accent: '#FFF5E8' },
  salades: { bg: '#9EBB72', ink: '#291C16', accent: '#FFF5E8' },
  'menu-enfant': { bg: '#85C7D8', ink: '#291C16', accent: '#F2C230' },
  accompagnements: { bg: '#F2C230', ink: '#291C16', accent: '#D8292F' },
  extras: { bg: '#D8292F', ink: '#FFF5E8', accent: '#F2C230' },
  boissons: { bg: '#4678B9', ink: '#FFF5E8', accent: '#F2C230' },
};

export function MenuPage({ route }: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const category = useMemo(
    () => menu.categories.find(item => item.id === activeCategory) ?? menu.categories[0],
    [activeCategory],
  );

  const look = categoryLooks[category.id] ?? categoryLooks.burgers;

  useEffect(() => {
    setActiveCategory(categoryFromUrl());
    setSelectedItem(null);
  }, [route]);

  const selectCategory = (id: string) => {
    setSelectedItem(null);
    setActiveCategory(id);
    navigate(`/menu?category=${id}`);
  };

  const productImage = selectedItem?.image || category.image;
  const productFallback = selectedItem?.fallbackImage || category.fallbackImage;

  if (selectedItem) {
    return (
      <main
        className="min-h-screen pt-20 transition-colors duration-500"
        style={{ backgroundColor: look.bg, color: look.ink }}
      >
        <section className="mx-auto min-h-[calc(100vh-5rem)] max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em]"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-transform group-hover:-translate-x-1"
              style={{ borderColor: look.ink }}
            >
              <ArrowLeft size={16} />
            </span>
            Tous les produits
          </button>

          <div className="grid min-h-[620px] items-center gap-10 py-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-6 lg:py-0">
            <div className="relative z-20 max-w-xl">
              <p
                className="mb-4 text-[10px] font-black uppercase tracking-[.28em]"
                style={{ color: look.accent }}
              >
                Chicken Bros · {category.name}
              </p>

              <h1 className="font-display text-[clamp(3.4rem,7.5vw,7.8rem)] font-black uppercase leading-[.78] tracking-[-.065em]">
                {selectedItem.name}
              </h1>

              {selectedItem.description && (
                <div className="mt-7 max-w-md">
                  <p
                    className="mb-2 text-[10px] font-black uppercase tracking-[.24em]"
                    style={{ color: look.accent }}
                  >
                    Ingrédients
                  </p>
                  <p className="text-sm font-medium leading-relaxed opacity-75 sm:text-base">
                    {selectedItem.description}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <strong className="font-display text-4xl font-black tracking-[-.05em]">
                  {selectedItem.price}
                </strong>

                {restaurant.ordering.uberEatsUrl && (
                  <a
                    href={restaurant.ordering.uberEatsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[.08em] transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: look.ink, color: look.bg }}
                  >
                    Commander
                    <ShoppingBag size={16} />
                  </a>
                )}
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 border-y" style={{ borderColor: `${look.ink}55` }}>
                <div className="py-4 pr-3">
                  <span className="block text-[9px] font-black uppercase tracking-[.2em] opacity-55">Catégorie</span>
                  <strong className="mt-1 block text-xs uppercase">{category.name}</strong>
                </div>
                <div className="border-x px-3 py-4" style={{ borderColor: `${look.ink}55` }}>
                  <span className="block text-[9px] font-black uppercase tracking-[.2em] opacity-55">Service</span>
                  <strong className="mt-1 block text-xs uppercase">Sur place</strong>
                </div>
                <div className="py-4 pl-3">
                  <span className="block text-[9px] font-black uppercase tracking-[.2em] opacity-55">Livraison</span>
                  <strong className="mt-1 block text-xs uppercase">Disponible</strong>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[650px]">
              <span
                aria-hidden="true"
                className="absolute h-[72%] w-[72%] rounded-full border-[38px] opacity-20 sm:border-[55px]"
                style={{ borderColor: look.accent }}
              />
              <div className="relative z-10 h-[390px] w-full max-w-[640px] overflow-hidden sm:h-[520px] lg:h-[610px]">
                <FallbackImage
                  key={`${category.id}-${selectedItem.id}`}
                  src={productImage}
                  fallbackSrc={productFallback}
                  alt={selectedItem.name}
                  className="h-full w-full object-contain drop-shadow-[0_35px_28px_rgba(0,0,0,.28)] transition-all duration-500"
                />
              </div>

              <div className="absolute bottom-4 right-0 hidden text-right lg:block">
                <span className="block text-[9px] font-black uppercase tracking-[.24em] opacity-55">Paris 18</span>
                <strong className="mt-1 block text-xs uppercase">92 Avenue de Saint-Ouen</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#163C2D] pt-20 text-[#FFF5E8]">
      <section className="mx-auto max-w-[1500px] px-5 pb-20 pt-10 sm:px-8 lg:px-12 lg:pt-14">
        <header className="grid gap-8 border-b border-white/20 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[.28em] text-primary">
              Notre carte
            </p>
            <h1 className="font-display text-[clamp(3.7rem,9vw,9.5rem)] font-black uppercase leading-[.76] tracking-[-.07em]">
              Choisis<br />
              <span className="text-primary">Ton Bros.</span>
            </h1>
          </div>
          <p className="max-w-sm pb-2 text-sm font-medium leading-relaxed text-white/65 sm:text-base">
            Choisissez une catégorie, découvrez les recettes, puis ouvrez un produit pour l’afficher en grand.
          </p>
        </header>

        <div className="sticky top-20 z-40 -mx-5 border-b border-white/15 bg-[#163C2D]/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <nav className="mx-auto flex max-w-[1500px] gap-2 overflow-x-auto menu-tabs" aria-label="Catégories du menu">
            {menu.categories.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectCategory(item.id)}
                aria-pressed={activeCategory === item.id}
                className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[.08em] transition-all ${
                  activeCategory === item.id
                    ? 'border-primary bg-primary text-heading'
                    : 'border-white/25 text-white/75 hover:border-white hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid gap-7 pt-9 lg:grid-cols-[.72fr_1.28fr] lg:gap-12 lg:pt-12">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] sm:min-h-[480px] lg:sticky lg:top-40 lg:h-[620px]">
            <FallbackImage
              key={category.id}
              src={category.image}
              fallbackSrc={category.fallbackImage}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[.24em] text-primary">Catégorie</p>
              <h2 className="mt-2 font-display text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[.82] tracking-[-.06em]">
                {category.name}
              </h2>
              <p className="mt-4 text-sm font-semibold text-white/65">{category.items.length} choix</p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.22em] text-primary">Produits</p>
                <h2 className="mt-1 font-display text-3xl font-black uppercase tracking-[-.04em] sm:text-4xl">
                  {category.name}
                </h2>
              </div>
              <span className="hidden text-xs font-bold uppercase tracking-[.14em] text-white/45 sm:block">
                Cliquez pour découvrir
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
              {category.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="group relative min-h-[270px] overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/[.055] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary sm:min-h-[315px] sm:p-5"
                >
                  <span className="absolute right-4 top-4 z-20 text-[10px] font-black tracking-[.16em] text-white/35">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative h-[155px] sm:h-[190px]">
                    <FallbackImage
                      src={item.image || category.image}
                      fallbackSrc={item.fallbackImage || category.fallbackImage}
                      alt=""
                      className="h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,.22)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="font-display text-lg font-black uppercase leading-[.95] tracking-[-.025em] sm:text-xl">
                      {item.name}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <strong className="text-base text-primary">{item.price}</strong>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-heading">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
