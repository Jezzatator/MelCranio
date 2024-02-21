export const i18n = {
  defaultLocale: 'fr',
  locales: ["de", "fr", "en", "es", "ca"],
  localePrefix: "as-needed",
} as const;

export type Locale = (typeof i18n)["locales"][number];