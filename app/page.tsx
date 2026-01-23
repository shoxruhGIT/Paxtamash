"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  User,
  Mail,
  MoveRight,
  UserRound,
  Loader2,
} from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useContact, useHomeData } from "./features";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { contactFormSchema, contactFormSchemaBottom } from "@/lib/validation";



type ContactFormData = z.infer<typeof contactFormSchema>;
type ContactFormDataBottom = z.infer<typeof contactFormSchemaBottom>;

export default function Home() {
  const { t } = useTranslation();
  const { data: homeData, isLoading } = useHomeData();
  const { data: contact, submit, isLoading: contactLoading } = useContact();

  // Top contact form
  const {
    register: registerTop,
    handleSubmit: handleSubmitTop,
    formState: { errors: errorsTop },
    reset: resetTop,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Bottom contact form
  const {
    register: registerBottom,
    handleSubmit: handleSubmitBottom,
    formState: { errors: errorsBottom },
    reset: resetBottom,
  } = useForm<ContactFormDataBottom>({
    resolver: zodResolver(contactFormSchemaBottom),
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
    <div className="relative overflow-x-hidden">
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-[#192C2F] overflow-hidden">
        <div className="container max-w-[1295px] mx-auto px-6 lg:px-8 py-12 md:py-0 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-white space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
                {t("home.hero_subtitle")}
              </h1>

              <div className="pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-5 bg-white text-2xl text-black pl-[32px] pr-3 py-[9.25px] rounded-full font-semibold hover:shadow-xl hover:bg-gray-100 transition-all animate-fade-up font-manrope"
                  style={{ animationDelay: "0.2s" }}
                >
                  {t("home.btn")}
                  <div className="w-[58px] h-[58px] bg-[#BDFF69] rounded-full flex items-center justify-center">
                    <img src="/right.png" alt="" />
                  </div>
                </Link>
              </div>
            </div>

            <img
              src="/image-Photoroom (4)_upscayl_5x_realesrgan-x4plus 1.png"
              alt="Textile machinery equipment"
              className="absolute right-0 -top-48"
            />
          </div>
        </div>

        <div className="absolute inset-0  bg-gradient-to-r from-[#192C2F]/60 to-transparent  pointer-events-none" />
      </section>

      {/* Scrolling Text Banner */}
      <section className="py-8 overflow-hidden bg-[#192C2F]">
        <div className="flex whitespace-nowrap scrolling-text">
          <span className="text-6xl md:text-8xl font-bold text-accent mx-8">
            {t("home.hero")}
          </span>
          <span className="text-6xl md:text-8xl font-bold text-accent mx-8">
            {t("home.hero")}
          </span>
          <span className="text-6xl md:text-8xl font-bold text-accent mx-8">
            {t("home.hero")}
          </span>
        </div>
      </section>

      {/* Contact Form Section - TOP */}
      <section className="hidden md:flex py-12 bg-[#192C2F]">
        <div className="container mx-auto px-6">
          <form onSubmit={handleSubmitTop(onSubmitTop)}>
            <div className="bg-white backdrop-blur-sm rounded-[8px] p-6 max-w-[1113px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 md:gap-6 items-end lg:items-center font-inter">
                <div className="relative">
                  <UserRound
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#192C2F]"
                    size={26}
                  />
                  <div>
                    <div className="font-medium text-gray-900 pl-12">
                      {t("home.your_name")}
                    </div>
                    <input
                      type="text"
                      placeholder={t("home.how_to_call")}
                      className="w-full bg-transparent border-none text-sm pl-12 pr-6 py-2 text-gray-400 placeholder-gray-400 focus:outline-none"
                      {...registerTop("full_name")}
                    />
                    {errorsTop.full_name && (
                      <p className="text-red-500 text-xs pl-12 mt-1">
                        {errorsTop.full_name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <Phone
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#192C2F]"
                    size={26}
                  />
                  <div>
                    <div className="font-medium text-gray-900 pl-12">
                      {t("home.your_number")}
                    </div>
                    <input
                      type="tel"
                      placeholder={t("home.your_phone")}
                      className="w-full bg-transparent text-sm border-none pl-12 pr-6 py-2 text-gray-400 placeholder-gray-400 focus:outline-none"
                      {...registerTop("phone")}
                    />
                    {errorsTop.phone && (
                      <p className="text-red-500 text-xs pl-12 mt-1">
                        {errorsTop.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <Mail
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#192C2F]"
                    size={26}
                  />
                  <div>
                    <div className="font-medium text-gray-900 pl-12">
                      {t("home.your_email")}
                    </div>
                    <input
                      type="email"
                      placeholder={t("home.email_placeholder")}
                      className="w-full bg-transparent text-sm border-none pl-12 pr-6 py-2 text-gray-400 placeholder-gray-400 focus:outline-none"
                      {...registerTop("email")}
                    />
                    {errorsTop.email && (
                      <p className="text-red-500 text-xs pl-12 mt-1">
                        {errorsTop.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-[153px] sm:col-span-2 lg:col-span-1 lg:w-auto whitespace-nowrap rounded-full bg-[#192C2F] text-white hover:bg-[#192c2fec] transition-colors text-sm md:text-base"
                >
                  {contactLoading ? (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  ) : (
                    t("home.get_consultation")
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* About Section with Background */}
      <section className=" relative bg-[#192C2F]">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("home.akkum")}
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere tellus ut tristique malesuada. Integer et arcu magna. Nulla
            posuere suscipit tellus. Ut libero nisi, accumsan a tempor id,
            rutrum nec justo. Mauris quis vulputate risus, eget finibus nulla.
            Aenean sit amet purus feugiat, congue lectus sed, fringilla velit.
            Nulla interdum augue sapien. Sed mollis ante vitae facilisis cursus.
            Integer nec sagittis ipsum. Donec sit amet libero mollis, mollis
            tellus ut, condimentum orci. Praesent mattis varius pharetra. Nulla
            ante diam, sodales vitae purus sit amet, eleifend sagittis magna.
          </p>
          <button className="text-accent hover:text-accent-dark transition-colors flex items-center gap-2 font-semibold">
            {t("home.about")} <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Wave Decoration */}
      <WaveDecoration className="h-32" />

      {/* Special Offer Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Wavy line background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 600"
          >
            <defs>
              <pattern id="waves" x="0" y="0" width="100%" height="100%">
                {Array.from({ length: 20 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M0,${i * 30} Q360,${i * 30 - 15} 720,${i * 30} T1440,${i * 30}`}
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ))}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("home.sale")}
              </h2>
              <p className="text-gray-600 text-lg max-w-lg">
                {t("home.sale_desc")}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center gap-3 text-lg">
                  <Phone size={22} />
                  +998(90)1234567
                </button>
                <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all text-lg">
                  {t("home.buy")}
                </button>
              </div>
            </div>

            {/* Right image with dark frame */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Dark teal/green container */}
                <div className="bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 rounded-[2.5rem] p-6 shadow-2xl w-full max-w-lg">
                  {/* Image container */}
                  <div className="bg-slate-700 rounded-[2rem] overflow-hidden h-72">
                    <img
                      src="https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&h=600&fit=crop&q=80"
                      alt="Luxury perfume bottle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDecoration className="h-32 rotate-180" />

      {/* Products Section */}
      <section className="py-20 bg-[#192C2F]">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-10 w-10 animate-spin text-white" />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData?.product?.slice(0, 4).map((product, idx) => (
              <ProductCard
                key={product.id}
                id={String(product?.id)}
                name={product?.title || ""}
                description={product?.short_description || ""}
                imageColor={product?.image || ""}
                index={idx}
              />
            ))}
          </div>
          )}
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="text-accent hover:text-accent-dark transition-colors font-semibold flex items-center justify-center gap-2"
            >
              {t("home.abouts")}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Map and Contact Form - BOTTOM */}
      <section className="py-20 bg-[#192C2F]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-96 bg-primary-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2s!4v1619524992238!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t("home.call")}
              </h2>
              <form
                onSubmit={handleSubmitBottom(onSubmitBottom)}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    placeholder={t("home.name")}
                    className="input-field"
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
                    placeholder={t("home.phone")}
                    className="input-field"
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
                    placeholder="E-mail"
                    className="input-field"
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
                    placeholder={t("home.sms")}
                    rows={4}
                    className="w-full bg-transparent border-2 border-white/20 rounded-3xl px-6 py-4 placeholder text-white focus:border-accent focus:outline-none transition-colors resize-none"
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
                  className="btn-accent w-full justify-center"
                >
                  {contactLoading ? (
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                  ) : (
                    t("home.add")
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="flex items-center justify-center py-12">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-black text-xl font-semibold">PESTCO</span>
            <span className="text-black text-xl font-semibold">Mish BEDIO</span>
            <span className="text-black text-xl font-semibold">
              Comedy Club
            </span>
            <span className="text-black text-xl font-semibold">MADRESS</span>
            <span className="text-black text-xl font-semibold">Laundryea</span>
            <span className="text-black text-xl font-semibold">PROSOCCER</span>
          </div>
        </div>
      </section>
    </div>
  );
}
