type Language = "en" | "ru";
type Listener = (lang: Language) => void;

let currentLanguage: Language = "en";
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
    listeners.forEach((listener) => listener(currentLanguage));
  }
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
