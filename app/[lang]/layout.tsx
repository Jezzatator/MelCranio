import type { Metadata } from "next";
import { Alegreya, Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { i18n, type Locale } from "../../src/i18nConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Melissa Cranio",
  description: "Physiotherapeutin spezialisiert auf craniosacrale Therapie",
};

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
        <NavBar params={lang} />
        <main className="font-robotoFlex">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
