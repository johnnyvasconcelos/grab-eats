import { useEffect, useState } from "react";
import styles from "../../styles/admin.module.css";
import AsideAdmin from "../../components/AsideAdmin";
import HeaderAdmin from "../../components/HeaderAdmin";
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
              Métricas e Gráficos: Quantidade de Pedidos; clientes novos; Lucro,
              Performance (Dias da Semana, Mensal)
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
export default PainelAdmin;
