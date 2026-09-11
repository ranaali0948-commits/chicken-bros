import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { menu } from '../data/menu';
import { restaurant } from '../config/restaurant';
import { FallbackImage } from '../components/ui/FallbackImage';
import type { MenuItem } from '../types/menu';

interface MenuPageProps {
  route: string;
}

type View = 'categories' | 'products' | 'detail';

const palette: Record<string, { bg: string; fg: string; accent: string; soft: string }> = {
  burgers: { bg: '#F4B800', fg: '#2C211B', accent: '#D8292F', soft: '#FFE16A' },
  chicken: { bg: '#D8292F', fg: '#FFF5E8', accent: '#F4B800', soft: '#E84A4F' },
  'wraps-naans': { bg: '#E8A44E', fg: '#2C211B', accent: '#D8292F', soft: '#F4C77D' },
  naans: { bg: '#F0D2A6', fg: '#2C211B', accent: '#D8292F', soft: '#F8E8D0' },
  biryani: { bg: '#B95E38', fg: '#FFF5E8', accent: '#F4B800', soft: '#CC7651' },
  crousty: { bg: '#F4B800', fg: '#2C211B', accent: '#D8292F', soft: '#FFE16A' },
  kebab: { bg: '#34251E', fg: '#FFF5E8', accent: '#F4B800', soft: '#4C3930' },
  specialites: { bg: '#D8292F', fg: '#FFF5E8', accent: '#F4B800', soft: '#E84A4F' },
  plats: { bg: '#E26E3B', fg: '#2C211B', accent: '#FFF5E8', soft: '#F09A72' },
  salades: { bg: '#9FB66F', fg: '#2C211B', accent: '#FFF5E8', soft: '#BDD08F' },
  'menu-enfant': { bg: '#86C8D9', fg: '#2C211B', accent: '#F4B800', soft: '#B6DFE8' },
  accompagnements: { bg: '#F4B800', fg: '#2C211B', accent: '#D8292F', soft: '#FFE16A' },
  extras: { bg: '#D8292F', fg: '#FFF5E8', accent: '#F4B800', soft: '#E84A4F' },
  boissons: { bg: '#4776B6', fg: '#FFF5E8', accent: '#F4B800', soft: '#6C94C9' },
};

function getCategoryFromUrl() {
  const id = new URLSearchParams(window.location.search).get('category');
  return menu.categories.find(category => category.id === id) ?? null;
}

export function MenuPage({ route }: MenuPageProps) {
  const urlCategory = getCategoryFromUrl();
  const [view, setView] = useState<View>(urlCategory ? 'products' : 'categories');
  const [activeCategoryId, setActiveCategoryId] = useState(urlCategory?.id ?? menu.categories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const category = useMemo(
    () => menu.categories.find(item => item.id === activeCategoryId) ?? menu.categories[0],
    [activeCategoryId],
  );

  const colors = palette[category.id] ?? palette.burgers;

  useEffect(() => {
    const current = getCategoryFromUrl();
    if (current) {
      setActiveCategoryId(current.id);
      setView('products');
      setSelectedItem(null);
    }
  }, [route]);

  const chooseCategory = (id: string) => {
    setActiveCategoryId(id);
    setSelectedItem(null);
    setView('products');
    window.history.pushState({}, '', `/menu?category=${id}`);
  };

  const openItem = (item: MenuItem) => {
    setSelectedItem(item);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    if (view === 'detail') {
      setSelectedItem(null);
      setView('products');
      return;
    }

    window.history.pushState({}, '', '/menu');
    setView('categories');
  };

  if (view === 'detail' && selectedItem) {
    return (
      <main
        className="min-h-screen pt-20 transition-colors duration-500"
        style={{ background: colors.bg, color: colors.fg }}
      >
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1500px] flex-col px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em]"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-transform group-hover:-translate-x-1"
                style={{ borderColor: `${colors.fg}80` }}
              >
                <ArrowLeft size={15} />
              </span>
              Retour
            </button>

            <span className="text-[10px] font-black uppercase tracking-[.22em] opacity-55">
              Chicken Bros · Paris 18
            </span>
          </div>

          <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-4 lg:py-0">
            <div className="relative z-20 max-w-[620px]">
              <p
                className="mb-4 text-[10px] font-black uppercase tracking-[.28em]"
                style={{ color: colors.accent }}
              >
                {category.name}
              </p>

              <h1 className="font-display text-[clamp(3.4rem,7.2vw,7.6rem)] font-black uppercase leading-[.78] tracking-[-.065em]">
                {selectedItem.name}
              </h1>

              {selectedItem.description && (
                <div className="mt-7 max-w-xl">
                  <p
                    className="mb-2 text-[10px] font-black uppercase tracking-[.24em]"
                    style={{ color: colors.accent }}
                  >
                    Ingrédients
                  </p>
                  <p className="text-sm font-medium leading-relaxed opacity-75 sm:text-base">
                    {selectedItem.description}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <strong className="font-display text-[clamp(2.5rem,4vw,4.5rem)] font-black tracking-[-.055em]">
                  {selectedItem.price}
                </strong>

                {restaurant.ordering.uberEatsUrl && (
                  <a
                    href={restaurant.ordering.uberEatsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[.09em] transition-transform hover:-translate-y-1"
                    style={{ background: colors.fg, color: colors.bg }}
                  >
                    Commander
                    <ShoppingBag size={15} />
                  </a>
                )}
              </div>

              <div
                className="mt-10 grid max-w-xl grid-cols-3 border-y text-[10px] uppercase tracking-[.12em]"
                style={{ borderColor: `${colors.fg}45` }}
              >
                <div className="py-4 pr-3">
                  <span className="block opacity-45">Catégorie</span>
                  <strong className="mt-1 block text-xs">{category.name}</strong>
                </div>
                <div className="border-x px-3 py-4" style={{ borderColor: `${colors.fg}45` }}>
                  <span className="block opacity-45">Service</span>
                  <strong className="mt-1 block text-xs">Sur place</strong>
                </div>
                <div className="py-4 pl-3">
                  <span className="block opacity-45">Livraison</span>
                  <strong className="mt-1 block text-xs">Disponible</strong>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[650px]">
              <div
                className="absolute h-[76%] w-[76%] rounded-full opacity-30"
                style={{ background: colors.soft }}
              />
              <div className="relative z-10 h-[390px] w-full max-w-[700px] sm:h-[520px] lg:h-[620px]">
                <FallbackImage
                  src={selectedItem.image || category.image}
                  fallbackSrc={selectedItem.fallbackImage || category.fallbackImage}
                  alt={selectedItem.name}
                  className="h-full w-full object-contain drop-shadow-[0_32px_26px_rgba(0,0,0,.25)]"
                />
              </div>

              <div
                className="absolute bottom-2 right-0 hidden w-[120px] border-l px-4 py-5 text-right lg:block"
                style={{ borderColor: `${colors.fg}45` }}
              >
                <span className="block text-[9px] font-black uppercase tracking-[.18em] opacity-45">
                  Chicken Bros
                </span>
                <strong className="mt-2 block text-lg uppercase leading-none">Paris<br />18</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (view === 'products') {
    return (
      <main
        className="min-h-screen pt-20 transition-colors duration-500"
        style={{ background: colors.bg, color: colors.fg }}
      >
        <section className="mx-auto min-h-[calc(100vh-5rem)] max-w-[1500px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em]"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-transform group-hover:-translate-x-1"
                style={{ borderColor: `${colors.fg}80` }}
              >
                <ArrowLeft size={15} />
              </span>
              Catégories
            </button>

            <span className="hidden text-[10px] font-black uppercase tracking-[.22em] opacity-55 sm:block">
              {category.items.length} produits
            </span>
          </div>

          <header className="mx-auto max-w-5xl pb-7 pt-7 text-center sm:pt-3">
            <p
              className="mb-2 text-[10px] font-black uppercase tracking-[.26em]"
              style={{ color: colors.accent }}
            >
              Menu Chicken Bros
            </p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[.8] tracking-[-.065em]">
              {category.name}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm font-medium opacity-60">
              Choisissez votre recette.
            </p>
          </header>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10">
            {category.items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openItem(item)}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-[.82] w-full max-w-[225px]">
                  <div
                    className="absolute inset-x-[9%] bottom-[4%] top-[16%] rounded-[999px] opacity-45 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: colors.soft }}
                  />
                  <FallbackImage
                    src={item.image || category.image}
                    fallbackSrc={item.fallbackImage || category.fallbackImage}
                    alt=""
                    className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_14px_rgba(0,0,0,.22)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                  <span
                    className="absolute right-[3%] top-[5%] z-20 text-[9px] font-black tracking-[.18em] opacity-40"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="mt-2 font-display text-base font-black uppercase leading-[.95] tracking-[-.03em] sm:text-lg">
                  {item.name}
                </h2>
                <p
                  className="mt-2 text-sm font-black"
                  style={{ color: colors.accent }}
                >
                  {item.price}
                </p>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4B800] pt-20 text-[#2C211B]">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1500px] flex-col px-5 pb-14 pt-8 sm:px-8 lg:px-12 lg:pt-10">
        <header className="flex items-end justify-between gap-6 border-b border-[#2C211B]/20 pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.28em]">Chicken Bros · Paris 18</p>
            <h1 className="mt-2 font-display text-[clamp(3.5rem,8.5vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-.07em]">
              Notre<br />Carte
            </h1>
          </div>
          <p className="hidden max-w-[270px] pb-2 text-sm font-medium leading-relaxed opacity-60 md:block">
            Choisissez une catégorie pour découvrir toutes nos recettes.
          </p>
        </header>

        <div className="grid flex-1 grid-cols-2 place-content-center gap-x-5 gap-y-8 py-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8 xl:grid-cols-5">
          {menu.categories.map((item, index) => {
            const categoryColors = palette[item.id] ?? palette.burgers;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseCategory(item.id)}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-[.86] w-full max-w-[210px]">
                  <div
                    className="absolute inset-x-[8%] bottom-[5%] top-[14%] rounded-[999px] transition-transform duration-500 group-hover:scale-105"
                    style={{ background: categoryColors.soft }}
                  />
                  <FallbackImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt=""
                    className="relative z-10 h-full w-full rounded-[999px] object-cover object-center p-[8%] drop-shadow-[0_18px_16px_rgba(44,33,27,.20)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-2"
                  />
                  <span className="absolute right-[3%] top-[4%] z-20 text-[9px] font-black tracking-[.18em] opacity-35">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <h2 className="font-display text-sm font-black uppercase tracking-[-.02em] sm:text-base">
                    {item.name}
                  </h2>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2C211B]/35 transition-all group-hover:translate-x-1 group-hover:bg-[#2C211B] group-hover:text-[#F4B800]">
                    <ArrowRight size={11} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
