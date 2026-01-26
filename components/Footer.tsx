"use client";

import Link from "next/link";
import { Instagram, Facebook, Send, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="container max-w-[1295px] mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              <img src="/logo.png" alt="logo" className="w-44" />
            </h3>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">
              {t("footer.rights")}
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Phone size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Send size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-accent transition-colors text-sm md:text-base"
                >
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-accent transition-colors text-sm md:text-base"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-accent transition-colors text-sm md:text-base"
                >
                  {t("footer.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-accent transition-colors text-sm md:text-base"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">
              {t("footer.contacts")}
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-white/70 text-sm md:text-base">
              <li>+998(90)123-45-67</li>
              <li className="break-all">@paxtamashkattaqo'rg'on</li>
              <li>info@paxtamash.uz</li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 md:mt-8 text-center">
          <Link
            href="https://capma.uz"
            target="_blank"
            className="text-white/50 hover:text-accent text-xs md:text-sm transition-colors"
          >
            {t("footer.created_by")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
