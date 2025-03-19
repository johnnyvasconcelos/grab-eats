import { queryDb } from "../../lib/db";
export default async function novosClientes(req, res) {
  try {
    const novosClientesHoje = await queryDb(`
      SELECT COUNT(DISTINCT cpf) AS novos_clientes
      FROM pedidos 
      WHERE DATE(data_pedido) = CURDATE() 
      AND cpf IS NOT NULL 
      AND cpf NOT IN (SELECT DISTINCT cpf FROM pedidos WHERE DATE(data_pedido) < CURDATE())
    `);
    res
      .status(200)
      .json({ novosClientes: novosClientesHoje[0].novos_clientes || 0 });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar novos clientes" });
  }
}
