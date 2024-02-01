export async function loadHomes() {
  const apiKey = "Bearer " + process.env.READ_ONLY_KEY;

  try {
    const res = await fetch(
      "https://mel-cranio-jeremiepatot.koyeb.app/api/homes?locale=fr",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch homes data");
    }

    const data = await res.json();
    return data.data.map((home) => ({
      subNameFirstCard: home.attributes.subNameFirstCard,
    }));
  } catch (error) {
    console.error("Error fetching homes data:", error);
    throw error;
  }
}
