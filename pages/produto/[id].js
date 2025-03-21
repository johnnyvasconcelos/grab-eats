import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Bag from "../../components/Bag";
import { connectDb } from "../../lib/db";
const ProductItem = ({ product }) => {
  const [openBag, setOpenBag] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(parseFloat(product.preco) || 0);
  useEffect(() => {
    setPrice((parseFloat(product.preco) || 0) * quantity);
  }, [quantity, product.preco]);
  const formatPrice = (price) =>
    isNaN(price) ? "R$ 0,00" : price.toFixed(2).replace(".", ",");
  const addToBag = () => {
    setOpenBag(true);
    const newItem = {
      id: product.id,
      nomeProduto: product.nome_produto,
      price: parseFloat(product.preco),
      foto: product.foto,
      quantity: quantity,
    };
    const storedItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    const existingItemIndex = storedItems.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      storedItems[existingItemIndex].quantity += quantity;
    } else {
      storedItems.push(newItem);
    }
    localStorage.setItem("bagItems", JSON.stringify(storedItems));
    window.dispatchEvent(new Event("storage"));
  };
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    const updateBag = () => {
      const storedItems = JSON.parse(localStorage.getItem("bagItems")) || [];
      setBagItems(storedItems);
    };
    window.addEventListener("storage", updateBag);
    return () => window.removeEventListener("storage", updateBag);
  }, []);
  return (
    <>
      <Head>
        <title>{product.nome_produto}</title>
      </Head>
      <Header background={`/images/${product.foto}`} />
      <main className="offers offers--alt">
        <header className="offers__header">
          <div className="container">
            <div className="flex offers__header--info">
              <div className="offers__title--alt">
                <p className="offers__description flex">
                  <img
                    src="/images/small-logo.png"
                    alt="logo"
                    className="small-logo"
                  />
                  {product.categoria_produto}
                </p>
                <h1 className="offers__h1 offers__h1--alt">
                  {product.nome_produto}
                </h1>
              </div>
            </div>
            <div className="flex price-info">
              <span className="price">R$ {formatPrice(price)}</span>
              <div className="selector flex">
                <span
                  className="btn minus"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <img src="/images/minus.svg" alt="minus" />
                </span>
                <span>{quantity}</span>
                <span
                  className="btn plus"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <img src="/images/plus.svg" alt="plus" />
                </span>
              </div>
            </div>
          </div>
        </header>
        <section className="offers__products offers__description--text">
          <div className="container">
            <h2>Descrição</h2>
            <p>{product.descricao}</p>
          </div>
        </section>
        <section className="offers__products offers__description--list">
          <div className="container">
            <h2>
              <img src="/images/chef.svg" alt="chef hat" /> Ingredientes
            </h2>
            <ul>
              {product.ingredientes ? (
                product.ingredientes
                  .split(",")
                  .map((ing, i) => <li key={i}>{ing.trim()}</li>)
              ) : (
                <p>Ingredientes não disponíveis ainda... :/</p>
              )}
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
      <Bag openBag={openBag} setOpenBag={setOpenBag} />
    </>
  );
};
export async function getServerSideProps({ query }) {
  const connection = await connectDb();
  const [rows] = await connection.execute(
    "SELECT * FROM produtos WHERE id = ?",
    [query.id]
  );
  return rows.length ? { props: { product: rows[0] } } : { notFound: true };
}
export default ProductItem;
