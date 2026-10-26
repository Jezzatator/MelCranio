// Les routes /api ne doivent être appelées que par le site lui-même :
// une requête venant d'un autre site (ou d'un script sans en-tête Origin) est refusée.
const ALLOWED_HOSTS = new Set(["www.melissa-cranio.com", "melissa-cranio.com", "localhost"]);

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const { hostname } = new URL(origin);
    // Déploiements de prévisualisation Vercel du projet
    return ALLOWED_HOSTS.has(hostname) || /^mel-cranio-[a-z0-9-]+\.vercel\.app$/.test(hostname);
  } catch {
    return false;
  }
}
