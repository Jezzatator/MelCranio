import { NextResponse, type NextRequest } from "next/server";
import { i18n, type Locale } from "./src/i18nConfig";

// "/" redirige vers la langue préférée du navigateur (Accept-Language),
// à défaut vers la langue par défaut.
export function preferredLocale(acceptLanguage: string | null): Locale {
  const ranked = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .filter((entry) => entry.lang && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  const match = ranked.find((entry) => (i18n.locales as readonly string[]).includes(entry.lang));
  return (match?.lang as Locale) ?? i18n.defaultLocale;
}

export function proxy(request: NextRequest) {
  const locale = preferredLocale(request.headers.get("accept-language"));
  const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: "/",
};
