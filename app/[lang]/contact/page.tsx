import React from "react";
import { FiPhone } from "react-icons/fi";
import { type Locale } from "../../../src/i18nConfig";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { getContent } from "@/src/content";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const contact = getContent(lang).contact;

  return (
    <div className="pt-20 md:px-10 md:py-10 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title={contact.title} />

        <p className="mt-6 md:pl-5 lg:pl-10 flex items-center justify-center md:justify-start gap-3 text-lg">
          <FiPhone aria-hidden className="text-[var(--accent)]" />
          <span>{contact.phoneLabel}</span>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          >
            {contact.phone}
          </a>
        </p>

        <div className="mt-10 rounded-[40px] bg-[var(--panel)] backdrop-blur-xl p-8 md:p-12 drop-shadow-[0_35px_35px_rgba(113,97,100,0.15)]">
          <ContactForm labels={contact.form} locale={lang} />
        </div>
      </div>
    </div>
  );
}
