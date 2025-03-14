import { useEffect, useState } from "react";
import Bag from "./Bag";
const Order = ({ pedido }) => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [error, setError] = useState(null);
  const [openBag, setOpenBag] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    const fetchRestauranteData = async () => {
      try {
        const res = await fetch("/api/restaurante");
        const data = await res.json();
        if (res.ok) {
          setNomeRestaurante(data.nome_restaurante);
        } else {
          setError(data.error || "Erro desconhecido");
          console.error("Erro ao buscar dados:", data.error);
        }
      } catch (error) {
        setError("Erro ao buscar dados");
      }
    };
    fetchRestauranteData();
  }, []);
  const addToBag = async () => {
    try {
      const res = await fetch("/api/produtos");
      const produtos = await res.json();
      if (!res.ok) throw new Error("Erro ao buscar produtos");
      const produtoEncontrado = produtos.find(
        (produto) => produto.nome_produto === pedido.nome
      );
      if (!produtoEncontrado) throw new Error("Produto não encontrado");
      let storedItems = JSON.parse(localStorage.getItem("bagItems")) || [];
      const newItem = {
        id: produtoEncontrado.id, // ID correto do produto
        nomeProduto: pedido.nome,
        foto: pedido.foto,
        price: pedido.preco,
        quantity: 1,
      };
      const existingItemIndex = storedItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        storedItems[existingItemIndex].quantity += 1;
      } else {
        storedItems.push(newItem);
      }
      localStorage.setItem("bagItems", JSON.stringify(storedItems));
      setBagItems([...storedItems]);
      window.dispatchEvent(new Event("storage"));
      setOpenBag(true);
    } catch (error) {
      console.error("Erro ao adicionar à sacola:", error);
    }
  };
  return (
    <>
      <article className="order">
        <span
          className={`preparing ${
            pedido.em_preparo == "1" ? "preparing-true" : "preparing-false"
          }`}
        >
          {pedido.em_preparo == "1" ? "Em Preparo" : "Finalizado"}
        </span>
        <div className="order__logo">
          <img src="/images/logo-square.png" alt={`logo ${nomeRestaurante}`} />
          {nomeRestaurante}
        </div>
        <div className="order__name flex">
          <span className="quantity">{pedido.quantidade}</span>
          <h3 className="name">{pedido.nome}</h3>
        </div>
        <div className="order__price flex">
          <span className="price">R$ {pedido.preco.replace(".", ",")}</span>
          <span
            className={`add ${pedido.em_preparo == "1" ? "true" : "false"}`}
            onClick={addToBag}
          >
            Adicionar à Sacola
          </span>
        </div>
      </article>
      <Bag
        openBag={openBag}
        setOpenBag={setOpenBag}
        bagItems={bagItems}
        setBagItems={setBagItems}
      />
    </>
  );
};
export default Order;
