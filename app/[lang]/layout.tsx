import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={lang}>
      <body className={inter.className}>
        <NavBar params={lang} />
        <main className="font-robotoFlex">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
