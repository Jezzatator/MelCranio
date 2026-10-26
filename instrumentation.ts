import type { Instrumentation } from "next";

// Erreurs côté serveur (routes /api/*) : une ligne JSON par erreur dans les
// Runtime Logs de Vercel, filtrable avec "server.error".
export const onRequestError: Instrumentation.onRequestError = async (error, request, context) => {
  const err = error as Error & { digest?: string };
  console.error(
    JSON.stringify({
      level: "error",
      event: "server.error",
      message: err.message,
      digest: err.digest,
      method: request.method,
      path: request.path.split("?")[0],
      routePath: context.routePath,
      routeType: context.routeType,
      stack: err.stack?.slice(0, 2_000),
      at: new Date().toISOString(),
    })
  );
};
