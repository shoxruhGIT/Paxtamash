import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Features | ${SITE_NAME}`,
  description:
    "Explore the features and capabilities of Kattaqo'rg'on Paxtamash textile machinery.",
  keywords: [
    "Paxtamash",
    "features",
    "textile machinery",
    "equipment",
    "Uzbekistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/features`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/features`,
    title: `Features | ${SITE_NAME}`,
    description:
      "Explore the features and capabilities of Kattaqo'rg'on Paxtamash textile machinery.",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} features` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Features | ${SITE_NAME}`,
    description:
      "Explore the features and capabilities of Kattaqo'rg'on Paxtamash textile machinery.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
