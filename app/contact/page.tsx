"use client";

import { useState } from "react";
import { Phone, Globe, Send, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactFormSchema, contactFormSchemaBottom } from "@/lib/validation";
import z from "zod";
import { useContact } from "../features";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactFormDataBottom = z.infer<typeof contactFormSchemaBottom>;

export default function ContactPage() {
  const { t } = useTranslation();

  const { data: contact, submit, isLoading: contactLoading } = useContact();

  const {
    register: registerTop,
    handleSubmit: handleSubmitTop,
    formState: { errors: errorsTop },
    reset: resetTop,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const {
    register: registerBottom,
    handleSubmit: handleSubmitBottom,
    formState: { errors: errorsBottom },
    reset: resetBottom,
  } = useForm<ContactFormDataBottom>({
    resolver: zodResolver(contactFormSchemaBottom),
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onSubmitTop = async (data: ContactFormData) => {
    try {
      await submit(data);
      toast.success(t("toast.success"));
      resetTop();
    } catch (error) {
      toast.error(t("toast.error"));
    }
  };

  const onSubmitBottom = async (data: ContactFormDataBottom) => {
    try {
      await submit(data);
      toast.success(t("toast.success"));
      resetBottom();
    } catch (error) {
      toast.error(t("toast.error"));
    }
  };

  return (
    <div className="min-h-screen py-12 bg-[#192C2F] mt-[60px]">
      <section className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-accent mb-12 text-center">
          {t("contact.title")}
        </h1>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">
              {t("contact.consultation")}
            </h3>
            <p className="text-white/70">+998(90)123-45-67</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">
              {t("contact.online_consultation")}
            </h3>
            <p className="text-white/70">+998(90)123-45-67</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">
              {t("contact.write_us")}
            </h3>
            <p className="text-white/70">@paxtamashkattaqo'rg'on</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmitBottom(onSubmitBottom)}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder={t("home.name")}
                className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                {...registerBottom("full_name")}
              />
              {errorsBottom.full_name && (
                <p className="text-red-500 text-xs mt-1 px-6">
                  {errorsBottom.full_name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder={t("contact.your_phone")}
                className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                {...registerBottom("phone")}
              />
              {errorsBottom.phone && (
                <p className="text-red-500 text-xs mt-1 px-6">
                  {errorsBottom.phone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder={t("contact.your_email")}
                className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                {...registerBottom("email")}
              />
              {errorsBottom.email && (
                <p className="text-red-500 text-xs mt-1 px-6">
                  {errorsBottom.email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder={t("contact.write_message")}
                rows={6}
                className="w-full bg-transparent border-2 border-white/20 rounded-3xl px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors resize-none"
                {...registerBottom("message")}
              ></textarea>
              {errorsBottom.message && (
                <p className="text-red-500 text-xs mt-1 px-6">
                  {errorsBottom.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-primary font-bold py-5 rounded-full transition-all hover:shadow-lg"
            >
              {contactLoading ? (
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              ) : (
                t("contact.submit")
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
