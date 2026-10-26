import type { Metadata } from "next";
import { Alegreya, Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorReporter from "./components/ErrorReporter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { i18n, type Locale } from "../../src/i18nConfig";
import { getContent } from "@/src/content";
import { SITE_URL, OG_LOCALES, languageAlternates } from "@/src/site";
import StructuredData from "./components/StructuredData";

export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const { meta } = getContent(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "Mélissa Patot",
      title: meta.title,
      description: meta.description,
      locale: OG_LOCALES[lang],
      alternateLocale: i18n.locales.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
      images: [{ url: "/static/image0.webp", alt: "Mélissa Patot" }],
    },
  };
}

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Locale;  
  return (
    <html lang={lang} className={`${robotoFlex.variable} ${alegreya.variable}`}>
      <body className="font-robotoFlex">
        <ErrorReporter />
        <StructuredData lang={lang} />
        <NavBar params={lang} />
        <main className="font-robotoFlex">{children}</main>
        <Footer lang={lang} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
