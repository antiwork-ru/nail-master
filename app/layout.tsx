import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingBookingButton from "@/components/FloatingBookingButton";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Анисимова Анастасия | Маникюр и обучение",
  description: "Профессиональный маникюр. Обучение.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Анисимова Анастасия | Маникюр и обучение",
    description: "Профессиональный маникюр. Обучение.",
    images: ["/og-image.jpg"], // 1200x630, фото твоей работы
  },
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body bg-milk text-dark antialiased`}>
        {children}
        <FloatingBookingButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
