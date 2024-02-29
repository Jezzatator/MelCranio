import React from "react";
import Timeline from "../components/TimeLine";
import { NextApiResponse } from "next";
import { Content } from "next/font/google";
import { i18n, type Locale } from "../../../src/i18nConfig";
import { AboutModel, Attributes } from "../../../src/strapi/About";

async function getData(locale: Locale): Promise<any> {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  try {
    const res: Response = await fetch(
      process.env.STRAPI_URL + `abouts?locale=${locale}`,
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

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("LOCALE about: " + lang);
  const data: AboutModel = await getData(lang);

  console.log("Data about en: " + data.data[0]);

  const aboutData: Attributes = data.data[0]?.attributes;

  return (
    <div className="pt-20">
      {/* <div className="flex flex-row m-5 pb-20 pt-20 px-20 py-20 text-amber-950 mt-10"></div> */}
      <div className="text-left flex flex-row Deuxieme Card Parcourd px-20 py-20">
        <div className=" px-5 basis-2/3">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans mb-10">
            {/* À Propos de Moi */}
            {data.data[0]?.attributes.TitleAbout}
          </h2>

          {data.data[0]?.attributes.Content.map(
            (
              paragraph: {
                children: {
                  text:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined;
                }[];
              },
              index: React.Key | null | undefined
            ) => (
              <p
                key={index}
                className="text-center md:text-left mb-5 pt-5 pl-10 leading-loose text-lg"
              >
                {paragraph.children[0].text}
              </p>
            )
          )}

          {/* <p className="text-center md:text-left mb-5 pt-5 pl-10 leading-loose text-lg">
            Après avoir terminé mes études de physiothérapie à Gérone (Espagne),
            j&apos;ai découvert que dans les études de physiothérapie, nous ne
            sommes pas préparés de manière optimale au stress mental ou
            émotionnel du patient. En conséquence, j’ai été attiré par la
            thérapie cranio-sacré car cette méthode se concentre sur le lien
            direct entre l’état émotionnel et les symptômes physiques.
          </p>
          <p className="text-center md:text-left mb-5 pt-5 pl-10 leading-loose text-lg">
            J&apos;ai suivi le cours de base cranio-sacré à l&apos;Académie
            internationale cranio-sacrée ICSA à Salzbourg (Autriche). Je me
            spécialise dans la thérapie viscérale cranio-sacré, qui est très
            utile pour les patients souffrant de maux de dos chroniques et peu
            clairs et qui peut très bien être intégrée à la physiothérapie.
          </p>
          <p className="text-center md:text-left mb-5 pt-5 pl-10 leading-loose text-lg">
            Lorsque j&apos;ai émigré en Suisse en Juillet 2020, il était clair
            pour moi que je devais obtenir le certificat industriel Oda KT.
            C&apos;est pourquoi j&apos;ai pu approfondir mes connaissances sur
            cette méthode. J&apos;ai approfondi, notamment dans des techniques
            spécifiques, telles que le nerf crânien, le soutien pendant la
            grossesse et l&apos;engagement social au Colorado Institute et à
            l&apos;Apamed (Zurich/Jona).
          </p>
          <p className="text-center md:text-left mb-5 pt-5 pl-10 leading-loose text-lg">
            Ces techniques apprises élargissent mes compétences
            professionnelles, par exemple en matière de migraines,
            d&apos;acouphènes, d&apos;épuisement professionnel, de TDAH et bien
            plus encore.
          </p> */}
        </div>
        <div className="p-5 basis-2/3">
          <Timeline
            params={{
              data: aboutData,
            }}
          />
        </div>
      </div>
    </div>
  );
}
