import type { Metadata } from "next";
import {
  API_BASE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  toDescription,
} from "@/lib/seo";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

async function getProduct(id: string) {
  try {
    const res = await fetch(`${API_BASE}/api/products/${id}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  const productName = product?.title ? String(product.title) : null;
  const title = productName ? `${productName} | ${SITE_NAME}` : DEFAULT_TITLE;
  const description = toDescription(
    product?.short_description || product?.description,
    DEFAULT_DESCRIPTION,
  );
  const url = `${SITE_URL}/products/${id}`;
  const imageCandidate =
    product?.image ||
    product?.images?.[0]?.image ||
    DEFAULT_OG_IMAGE;
  const ogImage = absoluteUrl(String(imageCandidate));

  return {
    title,
    description,
    keywords: productName
      ? [
          productName,
          SITE_NAME,
          "textile machinery",
          "equipment",
          "cotton processing",
        ]
      : [SITE_NAME, "textile machinery", "equipment"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, alt: productName ?? `${SITE_NAME} product` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProductDetailLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
