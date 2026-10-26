// Reçoit les erreurs envoyées par les navigateurs (src/reportError.ts) et les
// écrit dans les Runtime Logs de Vercel, filtrables avec "client.error".

import { isAllowedOrigin } from "@/src/origin";

const MAX_BODY = 8_000;

function clip(value: unknown, max: number) {
  return typeof value === "string" ? value.slice(0, max) : undefined;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) return new Response(null, { status: 403 });
  const raw = await request.text();
  if (raw.length > MAX_BODY) return new Response(null, { status: 413 });

  let report: Record<string, unknown>;
  try {
    report = JSON.parse(raw);
  } catch {
    return new Response(null, { status: 400 });
  }

  const stack = clip(report.stack, 2_000);
  // Erreurs provoquées par des extensions de navigateur : sans intérêt pour le site
  if (stack && /(chrome|moz|safari)-extension:\/\//.test(stack)) {
    return new Response(null, { status: 204 });
  }

  console.error(
    JSON.stringify({
      level: "error",
      event: "client.error",
      type: clip(report.type, 50),
      message: clip(report.message, 500),
      path: clip(report.path, 200),
      source: clip(report.source, 300),
      line: typeof report.line === "number" ? report.line : undefined,
      column: typeof report.column === "number" ? report.column : undefined,
      digest: clip(report.digest, 100),
      stack,
      userAgent: clip(report.userAgent, 300),
      at: new Date().toISOString(),
    })
  );

  return new Response(null, { status: 204 });
}
