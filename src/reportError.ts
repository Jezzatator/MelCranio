// Envoie une erreur côté navigateur à /api/log pour qu'elle apparaisse
// dans les Runtime Logs de Vercel (le site est statique : sans ça, les
// erreurs des visiteurs ne remontent nulle part).

const MAX_REPORTS_PER_PAGE = 10;
const sent = new Set<string>();

export type ClientErrorReport = {
  type: string;
  message: string;
  stack?: string;
  source?: string;
  line?: number;
  column?: number;
  digest?: string;
};

export function reportError(report: ClientErrorReport) {
  if (typeof window === "undefined") return;

  // Une même erreur n'est envoyée qu'une fois par page, et au plus 10 erreurs
  const key = `${report.type}:${report.message}`;
  if (sent.has(key) || sent.size >= MAX_REPORTS_PER_PAGE) return;
  sent.add(key);

  const body = JSON.stringify({
    ...report,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
  });

  try {
    const blob = new Blob([body], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/log", blob)) {
      fetch("/api/log", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  } catch {
    // Le rapport d'erreur ne doit jamais casser la page
  }
}

export function toReport(type: string, error: unknown): ClientErrorReport {
  if (error instanceof Error) {
    return {
      type,
      message: error.message,
      stack: error.stack,
      digest: (error as Error & { digest?: string }).digest,
    };
  }
  return { type, message: String(error) };
}
