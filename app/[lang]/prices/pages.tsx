import React from "react";
import { NextApiResponse } from "next";
import { i18n, type Locale } from "../../../src/i18nConfig";
import { Price, Attributes } from "../../../src/strapi/Price";

async function getData(locale: Locale): Promise<any> {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  try {
    const res: Response = await fetch(
      process.env.STRAPI_URL + `tarifs?locale=${locale}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Prices({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const data: Price = await getData(lang);
  const pricesData: Attributes = data.data[0]?.attributes;

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row text-left  pb-20 px-20 py-20">
        <div className="px-5 pr-40 basis-1/2">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            {pricesData.TitreTarifs}
            {/* Tarifs */}
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {pricesData.DescTarifs}
            {/* Les tarfis peuvent changer suivant la localité, se renseinger lors
            de la prise de rendez-vous. */}
          </p>
          <ul className="text-center md:text-left mb-4 pl-20 leading-8 text-lg">
            {pricesData.PrixTarifs.map((parap) => (
              <li className="pt-2">{parap.children[0].text} </li>
            ))}
            {/* <li className="pt-2">60min / 140CHF </li>
            <li className="pt-2">90min / 210CHF </li> */}
          </ul>
        </div>
        <div className="px-5 pr-40 basis-1/2">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            {/* Si vous etes assuré en Suisse */}
            {pricesData.TitreAssurSuisse}
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {pricesData.DescAssurSuisse}

            {/* Sunt sint laboris in elit id ex lorem irure excepteur pariatur dolor
            quis do magna ad. Adipiscing sit duis occaecat consectetur ex
            reprehenderit nisi do nulla incididunt ut culpa eu lorem laborum
            culpa deserunt nulla. */}
          </p>
          {/* <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Sunt sint laboris in elit id ex lorem irure excepteur pariatur dolor
            quis do magna ad. Adipiscing sit duis occaecat consectetur ex
            reprehenderit nisi do nulla incididunt ut culpa eu lorem laborum
            culpa deserunt nulla.
          </p> */}
        </div>
      </div>
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/mains.jpg')",
        }}
      ></div>
    </div>
  );
}
