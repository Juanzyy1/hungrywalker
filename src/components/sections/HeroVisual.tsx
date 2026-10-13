"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";

export function HeroVisual({ style }: { style: MotionStyle }) {
  return (
    <motion.div
      style={style}
      className="relative z-0 mx-auto w-full min-w-0 max-w-[55rem] lg:-ml-[4%] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-[108%] lg:max-w-none"
    >
      <div className="relative">
        <Reveal x={36} y={0} delay={0.15}>
          <Image
            src="/images/hero/tabla.webp"
            alt=""
            width={1166}
            height={848}
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="h-auto w-full"
          />
        </Reveal>
        <Reveal x={28} y={8} delay={0.8} className="absolute inset-0">
          <Image
            src="/images/hero/sandwich-casa.webp"
            alt="Sándwich de la casa con carne desmechada, salsa y lechuga"
            width={1000}
            height={605}
            priority
            sizes="(min-width: 1024px) 42vw, 80vw"
            className="absolute top-[23%] left-[15.5%] h-auto w-[76%] drop-shadow-[0_22px_22px_rgb(0_0_0/0.5)]"
          />
        </Reveal>
      </div>
      <Reveal delay={1.05}>
        <p className="mt-3 text-center text-lg font-bold lg:text-[1.375rem]">
          <span className="uppercase text-hw-red">Sándwich</span>{" "}
          <span className="text-hw-cream">de la casa</span>{" "}
          <span className="ml-1 font-normal text-hw-orange">(PRECIO)</span>
        </p>
      </Reveal>
    </motion.div>
  );
}
