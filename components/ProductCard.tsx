import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
      text: "text-[#192C2F]",
      button: "bg-white",
      buttonText: "text-[#000000]",
      iconBg: "bg-[#BDFF69]",
    },
    white: {
      bg: "bg-white",
      text: "text-[#192C2F]",
      button: "bg-[#1a3a3a]",
      buttonText: "text-white",
      iconBg: "bg-[#BDFF69]",
    },
    darkTeal: {
      bg: "bg-[#192C2F]",
      text: "text-white",
      button: "bg-[#BDFF69]",
      buttonText: "text-[#192C2F]",
      iconBg: "bg-white",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style?.bg}  rounded-[24px] p-6 flex flex-col h-[550px] transition-transform hover:scale-[1.02]`}
    >
      {/* Title */}
      <h3 className={`${style?.text} text-xl font-bold mb-6`}>{name}</h3>

      <div className="relative top-10 flex-1 flex items-center justify-center">
        <img
          src={imageColor}
          alt={name}
          className="absolute w-full h-auto object-contain"
          style={{ maxHeight: "400px" }}
        />
      </div>

      {/* Description */}
      <p className={`${style?.text} text-sm mb-6 leading-relaxed opacity-80`}>
        {description}
      </p>

      {/* Button */}
      <button
        onClick={() => navigate.push(`/products/${id}`)}
        className={`${style?.button} ${style?.buttonText} rounded-full pl-[35px] pr-[11px] py-[9.75px] font-medium text-sm flex items-center justify-between group w-full transition-all`}
      >
        <span className="text-[17px]">Xususiyatlarni ko'rish</span>
        <div
          className={`${style?.iconBg} rounded-full w-14 h-14 flex items-center justify-center ml-2 transition-transform group-hover:translate-x-1`}
        >
          <img src="/right.png" alt="" />
        </div>
      </button>
    </div>
  );
};

export default ProductCard;
