import BagItem from "./BagItem";
import PopUps from "./PopUps";
const Bag = ({
  openBag,
  setOpenBag,
  bagItems,
  setBagItems,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const totalPrice = bagItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleIncrease = (id) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrease = (id) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleRemove = (id) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <aside className={openBag ? `bag active` : `bag`}>
        <div className="container__bag">
          <div className="bag__title flex">
            <h4>Sacola</h4>
            <span className="close-icon" onClick={() => setOpenBag(false)}>
              <img src="/images/close.svg" alt="close icon svg" />
            </span>
          </div>
          <div className="bag__items">
            {bagItems.map((item) => (
              <BagItem
                key={item.id}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                onRemove={handleRemove}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ))}
          </div>
          <div className="bag__footer">
            <table className="bag__info">
              <tbody>
                <tr className="flex">
                  <td>Subtotal</td>
                  <td className="total">R$ {totalPrice.toFixed(2)}</td>
                </tr>
                <tr className="flex">
                  <td>Descontos</td>
                  <td>R$ 0,00</td>
                </tr>
                <tr className="flex">
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>R$ {totalPrice.toFixed(2)}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn order-btn">Finalizar Pedido</button>
          </div>
        </div>
      </aside>
      <PopUps />
    </>
  );
};
export default Bag;
