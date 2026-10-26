import React from "react";
import { type Locale } from "../../../src/i18nConfig";
import SectionTitle from "../components/SectionTitle";
import { getContent } from "@/src/content";

export default async function About({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const aboutData = getContent(lang).about;
  const [lead, ...paragraphs] = aboutData.paragraphs;

  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 md:px-10 md:py-10 lg:px-20 lg:py-20">
        {/* Récit */}
        <div className="lg:col-span-7 lg:px-5">
          <SectionTitle title={aboutData.title} />

          <p className="mt-8 md:ml-5 lg:ml-10 pl-5 border-l-2 border-[var(--accent)] font-alegreya italic text-lg md:text-xl leading-8 md:leading-9">
            {lead}
          </p>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-justify md:text-left pt-5 md:pl-5 lg:pl-10 leading-8 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Formations */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 rounded-[40px] bg-[var(--panel)] backdrop-blur-xl p-8 md:p-10 drop-shadow-[0_35px_35px_rgba(113,97,100,0.15)]">
            <h3 className="text-2xl font-semibold font-alegreya italic mb-8">
              {aboutData.trainingTitle}
            </h3>

            <ol className="relative border-l border-[var(--line)] ml-2 space-y-7">
              {aboutData.training.map((item, index) => (
                <li key={index} className="relative pl-7">
                  <span
                    aria-hidden
                    className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]"
                  />
                  <p className="font-alegreya italic text-lg leading-none text-[var(--accent)]">
                    {item.year}
                  </p>
                  <p className="mt-1.5 font-semibold leading-snug">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 opacity-75">
                    {item.school} · {item.place}
                    {item.units && (
                      <>
                        {" "}· {item.units} {aboutData.unitsLabel}
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
