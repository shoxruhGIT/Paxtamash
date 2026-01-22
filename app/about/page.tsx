"use client";

import { useState } from "react";
import WaveDecoration from "@/components/WaveDecoration";
import { Check } from "lucide-react";
import { t } from "i18next";

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState(2017);

  const timeline = [
    { year: 2017, active: true },
    { year: 2019, active: false },
    { year: 2021, active: false },
  ];

  const stats = [
    { value: "90%", label: "Manmun mijozlar" },
    { value: "+47", label: "Bajarilgan obyektlar" },
    { value: "+39", label: "Mutaxassislar" },
    { value: "+35", label: "Xorijiy hamkorlar" },
  ];

  const features = [
    "Rivojlantirilgan narx",
    "Sifatli mahsulot",
    "Tez fax muximdira",
    "Yuqori texnologiyalar yechizdar",
  ];

  const team = [
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh yrich direktlar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute right-0 w-1/2 h-full">
            <svg viewBox="0 0 600 400" className="w-full h-full">
              <rect x="100" y="150" width="120" height="150" fill="#4a9eff" rx="8"/>
              <rect x="240" y="100" width="180" height="200" fill="#4a9eff" rx="8"/>
              <rect x="440" y="50" width="120" height="250" fill="#4a9eff" rx="8"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-[70px]">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">
              {t("home.akkum")}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada. Integer et arcu magna. Nulla posuere suscipit tellus. Ut libero nisi, accumsan a tempor id, rutrum nec justo. Mauris quis vulputate risus, eget finibus nulla. Aenean sit amet purus feugiat, congue lectus sed, fringilla velit. Nulla interdum augue sapien. Sed mollis ante vitae facilisis cursus. Integer nec sagittis ipsum. Donec sit amet libero mollis, mollis tellus ut, condimentum orci. Praesent mattis varius pharetra. Nulla ante diam, sodales vitae purus sit amet, eleifend sagittis magna.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            {t("about.title")}
          </h2>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {timeline.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`text-6xl font-bold transition-all ${
                    activeYear === item.year
                      ? "text-white scale-110"
                      : "text-white/30"
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            <div className="h-1 bg-white/20 rounded-full mb-4">
              <div className="h-full bg-accent rounded-full w-1/3 transition-all"></div>
            </div>

            <div className="flex justify-between text-white/50 text-sm">
              <span>{t("about.old")}</span>
              <span>{t("about.new")}</span>
            </div>

            {activeYear === 2017 && (
              <div className="mt-8 p-6 bg-primary-light/50 rounded-2xl">
                <p className="text-white/80">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis ducimus in cumque cumque recusandae.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-light/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
               {t("about.text")}
              </h2>
              <p className="text-white/80 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada. Integer et arcu magna. Nulla posuere suscipit tellus. Ut libero nisi, accumsan a tempor id, rutrum nec justo. Mauris quis vulputate risus, eget finibus nulla.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Manufacturing"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            {t("about.text-new")} </h2>
          
          <div className="relative w-full max-w-md mx-auto h-96">
            {/* Globe illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  {/* Simple map outline */}
                  <path
                    d="M60 80 L80 70 L100 75 L120 65 L140 75 L140 90 L130 95 L120 90 L110 95 L90 90 L80 95 L70 90 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="85" r="4" fill="#c4ff61" />
                  <text x="100" y="110" textAnchor="middle" fill="white" fontSize="10">
                    UZBEKISTAN
                  </text>
                  <text x="100" y="135" textAnchor="middle" fill="#c4ff61" fontSize="12">
                    SAMARQAND
                  </text>
                  <text x="100" y="150" textAnchor="middle" fill="#c4ff61" fontSize="12">
                    NAVOI
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Bizning mutaxassislarimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-primary-dark rounded-3xl p-6 hover-lift"
              >
                <div className="w-full h-48 bg-white/10 rounded-2xl mb-4 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-accent text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-white/60 mb-3">{member.role}</p>
                <p className="text-white/80 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
