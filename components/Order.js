import { useEffect, useState } from "react";
const Order = ({ preparing }) => {
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
        <span className={`preparing ${preparing}`}>
          {preparing == "true" ? "Em Preparo" : "Finalizado"}
        </span>
        <div className="order__logo">
          <img src="/images/logo-square.png" alt={`logo ${nomeRestaurante}`} />
          {nomeRestaurante}
        </div>
        <div className="order__name flex">
          <span className="quantity">1</span>
          <h3 className="name">
            McOferta Media Big Mac Duplo com Fritas e Queijo Cheddar Porção
            Família
          </h3>
        </div>
        <div className="order__price flex">
          <span className="price">R$ 39,90</span>
          <span className={`add ${preparing}`}>Adicionar à Sacola</span>
        </div>
      </article>
    </>
  );
};

export default Order;
