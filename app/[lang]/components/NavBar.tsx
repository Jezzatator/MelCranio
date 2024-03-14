import { Locale } from "@/src/i18nConfig";
import Link from "next/link";
import React, { Suspense } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { RequeteStrapi } from "@/src/strapi/Request";
import { NavBarModel } from "@/src/strapi/NavBarModel";
import { getData } from "@/src/strapi/FetchData";
import { Skeleton } from "@nextui-org/react";

export default async function NavBar({ params }: { params: Locale }) {
  const request: RequeteStrapi<NavBarModel> = {
    endpoint: "nav-bars",
  };
  const data = await getData(request, params);

  const links = [
    {
      label: data.data[0].attributes.Accueil,
      href: `/${params ? params : ""}`,
      key: 0,
    },
    {
      label: data.data[0].attributes.LaTherapie,
      href: `#Craniosacral`,
      key: 1,
    },
    {
      label: data.data[0].attributes.APropos,
      href: `#About`,
      key: 2,
    },
    {
      label: data.data[0].attributes.LesLieux,
      href: `#Lieux`,
      key: 3,
    },
    {
      label: data.data[0].attributes.Tarifs,
      href: `#Tarifs`,
      key: 4,
    },
    {
      label: data.data[0].attributes.Contact,
      href: `#Contact`,
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
          <LanguageSwitcher currentLocale={params} />
        </ul>
      </div>
    </nav>
  );
}
