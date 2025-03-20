import { useEffect, useState } from "react";
import styles from "../../styles/admin.module.css";
import AsideAdmin from "../../components/AsideAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import MoneyChart from "../../components/MoneyChart";
import OrderChart from "../../components/OrderChart";
import Head from "next/head";
function PainelAdmin() {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [lucroDiario, setLucroDiario] = useState("");
  const [pedidosHoje, setPedidosHoje] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => {
        setNomeRestaurante(data.nome_restaurante);
      })
      .catch(() => setError("Erro ao fazer requisição"));
  }, []);
  useEffect(() => {
    fetch("/api/lucro-hoje")
      .then((res) => res.json())
      .then((data) => {
        setLucroDiario(Math.floor(data.preco));
      })
      .catch(() => setError("Erro ao buscar lucro diário"));
  }, []);
  useEffect(() => {
    fetch("/api/pedidos-hoje")
      .then((res) => res.json())
      .then((data) => {
        setPedidosHoje(data);
      })
      .catch(() => setError("Erro ao buscar pedidos diários"));
  }, []);
  const [percentualCrescimento, setPercentualCrescimento] = useState(null);
  useEffect(() => {
    fetch("/api/lucro-comparacao")
      .then((res) => res.json())
      .then((data) => {
        setPercentualCrescimento(data.percentual);
      })
      .catch(() => setError("Erro ao buscar comparação de lucro"));
  }, []);
  const [novosClientes, setNovosClientes] = useState(0);
  useEffect(() => {
    fetch("/api/clientes-novos")
      .then((res) => res.json())
      .then((data) => {
        setNovosClientes(data.novosClientes);
      })
      .catch(() => setError("Erro ao buscar novos clientes"));
  }, []);
  const [maisPedido, setMaisPedido] = useState("");
  useEffect(() => {
    fetch("/api/mais-pedido")
      .then((res) => res.json())
      .then((data) => {
        setMaisPedido(data.nome_pedido);
      })
      .catch(() => setError("Erro ao buscar o pedido mais solicitado"));
  }, []);
  return (
    <>
      <Head>
        <title>
          Painel Administrativo - {nomeRestaurante || "Restaurante"}
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={styles.mainAdmin}>
        <div className={styles.containerAdmin}>
          <AsideAdmin activePage="inicio" />
          <div className={styles.contentAdmin}>
            <HeaderAdmin />
            <section className={styles.metrics}>
              <h2>
                <span>Métricas</span>
                <span className={styles.pageInfo}>
                  Dashboard &nbsp;&gt;&nbsp; Início
                </span>
              </h2>
              <div className={styles.charts}>
                <article className={`${styles.chart} ${styles.largeChart}`}>
                  <div className={`${styles.chartContainer} flex`}>
                    <div className={styles.textArea}>
                      <h2 className={styles.title}>Bem-vindo(a), Fonseca!</h2>
                      <span>
                        {percentualCrescimento > 0
                          ? `O restaurante lucrou ${percentualCrescimento}% a mais que no mês passado. Parabéns!`
                          : percentualCrescimento < 0
                          ? `O restaurante teve uma queda de ${Math.abs(
                              percentualCrescimento
                            )}% em relação ao mês passado!`
                          : `O lucro permaneceu o mesmo em relação ao mês passado!`}
                      </span>
                      <div className={styles.chartMetrics}>
                        <div className={styles.chartMetric}>
                          <h3>
                            {pedidosHoje}
                            <img src="/images/chartUp.svg" alt="sv ic" />
                          </h3>
                          <span>Pedidos de Hoje</span>
                        </div>
                        <div className={styles.chartMetric}>
                          <h3>
                            R$ {lucroDiario}
                            <img src="/images/chartUp.svg" alt="sv ic" />
                          </h3>
                          <span>Lucro</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.image}>
                      <img src="/images/woman-market.webp" alt="ic svg" />
                    </div>
                  </div>
                </article>
              </div>
              <div className={styles.charts}>
                <article className={`${styles.chart} ${styles.minChart}`}>
                  <div className={`${styles.chartContainer} flex`}>
                    <div className={`${styles.icon} ${styles.clientPlus}`}>
                      <img src="/images/client-plus.svg" alt="svg ic" />
                    </div>
                    <div className={styles.chartInfo}>
                      <span>Novos Clientes</span>
                      <h3>{novosClientes}</h3>
                    </div>
                  </div>
                </article>
                <article className={`${styles.chart} ${styles.minChart}`}>
                  <div className={`${styles.chartContainer} flex`}>
                    <div className={`${styles.icon} ${styles.mostRequested}`}>
                      <img src="/images/most-requested.svg" alt="svg ic" />
                    </div>
                    <div className={`${styles.chartInfo} ${styles.longTitle}`}>
                      <span>Mais Pedido</span>
                      <h3>{maisPedido}</h3>
                    </div>
                  </div>
                </article>
              </div>
              <div className={`${styles.charts} ${styles.bigCharts}`}>
                <MoneyChart />
                <OrderChart />
              </div>
              <div className={`${styles.charts} ${styles.bigCharts}`}>
                <div className={styles.largeChart}>
                  <div className={`${styles.chart} ${styles.tableChart}`}>
                    <h3>Usuários Cadastrados</h3>
                    <table>
                      <thead>
                        <tr>
                          <th className={styles.noneMobile}>id</th>
                          <th className={styles.noneMobile}>image</th>
                          <th>nome</th>
                          <th className={styles.noneMobile}>usuário</th>
                          <th>último login</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={styles.noneMobile}>#1</td>
                          <td className={styles.noneMobile}>
                            <img src="/images/user.jpg" alt="img user" />
                          </td>
                          <td>Rodrigo</td>
                          <td className={styles.noneMobile}>rodrigo01</td>
                          <td>10-11-24</td>
                        </tr>
                        <tr>
                          <td className={styles.noneMobile}>#1</td>
                          <td className={styles.noneMobile}>
                            <img src="/images/user.jpg" alt="img user" />
                          </td>
                          <td>Rodrigo</td>
                          <td className={styles.noneMobile}>rodrigo01</td>
                          <td>10-11-24</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
export default PainelAdmin;
