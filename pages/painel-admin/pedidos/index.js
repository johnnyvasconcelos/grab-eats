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
      .catch(() => console.error("Erro ao buscar nome do restaurante"));
  }, []);

  useEffect(() => {
    fetch("/api/pedidos")
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) return;
        const agrupados = data.reduce((acc, pedido) => {
          const chave = `${pedido.cpf}-${pedido.nome_cliente}-${pedido.data_pedido}`;
          if (!acc[chave]) {
            acc[chave] = {
              nome_cliente: pedido.nome_cliente,
              cpf: pedido.cpf,
              data_pedido: pedido.data_pedido,
              mesa: pedido.mesa,
              para_levar: pedido.para_levar,
              em_preparo: pedido.em_preparo,
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

  const atualizarPreparo = (cpf, valor) => {
    fetch("/api/emPreparo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cpf, em_preparo: valor }),
    })
      .then((res) => res.json())
      .then(() => {
        setPedidosAgrupados((prev) => {
          const atualizado = { ...prev };
          if (atualizado[`${cpf}`]) {
            atualizado[`${cpf}`].em_preparo = valor;
          }
          return atualizado;
        });
      })
      .catch(() => console.error("Erro ao atualizar o status do pedido"));
  };

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
                {Object.values(pedidosAgrupados || {}).map((pedido, index) => (
                  <article
                    key={index}
                    className={`${styles.adminPedido} ${
                      pedido.em_preparo ? styles.preparando : styles.completo
                    }`}
                  >
                    <p>Pedido de {pedido.nome_cliente}</p>
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
                    <strong>Mesa: {pedido.mesa}</strong>
                    <div className={`flex ${styles.pedidoRodape}`}>
                      <p>Para Levar: {pedido.para_levar ? "Sim" : "Não"}</p>
                      <p>Data e Hora do Pedido: {pedido.data_pedido}</p>
                    </div>
                    <select
                      value={pedido.em_preparo}
                      onChange={(e) =>
                        atualizarPreparo(pedido.cpf, Number(e.target.value))
                      }
                    >
                      <option value="0">Preparando</option>
                      <option value="1">Concluído</option>
                    </select>
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
