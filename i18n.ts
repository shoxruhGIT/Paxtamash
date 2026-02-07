// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON files
import enCommon from "@/public/locales/en/common.json";
import ruCommon from "@/public/locales/ru/common.json";

const resources = {
  en: {
    translation: enCommon,
  },
  ru: {
    translation: ruCommon,
  },
};

// Read persisted language (SSR-safe)
const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;

// Initialize i18n
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: savedLang || "ru",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: false },
  });
}

export default i18n;
