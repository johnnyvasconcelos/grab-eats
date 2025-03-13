import { useEffect, useState } from "react";
import styles from "../../styles/admin.module.css";
import AsideAdmin from "../../components/AsideAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
import PerformanceChart from "../../components/PerformanceChart";
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
              <div class={styles.charts}>
                <article className={styles.chart}>
                  <div className={`${styles.chartContainer} flex`}>
                    <img src="/images/eye.svg" alt="svg ic" />
                    <div class={styles.chartInfo}>
                      <span>Pedidos</span>
                      <h3>123</h3>
                    </div>
                  </div>
                </article>
                <article className={styles.chart}>
                  <div className={`${styles.chartContainer} flex`}>
                    <img src="/images/eye.svg" alt="svg ic" />
                    <div class={styles.chartInfo}>
                      <span>Clientes Novos</span>
                      <h3>123</h3>
                    </div>
                  </div>
                </article>
              </div>
              <div className={styles.charts}>
                <article className={styles.bigChart}>
                  <h3>Lucro</h3>
                  <div className={styles.moneyChart}></div>
                  <div className={styles.moneyInfo}>
                    <div className={styles.data}>
                      <span>Semana Passada</span>
                      <h4>R$ 768,00</h4>
                    </div>
                    <div className={styles.data}>
                      <span>Esta semana</span>
                      <h4>R$ 328,50</h4>
                    </div>
                  </div>
                </article>
                <article className={styles.bigChart}>
                  Performance (Dias da Semana, Mensal)
                  <PerformanceChart />
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
export default PainelAdmin;
