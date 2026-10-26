import { i18n, type Locale } from "./i18nConfig";

export const SITE_URL = "https://www.melissa-cranio.com";

export const OG_LOCALES: Record<Locale, string> = {
  fr: "fr_CH",
  en: "en_US",
  de: "de_CH",
  es: "es_ES",
  ca: "ca_ES",
};

// hreflang : chaque langue pointe vers sa version, "/" sert de choix par défaut
export function languageAlternates(): Record<string, string> {
  return {
    ...Object.fromEntries(i18n.locales.map((locale) => [locale, `/${locale}`])),
    "x-default": "/",
  };
}
