import React from "react";

const About = () => {
  return (
    <div className="flex flex-row m-5 pb-20 pt-20 px-20 py-20 text-amber-950">
      <div
        className="p-5 basis-1/3 bg-cover rounded-full drop-shadow-[0_35px_35px_rgba(113,97,100,0.2)]"
        style={{
          backgroundImage: "url('/static/image0.jpeg')",
        }}
      ></div>

      <div className="basis-2/3 text-right px-5 pl-40">
        <h2 className="text-2xl p-4 md:p-0 text-center md:text-right font-bold pb-20 font-alegreyaSans">
          À Propos de moi
        </h2>
        <p className="text-xl text-center md:text-right mb-4 pt-20 pl-10 leading-8">
          Depuis trois ans, je m&apos;investis avec passion au sein de
          l&apos;équipe de Julie Leisner, au cabinet PhysioBalance à Thalwil. À
          l&apos;été dernier 2023, j&apos;ai complété avec succès un programme
          de trois ans pour obtenir la reconnaissance suisse en Thérapie
          Craniosacrale.
        </p>
        <p className="text-xl text-center md:text-right mb-4 pt-5 pl-10 leading-8">
          Je suis convaincue de l&apos;importance de faire évoluer
          continuellement cette méthode, surtout à la lumière des défis posés
          par la pandémie, qui ont mis en lumière la relation étroite entre les
          tensions mentales, émotionnelles et les souffrances physiques.
        </p>
      </div>
    </div>
  );
};

export default About;
