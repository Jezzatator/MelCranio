import type { MetadataRoute } from "next";
import { i18n } from "@/src/i18nConfig";
import { SITE_URL } from "@/src/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    i18n.locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
  );
  return i18n.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
    alternates: { languages },
  }));
}
