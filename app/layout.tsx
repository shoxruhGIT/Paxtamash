// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "./I18nProvider";
import { Inter, Manrope } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={`${manrope.variable} ${inter.variable} font-manrope`}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
