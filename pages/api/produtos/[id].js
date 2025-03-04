import { queryDb } from "../../../lib/db";
export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "ID não fornecido" });
  }
  try {
    const query = "SELECT * FROM produtos WHERE id = ?";
    const results = await queryDb(query, [id]);
    if (results.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.status(200).json(results[0]);
  } catch (error) {
    console.error("Erro na consulta:", error); // Log do erro
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
