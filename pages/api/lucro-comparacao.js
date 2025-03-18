import { queryDb } from "../../lib/db";
export default async function lucroComparacao(req, res) {
  try {
    const lucroUltimos30Dias = await queryDb(`
      SELECT COALESCE(SUM(valor_total), 0) AS total 
      FROM pedidos 
      WHERE data_pedido >= CURDATE() - INTERVAL 30 DAY
    `);
    const lucro30DiasAnteriores = await queryDb(`
      SELECT COALESCE(SUM(valor_total), 0) AS total 
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
    }
    res.json({ percentual: percentualCrescimento.toFixed(2) });
  } catch (error) {
    console.error("Erro ao buscar dados do lucro", error);
  }
}
