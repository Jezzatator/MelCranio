import { describe, expect, it } from "vitest";
import { i18n } from "@/src/i18nConfig";
import { getContent } from "@/src/content";

// Les 5 fichiers content/*.json doivent avoir exactement la même structure :
// une clé oubliée ou une liste de longueur différente casserait une langue.

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

function shape(value: Json, path = ""): string[] {
  if (Array.isArray(value)) {
    return [`${path}[${value.length}]`, ...value.flatMap((item, i) => shape(item, `${path}[${i}]`))];
  }
  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .flatMap((key) => shape(value[key], path ? `${path}.${key}` : key));
  }
  return [`${path}:${typeof value}`];
}

function emptyStrings(value: Json, path = ""): string[] {
  if (typeof value === "string") return value.trim() === "" ? [path] : [];
  if (Array.isArray(value)) return value.flatMap((item, i) => emptyStrings(item, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => emptyStrings(item, path ? `${path}.${key}` : key));
  }
  return [];
}

const reference = getContent("fr") as unknown as Json;

describe("contenu des langues", () => {
  it.each(i18n.locales)("%s a la même structure que fr", (locale) => {
    expect(shape(getContent(locale) as unknown as Json)).toEqual(shape(reference));
  });

  it.each(i18n.locales)("%s n'a pas de texte vide (hors complément facultatif)", (locale) => {
    const empty = emptyStrings(getContent(locale) as unknown as Json).filter(
      (path) => !path.endsWith(".moreInfo")
    );
    expect(empty).toEqual([]);
  });

  it.each(i18n.locales)("%s ne mentionne plus les lieux fermés", (locale) => {
    const text = JSON.stringify(getContent(locale));
    expect(text).not.toMatch(/Wiedikon|Perpi(gnan|ñán|nyà)/);
  });

  it("le numéro de téléphone est le bon partout", () => {
    for (const locale of i18n.locales) {
      expect(getContent(locale).contact.phone).toBe("+41 78 318 02 07");
    }
  });

  it("chaque langue a un titre et une description de référencement", () => {
    for (const locale of i18n.locales) {
      const { meta } = getContent(locale);
      expect(meta.title.length).toBeGreaterThan(10);
      expect(meta.description.length).toBeGreaterThan(50);
      expect(meta.description.length).toBeLessThanOrEqual(200);
    }
  });
});
