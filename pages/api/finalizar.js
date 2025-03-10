import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Método não permitido." });
  }
  const { pedidos, debug } = req.body;
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Pedido inválido." });
  }
  try {
    const query = `INSERT INTO pedidos (nome, cpf, preco, quantidade, mesa, para_levar, nome_cliente, foto, status, em_preparo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    for (const item of pedidos) {
      const values = [
        item.nome || "Produto sem nome",
        item.cpf || "cpf do cliente não informado",
        parseFloat(item.preco) || 0,
        item.quantidade || 1,
        item.mesa || "Mesa não informada",
        item.para_levar ? 1 : 0,
        item.nome_cliente || "Nome do cliente não informado",
        item.foto || "pedido.jpg",
        item.status || "pendente",
        item.em_preparo || 1,
      ];
      console.log("SQL Query:", query);
      console.log("Valores sendo enviados:", values);
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
