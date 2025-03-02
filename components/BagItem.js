const BagItem = ({ id, price, quantity, onRemove, onIncrease, onDecrease }) => {
  return (
    <article className="bag__item flex">
      <img src="/images/produto-alt.jpg" alt="produto item-sacola" />
      <div className="bag__item--info">
        <h5>Mc Oferta Média Big Mac Duas Porções com Cheddar</h5>
        <strong className="bag__price">
          R$ {(price * quantity).toFixed(2)}
        </strong>{" "}
        <span className="remove flex" onClick={() => onRemove(id)}>
          <img src="/images/trash.svg" alt="remove icon svg" />
        </span>
        <div className="selector flex">
          <span className="btn minus" onClick={() => onDecrease(id)}>
            <img src="/images/minus.svg" alt="minus svg icon" />
          </span>
          <span>{quantity}</span>
          <span className="btn plus" onClick={() => onIncrease(id)}>
            <img src="/images/plus.svg" alt="plus svg icon" />
          </span>
        </div>
      </div>
    </article>
  );
};
export default BagItem;
