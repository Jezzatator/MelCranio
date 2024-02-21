import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const links = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "La Thérapie",
      href: "#Craniosacral",
    },
    {
      label: "À Propos",
      href: "#About",
    },
    {
      label: "Les Lieux",
      href: "#Lieux",
    },
    {
      label: "Tarifs",
      href: "#Tarifs",
    },
    {
      label: "Contact",
      href: "#Contact",
    },
  ];

  return (
    <nav className="flex space-x-8 mb-5 px-5 h-20 items-center w-full fixed top-0 bg-[var(--background)] border-b border-amber-950 z-40 font-alegreyaSans">
      <Link className="" href="/">
        Logo
      </Link>
      <ul className="flex grow justify-end space-x-20 text-rights px-10">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-amber-950 hover:text-cyan-950 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        {/* <LanguageSwitcher /> */}
      </ul>
    </nav>
  );
};

export default NavBar;
