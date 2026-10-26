// Relais du formulaire de contact vers Jotform.
// Chaque envoi est journalisé (logs Vercel > Functions) sans données personnelles :
// on ne logge ni nom, ni e-mail, ni contenu du message.

import { isAllowedOrigin } from "@/src/origin";

const JOTFORM_ID = "240363435011342";
const JOTFORM_URL = `https://eu-submit.jotform.com/submit/${JOTFORM_ID}`;

// Champ Jotform -> longueur maximale acceptée
const FIELDS: Record<string, number> = {
  "q15_fullName15[first]": 100,
  "q15_fullName15[last]": 100,
  q7_email: 200,
  q4_message4: 5_000,
};
const MAX_BODY = 20_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function log(level: "info" | "warn" | "error", event: string, details: Record<string, unknown>) {
  const line = JSON.stringify({ level, event, ...details, at: new Date().toISOString() });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export async function POST(request: Request) {
  const started = Date.now();

  if (!isAllowedOrigin(request)) {
    log("warn", "contact.forbidden_origin", { origin: request.headers.get("origin") });
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY) {
    log("warn", "contact.too_large", {});
    return Response.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  const form = await request.formData();
  const locale = String(form.get("locale") ?? "unknown");

  // Champ piège : rempli uniquement par les robots
  if (String(form.get("website") ?? "") !== "") {
    log("warn", "contact.spam_honeypot", { locale });
    return Response.json({ ok: true });
  }

  const names = Object.keys(FIELDS);
  const missing = names.filter((name) => !String(form.get(name) ?? "").trim());
  if (missing.length > 0) {
    log("warn", "contact.invalid", { locale, missing });
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  const tooLong = names.filter((name) => String(form.get(name)).length > FIELDS[name]);
  if (tooLong.length > 0 || !EMAIL.test(String(form.get("q7_email")).trim())) {
    log("warn", "contact.invalid", { locale, tooLong, invalidEmail: tooLong.length === 0 });
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const payload = new FormData();
  for (const name of names) payload.set(name, String(form.get(name)).trim());
  payload.set("formID", JOTFORM_ID);
  payload.set("simple_spc", `${JOTFORM_ID}-${JOTFORM_ID}`);
  payload.set("submitSource", "form");
  payload.set("submitDate", String(Date.now()));
  payload.set("website", "");

  const details = {
    locale,
    messageLength: String(form.get("q4_message4")).length,
  };

  try {
    const res = await fetch(JOTFORM_URL, {
      method: "POST",
      body: payload,
      headers: { Referer: "https://www.melissa-cranio.com/" },
      redirect: "manual",
    });
    const body = await res.text();
    // Envoi accepté : Jotform répond par une redirection HTTP ou par un petit
    // script de redirection (top.location.href = ...) vers la page de remerciement
    const accepted =
      (res.status >= 300 && res.status < 400) ||
      (res.ok && /location\.href|thank/i.test(body));

    if (!accepted) {
      log("error", "contact.jotform_rejected", {
        ...details,
        status: res.status,
        body: body.slice(0, 300),
        ms: Date.now() - started,
      });
      return Response.json({ ok: false, error: "jotform_rejected" }, { status: 502 });
    }

    log("info", "contact.sent", { ...details, status: res.status, ms: Date.now() - started });
    return Response.json({ ok: true });
  } catch (error) {
    log("error", "contact.jotform_unreachable", {
      ...details,
      error: error instanceof Error ? error.message : String(error),
      ms: Date.now() - started,
    });
    return Response.json({ ok: false, error: "jotform_unreachable" }, { status: 502 });
  }
}
