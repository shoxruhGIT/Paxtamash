import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageColor: "black" | "lime" | "white";
}

export default function ProductCard({ id, name, description, imageColor }: ProductCardProps) {
  const bgColors = {
    black: "bg-black",
    lime: "bg-accent",
    white: "bg-white/10",
  };

  const textColors = {
    black: "text-white",
    lime: "text-primary",
    white: "text-white",
  };

  return (
    <div className={`${bgColors[imageColor]} rounded-3xl p-8 hover-lift group cursor-pointer`}>
      <h3 className={`text-2xl font-bold mb-4 ${textColors[imageColor]}`}>{name}</h3>
      
      {/* Machine illustration placeholder */}
      <div className="aspect-video mb-6 flex items-center justify-center">
        <div className="w-full h-48 flex items-center justify-center">
          <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-80">
            {/* Simplified machine illustration */}
            <rect x="20" y="60" width="40" height="30" fill={imageColor === "lime" ? "#1a3e3e" : "#4a9eff"} rx="4"/>
            <rect x="70" y="40" width="60" height="50" fill={imageColor === "lime" ? "#1a3e3e" : "#4a9eff"} rx="4"/>
            <rect x="140" y="20" width="40" height="70" fill={imageColor === "lime" ? "#1a3e3e" : "#4a9eff"} rx="4"/>
            <rect x="80" y="50" width="30" height="20" fill={imageColor === "lime" ? "#ff4444" : "#ff6b6b"}/>
            <line x1="130" y1="30" x2="180" y2="10" stroke={imageColor === "lime" ? "#1a3e3e" : "#4a9eff"} strokeWidth="3"/>
            <circle cx="30" cy="95" r="6" fill={imageColor === "lime" ? "#ff4444" : "#ff6b6b"}/>
            <circle cx="50" cy="95" r="6" fill={imageColor === "lime" ? "#ff4444" : "#ff6b6b"}/>
          </svg>
        </div>
      </div>

      <p className={`${textColors[imageColor]} mb-6 opacity-80`}>{description}</p>

      <Link
        href={`/products/${id}`}
        className={`${imageColor === "lime" ? "bg-primary hover:bg-primary-dark" : "bg-accent hover:bg-accent-dark"} ${imageColor === "lime" ? "text-white" : "text-primary"} px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all group-hover:gap-4`}
      >
        Xususiyatlarni ko'rish
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
