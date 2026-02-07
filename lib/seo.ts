export const SITE_NAME = "Kattaqo'rg'on Paxtamash";
export const SITE_URL = "https://paxtamash.uz";
export const DEFAULT_TITLE = `${SITE_NAME} - Textile Machinery`;
export const DEFAULT_DESCRIPTION =
  "Professional textile processing machinery and equipment.";
export const DEFAULT_OG_IMAGE = "/cotton_machine.png";

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? SITE_URL;

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/")) return `${SITE_URL}${path}`;
  return `${SITE_URL}/${path}`;
}

export function stripHtml(input?: string | null): string {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function toDescription(
  input?: string | null,
  fallback: string = DEFAULT_DESCRIPTION,
): string {
  const clean = stripHtml(input);
  const source = clean || fallback;
  return source.length > 160 ? `${source.slice(0, 157)}...` : source;
}
