"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
} from "@nextui-org/react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Locale } from "@/src/i18nConfig";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import LanguageSwitcher from "./LanguageSwitcher";
import { RequeteStrapi } from "@/src/strapi/Request";
import { NavBarModel } from "@/src/strapi/NavBarModel";
import { getData } from "@/src/strapi/FetchData";
import { Skeleton } from "@nextui-org/react";
import { IconContext } from "react-icons/lib";
import Icon from "@/app/MelissaCranioLogo";
import MelissaCranioLogo from "@/app/MelissaCranioLogo";

export default function NavBar({ params }: { params: Locale }) {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      shouldHideOnScroll
      className="backdrop-blur-xl md:h-12 lg:h-16 text-amber-950 font-robotoFlex flex-grow justify-around"
      position="sticky"
    >
      <NavbarContent className="sm:hidden justify-start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="h-full w-10"
          icon={
            isMenuOpen ? (
              <RxCross2 className="w-auto h-10" />
            ) : (
              <IoMdMenu className="w-auto h-10" />
            )
          }
        />
      </NavbarContent>

      <NavbarContent className="justify-between sm:flex sm:justify-end">
        <NavbarBrand>
          <MelissaCranioLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 sm:flex-row justify-end">
        {links.map((link) => (
          <NavbarItem key={`${link.key}`} className=" md:px-2 lg:px-5">
            <Link
              color={"primary"}
              className="w-full text-lg hover:text-foreground-highlight"
              href={link.href}
              size="lg"
              underline="hover"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LanguageSwitcher currentLocale={params} router={router} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={`${link.label}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={link.href}
              size="lg"
              underline="hover"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem key={66}>
          <LanguageSwitcher currentLocale={params} router={router} />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
// return (
//   <Navbar
//     isBordered
//     isMenuOpen={isMenuOpen}
//     onMenuOpenChange={setIsMenuOpen}
//     shouldHideOnScroll
//     className="sm:hidden backdrop-blur-xl"
//     position="sticky"
//   >
//     <NavbarContent>
//       <NavbarBrand>Logo</NavbarBrand>
//       <NavbarMenuToggle
//         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//       />
//     </NavbarContent>

//     <NavbarMenu>
//       {links.map((link) => (
//         <NavbarMenuItem key={link.key}>
//           <Link href={link.href}>{link.label}</Link>
//         </NavbarMenuItem>
//       ))}
//     </NavbarMenu>
//   </Navbar>
// );
// }
