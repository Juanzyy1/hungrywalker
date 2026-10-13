"use client";

import { useEffect, useState } from "react";

export function useActiveSection<const T extends readonly string[]>(
  sectionIds: T,
): T[number] {
  const [activeSection, setActiveSection] = useState<T[number]>(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const isAtBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;

        if (isAtBottom) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
          return;
        }

        const marker = window.innerHeight * 0.4;
        let currentSection = sectionIds[0];

        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element && element.getBoundingClientRect().top <= marker) {
            currentSection = sectionId;
          }
        }

        setActiveSection(currentSection);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
