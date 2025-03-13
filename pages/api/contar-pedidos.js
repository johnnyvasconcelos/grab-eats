import { queryDb } from "../../lib/db";
export default async function contarPedidos(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  const { cpf } = req.query;
  if (!cpf) {
    return res.status(400).json({ error: "CPF não fornecido" });
  }
  try {
    const result = await queryDb(
      "SELECT COUNT(*) as quantidade FROM pedidos WHERE cpf = ?",
      [cpf]
    );
    const quantidade = result[0]?.quantidade || 0;
    return res.status(200).json({ quantidade });
  } catch (error) {
    console.error("Erro ao buscar quantidade de pedidos:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
