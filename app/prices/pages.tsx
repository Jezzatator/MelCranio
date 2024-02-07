import React from "react";

const Prices = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-row text-left  pb-20 px-20 py-20">
        <div className="px-5 pr-40 basis-1/2">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            Tarifs
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Les tarfis peuvent changer suivant la localité, se renseinger lors
            de la prise de rendez-vous.
            <ul className="pl-10">
              <li className="pt-2">60min / 140CHF </li>
              <li className="pt-2">90min / 210CHF </li>
            </ul>
          </p>
        </div>
        <div className="px-5 pr-40 basis-1/2">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            Si vous etes assuré en Suisse
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Sunt sint laboris in elit id ex lorem irure excepteur pariatur dolor
            quis do magna ad. Adipiscing sit duis occaecat consectetur ex
            reprehenderit nisi do nulla incididunt ut culpa eu lorem laborum
            culpa deserunt nulla.
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Sunt sint laboris in elit id ex lorem irure excepteur pariatur dolor
            quis do magna ad. Adipiscing sit duis occaecat consectetur ex
            reprehenderit nisi do nulla incididunt ut culpa eu lorem laborum
            culpa deserunt nulla.
          </p>
        </div>
      </div>
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/mains.jpg')",
        }}
      ></div>
    </div>
  );
};

export default Prices;
