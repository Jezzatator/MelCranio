"use client";
import React, { useState } from "react";
import { type SiteContent } from "@/src/content";

// Le formulaire envoie directement au formulaire Jotform existant :
// les messages arrivent toujours dans le même compte Jotform.
const JOTFORM_ID = "240363435011342";
const JOTFORM_URL = `https://eu-submit.jotform.com/submit/${JOTFORM_ID}`;

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-[var(--line)] bg-[transparent] px-4 py-3 text-lg outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

export default function ContactForm({
  labels,
}: {
  labels: SiteContent["contact"]["form"];
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("formID", JOTFORM_ID);
    data.set("simple_spc", `${JOTFORM_ID}-${JOTFORM_ID}`);
    data.set("submitSource", "form");
    data.set("submitDate", String(Date.now()));

    setStatus("sending");
    try {
      // Jotform n'autorise pas la lecture de la réponse (CORS) : une requête
      // qui aboutit sans erreur réseau est considérée comme envoyée.
      await fetch(JOTFORM_URL, { method: "POST", body: data, mode: "no-cors" });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-lg leading-8 text-center py-10">
        {labels.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="font-semibold">{labels.firstName}</span>
          <input
            className={inputClass}
            name="q15_fullName15[first]"
            autoComplete="given-name"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-semibold">{labels.lastName}</span>
          <input
            className={inputClass}
            name="q15_fullName15[last]"
            autoComplete="family-name"
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">{labels.email}</span>
        <input
          className={inputClass}
          type="email"
          name="q7_email"
          autoComplete="email"
          required
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">{labels.message}</span>
        <textarea className={`${inputClass} min-h-40`} name="q4_message4" rows={6} required />
      </label>

      {/* Champ piège anti-spam de Jotform : doit rester vide */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p role="alert" className="text-[var(--accent)]">
          {labels.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-full bg-[var(--accent)] px-8 py-3 text-lg font-semibold text-[#F9F0EE] transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
