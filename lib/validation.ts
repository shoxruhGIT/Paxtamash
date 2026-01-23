import z from "zod";

// Validation schemas
export const contactFormSchema = z.object({
  full_name: z
    .string()
    .min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"),
  phone: z
    .string()
    .min(9, "Telefon raqam noto'g'ri")
    .regex(/^[0-9+\s()-]+$/, "Faqat raqamlar kiritilishi mumkin"),
  email: z.string().email("Noto'g'ri email manzil"),
});

export const contactFormSchemaBottom = z.object({
  full_name: z
    .string()
    .min(2, "Ism kamida 2 ta belgidan iborat bo'lishi kerak"),
  phone: z
    .string()
    .min(9, "Telefon raqam noto'g'ri")
    .regex(/^[0-9+\s()-]+$/, "Faqat raqamlar kiritilishi mumkin"),
  email: z.string().email("Noto'g'ri email manzil"),
  message: z
    .string()
    .min(10, "Xabar kamida 10 ta belgidan iborat bo'lishi kerak")
    .optional(),
});
