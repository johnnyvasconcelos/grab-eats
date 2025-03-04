import Link from "next/link";
const Product = ({ product }) => {
  return (
    <article className="product">
      <Link href={`/produto/${product.id}`} className="container flex">
        <div className="product__text">
          <h3 className="product__title">{product.nome_produto}</h3>
          <p className="product__description product__ingredients">
            {product.descricao}
          </p>
          <div className="price">
            R$ <span>{product.preco}</span>
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
