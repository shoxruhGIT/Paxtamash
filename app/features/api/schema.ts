import z from "zod";

export const homeSchema = z.object({
  about: z
    .array(
      z.object({
        title: z.string().nullable().optional(),
        description: z.string().nullable().optional(),
        discount: z.number().nullable().optional(),
      }),
    )
    .optional(),
  product: z
    .array(
      z.object({
        id: z.number().nullable().optional(),
        title: z.string().nullable().optional(),
        short_description: z.string().nullable().optional(),
        image: z.string().nullable().optional(),
      }),
    )
    .optional(),
});

export const ProductSchema = z.object({
  id: z.number().nullable().optional(),
  title: z.string().nullable().optional(),
  short_description: z.string().nullable().optional(),
  image: z.string().url().nullable().optional(),
});

export const ProductsResponseSchema = z.object({
  count: z.number().nullable().optional(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(ProductSchema).nullable().optional(),
});

export type HomeData = z.infer<typeof homeSchema>;
export type Product = z.infer<typeof ProductsResponseSchema>;

export const AccountSchema = z.object({
  first_name: z.string().nullable().optional(),
  last_name: z.string().nullable().optional(),
  role: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
});

export const AccountsResponseSchema = z.object({
  count: z.number().nullable().optional(),
  next: z.string().url().nullable().optional(),
  previous: z.string().url().nullable().optional(),
  results: z.array(AccountSchema).nullable().optional(),
});
export type Account = z.infer<typeof AccountsResponseSchema>;

const ImageSchema = z.object({
  image: z.string().nullable().optional(),
});

// Similar product object
const SimilarProductSchema = z.object({
  id: z.number().nullable().optional(),
  title: z.string().nullable().optional(),
  short_description: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
});

// Main product schema
export const ProductDetailSchema = z.object({
  id: z.number().nullable().optional(),
  title: z.string().nullable().optional(),
  short_description: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  images: z.array(ImageSchema).nullable().optional(),
  similar_products: z.array(SimilarProductSchema).nullable().optional(),
});
export type ProductDetail = z.infer<typeof ProductDetailSchema>;
