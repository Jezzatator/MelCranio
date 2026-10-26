import React, { Suspense } from "react";
import { type Locale } from "../../../src/i18nConfig";
import SectionTitle from "../components/SectionTitle";
import { getContent } from "@/src/content";
import { Skeleton } from "@heroui/react";

export default async function Prices({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const pricesData = getContent(lang).prices;

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col lg:flex-row text-justify pb-20 md:px-10 md:py-10 lg:px-20 lg:py-20">
        <div className="lg:px-5 lg:pr-40 lg:basis-1/2">
          <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
            <SectionTitle title={pricesData.title} />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
            <p className="text-justify md:text-left mb-4 pt-5 md:pl-5 lg:pl-10 leading-8 text-lg">
              {pricesData.description}
            </p>
          </Suspense>

          <Suspense
            fallback={
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
              </div>
            }
          >
            <ul className="text-justify md:text-left mb-4 pl-10 lg:pl-20 leading-8 text-lg">
              {pricesData.items.map((item, index) => (
                <li className="pt-2" key={index}>
                  {item}
                </li>
              ))}
              {/* <li className="pt-2">60min / 140CHF </li>
            <li className="pt-2">90min / 210CHF </li> */}
            </ul>
          </Suspense>
        </div>
        <div className="md:px-5 lg:pr-40 lg:basis-1/2">
          <SectionTitle title={pricesData.insuranceTitle} />
          {pricesData.insurance.map((paragraph, index) => (
            <p key={index} className="text-justify md:text-left mb-4 pt-5 lg:pl-10 leading-8 text-lg">
              {paragraph.text}
              {paragraph.link && (
                <a href={paragraph.link.url}>{paragraph.link.label}</a>
              )}
            </p>
          ))}

          {/* 3 paragrpahes 1 payeur privé 2 Assurance 3 Assos */}
          {/* <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Sunt sint laboris in elit id ex lorem irure excepteur pariatur dolor
            quis do magna ad. Adipiscing sit duis occaecat consectetur ex
            reprehenderit nisi do nulla incididunt ut culpa eu lorem laborum
            culpa deserunt nulla.
          </p> */}
        </div>
      </div>
      <div
        className="w-full h-96 bg-cover bg-center lg:bg-no-repeat"
        style={{
          backgroundImage: "url('/static/mainsmobile.webp')",
        }}
      >
        {/* Contenu affiché uniquement sur les écrans larges */}
        <div
          className="hidden lg:block bg-cover bg-center w-full h-96"
          style={{
            backgroundImage: "url('/static/mains.webp')",
          }}
        ></div>
      </div>
    </div>
  );
}
