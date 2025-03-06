import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Order from "../../components/Order";
import Head from "next/head";
const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch("/api/pedidos");
        if (!response.ok) {
          throw new Error("Erro ao buscar pedidos");
        }
        const data = await response.json();
        setPedidos(data);
      } catch (error) {
        console.error("Erro ao carregar pedidos:", error);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <>
      <Head>
        <title>Meus Pedidos</title>
      </Head>
      <Header pedidos="order" />
      <main className="offers alt">
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>
              <img src="/images/orders.svg" alt="chef svg icon" />
              Meus Pedidos
            </h2>
            <div className="orders flex column">
              {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <Order key={pedido.id} pedido={pedido} />
                ))
              ) : (
                <p className="nothing">Nenhum pedido encontrado.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Pedidos;
