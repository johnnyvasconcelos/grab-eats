import { useEffect, useState } from "react";
import styles from "../../../styles/admin.module.css";
import AsideAdmin from "../../../components/AsideAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Head from "next/head";
const vendas = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
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
        <title>Vendas - {nomeRestaurante || "Restaurante"}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={styles.mainAdmin}>
        <div className={styles.containerAdmin}>
          <AsideAdmin activePage="vendas" />
          <div className={styles.contentAdmin}>
            <HeaderAdmin />
            <section className={styles.metrics}>
              <h2>
                <span>Vendas</span>
                <span className={styles.pageInfo}>
                  Vendas &nbsp;&gt;&nbsp; Início
                </span>
              </h2>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default vendas;
