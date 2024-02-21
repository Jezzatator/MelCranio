// "use client";
import About from "../about/page";
import Contact from "../contact/page";
import Craniosacral from "../craniosacral/page";
import "./frontpage.css";
import Lieux from "../places/page";
import { NextApiResponse } from "next";
import Prices from "../prices/pages";
import { useRouter } from "next/router";
import { Locale } from "../../src/i18nConfig";

async function getData(locale: string | string[]) {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  const res = await fetch(process.env.STRAPI_URL + `homes?locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data. Status: " + res.status);
  }
  return res.json();
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  //const wrappedLocale = lang == "undefinedhomes" ? "en" : lang;
  const data = await getData(lang);
  console.log("Home locale: " + lang);
  console.log("Home data: " + data);
  return (
    <section className="px-20 pt-80 text-amber-950 mt-20 pb-10 ">
      <div
        className="flex flew-row mb-80 items-stretch content-around"
        id="Home"
      >
        <div className="basis-2/3">
          <h1 className="uppercase text-8xl py-10 font-alegreyaSans">
            Mélissa Patot
          </h1>
          <h2 className="text-xl pl-2 font-alegreyaSans">
            {/* Kinésithérapeute spécialisé en thérapie craniosacrale */}
            {data.data[0].attributes.subNameFirstCard}
          </h2>
        </div>
        <div
          className="p-5 bg-cover rounded-[122px] drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)] h-96 basis-2/5 mr-52"
          style={{
            backgroundImage: "url('/static/image0.jpeg')",
          }}
        ></div>
      </div>
      {/* <div id="Craniosacral">
        <Craniosacral locale={lang} />
      </div> */}
      {/* <div id="About">
        <About locale={locale} />
      </div> */}
      <div id="Lieux">
        <Lieux />
      </div>
      <div id="Tarifs">
        <Prices />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </section>
  );
}
