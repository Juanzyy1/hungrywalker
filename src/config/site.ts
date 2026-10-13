const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export const siteConfig = {
  name: "Hungry Walker",
  tagline: {
    before: "“No es hambre… es ",
    highlight: "antojo",
    after: " con nombre propio.”",
  },
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
  ],
  // Enlace directo a WhatsApp. La integración real con la API llegará después.
  whatsappUrl: whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "https://wa.me/",
  // Datos pendientes de definir por el cliente.
  schedule: "(HORARIO)",
  socials: "(REDES)",
} as const;
