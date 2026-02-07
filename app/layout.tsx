import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "./I18nProvider";
import { Inter, Manrope, Space_Grotesk, Quicksand } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { LoadingProvider } from "@/provider/LoadingProvider";

const siteName = "Kattaqo'rg'on Paxtamash";
const siteUrl = "https://paxtamash.uz";
const defaultTitle = `${siteName} - Textile Machinery`;
const defaultDescription =
  "Professional textile processing machinery and equipment.";
const ogImage = "/cotton_machine.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "Paxtamash",
    "Kattaqo'rg'on",
    "textile machinery",
    "textile equipment",
    "cotton processing",
    "spinning",
    "weaving",
    "Uzbekistan",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    images: [
      {
        url: ogImage,
        alt: `${siteName} textile machinery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
      <body
        className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} ${quicksand.variable} font-paragraph`}
      >
        <I18nProvider>
          <LoadingProvider>
            <Header />
            {children}
            <Footer />
          </LoadingProvider>
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
