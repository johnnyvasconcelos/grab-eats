import { connectDb, queryDb } from "../../lib/db";
export default async function handler(req, res) {
  try {
    await connectDb();
    const dados = await queryDb(
      "SELECT nome_restaurante, boas_vindas FROM dados LIMIT 1"
    );

    if (dados.rows.length > 0) {
      res.status(200).json(dados.rows[0]);
    } else {
      res.status(404).json({ error: "Restaurante não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar dados do restaurante:", error);
    res.status(500).json({ error: "Erro ao buscar dados do restaurante" });
  }
}
