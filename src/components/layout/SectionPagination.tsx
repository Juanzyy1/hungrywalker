"use client";

import { useActiveSection } from "./useActiveSection";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "menu", label: "Menú" },
  { id: "informacion", label: "Horario y redes" },
] as const;

const sectionIds = sections.map((section) => section.id);

export function SectionPagination() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Navegación por secciones"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0d0c0b]/80 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur-md"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          aria-current={activeSection === section.id ? "location" : undefined}
          className={`block h-2 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? "w-6 bg-hw-orange"
              : "w-2 bg-hw-muted/60 hover:bg-hw-cream"
          }`}
        />
      ))}
    </nav>
  );
}
