import { NextApiResponse } from "next";

async function getData(locale: string | string[], apiEndPoint: string): Promise<any> {
    const apiKey = "Bearer " + process.env.READ_ONLY_KEY;
  
    try {
      const res: Response = await fetch(
        process.env.STRAPI_URL + `${apiEndPoint}s?${locale}=fr`,
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
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }