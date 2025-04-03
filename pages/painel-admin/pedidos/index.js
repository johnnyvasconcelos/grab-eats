import { useEffect, useState } from "react";
import styles from "../../../styles/admin.module.css";
import AsideAdmin from "../../../components/AsideAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Head from "next/head";

const pedidos = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [pedidosAgrupados, setPedidosAgrupados] = useState({});

  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => setNomeRestaurante(data.nome_restaurante))
      .catch(() => setError("Erro ao fazer requisição"));
  }, []);

  useEffect(() => {
    fetch("/api/pedidos")
      .then((response) => response.json())
      .then((data) => {
        const agrupados = data.reduce((acc, pedido) => {
          const chave = `${pedido.cpf}-${pedido.nome_cliente}-${pedido.data_pedido}`;
          if (!acc[chave]) {
            acc[chave] = {
              nome_cliente: pedido.nome_cliente,
              cpf: pedido.cpf,
              data_pedido: pedido.data_pedido,
              mesa: pedido.mesa,
              para_levar: pedido.para_levar,
              itens: [],
            };
          }
          acc[chave].itens.push({
            nome: pedido.nome,
            quantidade: pedido.quantidade,
          });
          return acc;
        }, {});
        setPedidosAgrupados(agrupados);
      })
      .catch((error) => console.error("Erro ao buscar pedidos:", error));
  }, []);

  return (
    <>
      <Head>
        <title>{`Pedidos - ${nomeRestaurante || "Restaurante"}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className={styles.mainAdmin}>
        <div className={styles.containerAdmin}>
          <AsideAdmin activePage="pedidos" />
          <div className={styles.contentAdmin}>
            <HeaderAdmin />
            <section className={styles.metrics}>
              <h2>
                <span>Pedidos</span>
                <span className={styles.pageInfo}>
                  Pedidos &nbsp;&gt;&nbsp; Início
                </span>
              </h2>
              <div className={styles.adminPedidos}>
                {Object.values(pedidosAgrupados).map((pedido, index) => (
                  <article key={index} className={styles.adminPedido}>
                    <ul>
                      {pedido.itens.map((item, i) => (
                        <li key={i}>
                          <strong className={styles.pedidoQuantidade}>
                            {item.quantidade}
                          </strong>{" "}
                          {item.nome}
                        </li>
                      ))}
                    </ul>
                    <h3>Pedido de {pedido.nome_cliente}</h3>
                    <strong>Mesa: {pedido.mesa}</strong>
                    <div className={`flex ${styles.pedidoRodape}`}>
                      <p>Data e Hora do Pedido: {pedido.data_pedido}</p>
                      <p>Para Levar: {pedido.para_levar ? "Sim" : "Não"}</p>
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

export default pedidos;
