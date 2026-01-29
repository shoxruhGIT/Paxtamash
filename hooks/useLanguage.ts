"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";
import { useSWRConfig } from "swr";
import {
  getLanguage,
  setLanguage,
  subscribe,
  normalizeLanguage,
} from "@/lib/languageStore";

export function useLanguage() {
  const { i18n } = useTranslation();
  const { mutate } = useSWRConfig();

  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    () => "en" as const
  );

  const changeLanguage = useCallback(
    async (lang: string) => {
      const normalized = normalizeLanguage(lang);

      setLanguage(normalized);
      await i18n.changeLanguage(normalized);

      // Revalidate all SWR caches to refetch with new language
      mutate(() => true);
    },
    [i18n, mutate]
  );

  // Sync i18n language with store on mount
  useEffect(() => {
    const currentI18nLang = normalizeLanguage(i18n.language);
    if (currentI18nLang !== getLanguage()) {
      setLanguage(currentI18nLang);
    }
  }, [i18n.language]);

  return {
    language,
    changeLanguage,
  };
}
