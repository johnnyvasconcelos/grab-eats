import { useEffect, useState } from "react";
import styles from "../../styles/admin.module.css";
import AsideAdmin from "../../components/AsideAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import PerformanceChart from "../../components/PerformanceChart";
import MoneyChart from "../../components/MoneyChart";
import OrderChart from "../../components/OrderChart";
import Head from "next/head";
function PainelAdmin() {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => {
        setNomeRestaurante(data.nome_restaurante);
      })
      .catch(() => setError("Erro ao fazer requisição"));
  }, []);
  return (
    <>
      <Head>
        <title>Painel Administrativo - {nomeRestaurante}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={styles.mainAdmin}>
        <div className={styles.containerAdmin}>
          <AsideAdmin />
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
                        O restaurante lucrou 49% a mais que no mês passado.
                        Parabéns!
                      </span>
                      <div className={styles.chartMetrics}>
                        <div className={styles.chartMetric}>
                          <h3>
                            22
                            <img src="/images/chartUp.svg" alt="sv ic" />
                          </h3>
                          <span>Pedidos de Hoje</span>
                        </div>
                        <div className={styles.chartMetric}>
                          <h3>
                            $4878
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
                      <h3>123</h3>
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
                      <h3>X Queijo Catupiry</h3>
                    </div>
                  </div>
                </article>
              </div>
              <div className={`${styles.charts} ${styles.bigCharts}`}>
                <MoneyChart />
                <OrderChart />
              </div>
              <div className={`${styles.charts} ${styles.bigCharts}`}>
                <PerformanceChart />
              </div>
              <div className={styles.charts}>
                <div className={styles.largeChart}>
                  <div className={`${styles.chart} ${styles.tableChart}`}>
                    <h2>Usuários Cadastrados</h2>
                    <table>
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>image</th>
                          <th>nome</th>
                          <th>nome de usuário</th>
                          <th>último login</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1</td>
                          <td>
                            <img src="/images/user.jpg" alt="img user" />
                          </td>
                          <td>Rodrigo</td>
                          <td>rodrigo01</td>
                          <td>10-11-24</td>
                        </tr>
                        <tr>
                          <td>#2</td>
                          <td>
                            <img src="/images/user.jpg" alt="img user" />
                          </td>
                          <td>Vitória</td>
                          <td>votoria_silva</td>
                          <td>10-10-24</td>
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
