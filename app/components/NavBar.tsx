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
      href: "/about",
    },
    {
      label: "La Craniosacral",
      href: "/craniosacral",
    },
    {
      label: "Le Lieux",
      href: "/lieux",
    },
    {
      label: "Prendre rendez-vous",
      href: "/rendezvous",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex space-x-8 mb-5 px-5 h-20 items-center">
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
