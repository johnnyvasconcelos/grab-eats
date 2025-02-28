import Header from "../../components/Header";
const ProductItem = () => {
  return (
    <>
      <Header background="/images/produto.jpg" prevlink="/cardapio" />
      <main className="offers">
        <header className="offers__header">
          <div className="container">
            <div className="flex offers__header--info">
              <div className="offers__header--title">
                <p className="offers__description">
                  <img src="/images/logo.png" alt="logo" class="small-logo" />
                  Fast Food
                </p>
                <h1 className="offers__title small-title">
                  Mc Oferta Média Big Mc Duplo
                </h1>
              </div>
            </div>
            <div className="flex">
              <span className="price">R$ 39,90</span>
              <div className="selector flex">
                <span>menos</span>
                <span>1</span>
                <span>mais</span>
              </div>
            </div>
          </div>
        </header>
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>Sobre</h2>
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
          <button className="add btn">Adicionar à Sacola</button>
        </div>
      </main>
    </>
  );
};

export default ProductItem;
