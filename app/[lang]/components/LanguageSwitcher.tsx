import React, { useState } from "react";
import { i18n, Locale } from "@/src/i18nConfig";
import { Select, SelectItem } from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@heroui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LanguageSwitcher = ({
  currentLocale,
  router,
}: {
  currentLocale: Locale;
  router: any;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Accept router prop
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.push(`/${newLocale}`);
  };

  function capitalizeFirstLetter(string: String | Locale) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {/* <Dropdown>
        <Select
          items={i18n.locales}
          placeholder={currentLocale}
          className="max-w-xs"
          defaultSelectedKeys={currentLocale}
        >
          {i18n.locales.map((locale) => (
            <SelectItem key={locale} value={locale} href={"/" + locale}>
              {locale}
            </SelectItem>
          ))}
        </Select> */}

      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparen gap-2"
            //endContent={<FaChevronDown />}
            onClick={toggleMenu}
            radius="sm"
            variant="light"
          >
            {capitalizeFirstLetter(currentLocale)}
            {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Language Switcher"
          className="flex flex-col backdrop-blur-xl rounded border-2"
          selectionMode="single"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {i18n.locales.map((locale) => (
            <DropdownItem key={locale} value={locale} href={"/" + locale}>
              {capitalizeFirstLetter(locale)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      {/* <div>
        <form className="max-w-sm mx-auto">
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={currentLocale}
            onChange={handleChange}
          >
            {i18n.locales.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
        </form>
      </div> */}
    </>
  );
};

export default LanguageSwitcher;
