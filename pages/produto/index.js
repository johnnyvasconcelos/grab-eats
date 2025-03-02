import { useState } from "react";
import Header from "../../components/Header";
import Bag from "../../components/Bag";
import PopUps from "../../components/PopUps";

const ProductItem = () => {
  const [openBag, setOpenBag] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(49.9);

  const addToBag = () => {
    const newItem = { id: Date.now(), price: price, quantity: quantity };
    setBagItems((prevItems) => [...prevItems, newItem]);
    setOpenBag(true);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) => prevPrice - 49.9);
    }
  };

  const handlePlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + 49.9); // Increase price by the base price
  };

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
              <span className="price">R$ {price.toFixed(2)}</span>{" "}
              {/* Preço atualizado */}
              <div className="selector flex">
                <span className="btn minus" onClick={handleMinus}>
                  <img src="/images/minus.svg" alt="minus svg icon" />
                </span>
                <span>{quantity}</span> {/* Exibe a quantidade */}
                <span className="btn plus" onClick={handlePlus}>
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
              Preparado com ingredientes selecionados para proporcionar uma
              refeição marcante e nutritiva. Uma combinação irresistível de
              tradição e força, ideal para quem busca sabor e energia.
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
            <button className="add btn" onClick={addToBag}>
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </main>
      <PopUps />
      <Bag
        openBag={openBag}
        setOpenBag={setOpenBag}
        bagItems={bagItems}
        setBagItems={setBagItems}
      />
    </>
  );
};

export default ProductItem;
