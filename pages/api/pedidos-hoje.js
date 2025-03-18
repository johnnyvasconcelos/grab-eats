import { queryDb } from "../../lib/db";
export default async function pedidosHoje(req, res) {
  try {
    const pedidos = await queryDb(`
      SELECT COUNT(*) AS total FROM pedidos WHERE DATE(data_pedido) = CURDATE()
    `);
    res.status(200).json(pedidos[0].total);
  } catch (error) {
    console.error(error);
  }
}
