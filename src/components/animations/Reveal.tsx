"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Desplazamiento inicial en píxeles. */
  x?: number;
  y?: number;
}

/** Entrada suave (fade + desplazamiento) para contenido de la primera vista. */
export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 20,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
