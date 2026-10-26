"use client";
import { useEffect } from "react";
import { reportError, toReport } from "@/src/reportError";

// Dernier filet de sécurité : erreur dans le layout lui-même
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportError(toReport("react.global-error", error));
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", textAlign: "center", padding: "10rem 1.25rem" }}>
        <p>Something went wrong. / Une erreur est survenue.</p>
        <button type="button" onClick={reset} style={{ marginTop: "1.5rem" }}>
          Retry / Réessayer
        </button>
      </body>
    </html>
  );
}
