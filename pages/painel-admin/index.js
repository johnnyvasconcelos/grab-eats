import { useEffect, useState } from "react";
import styles from "../../styles/admin.module.css";
import AsideAdmin from "../../components/AsideAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import PerformanceChart from "../../components/PerformanceChart";
import MoneyChart from "../../components/MoneyChart";
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
              <h2>Métricas</h2>
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
                      <h3>X Queijo</h3>
                    </div>
                  </div>
                </article>
              </div>
              <div className={`${styles.charts} ${styles.bigCharts}`}>
                <MoneyChart />
                <PerformanceChart />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
export default PainelAdmin;
