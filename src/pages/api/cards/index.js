import getCards from "../../../data";

export default async function get(req, res) {
  try {
    const data = await getCards();
    res.statusCode = 200;
    res.json(data);
  } catch (error) {
    res.statusCode = 500;
    res.json({ error: "Data fetching failed" });
  }
}
