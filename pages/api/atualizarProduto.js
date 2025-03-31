import { connectDb, queryDb } from "../../lib/db";
import fs from "fs";
import path from "path";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  try {
    const data = req.body;
    const { nome_produto, ingredientes, preco, categoria_produto, descricao } =
      data;
    let fotoPath = data.foto;
    if (req.files?.foto) {
      const file = req.files.foto;
      const uploadDir = path.join(process.cwd(), "public/images");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const newFileName = `${Date.now()}_${file.name}`;
      const newPath = path.join(uploadDir, newFileName);
      try {
        fs.writeFileSync(newPath, file.data);
        fotoPath = newFileName;
      } catch (error) {
        return res.status(500).json({ error: "Erro ao salvar a imagem" });
      }
    }
    const result = await queryDb(
      "UPDATE produtos SET nome_produto = ?, ingredientes = ?, preco = ?, categoria_produto = ?, descricao = ?, foto = ? WHERE nome_produto = ?",
      [
        nome_produto,
        ingredientes,
        preco,
        categoria_produto,
        descricao,
        fotoPath,
        nome_produto,
      ]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } else {
      res.status(400).json({ error: "Erro ao atualizar produto" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor", details: error.message });
  }
}
