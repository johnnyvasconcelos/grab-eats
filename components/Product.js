import Link from "next/link";
const Product = () => {
  return (
    <>
      <article className="product">
        <Link href="/produto/" className="container flex">
          <div className="product__text">
            <h3 className="product__title">Macarrão Sertanejo</h3>
            <p className="product__ingredients">
              Massa Italiana com Toque de Xibiu & Tempero Baiano do Sul, Raspa
              Salsinha e Queijo Parmezão.
            </p>
            <div className="price">
              R$ <span>49,90</span>
            </div>
          </div>
          <div className="product__image">
            <img src="/images/produto.jpg" alt="product image" />
          </div>
        </Link>
      </article>
    </>
  );
};
export default Product;
