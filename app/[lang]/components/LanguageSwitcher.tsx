"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { i18n, Locale } from "@/src/i18nConfig";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SECTION_IDS = ["Home", "Craniosacral", "About", "Lieux", "Tarifs", "Contact"];
const NAVBAR_HEIGHT = 64;
const STORAGE_KEY = "scroll-before-locale-change";

// Mémorise la section visible et la position relative dans celle-ci,
// pour la retrouver dans l'autre langue (les textes n'ont pas la même longueur).
function saveScrollPosition() {
  let current: { id: string; ratio: number } | null = null;
  for (const id of SECTION_IDS) {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    if (rect && rect.top <= NAVBAR_HEIGHT && rect.height > 0) {
      current = { id, ratio: (NAVBAR_HEIGHT - rect.top) / rect.height };
    }
  }
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current ?? { y: window.scrollY }));
  } catch {}
}

export function restoreScrollPosition() {
  let saved: { id?: string; ratio?: number; y?: number } | null = null;
  try {
    saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {}
  if (!saved) return;
  const section = saved.id ? document.getElementById(saved.id) : null;
  const top = section
    ? section.getBoundingClientRect().top + window.scrollY + (saved.ratio ?? 0) * section.offsetHeight - NAVBAR_HEIGHT
    : saved.y ?? 0;
  window.scrollTo({ top, behavior: "instant" });
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const LanguageSwitcher = ({ currentLocale }: { currentLocale: Locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [isMenuOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Language Switcher"
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}
        className="inline-flex items-center justify-start sm:justify-center gap-2 sm:min-w-20 h-10 whitespace-nowrap transition-opacity aria-expanded:opacity-70"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {capitalizeFirstLetter(currentLocale)}
        {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isMenuOpen && (
        <ul
          role="menu"
          className="absolute left-0 sm:left-auto sm:right-0 z-50 mt-1 min-w-20 flex flex-col gap-1 p-1 backdrop-blur-xl rounded border-2"
        >
          {i18n.locales.map((locale) => (
            <li key={locale} role="none">
              <Link
                role="menuitem"
                href={"/" + locale}
                scroll={false}
                className="block px-2 py-1.5 rounded text-sm hover:opacity-70 aria-[current=true]:font-semibold"
                aria-current={locale === currentLocale}
                onClick={() => {
                  saveScrollPosition();
                  setIsMenuOpen(false);
                }}
              >
                {capitalizeFirstLetter(locale)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
