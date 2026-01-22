"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru");

  const { i18n } = useTranslation();

  const navigation = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Biz haqimizda", href: "/about" },
    { name: "Mahsulotlar", href: "/products" },
    { name: "Aloqa", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-accent transition-colors"
          >
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-white hover:text-accent transition-colors">
              <Search size={20} />
            </button>

            {/* Language selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white hover:text-accent transition-colors">
                <img
                    src="https://flagcdn.com/w40/uz.png"
                    alt="Uzbek"
                  className="w-6 h-4 object-cover rounded"
                />
                <ChevronDown size={16} /> 
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-primary-light rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button  onClick={() => i18n.changeLanguage("ru")} className="w-full px-4 py-2 text-left text-white hover:bg-primary hover:text-accent transition-colors rounded-t-lg flex items-center space-x-2">
                  <img
                    src="https://flagcdn.com/w40/ru.png"
                    alt="Russian"
                    className="w-6 h-4"
                  />
                  <span>Русский</span>
                </button>
                <button  onClick={() => i18n.changeLanguage("uz")} className="w-full px-4 py-2 text-left text-white hover:bg-primary hover:text-accent transition-colors rounded-b-lg flex items-center space-x-2">
                  <img
                    src="https://flagcdn.com/w40/uz.png"
                    alt="Uzbek"
                    className="w-6 h-4"
                  />
                  <span>O'zbek</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-white hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
