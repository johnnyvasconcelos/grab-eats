import { useState, useEffect } from "react";
import BagItem from "./BagItem";
import PopUps from "./PopUps";
const Bag = ({ openBag, setOpenBag, addToBag }) => {
  const [bagItems, setBagItems] = useState([]);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const loadBagItems = () => {
      const savedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
      setBagItems(savedBagItems);
    };
    loadBagItems();
    window.addEventListener("storage", loadBagItems);
    return () => window.removeEventListener("storage", loadBagItems);
  }, []);
  useEffect(() => {
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    const total = bagItems.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  }, [bagItems]);
  const handleIncrease = (id) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrease = (id) => {
    setBagItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleRemove = (id) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleFinalizeOrder = () => {
    if (bagItems.length === 0) return;
    setIsPopupActive(true);
    setOpenBag(false);
  };
  const handleAddToBag = (newItem) => {
    setBagItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };
  return (
    <>
      <aside className={openBag ? "bag active" : "bag"}>
        <div className="container__bag">
          <div className="bag__title flex">
            <h4>Sacola</h4>
            <span className="close-icon" onClick={() => setOpenBag(false)}>
              <img src="/images/close.svg" alt="close icon" />
            </span>
          </div>
          <div className="bag__items">
            {bagItems.map((item) => (
              <BagItem
                key={item.id}
                id={item.id}
                nomeProduto={item.nomeProduto}
                price={item.price}
                image={item.foto}
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
            <button className="btn order-btn" onClick={handleFinalizeOrder}>
              Finalizar Pedido
            </button>
          </div>
        </div>
      </aside>
      <PopUps
        isPopupActive={isPopupActive}
        setIsPopupActive={setIsPopupActive}
        setBagItems={setBagItems}
        bagItems={bagItems}
        totalPrice={totalPrice}
      />
    </>
  );
};
export default Bag;
