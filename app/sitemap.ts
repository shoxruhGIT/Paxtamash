import type { MetadataRoute } from "next";
import { API_BASE, SITE_URL } from "@/lib/seo";
import { ProductsResponseSchema } from "@/app/features/api/schema";

async function getProductIds(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/products`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const data = ProductsResponseSchema.safeParse(json);
    if (!data.success || !data.data?.results) return [];
    return data.data.results
      .map((product) => (product?.id != null ? String(product.id) : null))
      .filter((id): id is string => Boolean(id));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const basePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const productIds = await getProductIds();
  const productEntries: MetadataRoute.Sitemap = productIds.map((id) => ({
    url: `${SITE_URL}/products/${id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...basePages, ...productEntries];
}
