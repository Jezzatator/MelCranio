import { Locale } from "../i18nConfig";
import { RequeteStrapi } from "./Request";

export async function getData<T>(request: RequeteStrapi<T>, locale: Locale) {
    const apiKey = "Bearer " + process.env.READ_ONLY_KEY;
  
    try {
      const res: Response = await fetch(
        process.env.STRAPI_URL + request.endpoint + `?locale=${locale}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return (await res.json()) as T;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }