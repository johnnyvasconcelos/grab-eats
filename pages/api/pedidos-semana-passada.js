import { queryDb } from "../../lib/db";
export default async function pedidosSemanaPassada(req, res) {
  try {
    const pedidos = await queryDb(`
        SELECT 
          COUNT(id) AS orders, 
          SUM(preco * quantidade) AS revenue 
        FROM pedidos 
        WHERE YEARWEEK(data_pedido, 1) = YEARWEEK(CURDATE() - INTERVAL 7 DAY, 1)
      `);
    if (pedidos.length > 0) {
      res.status(200).json(pedidos[0]);
    } else {
      res
        .status(404)
        .json({ error: "Nenhum pedido encontrado na semana passada" });
    }
  } catch (error) {
    console.error("Erro ao buscar resumo da semana passada:", error);
  }
}
