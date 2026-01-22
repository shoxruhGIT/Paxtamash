import Link from "next/link";
import { Instagram, Facebook, Send, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Logo</h3>
            <p className="text-white/70 mb-4">
              © 2025 «Kattaqo'rg'on paxtamash». Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition-colors"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Продукция
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>+998(90)123-45-67</li>
              <li>@paxtamashkattaqo'rg'on</li>
              <li>info@paxtamash.uz</li>
            </ul>
          </div>
        </div>

        {/* Partner logos */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <span className="text-white text-sm">PESTCO</span>
            <span className="text-white text-sm">Mish BEDIO</span>
            <span className="text-white text-sm">Comedy Club</span>
            <span className="text-white text-sm">MADRESS</span>
            <span className="text-white text-sm">Laundryea</span>
            <span className="text-white text-sm">PROSOCCER</span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center">
          <Link
            href="/privacy"
            className="text-white/50 hover:text-accent text-sm transition-colors"
          >
            Созданные сайтов
          </Link>
        </div>
      </div>
    </footer>
  );
}
