import { useEffect, useState } from "react";
import Bag from "./Bag";
const Order = ({ pedido }) => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [error, setError] = useState(null);
  const [openBag, setOpenBag] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const addToBag = () => {
    try {
      if (pedido.em_preparo == "0") {
        let storedItems = JSON.parse(localStorage.getItem("bagItems") || "[]");

        if (!Array.isArray(storedItems)) {
          storedItems = []; // Corrige caso o localStorage esteja corrompido
        }

        const existingItemIndex = storedItems.findIndex(
          (item) => item.nomeProduto === pedido.nome
        );

        if (existingItemIndex !== -1) {
          storedItems[existingItemIndex].quantity += 1;
        } else {
          storedItems.push({
            id: pedido.id || Date.now(),
            nomeProduto: pedido.nome,
            foto: pedido.foto,
            price: parseFloat(pedido.preco) || 0,
            quantity: 1,
          });
        }

        localStorage.setItem("bagItems", JSON.stringify(storedItems));
        window.dispatchEvent(new Event("storage")); // Atualiza a Bag globalmente
        setOpenBag(true); // Abre a sacola
      }
    } catch (error) {
      console.error("Erro ao adicionar à sacola:", error);
    }
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    setBagItems(storedItems);
  }, []);
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
        image={pedido.foto}
        nomeProduto={pedido.nome}
      />
    </>
  );
};
export default Order;
