import About from "./about/page";
import Contact from "./contact/page";
import Craniosacral from "./craniosacral/page";
import "./frontpage.css";
import Lieux from "./places/page";
import Prices from "./prices/pages";
import { Locale } from "../../src/i18nConfig";
import { HomeModel } from "@/src/strapi/Home";
import { RequeteStrapi } from "@/src/strapi/Request";
import { getData } from "@/src/strapi/FetchData";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/skeleton";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const request: RequeteStrapi<HomeModel> = {
    endpoint: "homes",
  };
  const data = await getData(request, lang);
  console.log("Home locale: " + lang);
  console.log("Home data: " + data);
  return (
    <section className="px-5 pt-60 lg:px-20 lg:pt-80 text-amber-950 mt-20 pb-10">
      <div
        className="flex flew-row mb-80 items-stretch lg:content-around"
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
              {data.data[0].attributes.subNameFirstCard}
            </h2>
          </Suspense>
        </div>
        {/* Conditionally render the image based on screen width */}

        {/* Masquer l'image sur les appareils mobiles */}
        <Suspense
          fallback={
            <div className="hidden lg:block p-5 bg-cover rounded-[122px] drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)] h-96 lg:basis-2/5 lg:mr-52">
              <Skeleton className="rounded-full w-96 h-96 lg:basis-2/5 lg:mr-52" />
            </div>
          }
        >
          <div
            className="hidden lg:block p-5 bg-cover rounded-[122px] drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)] h-96 lg:basis-2/5 lg:mr-52"
            style={{ backgroundImage: "url('/static/image0.webp')" }}
          ></div>
        </Suspense>
      </div>
      <div id="Craniosacral">
        <Craniosacral
          params={{
            lang: lang,
          }}
        />
      </div>
      <div id="About">
        <About
          params={{
            lang: lang,
          }}
        />
      </div>
      <div id="Lieux">
        <Lieux
          params={{
            lang: lang,
          }}
        />
      </div>
      <div id="Tarifs">
        <Prices
          params={{
            lang: lang,
          }}
        />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </section>
  );
}
