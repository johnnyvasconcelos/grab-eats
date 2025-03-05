import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Header from "../../components/Header";
import Head from "next/head";
function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRestaurante = await fetch("/api/restaurante");
        const dataRestaurante = await resRestaurante.json();

        if (resRestaurante.ok) {
          setNomeRestaurante(dataRestaurante.nome_restaurante);
          setCategoria(dataRestaurante.categoria);
        } else {
          setError(dataRestaurante.error || "Erro desconhecido");
        }
        const resProdutos = await fetch("/api/produtos");
        const dataProdutos = await resProdutos.json();

        if (resProdutos.ok) {
          setProdutos(
            Array.isArray(dataProdutos) ? dataProdutos : [dataProdutos]
          );
          if (dataProdutos.length > 0) {
            setSelectedCategory(dataProdutos[0].categoria_produto);
          }
        } else {
          setError(
            dataProdutos.error || "Erro desconhecido ao buscar produtos"
          );
        }
      } catch (error) {
        setError("Erro ao fazer requisição");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const categoriasDisponiveis = [
    ...new Set(produtos.map((product) => product.categoria_produto)),
  ];
  const filteredProducts = produtos.filter(
    (product) => product.categoria_produto === selectedCategory
  );
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Head>
        <title>Cardápio</title>
      </Head>
      {loading && (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      )}
      <Header background="/images/banner.jpg" />
      <main className="offers">
        <header className="offers__header">
          <div className="container flex">
            <div className="flex offers__header--info">
              <img src="/images/logo-square.png" alt="logo" />
              <div className="offers__header--title">
                <h1 className="offers__title">{nomeRestaurante}</h1>
                <p className="offers__description">{categoria}</p>
              </div>
            </div>
          </div>
        </header>
        <div className="offers__categories no-scroll">
          <div className="container flex">
            {categoriasDisponiveis.map((category) => (
              <span
                key={category}
                className={`category ${
                  selectedCategory === category ? "btn-min check" : ""
                } btn-min`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <section className="offers__products">
          <div className="container">
            <h2>{selectedCategory}</h2>
          </div>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}
export default Cardapio;
