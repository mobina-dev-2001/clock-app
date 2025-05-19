export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.ipbase.com/v2/info", {
      headers: {
        apikey: process.env.IPBASE_API_KEY,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch IP info");
    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch IP info" });
  }
}
