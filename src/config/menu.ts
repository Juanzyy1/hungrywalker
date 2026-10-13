import type {
  FeaturedProduct,
  MenuCategory,
  MenuProduct,
} from "@/types/product";

const menuProducts = {
  salchipapa: {
    id: "salchipapa",
    name: "Salchipapa",
    priceLabel: "(PRECIO)",
    description: "(DESCRIPCIÓN)",
    thumbnail: "/images/products/salchipapa-thumb.webp",
    isBestSeller: true,
  },
  sandwich: {
    id: "sandwich",
    name: "Sándwich",
    priceLabel: "(PRECIO)",
    description: "(DESCRIPCIÓN)",
    thumbnail: "/images/products/sandwich-plato-thumb.webp",
  },
  sandwichCasa: {
    id: "sandwich-casa",
    name: "Sándwich de la casa",
    priceLabel: "(PRECIO)",
    description: "(DESCRIPCIÓN)",
    thumbnail: "/images/hero/sandwich-casa.webp",
  },
  malteada: {
    id: "malteada",
    name: "Malteada",
    priceLabel: "(PRECIO)",
    description: "(DESCRIPCIÓN)",
    thumbnail: "/images/products/malteada-thumb.webp",
  },
} satisfies Record<string, MenuProduct>;

export const menuCategories: MenuCategory[] = [
  {
    id: "salchipapas",
    name: "Salchipapas",
    products: [menuProducts.salchipapa],
  },
  {
    id: "sandwiches",
    name: "Sándwiches",
    products: [menuProducts.sandwich, menuProducts.sandwichCasa],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    products: [menuProducts.malteada],
  },
];

export const featuredProducts: FeaturedProduct[] = [
  menuProducts.salchipapa,
  menuProducts.malteada,
  menuProducts.sandwich,
];
