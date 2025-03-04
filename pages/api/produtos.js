import { queryDb } from "../../lib/db";
export default async function handler(req, res) {
  try {
    const produtos = await queryDb("SELECT * FROM produtos");
    console.log("Produtos recuperados:", produtos);
    produtos.forEach((produto) => {
      console.log(`Nome Produto: ${produto.nome_produto}`);
      if (
        produto.nome_produto.includes("Æ") ||
        produto.nome_produto.includes("ç")
      ) {
        console.log("Erro no produto:", produto.nome_produto);
      }
    });
    if (produtos.length > 0) {
      res.status(200).json(produtos);
    } else {
      res.status(404).json({ error: "Nenhum produto encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar dados de produtos:", error);
    res.status(500).json({ error: "Erro ao buscar dados de produtos" });
  }
}
