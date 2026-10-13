import { Hero } from "@/components/sections/Hero";
import { MenuSection } from "@/components/sections/MenuSection";
import { InfoStrip } from "@/components/layout/InfoStrip";
import { Navbar } from "@/components/layout/Navbar";
import { SectionPagination } from "@/components/layout/SectionPagination";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-hero relative isolate flex min-h-svh w-full min-w-0 flex-1 flex-col overflow-x-clip">
      <Navbar />
      <Hero />
      <MenuSection />
      <footer
        id="informacion"
        aria-label="Información de contacto"
        className="relative z-10 w-full px-6 pb-16 sm:px-10 lg:px-8"
      >
        <ScrollReveal>
          <InfoStrip />
        </ScrollReveal>
      </footer>
      <SectionPagination />
    </main>
  );
}
