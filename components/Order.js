import { useEffect, useState } from "react";
import Bag from "./Bag";
const Order = ({ pedido }) => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [error, setError] = useState(null);
  const [openBag, setOpenBag] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const handleAddToBag = () => {
    if (pedido.em_preparo == "0") {
      setBagItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.nomeProduto === pedido.nome
        );
        if (existingItemIndex !== -1) {
          return prevItems.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [
            ...prevItems,
            {
              id: Date.now(),
              nomeProduto: pedido.nome,
              image: pedido.foto,
              price: parseFloat(pedido.preco),
              quantity: 1,
            },
          ];
        }
      });
      setOpenBag(true);
    }
  };
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
        setError("Erro ao fazer requisição");
      }
    };
    fetchRestauranteData();
  }, []);
  return (
    <>
      <article className="order">
        <span
          className={`preparing ${pedido.em_preparo == "1" ? "true" : "false"}`}
        >
          {pedido.em_preparo == "1" ? "Em Preparo" : "Finalizado"}
        </span>
        <div className="order__logo">
          <img src="/images/logo-square.png" alt={`logo ${nomeRestaurante}`} />
          {nomeRestaurante}
        </div>
        <div className="order__name flex">
          <h3 className="name">{pedido.nome}</h3>
        </div>
        <div className="order__price flex">
          <span className="price">R$ {pedido.preco.replace(".", ",")}</span>
          <span
            className={`add ${pedido.em_preparo == "1" ? "true" : "false"}`}
            onClick={handleAddToBag}
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
        image={pedido.foto}
        nomeProduto={pedido.nome}
      />
    </>
  );
};
export default Order;
