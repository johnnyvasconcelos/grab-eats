import { useEffect, useState } from "react";
const Order = ({ pedido }) => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [error, setError] = useState(null);
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
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
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
          <span className="quantity">1</span>
          <h3 className="name">{pedido.nome}</h3>
        </div>
        <div className="order__price flex">
          <span className="price">R$ {pedido.preco.replace(".", ",")}</span>
          <span
            className={`add ${pedido.em_preparo == "1" ? "true" : "false"}`}
          >
            Adicionar à Sacola
          </span>
        </div>
      </article>
    </>
  );
};

export default Order;
