"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import WaveDecoration from "@/components/WaveDecoration";
import { Check, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useStaffs } from "../features";

export default function AboutPage() {
  const { t } = useTranslation();

  const { data: staffs, isLoading } = useStaffs();

  const timeline = [
    { year: 2017, active: true },
    { year: 2019, active: false },
    { year: 2021, active: false },
    { year: 2023, active: false },
    { year: 2025, active: false },
  ];

  const stats = [
    { value: "90%", labelKey: "about.stats.satisfied_clients" },
    { value: "+47", labelKey: "about.stats.completed_projects" },
    { value: "+39", labelKey: "about.stats.specialists" },
    { value: "+35", labelKey: "about.stats.foreign_partners" },
  ];

  const features = [
    "about.features.affordable_price",
    "about.features.quality_product",
    "about.features.fast_delivery",
    "about.features.high_tech",
  ];

  const team = [
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
    {
      name: "Aleksandr Petro",
      role: "Bosh ijrochi direktor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.",
    },
  ];

  const [activeYear, setActiveYear] = useState(2017);

  const tripleTimeline = [...timeline, ...timeline, ...timeline];
  const ORIGINAL_LENGTH = timeline.length;

  const [activeIndex, setActiveIndex] = useState(ORIGINAL_LENGTH);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const ITEM_WIDTH = 450; // Yil + Masofa (taxminan, buni o'zingiz moslang)

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (activeIndex >= ORIGINAL_LENGTH * 2) {
      setTimeout(() => {
        setIsTransitioning(false); // Animatsiyani vaqtincha o'chirish
        setActiveIndex(activeIndex - ORIGINAL_LENGTH);
      }, 700); // duration-700 bilan bir xil bo'lishi kerak
    } else if (activeIndex < ORIGINAL_LENGTH) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex + ORIGINAL_LENGTH);
      }, 700);
    }
  }, [activeIndex]);

  // Animatsiyani qayta yoqish
  useEffect(() => {
    if (!isTransitioning) {
      // Brauzer "re-render" qilib olishi uchun qisqa tanaffus
      const timeout = setTimeout(() => setIsTransitioning(true), 10);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full relative min-h-[60vh] md:min-h-screen flex items-center bg-[url('/about_banner.png')] bg-cover bg-center pt-20 md:pt-24">
        {/* Qora overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="container max-w-[1295px] mx-auto px-6 relative z-10 py-12 md:py-16">
          <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-accent mb-4 md:mb-6 leading-relaxed md:leading-[2]">
              {t("home.akkum")}
            </h1>
            <p className="max-w-[755px] text-white text-base md:text-lg lg:text-[22px] leading-relaxed md:leading-[2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere tellus ut tristique malesuada. Integer et arcu magna.
              Nulla posuere suscipit tellus. Ut libero nisi, accumsan a tempor
              id, rutrum nec justo. Mauris quis vulputate risus, eget finibus
              nulla. Aenean sit amet purus feugiat, congue lectus sed, fringilla
              velit. Nulla interdum augue sapien. Sed mollis ante vitae
              facilisis cursus. Integer nec sagittis ipsum. Donec sit amet
              libero mollis, mollis tellus ut, condimentum orci. Praesent mattis
              varius pharetra. Nulla ante diam, sodales vitae purus sit amet,
              eleifend sagittis magna.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1295px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed md:leading-[2] mb-8 md:mb-12">
            {t("about.title")}
          </h2>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="relative w-full max-w-[1295px] h-64 overflow-hidden">
              <div
                className={`flex items-center ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{
                  transform: `translateX(calc(50% - ${activeIndex * ITEM_WIDTH + ITEM_WIDTH * 1.35}px))`,
                }}
              >
                {tripleTimeline.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={`${item.year}-${index}`}
                      className="flex items-center shrink-0"
                      style={{ width: `${ITEM_WIDTH}px` }}
                    >
                      <button
                        onClick={() => {
                          handleYearClick(index);
                          setActiveYear(item.year);
                        }}
                        className={`relative text-[80px] lg:text-[120px] font-medium transition-all duration-300 ${
                          isActive
                            ? "text-primary scale-110"
                            : "text-transparent [-webkit-text-stroke:1px_#475569] opacity-30 hover:opacity-50"
                        }`}
                      >
                        {item.year}
                        {isActive && (
                          <div className="absolute top-32 lg:top-44 left-0 w-full z-50">
                            <p className="text-[14px] leading-tight text-black font-normal normal-case tracking-normal text-left mt-2 max-w-[300px]">
                              "Jami 2 million$ lik investitsiya bilan bir qator
                              ilmiy-tadqiqot va ishlanmalar hamkorliklari
                              o'rnatildi."
                            </p>
                          </div>
                        )}
                      </button>

                      {/* Nuqta doim chiqadi, chunki bu cheksiz ro'yxat */}
                      <div
                        className={`w-3 h-3 rounded-full mx-auto transition-colors duration-300 ${
                          isActive ||
                          (tripleTimeline[index + 1] &&
                            index + 1 === activeIndex)
                            ? "bg-primary"
                            : "border border-[#475569]"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {timeline.map((item, index) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    activeYear === item.year ? "scale-110" : "opacity-50"
                  }`}
                >
                  <span className={`text-4xl font-bold ${activeYear === item.year ? "text-primary" : "text-gray-400"}`}>
                    {item.year}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${activeYear === item.year ? "bg-primary" : "border border-gray-400"}`} />
                </button>
              ))}
            </div>
            {activeYear && (
              <p className="text-sm text-gray-600 mt-4 px-4">
                "Jami 2 million$ lik investitsiya bilan bir qator ilmiy-tadqiqot va ishlanmalar hamkorliklari o'rnatildi."
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container max-w-[1295px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
                {t("about.text")}
              </h2>
              <p className="text-white/80 mb-6 md:mb-8 leading-relaxed md:leading-[2] text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                posuere tellus ut tristique malesuada. Integer et arcu magna.
                Nulla posuere suscipit tellus. Ut libero nisi, accumsan a tempor
                id, rutrum nec justo. Mauris quis vulputate risus, eget finibus
                nulla.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {features.map((featureKey, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <img src="/tick_icon.png" alt="" className="w-full h-full" />
                    </div>
                    <span className="text-white text-base md:text-lg">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Manufacturing"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 md:gap-3"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="w-[20px] md:w-[26px] h-[4px] md:h-[5px] bg-white" />
                <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-center">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe Section */}
      <section className="py-12 md:py-20 bg-primary-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">{t("about.text-new")}</h2>

          <div className="relative w-full max-w-md mx-auto h-72 md:h-96">
            {/* Globe illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-64 md:h-64">
                  {/* Simple map outline */}
                  <path
                    d="M60 80 L80 70 L100 75 L120 65 L140 75 L140 90 L130 95 L120 90 L110 95 L90 90 L80 95 L70 90 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="85" r="4" fill="#c4ff61" />
                  <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                  >
                    UZBEKISTAN
                  </text>
                  <text
                    x="100"
                    y="135"
                    textAnchor="middle"
                    fill="#c4ff61"
                    fontSize="12"
                  >
                    SAMARQAND
                  </text>
                  <text
                    x="100"
                    y="150"
                    textAnchor="middle"
                    fill="#c4ff61"
                    fontSize="12"
                  >
                    NAVOI
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1295px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("about.team_title")}
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {staffs?.results?.map((member, index) => (
              <div
                key={index}
                className="bg-primary-dark rounded-2xl md:rounded-3xl hover-lift overflow-hidden py-4 md:py-6"
              >
                {/* Name Section */}
                <div className="px-4 md:px-6 pt-4 md:pt-6 pb-4">
                  <h3 className="text-accent text-xl sm:text-2xl md:text-3xl font-medium">
                    {member.first_name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] bg-white/20" />

                {/* Image Section with light background */}
                <div className="p-4 md:p-6">
                  <div className="w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                    <img
                      src={member?.image || "/default_avatar.png"}
                      alt={member?.first_name || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] bg-white/20" />

                {/* Role and Description Section */}
                <div className="px-4 md:px-6 pt-4 pb-4 md:pb-6">
                  <p className="text-accent text-base md:text-xl font-normal mb-2 md:mb-3">
                    {member.role}
                  </p>
                  <p className="text-white text-xs md:text-sm leading-relaxed md:leading-[2]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
