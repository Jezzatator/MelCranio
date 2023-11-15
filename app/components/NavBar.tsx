import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "À Propos",
      href: "#About",
    },
    {
      label: "La Craniosacral",
      href: "#Craniosacral",
    },
    {
      label: "Le Lieux",
      href: "#Lieux",
    },
    {
      label: "Prendre rendez-vous",
      href: "#Rendezvous",
    },
    {
      label: "Contact",
      href: "#Contact",
    },
  ];

  return (
    <nav className="flex space-x-8 mb-5 px-5 h-20 items-center w-full fixed top-0 bg-[var(--background)] border-b border-amber-950">
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
      </ul>
    </nav>
  );
};

export default NavBar;
