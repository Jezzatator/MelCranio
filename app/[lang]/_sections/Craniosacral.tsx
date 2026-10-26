import React, { Suspense } from "react";
import { type Locale } from "../../../src/i18nConfig";
import SectionTitle from "../components/SectionTitle";
import H3Title from "../components/H3Title";
import { getContent } from "@/src/content";
import { Skeleton } from "../components/Skeleton";

export default async function Craniosacral({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const lacranioData = getContent(lang).cranio;

  return (
    <div className="pt-20">
      {/* Craniosacral introduction */}

      <div className="flex flex-col lg:flex-row text-left lg:pb-20 md:px-10 md:py-10 lg:px-20 lg:py-20">
        <div className="lg:px-5 lg:pr-40 lg:w-1/2">
          <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
            <SectionTitle title={lacranioData.title} />
          </Suspense>
          <p className="text-justify lg:text-left lg:mb-4 lg:pt-5 lg:pl-10 leading-8 text-lg">
            {/* La thérapie craniosacrale libère les tensions du corps pour
            favoriser la détente et la guérison. Elle explore la connexion
            subtile entre le crâne, la colonne vertébrale, et le sacrum. */}
            <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
              {lacranioData.intro}
            </Suspense>
          </p>

          {/* System Explanation */}

          {/* Comprendre le Système Craniosacral */}
          <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
            <H3Title title={lacranioData.systemTitle} />
          </Suspense>

          <p className="text-justify lg:text-left mb-4 pt-5 lg:pl-10 leading-8 text-lg">
            {/* Découvrez le système craniosacral, un réseau délicat composé du
            crâne, de la colonne vertébrale et du sacrum. Ce système, abritant
            le fluide céphalorachidien essentiel, joue un rôle crucial dans le
            bon fonctionnement de votre corps. */}
            <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
              {lacranioData.systemText}
            </Suspense>
          </p>
        </div>

        <div className="lg:px-5 lg:pl-20 lg:w-1/2">
          {/* Session Details */}

          {/* Déroulement d&apos;une Séance de Thérapie Craniosacrale */}
          <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
            <H3Title title={lacranioData.sessionTitle} />
          </Suspense>

          <p className="text-justify lg:text-left mb-4 pt-5 lg:pl-10 leading-8 text-lg">
            {/* Pendant une séance de thérapie craniosacrale, le ou la thérapeute
            utilise des techniques douces, non invasives, pour évaluer et
            améliorer le mouvement du liquide céphalorachidien. */}
            <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
              {lacranioData.sessionParagraphs[0]}
            </Suspense>
          </p>
          <p className="text-justify lg:text-left lg:mb-4 pt-5 lg:pl-10 leading-8 text-lg">
            {/* Cette approche délicate permet de libérer les blocages, réduire les
            tensions et restaurer la mobilité naturelle des structures
            crâniennes et vertébrales. */}
            <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
              {lacranioData.sessionParagraphs[1]}
            </Suspense>
          </p>
          <p className="text-justify lg:text-left mb-4 pt-5 lg:pl-10 leading-8 text-lg">
            {/* Au fil de la séance, le patient ressent souvent une profonde
            relaxation, ce qui favorise la réduction du stress et de
            l&apos;anxiété. La thérapie craniosacrale peut également aider à
            soulager les maux de tête, les douleurs physiques, et à améliorer la
            qualité du sommeil. */}
            <Suspense fallback={<Skeleton className="h-3 w-3/5 rounded-lg" />}>
              {lacranioData.sessionParagraphs[2]}
            </Suspense>
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pt-10 text-[#F7F0EE]">
        <div
          className="bg-cover bg-center flex flex-row z-0"
          style={{
            backgroundImage: "url('/static/image3.webp')",
          }}
        >
          <div
            className="lg:basis-1/3 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)]"
            style={{ backgroundColor: "rgba(88, 85, 84, 0.3)" }}
          >
            <ul className="text-left space-y-3 p-4 z-30">
              {/* Bénéfices de la Thérapie Craniosacrale */}
              <Suspense fallback={<H3Title title={"Loading..."} />}>
                <H3Title title={lacranioData.benefitsTitle} />
              </Suspense>
              <Suspense
                fallback={
                  <li className="px-2" key="0">
                    <p className="font-semibold">Loading...</p>
                    Loading...
                  </li>
                }
              >
                <li className="px-2" key="0">
                  <p className="font-semibold">
                    {/* Réduction du stress et de l&apos;anxiété : */}
                    {lacranioData.benefits[0].title}
                  </p>

                  {/* En favorisant la relaxation, la thérapie craniosacrale contribue
                à réduire les niveaux de stress et d&apos;anxiété. */}
                  {lacranioData.benefits[0].text}
                </li>
              </Suspense>

              <Suspense
                fallback={
                  <li className="px-2" key="1">
                    <p className="font-semibold">Loading...</p>
                    Loading...
                  </li>
                }
              >
                <li className="px-2" key="1">
                  <p className="font-semibold">
                    {/* Amélioration du sommeil : */}
                    {lacranioData.benefits[1].title}
                  </p>
                  {/* La détente induite par la thérapie craniosacrale peut favoriser un
                sommeil plus profond et réparateur. */}
                  {lacranioData.benefits[1].text}
                </li>
              </Suspense>

              <Suspense
                fallback={
                  <li className="px-2" key="2">
                    <p className="font-semibold">Loading...</p>
                    Loading...
                  </li>
                }
              >
                <li className="px-2" key="2">
                  <p className="font-semibold">
                    {/* Soulagement des maux de tête et des migraines : */}
                    {lacranioData.benefits[2].title}
                  </p>
                  {/* En libérant les tensions au niveau du crâne, elle peut atténuer
                les maux de tête et les migraines. */}
                  {lacranioData.benefits[2].text}
                </li>
              </Suspense>

              <Suspense
                fallback={
                  <li className="px-2" key="3">
                    <p className="font-semibold">Loading...</p>
                    Loading...
                  </li>
                }
              >
                <li className="px-2" key="3">
                  <p className="font-semibold">
                    {/* Renforcement du système immunitaire : */}
                    {lacranioData.benefits[3].title}
                  </p>
                  {/* En optimisant le fonctionnement du système craniosacral, cette
                approche peut contribuer à renforcer le système immunitaire. */}
                  {lacranioData.benefits[3].text}
                </li>
              </Suspense>

              <Suspense
                fallback={
                  <li className="px-2" key="4">
                    <p className="font-semibold">Loading...</p>
                    Loading...
                  </li>
                }
              >
                <li className="px-2" key="4">
                  <p className="font-semibold">
                    {/* Équilibre émotionnel et mental : */}
                    {lacranioData.benefits[4].title}
                  </p>
                  {/* En libérant les tensions physiques, la thérapie craniosacrale
                peut également avoir des effets positifs sur l&apos;équilibre
                émotionnel et mental. */}
                  {lacranioData.benefits[4].text}
                </li>
              </Suspense>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
