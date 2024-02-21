import { useRouter } from "next/navigation";
import React from "react";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        disabled={router.locale === "en"}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        disabled={router.locale === "fr"}
      >
        French
      </button>
    </div>
  );
};

export default LanguageSwitcher;
