import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Bag from "../../components/Bag";
import PopUps from "../../components/PopUps";
import { connectDb } from "../../lib/db";
const ProductItem = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  const [openBag, setOpenBag] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.preco);
  const [categoria, setCategoria] = useState(product.categoria_produto);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (id) {
      setPrice(product.preco * quantity);
    }
  }, [id, quantity]);
  const addToBag = () => {
    const newItem = { id: Date.now(), price: price, quantity: quantity };
    setBagItems((prevItems) => [...prevItems, newItem]);
    setOpenBag(true);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) => prevPrice - product.preco);
    }
  };
  const handlePlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + product.preco);
  };
  const ingredientsList = product.ingredientes
    ? product.ingredientes.split(",")
    : [];
  return (
    <>
      <Head>
        <title>{product.nome_produto}</title>
      </Head>
      <Header background={`/images/${product.foto}`} />
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
                  {product.categoria_produto}
                </p>
                <h1 className="offers__title">{product.nome_produto}</h1>{" "}
              </div>
            </div>
            <div className="flex price-info">
              <span className="price">R$ {price}</span>{" "}
              <div className="selector flex">
                <span className="btn minus" onClick={handleMinus}>
                  <img src="/images/minus.svg" alt="minus svg icon" />
                </span>
                <span>{quantity}</span>
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
            <p>{product.descricao}</p>
          </div>
        </section>
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>
              <img src="/images/chef.svg" alt="chef hat svg" />
              Ingredientes
            </h2>
            <ul>
              {ingredientsList.length > 0 ? (
                ingredientsList.map((ingredient, index) => (
                  <li key={index}>{ingredient.trim()}</li>
                ))
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
export async function getServerSideProps(context) {
  const { id } = context.query;
  const connection = await connectDb();
  const [rows] = await connection.execute(
    "SELECT * FROM produtos WHERE id = ?",
    [id]
  );
  if (rows.length === 0) {
    return {
      notFound: true,
    };
  }
  const product = rows[0];

  return {
    props: { product },
  };
}
export default ProductItem;
