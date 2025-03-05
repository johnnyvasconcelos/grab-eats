import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Método não permitido." });
  }
  const { pedidos, cliente } = req.body;
  if (!pedidos || pedidos.length === 0 || !cliente || !cliente.cpf) {
    return res.status(400).json({
      success: false,
      message: "Dados inválidos ou cliente não encontrado.",
    });
  }
  try {
    const query = `INSERT INTO pedidos (nome, cpf, preco, em_preparo, para_levar, nome_cliente) VALUES (?, ?, ?, ?, ?, ?)`;
    for (const item of pedidos) {
      if (!item.nome || item.preco === undefined) {
        console.error("Item inválido:", item);
        return res
          .status(400)
          .json({ success: false, message: "Item inválido no pedido." });
      }
      const values = [
        item.nome || "Produto Desconhecido",
        cliente.cpf,
        parseFloat(item.preco) || 0,
        item.em_preparo ? 1 : 0,
        item.para_levar ? 1 : 0,
        cliente.nome_cliente || "Nome não informado",
      ];
      await queryDb(query, values);
    }
    return res
      .status(200)
      .json({ success: true, message: "Pedido finalizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir no banco:", error);
    return res.status(500).json({
      success: false,
      message: "Erro ao processar o pedido.",
      error: error.message,
    });
  }
}
