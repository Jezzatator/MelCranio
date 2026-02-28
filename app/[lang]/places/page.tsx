import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import { type Locale } from "../../../src/i18nConfig";
import { Place } from "../../../src/strapi/Place";
import SectionTitle from "../components/SectionTitle";
import { RequeteStrapi } from "@/src/strapi/Request";
import { getData } from "@/src/strapi/FetchData";
import MapWrapper from '../components/MapWrapper';

export default async function Lieux({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const request: RequeteStrapi<Place> = {
    endpoint: "lieuxes",
  };

  const data = await getData(request, lang);
  const placeData = data.data[0]?.attributes;
  
  const lieu1Coords = { lat: 47.39308487944863, lng: 8.539379305049138 }; // Praxisgemeinschaft am Schaffhauserplatz
  const lieu2Coords = { lat: 47.37255416947067, lng: 8.519786986186356 }; // Colorado Cranial Institute, Future Health GmbH
  
  return (
    <div className="md:px-10 md:py-10 lg:px-20 lg:py-20 text-amber-950 mt-10">
      <div className="flex flex-row lg:m-5 pb-20">
        <div className="w-full text-left lg:px-5">
          <Suspense
            fallback={
              <>
                <SectionTitle title="Loading..." />
                <p className="text-center md:text-left mb-4 leading-8">
                  Loading...
                </p>
              </>
            }
          >
            <SectionTitle title={placeData.LesLieux} />
            <p className="text-justify md:text-left mb-4 leading-8">
              {placeData.SoustitreLesLieux}
            </p>
          </Suspense>

          {/* Lieu 1 - Thalwil */}
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
                <Suspense fallback={<div>Loading...</div>}>
                  <h2 className="text-xl p-4 text-left font-semibold font-alegreya italic">
                    {placeData.TitreLieu1}
                  </h2>
                  <p className="text-justify md:text-left mb-4 leading-8">
                    {placeData.DescriptionLieu1}
                  </p>
                  <p className="text-left mb-4 leading-8">
                    {placeData.PourPlusDInformations}
                    <a href={placeData.LienLieu1}>Praxisgemeinschaft </a>
                  </p>
                  <div className="text-left mb-4 leading-8">
                    <h2 className="text-xl font-bold underline">
                      <a href="https://onlinecalendar.medidoc.ch/BookAppointment?cgid=hwG.Ne.NcU6VsmctLAPf0w&ssid=zQiSgPSU.0KMxgWQTfu4hA&lang=fr">
                        {placeData.PourPrendreRdz}
                      </a>
                    </h2>
                  </div>
                  
                  {/* Carte pour le lieu 1 */}
                  <MapWrapper
                    key="map-lieu1"
                    latitude={lieu1Coords.lat}
                    longitude={lieu1Coords.lng}
                    title="Praxisgemeinschaft am Schaffhauserplatz"
                    description="Schaffhauserstrasse 74, 8057 Zürich, Suisse"
                    height="250px"
                  />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Lieu 2 - Ibiza */}
          <div className="pt-10 text-[#F7F0EE] md:container md:w-screen w-full">
            <div
              className="bg-cover bg-center flex z-0 md:container"
              style={{
                backgroundImage: "url('/static/candelaflor.webp')",
              }}
            >
              <div
                className="lg:basis-3/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(82, 104, 109,0.2)]"
                style={{ backgroundColor: "rgba(82, 104, 109, 0.3)" }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <h2 className="text-xl p-4 text-left font-semibold font-alegreya italic">
                    {placeData.TitreLieu2}
                  </h2>
                  <p className="text-justify md:text-left mb-4 leading-8">
                    {placeData.DescriptionLieu2}
                  </p>
                  
                  {/* Carte pour le lieu 2 */}
                  <MapWrapper
                    key="map-lieu2"
                    latitude={lieu2Coords.lat}
                    longitude={lieu2Coords.lng}
                    title="Colorado Cranial Institute, Future Health GmbH"
                    description="Bremgartnerstrasse 18, 8003 Zürich, Suisse"
                    height="250px"
                  />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Lieu 3 reste inchangé */}
          <div className="pt-10 text-[#F7F0EE] md:container md:w-screen w-full">
            <div
              className="bg-cover bg-center flex z-0 md:container"
              style={{
                backgroundImage: "url('/static/perpignan.webp')",
              }}
            >
              <div
                className="lg:basis-2/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(157,167,70,0.2)]"
                style={{ backgroundColor: "rgba(157,167,70, 0.3)" }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <h2 className="text-xl p-4 text-left font-semibold font-alegreya italic">
                    {placeData.TitreLieu3}
                  </h2>
                  <p className="text-justify md:text-left mb-4 leading-8">
                    {placeData.DescriptionLieu3}
                  </p>
                  {/* 
                  <p className="text-left mb-4 leading-8">
                    {placeData.PourPlusDInformations}
                    <a href={placeData.LienLieu3}>KSC Wiedikon</a>
                  </p>*/}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}