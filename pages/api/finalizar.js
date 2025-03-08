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
    const produtosResponse = await fetch("http://localhost:3000/api/produtos");
    const produtos = await produtosResponse.json();
    if (!Array.isArray(produtos)) {
      throw new Error("Resposta inesperada da API de produtos");
    }
    const normalizarTexto = (texto) => {
      return texto
        ? texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toLowerCase()
        : "";
    };
    const query = `INSERT INTO pedidos (nome, cpf, preco, quantidade, em_preparo, para_levar, nome_cliente, mesa, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    for (const item of pedidos) {
      if (!item.nome || item.preco === undefined) {
        console.error("Item inválido:", item);
        return res
          .status(400)
          .json({ success: false, message: "Item inválido no pedido." });
      }
      const produtoEncontrado = produtos.find(
        (p) =>
          p.nome_produto &&
          normalizarTexto(p.nome_produto) === normalizarTexto(item.nome)
      );
      const nomeProdutoFinal = item.nome;
      const fotoProdutoFinal = item.foto || "pedido.jpg";
      const values = [
        nomeProdutoFinal,
        cliente.cpf,
        parseFloat(item.preco),
        item.quantity || 1,
        1,
        item.para_levar ? 1 : 0,
        cliente.nome_cliente || "Nome não informado",
        cliente.mesa || "Mesa não informada",
        fotoProdutoFinal,
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
