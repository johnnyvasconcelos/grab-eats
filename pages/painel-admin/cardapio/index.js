import { useState, useEffect } from "react";
import styles from "../../../styles/admin.module.css";
import AsideAdmin from "../../../components/AsideAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Head from "next/head";
import EditarProduto from "../../../components/EditarProduto";
import NovoProduto from "../../../components/NovoProduto";
import "boxicons/css/boxicons.min.css";
const Cardapio = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [adicionandoProduto, setAdicionandoProduto] = useState(false);
  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => setNomeRestaurante(data.nome_restaurante))
      .catch(() => console.error("Erro ao buscar restaurante"));
  }, []);
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
  useEffect(() => {
    fetchProdutos();
  }, []);
  const removerProduto = async (id) => {
    if (!window.confirm("Remover este prato?")) {
      return;
    }
    try {
      const response = await fetch("/api/removerProduto", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      location.reload();
      if (!response.ok) {
        alert(`Erro ao remover: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      alert("Erro ao remover produto");
    }
  };
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
                      <h2 className={styles.titleProduct}>
                        {produto.nome_produto}
                      </h2>
                      <h3 className={styles.categoryProduct}>
                        {produto.categoria_produto}
                      </h3>
                      <p className={styles.description}>{produto.descricao}</p>
                      <p className={styles.ingredients}>
                        {produto.ingredientes
                          .split(",")
                          .map((ingrediente, index, array) => (
                            <span key={index}>
                              • {ingrediente.trim()}
                              {index < array.length - 1 ? ", " : ""}
                            </span>
                          ))}
                      </p>
                      <div className={styles.infoProduct}>
                        <strong className={styles.productPrice}>
                          {produto.preco}
                        </strong>
                      </div>
                      <div className={styles.btns}>
                        <button
                          className={styles.ed}
                          onClick={() => setProdutoEditando(produto)}
                        >
                          Editar <i className={`${styles.ic} bx bx-pencil`}></i>
                        </button>
                        <button
                          className={styles.rm}
                          onClick={() => removerProduto(produto.id)}
                        >
                          Remover <i className={`${styles.ic} bx bx-trash`}></i>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {produtoEditando && (
                <EditarProduto
                  produto={produtoEditando}
                  onClose={() => setProdutoEditando(null)}
                  onUpdate={fetchProdutos}
                />
              )}
              {adicionandoProduto && (
                <NovoProduto
                  onClose={() => setAdicionandoProduto(false)}
                  onUpdate={fetchProdutos}
                />
              )}
              <div className={styles.newProductArea}>
                <button
                  className={`btn flex ${styles.newProduct}`}
                  onClick={() => setAdicionandoProduto(true)}
                >
                  <span>Novo Prato</span>
                  <i className="bx bx-plus"></i>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default Cardapio;
