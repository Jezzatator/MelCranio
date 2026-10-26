import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

const ORIGIN = "https://www.melissa-cranio.com";

function validFields(): Record<string, string> {
  return {
    locale: "fr",
    "q15_fullName15[first]": "Jeanne",
    "q15_fullName15[last]": "Test",
    q7_email: "jeanne@example.com",
    q4_message4: "Bonjour, je voudrais un rendez-vous.",
  };
}

function request(fields: Record<string, string>, origin: string | null = ORIGIN) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  const headers = origin ? { origin } : undefined;
  return new Request(`${ORIGIN}/api/contact`, { method: "POST", body, headers });
}

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("POST /api/contact", () => {
  it("relaie un message valide à Jotform", async () => {
    fetchMock.mockResolvedValue(
      new Response("<script>top.location.href = 'https://www.melissa-cranio.com/';</script>")
    );

    const res = await POST(request(validFields()));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://eu-submit.jotform.com/submit/240363435011342");
    const sent = init.body as FormData;
    expect(sent.get("q7_email")).toBe("jeanne@example.com");
    expect(sent.get("simple_spc")).toBe("240363435011342-240363435011342");
    expect(sent.get("website")).toBe("");
  });

  it("ne logge aucune donnée personnelle", async () => {
    fetchMock.mockResolvedValue(new Response("top.location.href = '/'"));
    await POST(request(validFields()));
    const logged = JSON.stringify((console.log as unknown as ReturnType<typeof vi.fn>).mock.calls);
    expect(logged).toContain("contact.sent");
    expect(logged).not.toMatch(/Jeanne|jeanne@example\.com|rendez-vous/);
  });

  it("signale un refus de Jotform", async () => {
    fetchMock.mockResolvedValue(new Response("<html>Error: invalid submission</html>"));
    const res = await POST(request(validFields()));
    expect(res.status).toBe(502);
    expect(await res.json()).toMatchObject({ ok: false, error: "jotform_rejected" });
  });

  it("signale Jotform injoignable", async () => {
    fetchMock.mockRejectedValue(new Error("network down"));
    const res = await POST(request(validFields()));
    expect(res.status).toBe(502);
    expect(await res.json()).toMatchObject({ error: "jotform_unreachable" });
  });

  it("refuse une requête venant d'un autre site", async () => {
    const res = await POST(request(validFields(), "https://evil.example"));
    expect(res.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("refuse une requête sans en-tête Origin", async () => {
    const res = await POST(request(validFields(), null));
    expect(res.status).toBe(403);
  });

  it("refuse les champs manquants", async () => {
    const res = await POST(request({ locale: "fr", q7_email: "a@b.ch" }));
    expect(res.status).toBe(400);
    expect(await res.json()).toMatchObject({ error: "missing_fields" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("refuse un message trop long", async () => {
    const res = await POST(request({ ...validFields(), q4_message4: "a".repeat(5_001) }));
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("refuse un e-mail invalide", async () => {
    const res = await POST(request({ ...validFields(), q7_email: "pas-un-email" }));
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("ignore silencieusement les robots (champ piège rempli)", async () => {
    const res = await POST(request({ ...validFields(), website: "http://spam.example" }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
