import Link from "next/link";
const Product = ({ product, paraLevar }) => {
  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return "R$ 0,00";
    }
    return numericPrice.toFixed(2).replace(".", ",");
  };
  return (
    <article className="offers__product">
      <Link
        href={`/produto/${product.id}?para_levar=${paraLevar}`}
        className="container flex"
      >
        <div className="offers__text">
          <h3 className="offers__h3">{product.nome_produto}</h3>
          <p className="offers__description--alt offers__ingredients">
            {product.descricao}
          </p>
          <div className="offers__price">
            R$ <span>{formatPrice(product.preco)}</span>
          </div>
        </div>
        <div className="offers__image">
          <img
            src={`/images/${product.foto}`}
            alt={`Imagem de ${product.nome_produto}`}
          />
        </div>
      </Link>
    </article>
  );
};
export default Product;
