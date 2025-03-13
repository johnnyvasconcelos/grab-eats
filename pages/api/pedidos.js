import { queryDb } from "../../lib/db";
export default async function pedidos(req, res) {
  try {
    const pedidos = await queryDb("SELECT * FROM pedidos");
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
