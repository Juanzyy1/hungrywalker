import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";
import { HeroVisual } from "./HeroVisual";
import { TopProducts } from "./TopProducts";

export function Hero() {
  const { tagline } = siteConfig;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative z-10 flex min-h-[calc(100svh-4.5rem)] flex-col"
    >
      <div className="mx-auto flex w-full flex-1 flex-col px-6 sm:px-10 lg:px-8">
        <div className="grid flex-1 items-center gap-8 py-10 sm:py-14 lg:min-h-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:grid-rows-[1fr_auto] lg:gap-x-5 lg:gap-y-0 lg:py-2">
          <div className="relative z-10 flex min-w-0 flex-col justify-center">
            <div className="lg:-translate-y-3">
              <Reveal className="pt-1.5">
                <Image
                  src="/images/mascots/mascota-sandwich.webp"
                  alt=""
                  width={279}
                  height={220}
                  className="h-10 w-auto lg:h-11"
                />
                <div className="mt-1 h-[0.1875rem] w-16 rounded-full bg-hw-orange" />
              </Reveal>

              <Reveal delay={0.1}>
                <h1
                  id="hero-title"
                  className="mt-3 font-display text-6xl leading-[0.92] text-hw-cream sm:text-7xl lg:text-[7.50rem]"
                >
                  <span className="block">Hungry</span>
                  <span className="block">Walker</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-4 max-w-[32rem] text-base font-medium sm:text-lg">
                  {tagline.before}
                  <span className="text-hw-orange">{tagline.highlight}</span>
                  {tagline.after}
                </p>
                <ButtonLink
                  href="#menu"
                  className="mt-5 px-5 py-2.5 text-base font-medium"
                >
                  Ver Menú
                </ButtonLink>
              </Reveal>
            </div>

          </div>
          <HeroVisual />
          <Reveal delay={0.35} className="mt-1 lg:-translate-y-14 lg:col-start-1 lg:row-start-2 lg:mt-0">
            <TopProducts />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
