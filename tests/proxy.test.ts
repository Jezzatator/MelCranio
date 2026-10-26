import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { preferredLocale, proxy } from "@/proxy";

describe("choix de la langue (Accept-Language)", () => {
  it.each([
    ["de-CH,de;q=0.9,en;q=0.8", "de"],
    ["fr-FR,fr;q=0.9", "fr"],
    ["es-ES", "es"],
    ["ca", "ca"],
    ["en-GB,en;q=0.9", "en"],
  ])("%s -> %s", (header, expected) => {
    expect(preferredLocale(header)).toBe(expected);
  });

  it("respecte l'ordre de préférence (q)", () => {
    expect(preferredLocale("en;q=0.3,fr;q=0.8,de;q=0.5")).toBe("fr");
  });

  it("passe à la langue suivante si la première n'est pas gérée", () => {
    expect(preferredLocale("it-IT,it;q=0.9,es;q=0.5")).toBe("es");
  });

  it.each([null, "", "ja-JP", "garbage;;;"])("revient à l'anglais par défaut (%s)", (header) => {
    expect(preferredLocale(header)).toBe("en");
  });
});

describe("redirection de /", () => {
  it("redirige vers la langue du navigateur", () => {
    const request = new NextRequest("https://www.melissa-cranio.com/", {
      headers: { "accept-language": "de-CH,de;q=0.9" },
    });
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://www.melissa-cranio.com/de");
    expect(response.headers.get("vary")).toBe("Accept-Language");
  });
});
