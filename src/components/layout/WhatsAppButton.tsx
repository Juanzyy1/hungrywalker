import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pide ahora por WhatsApp"
      title="Pide ahora por WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-start gap-0 overflow-hidden rounded-full bg-[#25D366] p-0 text-white shadow-lg shadow-black/40 transition-[width,padding,transform,gap] duration-300 ease-out hover:w-[10.5rem] hover:gap-2 hover:px-4 hover:scale-105 focus-visible:w-[10.5rem] focus-visible:gap-2 focus-visible:px-4 active:scale-95 sm:right-7 sm:bottom-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="mx-auto size-7 shrink-0 transition-[margin] duration-300 group-hover:mx-0 group-focus-visible:mx-0"
        fill="none"
      >
        <path
          d="M16.02 3a12.9 12.9 0 0 0-11.1 19.48L3.2 28.8l6.48-1.7A12.9 12.9 0 1 0 16.02 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12.2 9.6c-.28-.62-.58-.63-.85-.64h-.72c-.25 0-.66.1-1 .48-.35.38-1.32 1.29-1.32 3.15 0 1.85 1.35 3.65 1.54 3.9.19.25 2.6 4.16 6.42 5.66 3.17 1.25 3.82 1 4.51.94.69-.06 2.23-.91 2.55-1.79.31-.88.31-1.63.22-1.79-.1-.16-.35-.25-.72-.44-.38-.19-2.23-1.1-2.58-1.22-.34-.12-.59-.19-.84.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.37-.19-1.58-.58-3.01-1.85-1.12-1-1.88-2.23-2.1-2.61-.22-.37-.02-.58.17-.77.17-.17.37-.44.56-.66.19-.22.25-.38.37-.63.13-.25.07-.47-.03-.66-.09-.19-.82-2.04-1.16-2.82Z"
          fill="currentColor"
        />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:max-w-24 group-focus-visible:opacity-100">
        Pide ahora
      </span>
    </a>
  );
}
