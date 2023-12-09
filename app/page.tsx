import About from "./about/page";
import Craniosacral from "./craniosacral/page";
import "./frontpage.css";
import Lieux from "./places/page";

export default function Home() {
  return (
    <div className="px-20 py-80 text-amber-950 mt-20">
      <div className="flex flew-row mb-80" id="Home">
        <div className="basis 2/3">
          <h1 className="uppercase text-8xl py-10 font-alegreyaSans">
            Mélissa Patot
          </h1>
          <h2 className="text-xl pl-2 font-alegreyaSans">
            Kinésithérapeute spécialisé en thérapie craniosacrale
          </h2>
        </div>
        <div className="basis 1/3">IMAGe</div>
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Craniosacral">
        <Craniosacral />
      </div>
      <div id="Lieux">
        <Lieux />
      </div>
    </div>
  );
}
