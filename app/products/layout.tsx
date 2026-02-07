import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Products | ${SITE_NAME}`,
  description:
    "Browse textile machinery and equipment products from Kattaqo'rg'on Paxtamash.",
  keywords: [
    "Paxtamash",
    "products",
    "textile machinery",
    "cotton processing",
    "Uzbekistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/products`,
    title: `Products | ${SITE_NAME}`,
    description:
      "Browse textile machinery and equipment products from Kattaqo'rg'on Paxtamash.",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} products` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Products | ${SITE_NAME}`,
    description:
      "Browse textile machinery and equipment products from Kattaqo'rg'on Paxtamash.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
