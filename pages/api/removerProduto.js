import { queryDb } from "../../lib/db";
export default async function removerProduto(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "ID do produto é obrigatório" });
  }
  try {
    const result = await queryDb("DELETE FROM produtos WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.status(200).json({ message: "Produto removido com sucesso" });
  } catch (error) {
    console.error("Erro ao remover produto:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
