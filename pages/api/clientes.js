import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  const { cpf } = req.query;
  if (!cpf) {
    return res.status(400).json({ error: "CPF não fornecido." });
  }
  try {
    const clientes = await queryDb("SELECT * FROM clientes WHERE cpf = ?", [
      cpf,
    ]);
    if (clientes.length > 0) {
      res.status(200).json(clientes[0]);
    } else {
      res.status(404).json({ error: "Cliente não encontrado." });
    }
  } catch (error) {
    console.error("Erro ao buscar dado de cliente:", error);
    res.status(500).json({ error: "Erro ao buscar dado de cliente" });
  }
}
