import React from "react";

const Lieux = () => {
  return (
    <div className="px-20 py-20 text-amber-950">
      {/* Craniosacral introduction */}

      <div className="flex flex-row m-5 pb-20">
        <div className="basis-2/3 text-left px-5">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold">
            Les lieux
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            Vous avez la possibilité de bénéficier de séances à deux endroits
            distincts, offrant chacun une atmosphère unique.
          </p>

          {/* System Explanation */}

          <h2 className="text-l p-4 text-centermd:text-left font-semibold">
            PhysioBalance - Thalwil
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            À Thalwil, les sessions ont lieu dans un cabinet de physiothérapie
            idéalement situé sur les rives du lac de Zurich. Niché dans un petit
            oasis, loin de l'agitation urbaine, cet endroit est facilement
            accessible et à proximité de la gare. Vous trouverez ici un
            environnement paisible qui favorise la détente et le bien-être.
          </p>
          <p className="text-center md:text-left mb-4 leading-8">
            {" "}
            Pour plus d'information rendez-vous sur :{" "}
            <a href="http://www.physiobalance-thalwil.ch">
              physiobalance-thalwil.ch
            </a>
          </p>

          {/* Session Details */}

          <h2 className="text-l p-4 text-center md:text-left font-semibold">
            Can La Flor - Ibiza
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            Chez Lia, dans la salle dédiée au bien-être à San Carlo, Ibiza, vous
            découvrirez un espace de guérison unique. La salle est située au
            cœur de l'île, dans une magnifique propriété à l'est, imprégnée de
            calme et de sérénité. Elle est adjacente à une finca traditionnelle
            ibérique, offrant une expérience enveloppée de tranquillité au sein
            de la nature paisible de l'île.
          </p>
          <p className="text-center md:text-left mb-4 leading-8">
            Pour plus d'information rendez-vous sur :{" "}
            <a href="https://www.canva.com/design/DAFyFmuCcDY/7zZdio2th-Xok8mTbjIBdQ/view?utm_content=DAFyFmuCcDY&utm_campaign=designshare&utm_medium=link&utm_source=viewer">
              Can la Flor
            </a>
          </p>
        </div>

        <div className="p-5 basis-1/3">
          <p>LOGO</p>
        </div>
      </div>
    </div>
  );
};

export default Lieux;
