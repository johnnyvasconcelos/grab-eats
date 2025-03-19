import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  try {
    const pedidos = await queryDb(`
        SELECT nome, COUNT(*) AS total 
        FROM pedidos 
        WHERE data_pedido >= NOW() - INTERVAL 7 DAY
        GROUP BY nome
        ORDER BY total DESC
        LIMIT 1
      `);
    if (pedidos.length === 0) {
      return res.status(200).json({ nome_pedido: "Nenhum pedido encontrado" });
    }
    res.status(200).json({ nome_pedido: pedidos[0].nome });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ error: error.message });
  }
}
