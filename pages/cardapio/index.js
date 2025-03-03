import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Header from "../../components/Header";

function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState("Lançamentos");
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestauranteData = async () => {
      try {
        const res = await fetch("/api/restaurante");
        const data = await res.json();
        if (res.ok) {
          setNomeRestaurante(data.nome_restaurante);
          setCategoria(data.categoria);
        } else {
          setError(data.error || "Erro desconhecido");
          console.error("Erro ao buscar dados:", data.error);
        }
      } catch (error) {
        setError("Erro ao fazer requisição");
        console.error("Erro ao fazer requisição:", error);
      }
    };
    fetchRestauranteData();
  }, []);

  useEffect(() => {
    const fetchProdutosData = async () => {
      try {
        const res = await fetch("/api/produtos", {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();
        console.log("Dados recebidos: ", data); // Log detalhado
        if (res.ok) {
          setProdutos(Array.isArray(data) ? data : [data]);
        } else {
          setError(data.error || "Erro desconhecido ao buscar produtos");
          console.error("Erro ao buscar produtos:", data.error);
        }
      } catch (error) {
        setError("Erro ao fazer requisição de produtos");
        console.error("Erro ao fazer requisição de produtos:", error);
      }
    };

    fetchProdutosData();
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
            <div className="reviews flex btn-min">
              <img src="/images/star-review.svg" alt="star review svg icon" />
              5.0
            </div>
          </div>
          <div className="flex time container open">
            <img src="/images/clock-green.svg" alt="clock time icon svg" />
            <span>Aberto</span>
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
