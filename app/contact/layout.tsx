import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description:
    "Get in touch with Kattaqo'rg'on Paxtamash for textile machinery and equipment.",
  keywords: [
    "Paxtamash",
    "contact",
    "textile machinery",
    "equipment",
    "Uzbekistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: `Contact | ${SITE_NAME}`,
    description:
      "Get in touch with Kattaqo'rg'on Paxtamash for textile machinery and equipment.",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} contact` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${SITE_NAME}`,
    description:
      "Get in touch with Kattaqo'rg'on Paxtamash for textile machinery and equipment.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
