import { queryDb } from "../../lib/db";
export default async function pedidosHoje(req, res) {
  try {
    const pedidos = await queryDb(`
      SELECT SUM(preco) as lucroDiario FROM pedidos WHERE DATE(data_pedido) = CURDATE()
    `);
    if (pedidos.length > 0 && pedidos[0].lucroDiario !== null) {
      res.status(200).json({ preco: pedidos[0].lucroDiario });
    } else {
      res.status(200).json({ preco: 0 });
    }
  } catch (error) {
    console.log(error);
  }
}
