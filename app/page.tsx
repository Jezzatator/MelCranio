import About from "./about/page";
import Craniosacral from "./craniosacral/page";
import "./frontpage.css";
import Lieux from "./places/page";

export default function Home() {
  return (
    <div className="px-20 py-20 text-amber-950">
      <h1 className="uppercase text-8xl py-10 font-alegreyaSans">
        Mélissa Patot
      </h1>
      <h2 className="text-xl pl-2 font-alegreyaSans">
        Kinésithérapeute spécialisé en thérapie craniosacrale
      </h2>
      <About />
      <Craniosacral />
      <Lieux />
    </div>
  );
}
