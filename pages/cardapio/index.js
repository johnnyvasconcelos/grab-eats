import React, { useState } from "react";
import Product from "../../components/Product";
import Header from "../../components/Header";
function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState("Lançamentos");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
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
            <span
              className={`category ${
                selectedCategory === "Lançamentos" ? "check" : ""
              } btn-min`}
              onClick={() => handleCategoryClick("Lançamentos")}
            >
              Lançamentos
            </span>
            <span
              className={`category ${
                selectedCategory === "Principais" ? "check" : ""
              } btn-min`}
              onClick={() => handleCategoryClick("Principais")}
            >
              Principais
            </span>
            <span
              className={`category ${
                selectedCategory === "Fritas" ? "check" : ""
              } btn-min`}
              onClick={() => handleCategoryClick("Fritas")}
            >
              Fritas
            </span>
            <span
              className={`category ${
                selectedCategory === "Bebidas" ? "check" : ""
              } btn-min`}
              onClick={() => handleCategoryClick("Bebidas")}
            >
              Bebidas
            </span>
            <span
              className={`category ${
                selectedCategory === "Sobremesas" ? "check" : ""
              } btn-min`}
              onClick={() => handleCategoryClick("Sobremesas")}
            >
              Sobremesas
            </span>
          </div>
        </div>
        <section className="offers__products">
          <div className="container">
            <h2>{selectedCategory}</h2>
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
