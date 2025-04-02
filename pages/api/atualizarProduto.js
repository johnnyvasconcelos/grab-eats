import { queryDb } from "../../lib/db";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  const uploadDir = path.join(process.cwd(), "public/images");

  try {
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir: uploadDir,
      keepExtensions: true,
      multiples: false,
    });

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const {
      id,
      nome_produto,
      ingredientes,
      preco,
      categoria_produto,
      descricao,
    } = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

    const produtoId = Array.isArray(id)
      ? parseInt(id[0], 10)
      : parseInt(id, 10);

    if (isNaN(produtoId)) {
      console.error("❌ ID do produto é inválido");
      return res.status(400).json({ error: "ID do produto é inválido" });
    }

    let fotoPath = null;
    if (files.foto) {
      const file = files.foto;
      if (Array.isArray(file)) {
        const uploadedFile = file[0];
        fotoPath = uploadedFile.newFilename;
      } else {
        fotoPath = file.newFilename;
      }
    }

    const result = await queryDb(
      "UPDATE produtos SET nome_produto = ?, ingredientes = ?, preco = ?, categoria_produto = ?, descricao = ?, foto = ? WHERE id = ?",
      [
        nome_produto,
        ingredientes,
        preco,
        categoria_produto,
        descricao,
        fotoPath,
        produtoId,
      ]
    );

    if (result.affectedRows > 0) {
      return res
        .status(200)
        .json({ message: "Produto atualizado com sucesso" });
    } else {
      console.error("Erro ao atualizar produto: Nenhuma linha afetada.");
      return res.status(400).json({ error: "Erro ao atualizar produto" });
    }
  } catch (error) {
    console.error("Erro no servidor:", error);
    return res
      .status(500)
      .json({ error: "Erro no servidor", details: error.message });
  }
}
