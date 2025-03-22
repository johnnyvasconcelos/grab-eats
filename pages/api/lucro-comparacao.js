import { queryDb } from "../../lib/db";
export default async function lucroComparacao(req, res) {
  try {
    const lucroUltimos30Dias = await queryDb(`
      SELECT COALESCE(SUM(quantidade * preco), 0) AS total
      FROM pedidos
      WHERE data_pedido >= CURDATE() - INTERVAL 30 DAY
    `);
    const lucro30DiasAnteriores = await queryDb(`
      SELECT COALESCE(SUM(quantidade * preco), 0) AS total
      FROM pedidos
      WHERE data_pedido >= CURDATE() - INTERVAL 60 DAY
      AND data_pedido < CURDATE() - INTERVAL 30 DAY
    `);
    const totalUltimos30Dias = lucroUltimos30Dias[0].total;
    const total30DiasAnteriores = lucro30DiasAnteriores[0].total;
    let percentualCrescimento = 0;
    if (total30DiasAnteriores > 0) {
      percentualCrescimento =
        ((totalUltimos30Dias - total30DiasAnteriores) / total30DiasAnteriores) *
        100;
    } else if (totalUltimos30Dias > 0) {
      percentualCrescimento = 100;
    }
    res.json({ percentual: Math.round(percentualCrescimento) });
  } catch (error) {
    console.error("Erro ao buscar dados do lucro", error);
    res.status(500).json({ error: "Erro interno ao calcular lucro" });
  }
}
