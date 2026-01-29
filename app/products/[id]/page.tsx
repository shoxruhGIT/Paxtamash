"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import { useProductDetail } from "@/app/features";
import { useGlobalLoading } from "@/provider/LoadingProvider";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const { stopLoading } = useGlobalLoading();

  const { data, isLoading } = useProductDetail(
    params.id ? Number(params.id) : null,
  );

  // Stop global loading when product detail is loaded
  useEffect(() => {
    if (!isLoading && data) {
      stopLoading();
    }
  }, [isLoading, data, stopLoading]);

  const images = data?.images ?? [];
  const similarProducts = data?.similar_products ?? [];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12">
      {/* Back button */}
      <div className="container mx-auto px-6 mb-6 md:mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          <span className="text-sm md:text-base">{t("products.back")}</span>
        </Link>
      </div>

      {/* Product Header */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-6 md:mb-8 font-heading">
          {data?.title ?? ""}
        </h1>

        {/* Image Gallery */}
        <div className="bg-primary-light rounded-2xl md:rounded-3xl p-4 md:p-8">
          <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center mb-4 md:mb-6">
            {/* Main product image */}
            {images.length > 0 && images[currentImage]?.image ? (
              <img
                src={images[currentImage].image}
                alt={data?.title ?? "Product image"}
                className="object-contain max-h-full"
              />
            ) : (
              <div className="text-white/50">{t("products.no_image")}</div>
            )}

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage(
                      Math.min(images.length - 1, currentImage + 1),
                    )
                  }
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 md:gap-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-accent w-6 md:w-8"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-12 md:mb-20">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
          {data?.short_description && (
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 font-heading">
                {t("products.specifications")}
              </h2>
              <div
                className="text-primary/80 leading-relaxed text-sm md:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              />
            </div>
          )}

          {data?.description && (
            <div className="mt-8 md:mt-12">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 font-heading">
                {t("products.description")}
              </h2>
              <div
                className="text-primary/80 leading-relaxed text-sm md:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {similarProducts.length > 0 && (
        <section className="container mx-auto px-6 pb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 font-heading">
            {t("products.related_products")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={String(product.id)}
                name={product.title ?? ""}
                description={product.short_description ?? ""}
                imageColor={product.image ?? ""}
                index={index}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
