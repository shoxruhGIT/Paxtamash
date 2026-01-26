"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageColor: string;
  index: number; // Add index to determine variant automatically
}

const ProductCard = ({
  id,
  name,
  description,
  imageColor,
  index,
}: ProductCardProps) => {
  const { t } = useTranslation();

  // Automatically determine variant based on index: black, lime, white, lime
  const variantMap: Array<"black" | "lime" | "white" | "darkTeal"> = [
    "black",
    "lime",
    "white",
    "lime",
    "darkTeal",
  ];

  const navigate = useRouter();

  const variant = variantMap[index % 6];

  const variants = {
    black: {
      bg: "bg-black",
      text: "text-white",
      button: "bg-white",
      buttonText: "text-black",
      iconBg: "bg-[#BDFF69]",
    },
    lime: {
      bg: "bg-[#BDFF69]",
      text: "text-primary",
      button: "bg-white",
      buttonText: "text-[#000000]",
      iconBg: "bg-[#BDFF69]",
    },
    white: {
      bg: "bg-white",
      text: "text-primary",
      button: "bg-primary",
      buttonText: "text-white",
      iconBg: "bg-[#BDFF69]",
    },
    darkTeal: {
      bg: "bg-primary",
      text: "text-white",
      button: "bg-[#BDFF69]",
      buttonText: "text-primary",
      iconBg: "bg-white",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style?.bg} rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex flex-col min-h-[450px] md:min-h-[550px] transition-transform hover:scale-[1.02]`}
    >
      {/* Title */}
      <h3 className={`${style?.text} text-lg md:text-xl font-bold mb-4 md:mb-6`}>{name}</h3>

      <div className="relative top-6 md:top-10 flex-1 flex items-center justify-center">
        <img
          src={imageColor}
          alt={name}
          className="absolute w-full h-auto object-contain max-h-[280px] md:max-h-[400px]"
        />
      </div>

      {/* Description */}
      <p className={`${style?.text} text-xs md:text-sm mb-4 md:mb-6 leading-relaxed opacity-80 line-clamp-3`}>
        {description}
      </p>

      {/* Button */}
      <button
        onClick={() => navigate.push(`/products/${id}`)}
        className={`${style?.button} ${style?.buttonText} rounded-full pl-4 md:pl-8 pr-2 md:pr-3 py-2 md:py-2.5 font-medium text-xs md:text-sm flex items-center justify-between group w-full transition-all`}
      >
        <span className="text-sm md:text-[17px]">{t("products.view_features")}</span>
        <div
          className={`${style?.iconBg} rounded-full w-10 h-10 md:w-14 md:h-14 flex items-center justify-center ml-2 transition-transform group-hover:translate-x-1`}
        >
          <img src="/right.png" alt="" className="w-4 h-4 md:w-auto md:h-auto" />
        </div>
      </button>
    </div>
  );
};

export default ProductCard;
