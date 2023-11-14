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
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-amber-900 hover:text-zinc-800 transition-colors"
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
