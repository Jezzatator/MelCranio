"use client";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Locale } from "@/src/i18nConfig";
import React, { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import MelissaCranioLogo from "@/app/MelissaCranioLogo";

export default function NavBar({ params }: { params: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Masque la barre quand on descend, la réaffiche quand on remonte
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > lastY && y > 64);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    // {
    //   label:
    //     params === "fr"
    //       ? "Accueil"
    //       : params === "de"
    //       ? "Startseite"
    //       : params === "en"
    //       ? "Home"
    //       : params === "es"
    //       ? "Inicio"
    //       : params === "ca"
    //       ? "Inici"
    //       : "Home",
    //   href: `/${params ? params : ""}`,
    //   key: 0,
    // },
    {
      label:
        params === "fr"
          ? "La Thérapie"
          : params === "de"
          ? "Die Therapie"
          : params === "en"
          ? "Therapy"
          : params === "es"
          ? "Terapia"
          : params === "ca"
          ? "Teràpia"
          : "La Thérapie",
      href: "#Craniosacral",
      key: 1,
    },
    {
      label:
        params === "fr"
          ? "À Propos"
          : params === "de"
          ? "Über"
          : params === "en"
          ? "About"
          : params === "es"
          ? "Sobre"
          : params === "ca"
          ? "Sobre"
          : "A Propos",
      href: "#About",
      key: 2,
    },
    {
      label:
        params === "fr"
          ? "Les Lieux"
          : params === "de"
          ? "Orte"
          : params === "en"
          ? "Locations"
          : params === "es"
          ? "Lugares"
          : params === "ca"
          ? "Llocs"
          : "Les Lieux",
      href: "#Lieux",
      key: 3,
    },
    {
      label:
        params === "fr"
          ? "Tarifs"
          : params === "de"
          ? "Preise"
          : params === "en"
          ? "Rates"
          : params === "es"
          ? "Tarifas"
          : params === "ca"
          ? "Tarifes"
          : "Tarifs",
      href: "#Tarifs",
      key: 4,
    },
    {
      label:
        params === "fr"
          ? "Contact"
          : params === "de"
          ? "Kontakt"
          : params === "en"
          ? "Contact"
          : params === "es"
          ? "Contacto"
          : params === "ca"
          ? "Contacte"
          : "Contact",
      href: "#Contact",
      key: 5,
    },
  ];

  return (
    <nav
      data-menu-open={isMenuOpen}
      className={`flex z-40 w-full items-center justify-around sticky top-0 inset-x-0 border-b data-[menu-open=true]:border-none backdrop-blur-xl backdrop-saturate-150 font-robotoFlex transition-transform duration-300 ${
        isHidden && !isMenuOpen ? "-translate-y-full" : ""
      }`}
    >
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-16 max-w-[1024px]">
        <div className="flex sm:hidden h-full items-center">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center h-full w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RxCross2 className="w-auto h-10" />
            ) : (
              <IoMdMenu className="w-auto h-10" />
            )}
          </button>
        </div>

        <div className="flex flex-grow basis-0 items-center justify-center sm:flex-grow-0 sm:basis-auto sm:justify-start">
          <MelissaCranioLogo />
        </div>
        <div className="sm:hidden w-10" aria-hidden />

        <ul className="hidden sm:flex h-full gap-4 flex-row flex-nowrap items-center justify-end">
          {links.map((link) => (
            <li key={link.key} className="whitespace-nowrap md:px-2 lg:px-5">
              <a
                className="text-lg underline-offset-4 hover:underline hover:opacity-80 transition-opacity"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher currentLocale={params} />
          </li>
        </ul>
      </header>

      {isMenuOpen && (
        <ul className="sm:hidden fixed inset-x-0 top-16 bottom-0 z-30 h-[calc(100dvh-4rem)] flex flex-col gap-4 px-6 pt-4 overflow-y-auto bg-[var(--background)]">
          {links.map((link) => (
            <li key={link.key} className="text-lg">
              <a
                className="block w-full underline-offset-4 hover:underline"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher currentLocale={params} />
          </li>
        </ul>
      )}
    </nav>
  );
}
