import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { queryDb } from "../../lib/db";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function adicionarProduto(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  const form = new IncomingForm({ multiples: false, keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao processar o formulário" });
    }
    const nome_produto = fields.nome_produto?.[0] || "";
    const ingredientes = fields.ingredientes?.[0] || "";
    const preco = fields.preco?.[0] || "";
    const categoria_produto = fields.categoria_produto?.[0] || "";
    const descricao = fields.descricao?.[0] || "";
    const fotoFile = files.foto?.[0];
    if (
      !nome_produto ||
      !ingredientes ||
      !preco ||
      !categoria_produto ||
      !descricao ||
      !fotoFile
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios, incluindo a foto" });
    }
    const ext = path.extname(fotoFile.originalFilename);
    const nomeImagem = path.basename(fotoFile.originalFilename, ext) + ext;
    const oldPath = fotoFile.filepath;
    const newPath = path.join(process.cwd(), "public/images", nomeImagem);
    try {
      fs.renameSync(oldPath, newPath);
      await queryDb(
        "INSERT INTO produtos (nome_produto, ingredientes, preco, categoria_produto, descricao, foto) VALUES (?, ?, ?, ?, ?, ?)",
        [
          nome_produto,
          ingredientes,
          preco,
          categoria_produto,
          descricao,
          nomeImagem,
        ]
      );
      res.status(200).json({ message: "Produto adicionado com sucesso" });
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      res
        .status(500)
        .json({ error: `Erro ao adicionar produto: ${error.message}` });
    }
  });
}
