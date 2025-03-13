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
                <article className={`${styles.chart} ${styles.minChart}`}>
                  <div className={`${styles.chartContainer} flex`}>
                    <img src="/images/chart.svg" alt="svg ic" />
                    <div className={styles.chartInfo}>
                      <span>Pedidos (Hoje)</span>
                      <h3>123</h3>
                    </div>
                  </div>
                </article>
                <article className={`${styles.chart} ${styles.minChart}`}>
                  <div className={`${styles.chartContainer} flex`}>
                    <img src="/images/client-plus.svg" alt="svg ic" />
                    <div className={styles.chartInfo}>
                      <span>Clientes Novos</span>
                      <h3>123</h3>
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
