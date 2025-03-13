import { queryDb } from "../../lib/db";
export default async function produtos(req, res) {
  try {
    const produtos = await queryDb("SELECT * FROM produtos");
    if (produtos.length > 0) {
      res.status(200).json(produtos);
    } else {
      res.status(404).json({ error: "Nenhum produto encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar dados de produtos:", error);
    res.status(500).json({ error: "Erro ao buscar dados de produtos" });
  }
}
