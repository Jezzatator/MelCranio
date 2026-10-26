import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/log/route";
import { isAllowedOrigin } from "@/src/origin";

const ORIGIN = "https://www.melissa-cranio.com";

function request(body: string, origin: string | null = ORIGIN) {
  return new Request(`${ORIGIN}/api/log`, {
    method: "POST",
    body,
    headers: origin ? { origin } : undefined,
  });
}

let errorSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("POST /api/log", () => {
  it("écrit l'erreur en JSON dans les logs", async () => {
    const res = await POST(
      request(JSON.stringify({ type: "window.error", message: "boom", path: "/fr", stack: "Error: boom" }))
    );
    expect(res.status).toBe(204);
    const line = JSON.parse(errorSpy.mock.calls[0][0] as string);
    expect(line).toMatchObject({ event: "client.error", type: "window.error", message: "boom", path: "/fr" });
  });

  it("tronque les messages très longs", async () => {
    await POST(request(JSON.stringify({ type: "x", message: "a".repeat(2_000) })));
    const line = JSON.parse(errorSpy.mock.calls[0][0] as string);
    expect(line.message).toHaveLength(500);
  });

  it("ignore les erreurs d'extensions de navigateur", async () => {
    const res = await POST(
      request(JSON.stringify({ type: "x", message: "y", stack: "at chrome-extension://abc/script.js:1" }))
    );
    expect(res.status).toBe(204);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it("refuse un JSON invalide", async () => {
    expect((await POST(request("pas du json"))).status).toBe(400);
  });

  it("refuse un corps trop gros", async () => {
    expect((await POST(request("x".repeat(8_001)))).status).toBe(413);
  });

  it("refuse une requête venant d'un autre site", async () => {
    const res = await POST(request(JSON.stringify({ message: "spam" }), "https://evil.example"));
    expect(res.status).toBe(403);
    expect(errorSpy).not.toHaveBeenCalled();
  });
});

describe("origines autorisées", () => {
  it.each([
    ["https://www.melissa-cranio.com", true],
    ["https://melissa-cranio.com", true],
    ["http://localhost:3000", true],
    ["https://mel-cranio-abc123-jezzatators-projects.vercel.app", true],
    ["https://evil.example", false],
    ["https://melissa-cranio.com.evil.example", false],
    ["https://other-project.vercel.app", false],
    ["not a url", false],
  ])("%s -> %s", (origin, allowed) => {
    const req = new Request(`${ORIGIN}/api/log`, { method: "POST", headers: { origin } });
    expect(isAllowedOrigin(req)).toBe(allowed);
  });
});
