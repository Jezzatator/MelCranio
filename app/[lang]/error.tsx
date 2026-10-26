"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { reportError, toReport } from "@/src/reportError";

const messages: Record<string, { text: string; retry: string }> = {
  fr: { text: "Une erreur est survenue lors de l'affichage de la page.", retry: "Réessayer" },
  en: { text: "Something went wrong while displaying this page.", retry: "Try again" },
  de: { text: "Beim Anzeigen der Seite ist ein Fehler aufgetreten.", retry: "Erneut versuchen" },
  es: { text: "Se produjo un error al mostrar la página.", retry: "Reintentar" },
  ca: { text: "S'ha produït un error en mostrar la pàgina.", retry: "Torna-ho a provar" },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useParams<{ lang: string }>();
  const t = messages[lang] ?? messages.en;

  useEffect(() => {
    reportError(toReport("react.error-boundary", error));
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-6 px-5 py-40 text-center text-lg">
      <p>{t.text}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-[#F9F0EE] hover:opacity-90"
      >
        {t.retry}
      </button>
    </div>
  );
}
