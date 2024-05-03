import Head from "next/head";
import Link from "next/link";

// Image generation
export default function MelissaCranioLogo() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.ico" />
      </Head>

      <Link href="/[lang]" as="/fr" className="flex">
        <img src="/icon.ico" alt="Logo" className="h-4 md:h-4 lg:h-8 xl:h-10" />
      </Link>
    </div>
  );
}
