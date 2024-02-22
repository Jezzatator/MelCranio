import { Locale } from "@/src/i18nConfig";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = ({ params }: { params: Locale }) => {
  const links = [
    {
      label: "Accueil",
      href: `/${params ? params : ""}`,
    },
    {
      label: "La Thérapie",
      href: `#Craniosacral`,
    },
    {
      label: "À Propos",
      href: `#About`,
    },
    {
      label: "Les Lieux",
      href: `#Lieux`,
    },
    {
      label: "Tarifs",
      href: `#Tarifs`,
    },
    {
      label: "Contact",
      href: `#Contact`,
    },
  ];

  return (
    <nav className="flex justify-between items-center h-20 px-5 fixed top-0 w-full bg-[var(--background)] border-b border-amber-950 z-40 font-alegreyaSans">
      <Link className="" href="/">
        Logo
      </Link>
      <ul className="flex items-center space-x-20 text-rights px-10">
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
    </nav>
  );
};

export default NavBar;
