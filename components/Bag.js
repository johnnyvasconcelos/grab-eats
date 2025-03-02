import BagItem from "./BagItem";
const Bag = () => {
  return (
    <>
      <aside className="bag">
        <div className="container__bag">
          <div className="bag__title flex">
            <h4>Sacola</h4>
            <span className="close-icon">
              <img src="/images/close.svg" alt="close icon svg" />
            </span>
          </div>
          <div className="bag__items">
            <BagItem />
            <BagItem />
          </div>
          <div className="bag__footer">
            <table className="bag__info">
              <tbody>
                <tr className="flex">
                  <td>Subtotal</td>
                  <td class="total">R$ 39,90</td>
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
                    <strong>R$ 39,90</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="btn order-btn">Finalizar Pedido</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Bag;
