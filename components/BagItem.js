const BagItem = ({ id, price, onRemove }) => {
  return (
    <article className="bag__item flex">
      <img src="/images/produto-alt.jpg" alt="produto item-sacola" />
      <div className="bag__item--info">
        <h5>Mc Oferta Média Big Mac Duas Porções com Cheddar</h5>
        <strong className="bag__price">R$ {price.toFixed(2)}</strong>
        <span className="remove flex" onClick={() => onRemove(id)}>
          <img src="/images/trash.svg" alt="remove icon svg" />
        </span>
        <div className="selector flex">
          <span className="btn">
            <img src="/images/minus.svg" alt="minus svg icon" />
          </span>
          <span>1</span>
          <span className="btn">
            <img src="/images/plus.svg" alt="plus svg icon" />
          </span>
        </div>
      </div>
    </article>
  );
};
export default BagItem;
