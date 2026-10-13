import Image from "next/image";
import { featuredProducts } from "@/config/featured-products";

export function TopProducts() {
  return (
    <section
      id="lo-mas-pedido"
      aria-labelledby="top-products-title"
      className="lg:max-w-[48rem]"
    >
      <h2
        id="top-products-title"
        className="text-xs font-medium uppercase tracking-[0.14em] text-hw-tan"
      >
        Lo más pedido
      </h2>

      <ul className="mt-3.5 flex min-w-0 flex-wrap gap-3 lg:flex-nowrap lg:gap-2">
        {featuredProducts.map((product) => (
          <li
            key={product.id}
            className={`flex shrink-0 items-center gap-3 rounded-2xl border bg-hw-card/80 p-2 pr-4 lg:gap-2 lg:pr-3 ${
              product.isBestSeller ? "border-hw-orange" : "border-hw-line"
            }`}
          >
            <Image
              src={product.thumbnail}
              alt=""
              width={256}
              height={256}
              className="h-[3.625rem] w-[4.375rem] rounded-lg object-cover lg:h-14 lg:w-16"
            />
            <div>
              {product.isBestSeller && (
                <p className="mb-0.5 text-[0.625rem] font-bold uppercase tracking-[0.08em] text-hw-orange">
                  Más vendido
                </p>
              )}
              <p className="text-[0.9375rem] font-bold uppercase tracking-wide lg:text-sm">
                {product.name}
              </p>
              <p className="mt-0.5 text-sm text-hw-orange lg:text-[0.8125rem]">
                {product.priceLabel}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
