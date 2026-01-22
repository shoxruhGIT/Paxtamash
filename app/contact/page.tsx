"use client";

import { useState } from "react";
import { Phone, Globe, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen py-12">
      <section className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-accent mb-12 text-center">
          Mahsulotlarimiz haqida ko'proq ma'lumot olmoqchimisiz?
        </h1>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">Konsultatsiyaga yozilish</h3>
            <p className="text-white/70">+998(90)123-45-67</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">Onlayn konsultatsiya</h3>
            <p className="text-white/70">+998(90)123-45-67</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-accent" size={32} />
            </div>
            <h3 className="text-white font-semibold mb-2">Bizga yozing</h3>
            <p className="text-white/70">@paxtamashkattaqo'rg'on</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              type="tel"
              placeholder="Ваш номер телефона"
              className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Ваш E-mail"
              className="w-full bg-transparent border-2 border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <textarea
              placeholder="Напишите сообщение"
              rows={6}
              className="w-full bg-transparent border-2 border-white/20 rounded-3xl px-6 py-4 text-white placeholder:text-white/50 focus:border-accent focus:outline-none transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-primary font-bold py-5 rounded-full transition-all hover:shadow-lg"
            >
              Yuborish
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
