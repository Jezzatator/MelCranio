import About from "./about/page";
import Craniosacral from "./craniosacral/page";
import "./frontpage.css";
import Lieux from "./places/page";
import { NextApiResponse } from "next";

async function getData(): Promise<any> {
  const apiKey = "Bearer " + process.env.FULL_ACCESS_KEY;

  try {
    const res: Response = await fetch(
      "https://mel-cranio-jeremiepatot.koyeb.app/api/homes?locale=ca",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const data = await getData();
  console.log(data.data[0].attributes.subNameFirstCard);

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
      <div id="Craniosacral">
        <Craniosacral />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Lieux">
        <Lieux />
      </div>
    </div>
  );
}
