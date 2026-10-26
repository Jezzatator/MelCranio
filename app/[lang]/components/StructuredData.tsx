import { type Locale } from "@/src/i18nConfig";
import { getContent } from "@/src/content";
import { SITE_URL } from "@/src/site";

// Données structurées schema.org : aident Google à afficher le cabinet
// (adresse, téléphone, réseaux) dans les résultats de recherche.
export default function StructuredData({ lang }: { lang: Locale }) {
  const content = getContent(lang);
  const data = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "Mélissa Patot – Craniosacral Therapie",
    description: content.meta.description,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/static/image0.webp`,
    telephone: content.contact.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schaffhauserstrasse 74",
      postalCode: "8057",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.39308487944863,
      longitude: 8.539379305049138,
    },
    availableLanguage: ["French", "German", "English", "Spanish", "Catalan"],
    sameAs: [
      "https://www.instagram.com/mel_do_cranio",
      "https://www.linkedin.com/in/m%C3%A9lissa-patot-0895a64a/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
