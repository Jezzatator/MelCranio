import Head from "next/head";
import Link from "next/link";
import LogoDarkGreen from "../public/Logo_dark green.ico";

// Image generation
export default function MelissaCranioLogo() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.ico" />
      </Head>

      <Link href="/[lang]" as="/en" className="flex">
        <img
          src={LogoDarkGreen.src}
          alt="Logo"
          className="h-4 md:h-4 lg:h-8 xl:h-10 block dark:hidden"
        />
        <img
          src="/icon.ico"
          alt="Logo"
          className="h-4 md:h-4 lg:h-8 xl:h-10 hidden dark:block"
        />
      </Link>
    </div>
  );
}
