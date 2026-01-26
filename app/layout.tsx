// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "./I18nProvider";
import { Inter, Manrope, Space_Grotesk, Quicksand } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Kattaqo'rg'on Paxtamash - Textile Machinery",
  description: "Professional textile processing machinery and equipment",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// Heading font (similar to Modica - modern geometric)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

// Paragraph font (similar to Rohyt Geometric Light - light geometric feel)
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-paragraph",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} ${quicksand.variable} font-paragraph`}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
