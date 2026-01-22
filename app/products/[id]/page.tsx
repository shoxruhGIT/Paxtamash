"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [0, 1, 2]; // Placeholder for multiple images

  const specifications = [
    {
      title: "Xususiyatlari:",
      items: [
        "3.1. Maksimal tashlash balandiligidagi unumdorlik, kg/sek — 10,5±0,8 (38000±3000 kg/soat)",
        "3.2. Tashlash uzunligi, m — 18,5±0,5",
        "3.3. Tashlash balandligi, m:",
        "— maksimal — 12,5±0,5",
        "— minimal — 5±0,3",
        "3.4. O'rnatilgan quvvat, kVt — 9,7",
        "shu jumladan privod bo'yicha:",
        "— lenta uchun — 7,5",
        "— ko'tarish mexanizmi uchun — 2,2",
        "3.5. Lentaning harakat tezligi, m/s ≈ 4,7±0,3",
        "3.6. Lenta kengligi, mm — 650",
        "3.7. Maksimal tashlash balandiligida strelaning og'ish burchagi, gradus — 40±2",
        "3.8. Aravacha bazasi, mm — 7160",
        "3.9. G'ildiraklar izi (koleyasi), mm — 3070±10",
        "3.10. Yo'l oralig'i (klirens), mm — 580±30",
        "3.11. Burilish radiusi, mm — 7000±200",
        "3.12. Bukser (tortib yurish) holatida ruxsat etilgan harakat tezligi, m/s — 1,39 (5 km/soat)",
        "3.13. Holatiga qarab umumiy o'lchamlar:",
        "— ishchi holatlda:",
        "uzunligi, mm — 15000-19000",
        "— kengligi, mm — 4960±40",
        "balandligi, mm — 13000 gacha",
        "Transport holatida:",
        "— uzunligi, mm — 19000±100",
        "— kengligi, mm — 3220±100",
        "— balandligi, mm — 5200±100",
        "3.14. Massasi, kg, ko'pi bilan — 3028",
        "3.15. Ishonchlilik ko'rsatkichlari:",
        "— nozoliksiz o'rtacha ishlash muddati, soat, kamida — 70",
        "— birinchi kapital ta'mirgacha bo'lgan o'rtacha xizmat muddati, yil, kamida — 3",
      ],
    },
  ];

  const relatedProducts = [
    {
      id: "klp-650-2",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit.",
      color: "black" as const,
    },
    {
      id: "klp-650-3",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit.",
      color: "lime" as const,
    },
    {
      id: "klp-650-4",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit.",
      color: "white" as const,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Back button */}
      <div className="container mx-auto px-6 mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Назад</span>
        </Link>
      </div>

      {/* Product Header */}
      <section className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-bold text-accent mb-8">КЛП-650</h1>

        {/* Image Gallery */}
        <div className="bg-primary-light rounded-3xl p-8">
          <div className="relative h-96 flex items-center justify-center mb-6">
            {/* Main product image */}
            <svg viewBox="0 0 500 300" className="w-full max-w-2xl">
              <rect x="80" y="100" width="100" height="120" fill="#a8e04d" rx="8"/>
              <rect x="200" y="60" width="150" height="160" fill="#a8e04d" rx="8"/>
              <rect x="370" y="20" width="100" height="200" fill="#a8e04d" rx="8"/>
              <rect x="220" y="80" width="60" height="50" fill="#ff4444"/>
              <line x1="350" y1="50" x2="470" y2="10" stroke="#a8e04d" strokeWidth="4"/>
              <circle cx="110" cy="230" r="15" fill="#ff4444"/>
              <circle cx="150" cy="230" r="15" fill="#ff4444"/>
            </svg>

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentImage(Math.max(0, currentImage - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={() => setCurrentImage(Math.min(images.length - 1, currentImage + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

          {/* Thumbnail navigation */}
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
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-white rounded-3xl p-8 md:p-12">
          {specifications.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-primary/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Tavsifi:</h2>
            <p className="text-primary/80 leading-relaxed">
              Paxta xomashyosi uchun mo'ljallangan ko'chma lenta konveyeri KLP-650 paxta xomashyosini bunt
              maydonchaalariga uzatish, bunt shakillantirishlari yoki paxta xomashyosini qadoqlash
              konveyoridan tashlash jarayonida yopiq omborlarni to'ldirish maqsadida xizmat qiladi hamda
              zavod va zavoddan tashqari tayyorlash punktlarida PLA va XPP qabul-uzatish qurilmalari bilan
              birgalikda qo'llaniladi.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">O'xshash mahsulotlar:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageColor={product.color}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
