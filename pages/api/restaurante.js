import { connectDb, queryDb } from "../../lib/db";
export default async function dados(req, res) {
  try {
    await connectDb();
    const query = "SELECT * FROM dados LIMIT 1";
    const dados = await queryDb(query);
    if (dados.length > 0) {
      res.status(200).json(dados[0]);
    } else {
      res.status(404).json({ error: "Restaurante não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do restaurante" });
  }
}
