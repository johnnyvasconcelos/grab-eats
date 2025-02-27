const Product = () => {
  return (
    <>
      <article className="product">
        <div className="container flex">
          <div className="product__text">
            <h3 className="product__title">McOferta Média Big Mac Duplo</h3>
            <p className="product__ingredients">
              Dois hambúrgueres de carne 100% bovina, méquinese, molho
              Honey&Fire, molho lácteo com queijo, pão tipo brioche.
            </p>
            <div className="price">
              R$ <span>39,90</span>
            </div>
          </div>
          <div className="product__image">
            <img src="/images/produto.jpg" alt="product image" />
          </div>
        </div>
      </article>
    </>
  );
};
export default Product;
