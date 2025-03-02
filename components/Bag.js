import BagItem from "./BagItem";
const Bag = ({ openBag, setOpenBag, bagItems, setBagItems }) => {
  const handleRemoveItem = (id) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const totalPrice = bagItems.reduce((acc, item) => acc + item.price, 0);

  return (
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
              onRemove={handleRemoveItem}
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
  );
};
export default Bag;
