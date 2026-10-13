import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { menuCategories } from "@/config/menu";
import { MenuProductCard } from "./MenuProductCard";

export function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="relative z-10 scroll-mt-20 bg-transparent px-6 py-10 sm:px-10 sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="w-full">
        <ScrollReveal>
          <header className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-hw-orange">
              Hungry Walker
            </p>
            <h2
              id="menu-title"
              className="mt-2 font-display text-4xl text-hw-cream sm:text-5xl"
            >
              Nuestro menú
            </h2>
            <p className="mt-3 text-sm text-hw-muted sm:text-base">
              (DESCRIPCIÓN DEL MENÚ)
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <nav
            aria-label="Categorías del menú"
            className="mt-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 rounded-full border border-hw-line px-4 py-2 text-sm font-medium text-hw-cream transition-colors hover:border-hw-orange hover:text-hw-orange"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </ScrollReveal>

        <div className="mt-7 space-y-8 sm:mt-8 sm:space-y-10">
          {menuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className="scroll-mt-24"
            >
              <ScrollReveal>
                <h3
                  id={`${category.id}-title`}
                  className="border-b border-white/10 pb-2 font-display text-2xl text-hw-cream sm:text-3xl"
                >
                  {category.name}
                </h3>
              </ScrollReveal>

              <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[64rem] lg:grid-cols-3">
                {category.products.map((product, index) => (
                  <MenuProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
