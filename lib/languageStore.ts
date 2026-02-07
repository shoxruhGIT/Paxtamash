type Language = "en" | "ru";
type Listener = (lang: Language) => void;

// Read persisted language (SSR-safe), default to "ru"
let currentLanguage: Language =
  typeof window !== "undefined"
    ? (localStorage.getItem("language") as Language) || "ru"
    : "ru";
const listeners: Set<Listener> = new Set();

/**
 * Normalizes language codes to supported values.
 * e.g., "ru-RU" → "ru", "en-US" → "en"
 */
export function normalizeLanguage(lang: string): Language {
  const normalized = lang.toLowerCase().split("-")[0];
  return normalized === "ru" ? "ru" : "en";
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: string): void {
  const normalized = normalizeLanguage(lang);
  if (normalized !== currentLanguage) {
    currentLanguage = normalized;
    if (typeof window !== "undefined") {
      localStorage.setItem("language", currentLanguage);
    }
    listeners.forEach((listener) => listener(currentLanguage));
  }
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
