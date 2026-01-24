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
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-12">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1295px] mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              {t("products.hero_text")}
            </h1>
          </div>

          <div className="flex items-center justify-center mt-8">
            <img src="/cotton_machine.png" alt="" className="w-full max-w-4xl h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="container max-w-[1295px] mx-auto px-6">
          <div className="relative">
            {/* Left side - Text content */}
            <div className="flex flex-col max-w-full lg:max-w-[900px] relative z-10 gap-6 md:gap-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[890px] font-medium text-[#B8E986] leading-tight">
                {t("products.features_title")}
              </h2>
              <ul className="max-w-full md:max-w-[392px] space-y-5 md:space-y-7">
                <li className="flex items-start gap-3">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-2 h-2 md:w-[10px] md:h-[10px] rounded-full bg-white flex-shrink-0" />
                      <h3 className="text-white text-lg md:text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-relaxed md:leading-[2] text-xs md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec posuere tellus ut tristique malesuada. Integer et
                      arcu magna.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-2 h-2 md:w-[10px] md:h-[10px] rounded-full bg-white flex-shrink-0" />
                      <h3 className="text-white text-lg md:text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-relaxed md:leading-[2] text-xs md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec posuere tellus ut tristique malesuada. Integer et
                      arcu magna.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-2 h-2 md:w-[10px] md:h-[10px] rounded-full bg-white flex-shrink-0" />
                      <h3 className="text-white text-lg md:text-2xl font-medium">
                        Lorem ipsum dolor sit
                      </h3>
                    </div>
                    <p className="text-white leading-relaxed md:leading-[2] text-xs md:text-sm">
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
                className="w-[500px] xl:w-[750px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1295px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("products.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
