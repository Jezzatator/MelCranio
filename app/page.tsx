import About from "./about/page";
import Craniosacral from "./craniosacral/page";
import "./frontpage.css";
import Lieux from "./places/page";
import { NextApiResponse } from "next";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

async function Home() {
  const data = await getData();

  return (
    <div className="px-20 py-80 text-amber-950 mt-20 ">
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
      <div id="Craniosacral">{/* <Craniosacral /> */}</div>
      <div id="About">
        <About />
      </div>
      <div id="Lieux">
        <Lieux />
      </div>
    </div>
  );
}

async function getData() {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  const res = await fetch(
    "https://mel-cranio-jeremiepatot.koyeb.app/api/homes?locale=fr",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data. Status: ${response.status}");
  }

  return res.json();
}

export default Home;
