"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { MenuProduct } from "@/types/product";

export function MenuProductCard({
  product,
  index,
}: {
  product: MenuProduct;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-2xl border border-hw-line bg-hw-card/80 transition-colors hover:border-hw-orange/70"
    >
      <Image
        src={product.thumbnail}
        alt=""
        width={1000}
        height={605}
        className="aspect-video w-full object-cover"
        sizes="(min-width: 1280px) 21rem, (min-width: 640px) 45vw, 90vw"
      />
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-sans text-sm font-bold leading-tight text-hw-cream sm:text-base">
            {product.name}
          </h4>
          {product.isBestSeller && (
            <span className="shrink-0 rounded-full bg-hw-orange/15 px-2 py-1 text-[0.5rem] font-bold uppercase tracking-wide text-hw-orange sm:text-[0.625rem]">
              Más vendido
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-xs text-hw-muted sm:text-sm">
          {product.description}
        </p>
        <p className="mt-3 font-sans text-sm font-bold text-hw-orange sm:text-base">
          {product.priceLabel}
        </p>
      </div>
    </motion.li>
  );
}
