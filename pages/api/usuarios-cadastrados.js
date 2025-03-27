import { connectDb, queryDb } from "../../lib/db";
export default async function usuariosCadastrados(req, res) {
  try {
    const usuarios = await queryDb(
      "SELECT usuario, imagem, ultimo_login FROM login ORDER BY ultimo_login DESC"
    );
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários cadastrados" });
  }
}
