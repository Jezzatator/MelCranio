import { Locale } from "@/src/i18nConfig";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

async function getData(locale: Locale) {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  const res = await fetch(
    process.env.STRAPI_URL + `nav-bars?locale=${locale}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data. Status: " + res.status);
  }
  return res.json();
}

export default async function NavBar({ params }: { params: Locale }) {
  const data = await getData(params);
  //const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: data.data[0].attributes.Accueil,
      href: `/${params ? params : ""}`,
    },
    {
      label: data.data[0].attributes.LaTherapie,
      href: `#Craniosacral`,
    },
    {
      label: data.data[0].attributes.APropos,
      href: `#About`,
    },
    {
      label: data.data[0].attributes.LesLieux,
      href: `#Lieux`,
    },
    {
      label: data.data[0].attributes.Tarifs,
      href: `#Tarifs`,
    },
    {
      label: data.data[0].attributes.Contact,
      href: `#Contact`,
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
        <ul className="flex flex-col justify-around lg:flex-row items-center space-x-20 text-rights lg:px-10">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-amber-950 hover:text-cyan-950 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={params} />
        </ul>
      </div>
    </nav>
  );
}
