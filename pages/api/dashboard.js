import { queryDb } from "../../lib/db";
export default async function dashboard(req, res) {
  try {
    const [lucroHoje, pedidosHoje, lucroComparacao, clientesNovos, maisPedido] =
      await Promise.all([
        queryDb(`
       SELECT SUM(preco) as lucroDiario FROM pedidos WHERE DATE(data_pedido) = CURDATE()
      `),
        queryDb(`
        SELECT COUNT(*) AS total
        FROM pedidos
        WHERE DATE(data_pedido) = CURDATE()
      `),
        queryDb(`
        SELECT COALESCE(SUM(quantidade * preco), 0) AS total
        FROM pedidos
        WHERE data_pedido >= CURDATE() - INTERVAL 30 DAY
      `),
        queryDb(`
        SELECT COALESCE(SUM(quantidade * preco), 0) AS total
        FROM pedidos
        WHERE data_pedido >= CURDATE() - INTERVAL 60 DAY
        AND data_pedido < CURDATE() - INTERVAL 30 DAY
      `),
        queryDb(`
        SELECT COUNT(DISTINCT cpf) AS novos_clientes
        FROM pedidos 
        WHERE DATE(data_pedido) = CURDATE() 
        AND cpf IS NOT NULL 
        AND cpf NOT IN (SELECT DISTINCT cpf FROM pedidos WHERE DATE(data_pedido) < CURDATE())
      `),
        queryDb(`
        SELECT nome, COUNT(*) AS total 
        FROM pedidos 
        WHERE data_pedido >= NOW() - INTERVAL 7 DAY
        GROUP BY nome
        ORDER BY total DESC
        LIMIT 1
      `),
      ]);
    const totalUltimos30Dias = lucroComparacao[0]?.total || 0;
    const total30DiasAnteriores = lucro30DiasAnteriores[0]?.total || 0;
    let percentualCrescimento = 0;
    if (total30DiasAnteriores > 0) {
      percentualCrescimento =
        ((totalUltimos30Dias - total30DiasAnteriores) / total30DiasAnteriores) *
        100;
    } else if (totalUltimos30Dias > 0) {
      percentualCrescimento = 100;
    }
    res.status(200).json({
      lucroHoje: lucroHoje[0]?.lucroDiario || 0,
      pedidosHoje: pedidosHoje[0]?.total || 0,
      percentualCrescimento: Math.round(percentualCrescimento),
      novosClientes: clientesNovos[0]?.novos_clientes || 0,
      pedidoMaisFrequente: maisPedido[0]?.nome || "Nenhum pedido encontrado",
    });
  } catch (error) {
    console.error("Erro ao buscar dados da dashboard:", error);
    res.status(500).json({ error: "Erro ao buscar dados da dashboard" });
  }
}
