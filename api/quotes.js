export default async function handler(req, res) {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": import.meta.env.QUOTES_API_KEY,
        },
      });
  
      if (!response.ok) throw new Error("Failed to fetch quote");
      const data = await response.json();
  
      res.status(200).json(data);
    } catch {
      res.status(500).json({ error: "Failed to fetch quote" });
    }
  }