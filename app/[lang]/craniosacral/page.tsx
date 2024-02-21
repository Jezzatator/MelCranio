import Image from "next/image";
import React from "react";
import { NextApiResponse } from "next";
import { i18n, type Locale } from "../../../src/i18nConfig";

async function getData(locale: Locale): Promise<any> {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  try {
    const res: Response = await fetch(
      process.env.STRAPI_URL + `la-cranios?locale=${locale}`,
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

export default async function Craniosacral({ locale }: { locale: Locale }) {
  console.log("LOCALE cranio: " + locale);
  const data = await getData(locale);
  const lacranioData = data.data[0].attributes;

  return (
    <div className=" text-amber-950 pt-20">
      {/* Craniosacral introduction */}

      <div className="flex flex-row text-left  pb-20 px-20 py-20">
        <div className="px-5 pr-40 basis-1/2">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            {/* Qu&apos;est-ce que la Thérapie Craniosacrale? */}
            {lacranioData.TitleCranio}
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {/* La thérapie craniosacrale libère les tensions du corps pour
            favoriser la détente et la guérison. Elle explore la connexion
            subtile entre le crâne, la colonne vertébrale, et le sacrum. */}
            {lacranioData.sousTextTitle[0].children[0].text}
          </p>

          {/* System Explanation */}

          <h2 className="text-l p-4 text-centermd:text-left font-semibold pt-20">
            {/* Comprendre le Système Craniosacral */}
            {lacranioData.titleH2}
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {/* Découvrez le système craniosacral, un réseau délicat composé du
            crâne, de la colonne vertébrale et du sacrum. Ce système, abritant
            le fluide céphalorachidien essentiel, joue un rôle crucial dans le
            bon fonctionnement de votre corps. */}
            {lacranioData.contentTH2[0].children[0].text}
          </p>
        </div>

        <div className="px-5 pl-20 basis-1/2">
          {/* Session Details */}

          <h2 className="text-l p-4 text-centermd:text-left font-semibold">
            {/* Déroulement d&apos;une Séance de Thérapie Craniosacrale */}
            {lacranioData.titleH22}
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {/* Pendant une séance de thérapie craniosacrale, le ou la thérapeute
            utilise des techniques douces, non invasives, pour évaluer et
            améliorer le mouvement du liquide céphalorachidien. */}
            {lacranioData.contentTH22[0].children[0].text}
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {/* Cette approche délicate permet de libérer les blocages, réduire les
            tensions et restaurer la mobilité naturelle des structures
            crâniennes et vertébrales. */}
            {lacranioData.contentTH22[1].children[0].text}
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            {/* Au fil de la séance, le patient ressent souvent une profonde
            relaxation, ce qui favorise la réduction du stress et de
            l&apos;anxiété. La thérapie craniosacrale peut également aider à
            soulager les maux de tête, les douleurs physiques, et à améliorer la
            qualité du sommeil. */}
            {lacranioData.contentTH22[2].children[0].text}
          </p>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="pt-10 text-[#F7F0EE]">
        <div
          className="bg-cover bg-center flex flex-row z-0"
          style={{
            backgroundImage: "url('/static/image3.jpg')",
          }}
        >
          <div
            className="basis-1/3 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)]"
            style={{ backgroundColor: "rgba(88, 85, 84, 0.3)" }}
          >
            <ul className="text-left space-y-3 p-4 z-30">
              <h3 className="text-2xl py-8 font-alegreyaSans">
                {/* Bénéfices de la Thérapie Craniosacrale */}
                {lacranioData.beneficesTitle}
              </h3>
              <li className="px-2">
                <p className="font-semibold">
                  {/* Réduction du stress et de l&apos;anxiété : */}
                  {lacranioData.beneficesContent[0].children[0].text}
                </p>
                {/* En favorisant la relaxation, la thérapie craniosacrale contribue
                à réduire les niveaux de stress et d&apos;anxiété. */}
                {lacranioData.beneficesContent[1].children[0].text}
              </li>
              <li className="px-2">
                <p className="font-semibold">
                  {/* Amélioration du sommeil : */}
                  {lacranioData.beneficesContent[2].children[0].text}
                </p>
                {/* La détente induite par la thérapie craniosacrale peut favoriser un
                sommeil plus profond et réparateur. */}
                {lacranioData.beneficesContent[3].children[0].text}
              </li>
              <li className="px-2">
                <p className="font-semibold">
                  {/* Soulagement des maux de tête et des migraines : */}
                  {lacranioData.beneficesContent[4].children[0].text}
                </p>
                {/* En libérant les tensions au niveau du crâne, elle peut atténuer
                les maux de tête et les migraines. */}
                {lacranioData.beneficesContent[5].children[0].text}
              </li>
              <li className="px-2">
                <p className="font-semibold">
                  {/* Renforcement du système immunitaire : */}
                  {lacranioData.beneficesContent[6].children[0].text}
                </p>
                {/* En optimisant le fonctionnement du système craniosacral, cette
                approche peut contribuer à renforcer le système immunitaire. */}
                {lacranioData.beneficesContent[7].children[0].text}
              </li>
              <li className="px-2">
                <p className="font-semibold">
                  {/* Équilibre émotionnel et mental :{" "} */}
                  {lacranioData.beneficesContent[8].children[0].text}
                </p>
                {/* En libérant les tensions physiques, la thérapie craniosacrale
                peut également avoir des effets positifs sur l&apos;équilibre
                émotionnel et mental. */}
                {lacranioData.beneficesContent[9].children[0].text}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
