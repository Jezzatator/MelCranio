import Image from "next/image";
import React from "react";

const Craniosacral = () => {
  return (
    <div className="px-20 py-20 text-amber-950">
      {/* <h1 className="text-4xl p-10">La Craniosacral</h1> */}
      <div className="flex flex-row py-20">
        <div className="p-5 basis-1/3">
          <p>LOGO</p>
        </div>

        <div className="basis-2/3">
          <h2 className="text-2xl p-5 text-right font-semibold">
            Qu'est-ce que la Thérapie Craniosacrale?
          </h2>
          <p className="text-right mb-8 space-y-2">
            La thérapie craniosacrale est une approche holistique de la santé
            qui se concentre sur la libération des tensions et la restauration
            de l'équilibre naturel du corps. Basée sur la compréhension du
            système craniosacral, elle explore la connexion subtile entre le
            crâne, la colonne vertébrale et le sacrum pour favoriser la détente
            profonde et la guérison.
          </p>
          <h2 className="text-l p-5 text-right font-semibold">
            Comprendre le Système Craniosacral
          </h2>
          <p className="text-right mb-8 space-y-2">
            Au cœur de cette approche se trouve le système craniosacral, composé
            du crâne (os du crâne), de la colonne vertébrale et du sacrum (os
            situé à la base de la colonne vertébrale). Ce système abrite le
            liquide céphalorachidien, un fluide vital qui entoure et protège le
            cerveau et la moelle épinière. L'équilibre de ce système est
            essentiel au bon fonctionnement de l'ensemble du corps.
          </p>
          <h2 className="text-l p-5 text-right font-semibold">
            Déroulement d'une Séance de Thérapie Craniosacrale
          </h2>
          <p className="text-right mb-8 space-y-2">
            Pendant une séance de thérapie craniosacrale, le kinésithérapeute
            utilise des techniques douces, non invasives, pour évaluer et
            améliorer le mouvement du liquide céphalorachidien. Cette approche
            délicate permet de libérer les blocages, réduire les tensions et
            restaurer la mobilité naturelle des structures crâniennes et
            vertébrales.
          </p>
          <p className="text-right mb-8 space-y-2">
            Au fil de la séance, le patient ressent souvent une profonde
            relaxation, ce qui favorise la réduction du stress et de l'anxiété.
            La thérapie craniosacrale peut également aider à soulager les maux
            de tête, les douleurs physiques, et à améliorer la qualité du
            sommeil.
          </p>
        </div>
      </div>

      <div className="bg-[url('/static/image3.jpeg')] bg-cover bg-center flex flex-row">
        {/* <div className="image--wrapper">
          <Image
            src="/static/image3.jpeg"
            alt="Picture of a craniosacral seance"
            width={1000}
            height={200}
          />
        </div> */}
        <div className="backdrop-blur-sm basis-1/3 p-4">
          <ul className="text-left space-y-3 p-4 ">
            <h3 className="text-2xl py-8">
              Bénéfices de la Thérapie Craniosacrale
            </h3>
            <li className="px-2">
              <p className="font-semibold">
                Réduction du stress et de l'anxiété :{" "}
              </p>{" "}
              En favorisant la relaxation, la thérapie craniosacrale contribue à
              réduire les niveaux de stress et d'anxiété.
            </li>
            <li className="px-2">
              {" "}
              <p className="font-semibold"> Amélioration du sommeil : </p>La
              détente induite par la thérapie craniosacrale peut favoriser un
              sommeil plus profond et réparateur.
            </li>
            <li className="px-2">
              <p className="font-semibold">
                Soulagement des maux de tête et des migraines :{" "}
              </p>
              En libérant les tensions au niveau du crâne, elle peut atténuer
              les maux de tête et les migraines.
            </li>
            <li className="px-2">
              <p className="font-semibold">
                Renforcement du système immunitaire :
              </p>{" "}
              En optimisant le fonctionnement du système craniosacral, cette
              approche peut contribuer à renforcer le système immunitaire.
            </li>
            <li className="px-2">
              <p className="font-semibold">Équilibre émotionnel et mental : </p>{" "}
              En libérant les tensions physiques, la thérapie craniosacrale peut
              également avoir des effets positifs sur l'équilibre émotionnel et
              mental.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Craniosacral;
