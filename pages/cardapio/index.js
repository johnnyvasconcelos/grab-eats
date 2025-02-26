import Link from "next/link";
import Product from "../../components/Product";
import Header from "../../components/Header";
function Cardapio() {
  return (
    <>
      <Header />
      <main className="offers">
        <header className="offers__header">
          <div className="container flex">
            <div className="flex offers__header--info">
              <img src="/images/logo.png" alt="logo" />
              <div className="offers__header--title">
                <h1 className="offers__title">Grap Eats</h1>
                <p className="offers__description">Fast Food</p>
              </div>
            </div>
            <div className="reviews">
              <span>star</span>5.0
            </div>
          </div>
          <div className="flex time">
            <span>relógio</span>Aberto
          </div>
        </header>
        <div className="offers__categories">
          <div className="container">
            <span className="check">Lançamentos</span>
            <span>Lanches</span>
            <span>Fritas</span>
            <span>Bebidas</span>
            <span>Sobremesas</span>
          </div>
        </div>
        <section className="offers__products container">
          <h2>Lançamentos</h2>
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </main>
    </>
  );
}
export default Cardapio;
