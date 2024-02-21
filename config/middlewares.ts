module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// import { i18nRouter } from "next-i18n-router";
// import i18n from "./src i18n.js";

// export function middleware(request) {
//   return i18nRouter(request, i18n);
// }

// // applies this middleware only to files in the app directory
// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };





// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// import { i18n } from "../src/i18nConfig";

// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales;

//   // Use negotiator and intl-localematcher to get best locale
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   );

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);

//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
//   // // If you have one
//   // if (
//   //   [
//   //     '/manifest.json',
//   //     '/favicon.ico',
//   //     // Your other files in `public`
//   //   ].includes(pathname)
//   // )
//   //   return

//   // Check if there is any supported locale in the pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     const redirectLocale = locale || i18n.defaultLocale;

//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${redirectLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url
//       )
//     );
//   }
// }

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ['/', '/(fr|de|en|es|ca)/:path*'],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../src/i18nConfig";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supportedLocales = i18n.locales;

  // Si l'URL ne contient pas de locale, rediriger vers la locale par défaut
  if (!pathname.match(/^\/(fr|es|en|ca|de)\b/)) {
    const defaultLocale = i18n.defaultLocale;
    return NextResponse.redirect(`/${defaultLocale}${pathname}`);
  }

  // Sinon, laisser passer la requête
  return NextResponse.next();
}

export const config = {
  // Matcher pour ignorer les chemins internes (_next)
  matcher: ['/((?!_next).*)'],
};
