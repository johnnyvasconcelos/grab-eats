import { useEffect, useState } from "react";
import styles from "../../../styles/admin.module.css";
import AsideAdmin from "../../../components/AsideAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Head from "next/head";
const cardapio = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => {
        setNomeRestaurante(data.nome_restaurante);
      })
      .catch(() => setError("Erro ao fazer requisição"));
  }, []);
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("/api/produtos");
        const data = await response.json();
        if (response.ok) {
          setProdutos(data);
        } else {
          console.error("Erro ao buscar produtos:", data.error);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProdutos();
  }, []);
  return (
    <>
      <Head>
        <title>{`Cardápio - ${nomeRestaurante || "Restaurante"}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className={styles.mainAdmin}>
        <div className={styles.containerAdmin}>
          <AsideAdmin activePage="cardapio" />
          <div className={styles.contentAdmin}>
            <HeaderAdmin />
            <section className={styles.metrics}>
              <h2>
                <span>Cardápio</span>
                <span className={styles.pageInfo}>
                  Cardápio &nbsp;&gt;&nbsp; Início
                </span>
              </h2>
              <div className={styles.menuRestaurant}>
                {produtos.map((produto) => (
                  <article
                    key={produto.id}
                    className={styles.menuRestaurantItem}
                  >
                    <div className={styles.menuRestaurantImage}>
                      <img
                        src={`/images/${produto.foto}`}
                        alt={produto.nome_produto}
                      />
                    </div>
                    <div className={styles.menuRestaurantText}>
                      <h2>{produto.nome_produto}</h2>
                      <p>{produto.descricao}</p>
                      <p>{produto.ingredientes}</p>
                      <div className={styles.infoProduct}>
                        <h3>{produto.categoria_produto}</h3>
                        <strong>{produto.preco}</strong>
                      </div>
                    </div>
                    <div className={styles.btns}>
                      <button>Editar</button>
                      <button>Remover</button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default cardapio;
