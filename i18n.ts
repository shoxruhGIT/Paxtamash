// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON files
import uzCommon from "@/public/locales/uz/common.json";
import ruCommon from "@/public/locales/ru/common.json";

const resources = {
  uz: {
    translation: uzCommon,
  },
  ru: {
    translation: ruCommon,
  },
};

// Initialize i18n
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
