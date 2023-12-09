import Image from "next/image";
import React from "react";

const Craniosacral = () => {
  return (
    <div className=" text-amber-950">
      {/* Craniosacral introduction */}

      <div className="flex flex-row text-left  pb-20 px-20 py-20">
        <div className="px-5 pr-40 basis-2/3">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            Qu&apos;est-ce que la Thérapie Craniosacrale?
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            La thérapie craniosacrale libère les tensions du corps pour
            favoriser la détente et la guérison. Elle explore la connexion
            subtile entre le crâne, la colonne vertébrale, et le sacrum.
          </p>

          {/* System Explanation */}

          <h2 className="text-l p-4 text-centermd:text-left font-semibold">
            Comprendre le Système Craniosacral
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Découvrez le système craniosacral, un réseau délicat composé du
            crâne, de la colonne vertébrale et du sacrum. Ce système, abritant
            le fluide céphalorachidien essentiel, joue un rôle crucial dans le
            bon fonctionnement de votre corps.
          </p>

          {/* Session Details */}

          <h2 className="text-l p-4 text-center md:text-left font-semibold">
            Déroulement d&apos;une Séance de Thérapie Craniosacrale
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Pendant une séance de thérapie craniosacrale, le kinésithérapeute
            utilise des techniques douces, non invasives, pour évaluer et
            améliorer le mouvement du liquide céphalorachidien. Cette approche
            délicate permet de libérer les blocages, réduire les tensions et
            restaurer la mobilité naturelle des structures crâniennes et
            vertébrales.
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Au fil de la séance, le patient ressent souvent une profonde
            relaxation, ce qui favorise la réduction du stress et de
            l&apos;anxiété. La thérapie craniosacrale peut également aider à
            soulager les maux de tête, les douleurs physiques, et à améliorer la
            qualité du sommeil.
          </p>
        </div>

        <div className="p-5 basis-1/3">
          <p>LOGO</p>
        </div>
      </div>
      {/* Benefits Section */}
      <div
        className="bg-cover bg-center flex flex-row z-0"
        style={{
          backgroundImage: "url('/static/image3.jpeg')",
        }}
      >
        <div
          className="basis-1/3 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)]"
          style={{ backgroundColor: "rgba(247, 240, 239, 0.3)" }}
        >
          <ul className="text-left space-y-3 p-4 z-30">
            <h3 className="text-2xl py-8 font-alegreyaSans">
              Bénéfices de la Thérapie Craniosacrale
            </h3>
            <li className="px-2">
              <p className="font-semibold">
                Réduction du stress et de l&apos;anxiété :
              </p>
              En favorisant la relaxation, la thérapie craniosacrale contribue à
              réduire les niveaux de stress et d&apos;anxiété.
            </li>
            <li className="px-2">
              <p className="font-semibold"> Amélioration du sommeil : </p>La
              détente induite par la thérapie craniosacrale peut favoriser un
              sommeil plus profond et réparateur.
            </li>
            <li className="px-2">
              <p className="font-semibold">
                Soulagement des maux de tête et des migraines :
              </p>
              En libérant les tensions au niveau du crâne, elle peut atténuer
              les maux de tête et les migraines.
            </li>
            <li className="px-2">
              <p className="font-semibold">
                Renforcement du système immunitaire :
              </p>
              En optimisant le fonctionnement du système craniosacral, cette
              approche peut contribuer à renforcer le système immunitaire.
            </li>
            <li className="px-2">
              <p className="font-semibold">Équilibre émotionnel et mental : </p>
              En libérant les tensions physiques, la thérapie craniosacrale peut
              également avoir des effets positifs sur l&apos;équilibre
              émotionnel et mental.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Craniosacral;
