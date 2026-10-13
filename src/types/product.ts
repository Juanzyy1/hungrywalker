export interface FeaturedProduct {
  id: string;
  name: string;
  /** Texto mostrado mientras no exista un precio real. */
  priceLabel: string;
  thumbnail: string;
  isBestSeller?: boolean;
}

export interface MenuProduct extends FeaturedProduct {
  description: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  products: MenuProduct[];
}
