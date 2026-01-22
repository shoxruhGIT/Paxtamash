"use client";

import { useState } from "react";
import { ArrowRight, Phone, User, Mail, MoveRight } from "lucide-react";
import WaveDecoration from "@/components/WaveDecoration";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useHomeData } from "./features";

export default function Home() {
  const { t } = useTranslation();

  const { data: homeData, isLoading } = useHomeData();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  console.log(homeData);
  

  const products = [
    {
      id: "klp-650",
      name: "КЛП-650",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "black" as const,
    },
    {
      id: "xpp-3",
      name: "ХПП-III",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "lime" as const,
    },
    {
      id: "tsiklon-s6",
      name: "ЦИКЛОН С-6",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "white" as const,
    },
    {
      id: "klp-650-2",
      name: "КЛП-650",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "lime" as const,
    },
  ];

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

        {/* Optional: subtle overlay or decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#192C2F]/60 to-transparent pointer-events-none" />
      </section>

      {/* Scrolling Text Banner */}
      <section className="bg-transparent py-8 overflow-hidden">
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

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-2 border-white/20 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={20}
                />
                <input
                  type="tel"
                  placeholder="Ваш номер"
                  className="w-full bg-transparent border-2 border-white/20 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Ваш E-mail"
                  className="w-full bg-transparent border-2 border-white/20 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <button className="btn-primary ml-auto">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* About Section with Background */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-primary via-primary-light to-primary"></div>
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {t("home.sale")}
              </h2>
              <p className="text-primary/70 text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                posuere tellus ut tristique malesuada.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                  <Phone size={20} />
                  +998(90)1234567
                </button>
                <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all">
                  {t("home.buy")}
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-64 rounded-3xl overflow-hidden bg-primary-light">
                {/* Product image placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <svg width="300" height="200" viewBox="0 0 300 200">
                    <ellipse
                      cx="150"
                      cy="100"
                      rx="80"
                      ry="60"
                      fill="#ffd700"
                      opacity="0.3"
                    />
                    <rect
                      x="100"
                      y="80"
                      width="100"
                      height="80"
                      fill="#ffd700"
                      rx="8"
                    />
                    <circle cx="130" cy="110" r="15" fill="#333" />
                    <circle cx="170" cy="110" r="15" fill="#333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDecoration className="h-32 rotate-180" />

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData?.product?.map((product) => (
              <ProductCard
                key={product.id}
                id={String(product?.id)}
                name={product?.title ?? ""}
                description={product?.short_description ?? ""}
                imageColor={(product?.image as "black" | "lime" | "white") ?? "black"}
              />
            ))}
          </div>
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

      {/* Map and Contact Form */}
      <section className="py-20">
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
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t("home.name")}
                  className="input-field"
                />
                <input
                  type="tel"
                  placeholder={t("home.phone")}
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-field"
                />
                <textarea
                  placeholder={t("home.sms")}
                  rows={4}
                  className="w-full bg-transparent border-2 border-white/20 rounded-3xl px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="btn-accent w-full justify-center"
                >
                  {t("home.add")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-primary-light/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-white/50 text-xl font-semibold">PESTCO</span>
            <span className="text-white/50 text-xl font-semibold">
              Mish BEDIO
            </span>
            <span className="text-white/50 text-xl font-semibold">
              Comedy Club
            </span>
            <span className="text-white/50 text-xl font-semibold">MADRESS</span>
            <span className="text-white/50 text-xl font-semibold">
              Laundryea
            </span>
            <span className="text-white/50 text-xl font-semibold">
              PROSOCCER
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
