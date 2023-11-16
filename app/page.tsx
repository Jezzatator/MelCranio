import Craniosacral from "./craniosacral/page";
import "./frontpage.css";

export default function Home() {
  return (
    <div className="px-20 py-20 text-amber-950">
      <h1 className="uppercase text-8xl py-10">Mélissa Patot</h1>
      <h2 className="text-xl">
        Kinésithérapeute spécialisé en thérapie craniosacrale
      </h2>
      <Craniosacral />
      <Craniosacral />
      <Craniosacral />
      <Craniosacral />
    </div>
  );
}
