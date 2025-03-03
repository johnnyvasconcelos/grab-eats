import Link from "next/link";

const Product = ({ nome, ingredientes, descricao, preco, foto }) => {
  return (
    <article className="product">
      <Link href="/produto/" className="container flex">
        <div className="product__text">
          <h3 className="product__title">{nome}</h3>
          <p className="product__ingredients">{ingredientes}</p>
          <p className="product__description">{descricao}</p>
          <div className="price">
            R$ <span>{preco}</span>
          </div>
        </div>
        <div className="product__image">
          <img src={foto} alt={`Imagem de ${nome}`} />
        </div>
      </Link>
    </article>
  );
};

export default Product;
