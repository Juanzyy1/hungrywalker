export interface FeaturedProduct {
  id: string;
  name: string;
  /** Texto mostrado mientras no exista un precio real. */
  priceLabel: string;
  thumbnail: string;
  isBestSeller?: boolean;
}
