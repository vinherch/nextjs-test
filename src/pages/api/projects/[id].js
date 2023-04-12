import { getProjects } from "../../../data";

export default async function get(req, res) {
  //local json mockup data
  let result = await getProjects();
  result = result.filter((c) => c.id === +req.query.id);
  if (result.length > 0) return res.status(200).json(result[0]);
  res.status(404).json({ error: "Unvalid id" });
}
