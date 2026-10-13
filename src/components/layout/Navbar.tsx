import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between pt-6 lg:pt-6 lg:pr-12">
      <Link
        href="/"
        aria-label="Hungry Walker, inicio"
        className="font-display text-4xl leading-none tracking-tight text-hw-red lg:text-[2.6rem]"
      >
        WALKER
      </Link>

      <nav aria-label="Principal" className="flex items-center gap-3 sm:gap-6 lg:gap-8">
        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex lg:gap-8">
          {siteConfig.navLinks.map((link, index) => {
            const isCurrent = index === 0;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`relative pb-1 transition-colors hover:text-hw-cream ${
                    isCurrent
                      ? "text-hw-cream after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-hw-orange"
                      : "text-hw-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ButtonLink
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="orange"
          className="px-3 py-2.5 text-[0.625rem] font-medium uppercase tracking-[0.03em] sm:px-4 sm:text-xs lg:py-3 lg:text-[0.8125rem]"
        >
          Pedir ahora
        </ButtonLink>
        <details className="group relative sm:hidden">
          <summary
            aria-label="Abrir menú de navegación"
            className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-hw-line text-hw-cream [&::-webkit-details-marker]:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <ul className="absolute top-full right-0 z-30 mt-2 flex min-w-40 flex-col gap-1 rounded-xl border border-hw-line bg-hw-card p-2 shadow-xl shadow-black/40">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-hw-cream transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
