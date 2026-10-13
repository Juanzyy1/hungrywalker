import type { AnchorHTMLAttributes } from "react";

type Variant = "orange" | "cream";

const variants: Record<Variant, string> = {
  orange:
    "border-hw-orange text-hw-orange hover:bg-hw-orange hover:text-hw-base",
  cream: "border-hw-cream/70 text-hw-cream hover:bg-hw-cream hover:text-hw-base",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function ButtonLink({
  variant = "cream",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-md border transition-colors duration-200 active:scale-[0.97] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
