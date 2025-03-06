import { useState } from "react";
import { useRouter } from "next/router";
import BagItem from "./BagItem";
import PopUps from "./PopUps";
const Bag = ({
  openBag,
  setOpenBag,
  bagItems,
  setBagItems,
  nomeProduto,
  image,
  paralevar,
}) => {
  const router = useRouter();
  const { para_levar } = router.query;
  const [isPopupActive, setIsPopupActive] = useState(false);
  const totalPrice = bagItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const handleIncrease = (id) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
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
  const handleFinalizeOrder = () => {
    if (bagItems.length === 0) {
      return;
    }
    setIsPopupActive(true);
    setOpenBag(false);
  };
  const finalizarPedido = async (nome, cpf, mesa) => {
    try {
      const response = await fetch("/api/finalizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pedidos: bagItems.map((item) => ({
            nome: nomeProduto || "Produto Desconhecido",
            preco: parseFloat(item.price),
            em_preparo: true,
            para_levar: para_levar === "true",
            quantity: item.quantity || 1,
          })),
          cliente: {
            nome_cliente: nome,
            cpf: cpf,
            mesa: mesa,
          },
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Erro ao finalizar pedido");
      }
    } catch (error) {
      console.error("Erro ao enviar pedido:", error.message);
      alert("Erro ao finalizar pedido: " + error.message);
    }
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
                nomeProduto={nomeProduto}
                price={item.price}
                image={image}
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
        finalizarPedido={finalizarPedido}
      />
    </>
  );
};
export default Bag;
