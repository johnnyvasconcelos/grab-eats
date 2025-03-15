import { queryDb } from "../../lib/db";
export default async function graficoLucro(req, res) {
  try {
    const lucro = await queryDb(`
        SELECT 
        DATE(data_pedido) AS data_pedido, 
        SUM(preco * quantidade) AS preco 
        FROM pedidos 
        WHERE data_pedido >= CURDATE() - INTERVAL 14 DAY 
        GROUP BY DATE(data_pedido) 
        ORDER BY data_pedido ASC
      `);

    if (lucro.length > 0) {
      res.status(200).json(lucro);
    } else {
      res.status(404).json({ error: "Nenhum dado de lucro encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar dados de lucro:", error);
    res.status(500).json({ error: "Erro ao buscar dados de lucro" });
  }
}
