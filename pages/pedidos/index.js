import Header from "../../components/Header";
import Order from "../../components/Order";
import Head from "next/head";
const Pedidos = () => {
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
              <Order preparing="true" />
              <Order preparing="false" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Pedidos;
