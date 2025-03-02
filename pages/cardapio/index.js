import Product from "../../components/Product";
import Header from "../../components/Header";
function Cardapio() {
  return (
    <>
      <Header background="/images/banner.jpg" />
      <main className="offers">
        <header className="offers__header">
          <div className="container flex">
            <div className="flex offers__header--info">
              <img src="/images/logo-square.png" alt="logo" />
              <div className="offers__header--title">
                <h1 className="offers__title">Tempero Brasileiro</h1>
                <p className="offers__description">Restaurante</p>
              </div>
            </div>
            <div className="reviews flex btn-min">
              <img src="/images/star-review.svg" alt="star review svg icon" />
              5.0
            </div>
          </div>
          <div className="flex time container open">
            <img src="/images/clock-green.svg" alt="clock time icon svg" />
            <span>Aberto</span>
          </div>
        </header>
        <div className="offers__categories no-scroll">
          <div className="container flex">
            <span className="category check btn-min">Lançamentos</span>
            <span className="category btn-min">Principais</span>
            <span className="category btn-min">Fritas</span>
            <span className="category btn-min">Bebidas</span>
            <span className="category btn-min">Sobremesas</span>
          </div>
        </div>
        <section className="offers__products">
          <div className="container">
            <h2>Lançamentos</h2>
          </div>
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
