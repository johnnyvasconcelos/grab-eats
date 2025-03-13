import { queryDb } from "../../lib/db";
export default async function graficoPedidos(req, res) {
  try {
    const pedidos = await queryDb(`
        SELECT 
          DATE(data_pedido) AS date, 
          COUNT(id) AS orders, 
          SUM(preco * quantidade) AS revenue 
        FROM pedidos 
        WHERE data_pedido >= CURDATE() - INTERVAL 7 DAY 
        GROUP BY DATE(data_pedido) 
        ORDER BY date ASC
      `);
    if (pedidos.length > 0) {
      res.status(200).json(pedidos);
    } else {
      res.status(404).json({ error: "Nenhum pedido encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar dados de pedidos:", error);
    res.status(500).json({ error: "Erro ao buscar dados de pedidos" });
  }
}
