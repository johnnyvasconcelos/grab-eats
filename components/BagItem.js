const BagItem = () => {
  return (
    <>
      <article class="bag__item flex">
        <img src="/images/produto-alt.jpg" alt="produto item-sacola" />
        <div class="bag__item--info">
          <h5>Mc Oferta Média Big Mac Duas Porções com Cheddar</h5>
          <strong className="bag__price">R$ 39,90</strong>
          <span className="remove flex">
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
    </>
  );
};
export default BagItem;
