import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-row m-5 pb-20 pt-20 px-20 py-20 text-amber-950 mt-10">
        <div
          className="p-5 basis-1/3 bg-cover rounded-full drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)] h-96"
          style={{
            backgroundImage: "url('/static/image0.jpeg')",
          }}
        ></div>

        <div className="px-5 pl-40 basis-2/3 text-right">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-right font-bold font-alegreyaSans">
            À Propos de moi
          </h2>
          <p className="text-center md:text-right mb-4 pt-5 pr-10 leading-8 text-xl">
            Depuis trois ans, je m&apos;investis avec passion au sein de
            l&apos;équipe de Julie Leisner, au cabinet PhysioBalance à Thalwil.
            À l&apos;été dernier 2023, j&apos;ai complété avec succès un
            programme de trois ans pour obtenir la reconnaissance suisse en
            Thérapie Craniosacrale.
          </p>
          <p className="text-center md:text-right mb-4 pt-5 pr-10 leading-8 text-xl">
            Je suis convaincue de l&apos;importance de faire évoluer
            continuellement cette méthode, surtout à la lumière des défis posés
            par la pandémie, qui ont mis en lumière la relation étroite entre
            les tensions mentales, émotionnelles et les souffrances physiques.
          </p>
        </div>
      </div>
      <div className="text-left flex flex-row Deuxieme Card Parcourd px-20 py-20">
        <div className=" px-5 pr-40 basis-2/3">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreyaSans">
            Mon parcours
          </h2>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Après avoir terminé mes études de physiothérapie à Gérone (Espagne),
            j&apos;ai découvert que dans les études de physiothérapie, nous ne
            sommes pas préparés de manière optimale au stress mental ou
            émotionnel du patient. En conséquence, j’ai été attiré par la
            thérapie cranio-sacré car cette méthode se concentre sur le lien
            direct entre l’état émotionnel et les symptômes physiques.
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            J&apos;ai suivi le cours de base cranio-sacré à l&apos;Académie
            internationale cranio-sacrée ICSA à Salzbourg (Autriche). Je me
            spécialise dans la thérapie viscérale cranio-sacré, qui est très
            utile pour les patients souffrant de maux de dos chroniques et peu
            clairs et qui peut très bien être intégrée à la physiothérapie.
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Lorsque j&apos;ai émigré en Suisse il y a 3 ans, il était clair pour
            moi que je devais obtenir le certificat industriel Oda KT.
            C&apos;est pourquoi j&apos;ai pu approfondir mes connaissances sur
            cette méthode. J&apos;ai approfondi, notamment dans des techniques
            spécifiques, telles que le nerf crânien, le soutien pendant la
            grossesse et l&apos;engagement social au Colorado Institute et à
            l&apos;Apamed (Zurich/Jona).
          </p>
          <p className="text-center md:text-left mb-4 pt-5 pl-10 leading-8 text-lg">
            Ces techniques apprises élargissent mes compétences
            professionnelles, par exemple en matière de migraines,
            d&apos;acouphènes, d&apos;épuisement professionnel, de TDAH et bien
            plus encore.
          </p>
        </div>
        <div className="basis1/3 p-5">IMAGE</div>
      </div>
    </div>
  );
};

export default About;
