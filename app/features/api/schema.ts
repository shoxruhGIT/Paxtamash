import z from "zod";

export const homeSchema = z.object({
  about: z.object({
    title: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    discount: z.number().nullable().optional(),
  }),
  product: z.array(
    z.object({
      id: z.number().nullable().optional(),
      title: z.string().nullable().optional(),
      short_description: z.string().nullable().optional(),
      image: z.string().nullable().optional(),
    }),
  ),
});

export type HomeData = z.infer<typeof homeSchema>;
