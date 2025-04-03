import { queryDb } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cpf, em_preparo } = req.body;
    if (!cpf || em_preparo === undefined) {
      return res.status(400).json({ error: "Dados inválidos" });
    }

    try {
      await queryDb("UPDATE pedidos SET em_preparo = ? WHERE cpf = ?", [
        em_preparo,
        cpf,
      ]);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar pedido" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
