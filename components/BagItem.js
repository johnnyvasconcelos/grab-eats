const BagItem = ({
  id,
  price,
  image,
  quantity,
  onRemove,
  nomeProduto,
  onIncrease,
  onDecrease,
}) => {
  return (
    <article className="bag__item flex">
      <img
        src={`/images/${image}`}
        alt="produto item-sacola"
        className="img__item"
      />
      <div className="bag__item--info">
        <h5>{nomeProduto}</h5>
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
