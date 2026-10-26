import About from "./_sections/About";
import Contact from "./_sections/Contact";
import Craniosacral from "./_sections/Craniosacral";
import Lieux from "./_sections/Places";
import Prices from "./_sections/Prices";
import { Locale } from "../../src/i18nConfig";
import { getContent } from "@/src/content";
import { Suspense } from "react";
import Image from "next/image";
import heroImage from "@/public/static/image0.webp";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const content = getContent(lang);
  return (
    <section className="px-5 pt-40 md:pt-60 lg:px-20 lg:pt-80 lg:mt-20 pb-10">
      <div
        className="flex flew-row sm:mb-6 mb:mb-10 lg:mb-20 items-stretch lg:content-around gap-10 h-[360px] md:h-[720px]"
        id="Home"
      >
        <div className="lg:basis-2/3">
          <Suspense
            fallback={
              <>
                <h1 className="uppercase text-7xl md:text-8xl py-10 font-alegreya ">
                  Mélissa Patot
                </h1>
                <h2 className="text-l md:text-xl pl-2 font-alegreya">
                  Loading...
                </h2>
              </>
            }
          >
            <h1 className="uppercase text-7xl md:text-8xl py-10 font-alegreya ">
              Mélissa Patot
            </h1>
            <h2 className="text-l md:text-xl pl-2 font-alegreya">
              {/* Kinésithérapeute spécialisé en thérapie craniosacrale */}
              {content.home.subtitle}
            </h2>
          </Suspense>
        </div>
        {/* Conditionally render the image based on screen width */}

        {/* Masquer l'image sur les appareils mobiles */}
        <div className="hidden lg:block relative lg:aspect-[4/3] overflow-hidden rounded-[122px] drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)] h-96 lg:basis-2/5 lg:mr-auto">
          <Image
            src={heroImage}
            alt="Mélissa Patot"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 40vw, 1px"
            className="object-cover"
          />
        </div>
      </div>
      <div id="Craniosacral">
        <Craniosacral params={Promise.resolve({ lang })} />
      </div>
      <div id="About">
        <About params={Promise.resolve({ lang })} />
      </div>
      <div id="Lieux">
        <Lieux params={Promise.resolve({ lang })} />
      </div>
      <div id="Tarifs">
        <Prices params={Promise.resolve({ lang })} />
      </div>
      <div id="Contact">
        <Contact params={Promise.resolve({ lang })} />
      </div>
    </section>
  );
}
