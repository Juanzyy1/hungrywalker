import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2 text-[0.9375rem] font-bold text-hw-base shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-7 sm:bottom-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-[1.375rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.6L3 20.5z" />
        <circle cx="8.5" cy="12" r=".6" fill="currentColor" />
        <circle cx="12" cy="12" r=".6" fill="currentColor" />
        <circle cx="15.5" cy="12" r=".6" fill="currentColor" />
      </svg>
      WhatsApp
    </a>
  );
}
