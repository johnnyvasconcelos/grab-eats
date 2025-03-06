import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, cpf } = req.body;
    if (!nome || !cpf) {
      return res.status(400).json({ message: "Nome e CPF são obrigatórios." });
    }
    try {
      const clientExists = await queryDb(
        "SELECT * FROM clientes WHERE cpf = ?",
        [cpf]
      );
      if (clientExists.length > 0) {
        return res.status(200).json({ message: "Cliente já registrado." });
      }
      const result = await queryDb(
        "INSERT INTO clientes (nome, cpf) VALUES (?, ?)",
        [nome, cpf]
      );
      return res
        .status(201)
        .json({ message: "Cliente registrado com sucesso.", data: result });
    } catch (error) {
      console.error("Erro ao registrar cliente:", error);
      return res
        .status(500)
        .json({ message: "Erro interno ao registrar cliente." });
    }
  } else {
    return res.status(405).json({ message: "Método não permitido." });
  }
}
