// Relais du formulaire de contact vers Jotform.
// Chaque envoi est journalisé (logs Vercel > Functions) sans données personnelles :
// on ne logge ni nom, ni e-mail, ni contenu du message.

const JOTFORM_ID = "240363435011342";
const JOTFORM_URL = `https://eu-submit.jotform.com/submit/${JOTFORM_ID}`;

const FIELDS = ["q15_fullName15[first]", "q15_fullName15[last]", "q7_email", "q4_message4"];

function log(level: "info" | "warn" | "error", event: string, details: Record<string, unknown>) {
  const line = JSON.stringify({ level, event, ...details, at: new Date().toISOString() });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export async function POST(request: Request) {
  const started = Date.now();
  const form = await request.formData();
  const locale = String(form.get("locale") ?? "unknown");

  // Champ piège : rempli uniquement par les robots
  if (String(form.get("website") ?? "") !== "") {
    log("warn", "contact.spam_honeypot", { locale });
    return Response.json({ ok: true });
  }

  const missing = FIELDS.filter((name) => !String(form.get(name) ?? "").trim());
  if (missing.length > 0) {
    log("warn", "contact.invalid", { locale, missing });
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const payload = new FormData();
  for (const name of FIELDS) payload.set(name, String(form.get(name)));
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
