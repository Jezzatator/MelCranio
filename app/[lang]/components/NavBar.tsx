"use client";
import { Locale } from "@/src/i18nConfig";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import LanguageSwitcher from "./LanguageSwitcher";
import { RequeteStrapi } from "@/src/strapi/Request";
import { NavBarModel } from "@/src/strapi/NavBarModel";
import { getData } from "@/src/strapi/FetchData";
import { Skeleton } from "@nextui-org/react";

export default function NavBar({ params }: { params: Locale }) {
  const router = useRouter();

  const links = [
    {
      label:
        params === "fr"
          ? "Accueil"
          : params === "de"
          ? "Startseite"
          : params === "en"
          ? "Home"
          : params === "es"
          ? "Inicio"
          : params === "ca"
          ? "Inici"
          : "Home",
      href: `/${params ? params : ""}`,
      key: 0,
    },
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
          ? "A Propos"
          : params === "de"
          ? "Über uns"
          : params === "en"
          ? "About Us"
          : params === "es"
          ? "Sobre Nosotros"
          : params === "ca"
          ? "Sobre Nosaltres"
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
    <nav className="nav px-5 pt-5 fixed top-0 w-screen bg-[var(--background)] border-b border-amber-950 z-40 font-alegreyaSans">
      <div className="flex flex-row justify-between items-center lg:h-20">
        {/* Logo */}
        <Link className="" href="/">
          Logo
        </Link>

        {/* Nav links */}
        <ul className="flex flex-wrap justify-around lg:flex-row items-center space-x-20 text-rights lg:px-10">
          <div className="hidden lg:block">
            <Suspense
              fallback={
                <Link
                  className="text-amber-950 hover:text-cyan-950 transition-colors p-1"
                  href="/"
                  key="0"
                >
                  Logo
                </Link>
              }
            >
              <Link
                className="text-amber-950 hover:text-cyan-950 transition-colors p-1"
                href={links[0].href}
                key={links[0].key}
              >
                {links[0].label}
              </Link>
            </Suspense>
          </div>
          <Suspense
            fallback={
              <div>
                {[...Array(5)].map((_, i) => (
                  <Link
                    className="text-amber-950 hover:text-cyan-950 transition-colors p-1"
                    href=""
                    key={i}
                  >
                    <Skeleton className="w-2/5 rounded-lg">
                      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                  </Link>
                ))}
              </div>
            }
          >
            {links.slice(1).map((link) => (
              <Link
                key={link.key}
                className="text-amber-950 hover:text-cyan-950 transition-colors p-1"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </Suspense>
          <LanguageSwitcher currentLocale={params} router={router} />{" "}
          {/* Pass router prop */}
        </ul>
      </div>
    </nav>
  );
}
