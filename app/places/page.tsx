import React from "react";

const Lieux = () => {
  return (
    <div className="px-20 py-20 text-amber-950 mt-10">
      {/* Craniosacral introduction */}

      <div className="flex flex-row m-5 pb-20">
        <div className="w-full text-left px-5">
          <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold">
            Les lieux
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            Vous avez la possibilité de bénéficier de séances à deux endroits
            distincts, offrant chacun une atmosphère unique.
          </p>

          {/* Test Images */}

          <div className="pt-10 text-[#F7F0EE] container w-screen">
            <div
              className="bg-cover bg-center flex z-0 container"
              style={{
                backgroundImage: "url('/static/physiobalance-icone.webp')",
              }}
            >
              <div
                className="basis-2/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(43,64,67,1)]"
                style={{ backgroundColor: "rgba(88, 85, 84, 0.3)" }}
              >
                <h2 className="text-l p-4 text-centermd:text-left font-semibold">
                  PhysioBalance - Thalwil
                </h2>
                <p className="text-center md:text-left mb-4 leading-8">
                  À Thalwil, les sessions ont lieu dans un cabinet de
                  physiothérapie idéalement situé sur les rives du lac de
                  Zurich. Niché dans un petit oasis, loin de l&apos;agitation
                  urbaine, cet endroit est facilement accessible et à proximité
                  de la gare. Vous trouverez ici un environnement paisible qui
                  favorise la détente et le bien-être.
                </p>
                <p className="text-center md:text-left mb-4 leading-8">
                  {" "}
                  Pour plus d&apos;information rendez-vous sur :{" "}
                  <a href="http://www.physiobalance-thalwil.ch">
                    physiobalance-thalwil.ch
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 text-[#F7F0EE] container w-screen">
            <div
              className="bg-cover bg-center flex z-0 container"
              style={{
                backgroundImage: "url('/static/candelaflor.jpg')",
              }}
            >
              <div
                className="basis-2/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(157,167,70,0.2)]"
                style={{ backgroundColor: "rgba(88, 85, 84, 0.3)" }}
              >
                <h2 className="text-l p-4 text-center md:text-left font-semibold">
                  Can de la Flor - Ibiza
                </h2>
                <p className="text-center md:text-left mb-4 leading-8">
                  Chez Lia, dans la salle dédiée au bien-être à San Carlo,
                  Ibiza, vous découvrirez un espace de guérison unique. La salle
                  est située au cœur de l&apos;île, dans une magnifique
                  propriété à l&apos;est, imprégnée de calme et de sérénité.
                  Elle est adjacente à une finca traditionnelle ibérique,
                  offrant une expérience enveloppée de tranquillité au sein de
                  la nature paisible de l&apos;île.
                </p>
                <p className="text-center md:text-left mb-4 leading-8">
                  Pour plus d&apos;information rendez-vous sur :{" "}
                  <a href="https://www.canva.com/design/DAFyFmuCcDY/7zZdio2th-Xok8mTbjIBdQ/view?utm_content=DAFyFmuCcDY&utm_campaign=designshare&utm_medium=link&utm_source=viewer">
                    Can de la Flor
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 text-[#F7F0EE] container w-screen">
            <div
              className="bg-cover bg-center flex z-0 container"
              style={{
                backgroundImage: "url('/static/schaffhauserplatz.jpg')",
              }}
            >
              <div
                className="basis-2/5 p-4 backdrop-blur-xl z-20 drop-shadow-[0_35px_35px_rgba(26,74,90,0.2)]"
                style={{ backgroundColor: "rgba(88, 85, 84, 0.3)" }}
              >
                <h2 className="text-l p-4 text-center md:text-left font-semibold">
                  Praxisgemeinschaft am Schaffhauserplatz - Zurich
                </h2>
                <p className="text-center md:text-left mb-4 leading-8">
                  In incididunt et non pariatur pariatur ullamco consequat in
                  labore sunt aliquip et. Aliquip non dolor consequat
                  reprehenderit dolore laboris nostrud amet ex ullamco sed non
                  fugiat ex. Minim amet commodo qui incididunt sit est
                  reprehenderit ea cillum ullamco.
                </p>
                <p className="text-center md:text-left mb-4 leading-8">
                  Pour plus d&apos;information rendez-vous sur :{" "}
                  <a href="https://www.praxisgemeinschaft-schaffhauserplatz.ch/">
                    Praxisgemeinschaft
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* System Explanation */}

          {/* <h2 className="text-l p-4 text-centermd:text-left font-semibold">
            PhysioBalance - Thalwil
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            À Thalwil, les sessions ont lieu dans un cabinet de physiothérapie
            idéalement situé sur les rives du lac de Zurich. Niché dans un petit
            oasis, loin de l&apos;agitation urbaine, cet endroit est facilement
            accessible et à proximité de la gare. Vous trouverez ici un
            environnement paisible qui favorise la détente et le bien-être.
          </p>
          <p className="text-center md:text-left mb-4 leading-8">
            {" "}
            Pour plus d&apos;information rendez-vous sur :{" "}
            <a href="http://www.physiobalance-thalwil.ch">
              physiobalance-thalwil.ch
            </a>
          </p>


          <h2 className="text-l p-4 text-center md:text-left font-semibold">
            Can de la Flor - Ibiza
          </h2>
          <p className="text-center md:text-left mb-4 leading-8">
            Chez Lia, dans la salle dédiée au bien-être à San Carlo, Ibiza, vous
            découvrirez un espace de guérison unique. La salle est située au
            cœur de l&apos;île, dans une magnifique propriété à l&apos;est,
            imprégnée de calme et de sérénité. Elle est adjacente à une finca
            traditionnelle ibérique, offrant une expérience enveloppée de
            tranquillité au sein de la nature paisible de l&apos;île.
          </p>
          <p className="text-center md:text-left mb-4 leading-8">
            Pour plus d&apos;information rendez-vous sur :{" "}
            <a href="https://www.canva.com/design/DAFyFmuCcDY/7zZdio2th-Xok8mTbjIBdQ/view?utm_content=DAFyFmuCcDY&utm_campaign=designshare&utm_medium=link&utm_source=viewer">
              Can de la Flor
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Lieux;
