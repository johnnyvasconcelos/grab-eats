const Order = ({ preparing }) => {
  return (
    <>
      <article className="order">
        <span className={`preparing ${preparing}`}>
          {preparing == "true" ? "Em Preparo" : "Finalizado"}
        </span>
        <div className="order__logo">
          <img src="/images/logo-square.png" alt="logo" />
          Grab Eats
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
