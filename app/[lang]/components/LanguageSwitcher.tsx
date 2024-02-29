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
      <form className="max-w-sm mx-auto">
        {/* <label for="underline_select" className="sr-only">
          Underline select
        </label> */}
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={currentLocale}
          onChange={handleChange}
        >
          <option key={currentLocale} value={currentLocale} selected>
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
      </form>
    </div>
  );
};

export default LanguageSwitcher;
