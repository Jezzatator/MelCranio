"use client";
import React from "react";
import { i18n, Locale } from "@/src/i18nConfig";
import { useRouter } from "next/navigation";

const LanguageSwitcher = ({ currentLocale }: { currentLocale: Locale }) => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(`/${newLocale}`);
  };
  return (
    <div>
      <select
        id="language-select"
        className="text-amber-950 hover:text-cyan-950 transition-colors bg-transparent outline-none rounded-md p-2"
        value={currentLocale}
        onChange={handleChange}
      >
        <option key={currentLocale} value={currentLocale}>
          {currentLocale}
        </option>
        {i18n.locales.map(
          (locale) =>
            locale !== currentLocale && (
              <option key={locale} value={locale}>
                {locale}
              </option>
            )
        )}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
