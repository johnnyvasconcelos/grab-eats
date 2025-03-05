import Link from "next/link";
const Product = ({ product }) => {
  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return "R$ 0,00";
    }
    return numericPrice.toFixed(2).replace(".", ",");
  };
  return (
    <article className="product">
      <Link href={`/produto/${product.id}`} className="container flex">
        <div className="product__text">
          <h3 className="product__title">{product.nome_produto}</h3>
          <p className="product__description product__ingredients">
            {product.descricao}
          </p>
          <div className="price">
            R$ <span>{formatPrice(product.preco)}</span>
          </div>
        </div>
        <div className="product__image">
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
