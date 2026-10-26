import React from "react";
import { type Locale } from "../../../src/i18nConfig";
import SectionTitle from "../components/SectionTitle";
import { getContent } from "@/src/content";
import MapWrapper from '../components/MapWrapper';

export default async function Lieux({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const placeData = getContent(lang).places;
  const zurich = placeData.list.find((place) => place.id === "zurich")!;

  const zurichCoords = { lat: 47.39308487944863, lng: 8.539379305049138 }; // Praxisgemeinschaft am Schaffhauserplatz

  return (
    <div className="md:px-10 md:py-10 lg:px-20 lg:py-20 mt-10">
      <div className="flex flex-row lg:m-5 pb-20">
        <div className="w-full text-left lg:px-5">
          <SectionTitle title={placeData.title} />
          <p className="text-justify md:text-left mb-4 leading-8">
            {placeData.subtitle}
          </p>

          {/* Zurich, Schaffhauserplatz */}
          <div className="pt-10 text-[#F7F0EE] md:container md:w-screen w-full">
            <div
              className="bg-cover bg-center flex z-0 md:container"
              style={{
                backgroundImage: "url('/static/schaffhauserplatz.webp')",
              }}
            >
              <div
                className="lg:basis-3/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(26,74,90,0.2)]"
                style={{ backgroundColor: "rgba(26,74,90, 0.3)" }}
              >
                <h2 className="text-xl p-4 text-left font-semibold font-alegreya italic">
                  {zurich.title}
                </h2>
                <p className="text-justify md:text-left mb-4 leading-8">
                  {zurich.description}
                </p>
                <p className="text-left mb-4 leading-8">
                  {zurich.moreInfo}
                  <a href={zurich.moreInfoUrl}>{zurich.moreInfoLabel} </a>
                </p>
                <div className="text-left mb-4 leading-8">
                  <h2 className="text-xl font-bold underline">
                    <a href={zurich.bookingUrl}>{zurich.bookingLabel}</a>
                  </h2>
                </div>

                <MapWrapper
                  key="map-zurich"
                  latitude={zurichCoords.lat}
                  longitude={zurichCoords.lng}
                  title="Praxisgemeinschaft am Schaffhauserplatz"
                  description="Schaffhauserstrasse 74, 8057 Zürich, Suisse"
                  height="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
