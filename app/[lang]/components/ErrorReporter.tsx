"use client";
import { useEffect } from "react";
import { reportError, toReport } from "@/src/reportError";

// Capte les erreurs JavaScript non gérées de toutes les pages
export default function ErrorReporter() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      reportError({
        ...toReport("window.error", event.error ?? event.message),
        source: event.filename,
        line: event.lineno,
        column: event.colno,
      });
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      reportError(toReport("unhandledrejection", event.reason));
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
