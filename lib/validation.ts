import z from "zod";

type Translate = (key: string) => string;

// Validation schemas
export const createContactFormSchema = (t: Translate) =>
  z.object({
    full_name: z.string().min(2, t("validation.name_min")),
    phone: z
      .string()
      .min(9, t("validation.phone_min"))
      .regex(/^[0-9+\s()-]+$/, t("validation.phone_format")),
    email: z.string().email(t("validation.email_invalid")),
  });

export const createContactFormSchemaBottom = (t: Translate) =>
  z.object({
    full_name: z.string().min(2, t("validation.name_min")),
    phone: z
      .string()
      .min(9, t("validation.phone_min"))
      .regex(/^[0-9+\s()-]+$/, t("validation.phone_format")),
    email: z.string().email(t("validation.email_invalid")),
    message: z.string().min(10, t("validation.message_min")).optional(),
  });
