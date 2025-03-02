import Header from "../../components/Header";
import Bag from "../../components/Bag";
import PopUps from "../../components/PopUps";
const ProductItem = () => {
  return (
    <>
      <Header background="/images/banner-produto.jpg" />
      <main className="offers alt">
        <header className="offers__header">
          <div className="container">
            <div className="flex offers__header--info">
              <div className="offers__header--title">
                <p className="offers__description flex">
                  <img
                    src="/images/logo-square.png"
                    alt="logo"
                    className="small-logo"
                  />
                  Restaurante
                </p>
                <h1 className="offers__title">
                  Oferta Macarrão Preço Médio sem Massa com Casca de Caju Frita
                  no Shoyu e Caldo de Laranja
                </h1>
              </div>
            </div>
            <div className="flex price-info">
              <span className="price">R$ 49,90</span>
              <div className="selector flex">
                <span className="btn">
                  <img src="/images/minus.svg" alt="minus svg icon" />
                </span>
                <span>1</span>
                <span className="btn">
                  <img src="/images/plus.svg" alt="plus svg icon" />
                </span>
              </div>
            </div>
          </div>
        </header>
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>Descrição</h2>
            <p>
              Pensa num prato gostoso, tão bão que dá até caimbra no buxo, pede
              logo essa caceta porque tá barata! Acompanha whey protein.
            </p>
          </div>
        </section>
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>
              <img src="/images/chef.svg" alt="chef svg icon" />
              Ingredientes
            </h2>
            <ul className="ingredients--list">
              <li>Quatro Hambúrgueres de carne bovina</li>
              <li>Alface americana</li>
              <li>Queijo processado sabor cheddar</li>
              <li>Molho especial</li>
              <li>Cebola</li>
              <li>Picles</li>
              <li>Pão com gergilim</li>
            </ul>
          </div>
        </section>
        <div className="footer-area">
          <div className="container">
            <button className="add btn">Adicionar à Sacola</button>
          </div>
        </div>
      </main>
      <PopUps />
      <Bag />
    </>
  );
};
export default ProductItem;
