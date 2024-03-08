import React from "react";
import { type Locale } from "../../../src/i18nConfig";
import { Price, Attributes } from "../../../src/strapi/Price";
import SectionTitle from "../components/SectionTitle";
import { getData } from "@/src/strapi/FetchData";
import { RequeteStrapi } from "@/src/strapi/Request";

export default async function Prices({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const request: RequeteStrapi<Price> = {
    endpoint: "tarifs",
  };
  const data = await getData(request, lang);
  const pricesData: Attributes = data.data[0]?.attributes;

  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row text-left  pb-20 px-20 py-20">
        <div className="px-5 pr-40 basis-1/2">
          <SectionTitle title={pricesData.TitreTarifs} />
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {pricesData.DescTarifs}
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
          <SectionTitle title={pricesData.TitreAssurSuisse} />
          {pricesData.DescAssurSuiss &&
            pricesData.DescAssurSuiss.map((parap) => {
              const linkObject = parap.children.find(
                (child) => child.type === "link"
              );
              return (
                <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
                  {parap.children.map((child, index) =>
                    child.type === "text" ? (
                      <React.Fragment key={index}>
                        {child.text}
                        {index < parap.children.length - 1 && " "}
                      </React.Fragment>
                    ) : null
                  )}
                  {linkObject && (
                    <a href={linkObject.url}>{linkObject.children?.[0].text}</a>
                  )}
                </p>
              );
            })}

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
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/mains.jpg')",
        }}
      ></div>
    </div>
  );
}
