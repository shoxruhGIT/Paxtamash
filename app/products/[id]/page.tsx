"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "react-i18next";
import { useProductDetail } from "@/app/features";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const { data, isLoading } = useProductDetail(
    params.id ? Number(params.id) : null
  );

  const images = data?.images ?? [];
  const similarProducts = data?.similar_products ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#192C2F]">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      {/* Back button */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors"
        >
          <ArrowLeft size={20} />
          <span>{t("products.back")}</span>
        </Link>
      </div>

      {/* Product Header */}
      <section className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-bold text-accent mb-8">
          {data?.title ?? ""}
        </h1>

        {/* Image Gallery */}
        <div className="bg-primary-light rounded-3xl p-8">
          <div className="relative h-96 flex items-center justify-center mb-6">
            {/* Main product image */}
            {images.length > 0 && images[currentImage]?.image ? (
              <img
                src={images[currentImage].image}
                alt={data?.title ?? "Product image"}
                className="object-contain"
              />
            ) : (
              <div className="text-white/50">{t("products.no_image")}</div>
            )}

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage(Math.max(0, currentImage - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="text-white" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage(Math.min(images.length - 1, currentImage + 1))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="text-white" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <div className="flex justify-center gap-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImage === index ? "bg-accent w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12">
          {data?.short_description && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {t("products.specifications")}
              </h2>
              <div
                className="text-primary/80 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              />
            </div>
          )}

          {data?.description && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t("products.description")}
              </h2>
              <div
                className="text-primary/80 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {similarProducts.length > 0 && (
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t("products.related_products")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
