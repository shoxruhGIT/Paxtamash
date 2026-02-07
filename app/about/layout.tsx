import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Learn about Kattaqo'rg'on Paxtamash, a textile machinery manufacturer in Uzbekistan.",
  keywords: [
    "Paxtamash",
    "Kattaqo'rg'on",
    "about",
    "textile machinery",
    "Uzbekistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: `About | ${SITE_NAME}`,
    description:
      "Learn about Kattaqo'rg'on Paxtamash, a textile machinery manufacturer in Uzbekistan.",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} about` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${SITE_NAME}`,
    description:
      "Learn about Kattaqo'rg'on Paxtamash, a textile machinery manufacturer in Uzbekistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
