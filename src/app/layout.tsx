import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const abrilFatface = localFont({
  src: "../fonts/abril-fatface-latin-400-normal.woff2",
  variable: "--font-abril",
  weight: "400",
  display: "swap",
});

const dmSans = localFont({
  src: "../fonts/dm-sans-latin-wght-normal.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hungry Walker",
  description: "No es hambre… es antojo con nombre propio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${abrilFatface.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MotionProvider>{children}</MotionProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
