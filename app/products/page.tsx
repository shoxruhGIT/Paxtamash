"use client";

import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import { useProducts } from "../features";
import { Loader2 } from "lucide-react";

export default function ProductsPage() {
  const { t } = useTranslation();

  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#192C2F]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-[1295px] mx-auto">
          <div className="flex flex-col items-center text-start">
            <h1 className="text-5xl font-bold text-[#192C2F] ">
              {t("products.hero_text")}
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <img src="/cotton_machine.png" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#192C2F] relative overflow-hidden">
        <div className="container max-w-[1295px] mx-auto px-6">
          <div className="relative">
            {/* Left side - Text content */}
            <div className="flex flex-col max-w-[900px] relative z-10 gap-10">
              <h2 className="text-4xl lg:text-5xl max-w-[890px] font-medium text-[#B8E986] leading-tight">
                {t("products.features_title")}
              </h2>
              <ul className="max-w-[392px] space-y-7">
                <li className="flex items-start gap-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-[10px] h-[10px] rounded-full bg-white" />
                      <h3 className="text-white text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-[2] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec posuere tellus ut tristique malesuada. Integer et
                      arcu magna.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-[10px] h-[10px] rounded-full bg-white" />
                      <h3 className="text-white text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-[2] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec posuere tellus ut tristique malesuada. Integer et
                      arcu magna.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-[10px] h-[10px] rounded-full bg-white" />
                      <h3 className="text-white text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-[2] text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec posuere tellus ut tristique malesuada. Integer et
                      arcu magna.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right side - Image (Absolute positioned) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
              <img
                src="/cotton_machine_white.png"
                alt="Cotton harvesting machine"
                className="w-[750px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container max-w-[1295px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("products.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.results?.map((product) => (
              <ProductCard
                key={product.id}
                id={String(product.id)}
                name={product.title || ""}
                description={product.short_description || ""}
                imageColor={product.image || ""}
                index={10}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
