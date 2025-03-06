import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome_produto, nome_cliente, cpf_cliente, total, pendente } =
      req.body;
    if (!nome_produto || !nome_cliente || !cpf_cliente || !total || !pendente) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }
    try {
      const result = await queryDb(
        `
        INSERT INTO log_pedidos (nome_produto, nome_cliente, cpf_cliente, total, pendente)
        VALUES (?, ?, ?, ?, ?)
      `,
        [nome_produto, nome_cliente, cpf_cliente, total, pendente]
      );
      return res
        .status(200)
        .json({ message: "Pedido registrado com sucesso", data: result });
    } catch (error) {
      console.error("Erro ao registrar pedido no log:", error);
      return res
        .status(500)
        .json({ message: "Erro interno ao registrar pedido." });
    }
  } else {
    return res.status(405).json({ message: "Método não permitido" });
  }
}
