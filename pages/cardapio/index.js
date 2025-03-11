import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Product from "../../components/Product";
import Header from "../../components/Header";
import Head from "next/head";
export default function Cardapio() {
  const router = useRouter();
  const { para_levar } = router.query;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [categoria, setCategoria] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 16000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    fetch("/api/restaurante")
      .then((res) => res.json())
      .then((data) => {
        if (data.nome_restaurante && data.categoria) {
          setNomeRestaurante(data.nome_restaurante);
          setCategoria(data.categoria);
        } else {
          setError("Erro ao carregar dados do restaurante");
        }
      })
      .catch(() => setError("Erro ao fazer requisição"));
  }, []);
  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProdutos(data);
          setSelectedCategory(data[0].categoria_produto);
        } else {
          setError("Nenhum produto encontrado");
        }
      })
      .catch(() => setError("Erro ao carregar produtos"))
      .finally(() => setLoading(false));
  }, []);
  const categoriasDisponiveis = [
    ...new Set(produtos.map((p) => p.categoria_produto)),
  ];
  const filteredProducts = produtos.filter(
    (p) => p.categoria_produto === selectedCategory
  );
  return (
    <>
      <Head>
        <title>Cardápio</title>
      </Head>
      {loading && (
        <div className="loading-screen">
          <div className="dots-loader">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      )}
      <Header background="/images/banner.jpg" />
      <main className="offers">
        <header className="offers__header">
          <div className="container flex between">
            <div className="flex offers__info">
              <img src="/images/logo-square.png" alt="Logo do restaurante" />
              <div className="offers__title">
                <h1 className="offers__title">{nomeRestaurante}</h1>
                <p className="offers__description">{categoria}</p>
              </div>
            </div>
            <div className="reviews flex btn-min">
              <img src="/images/star-review.svg" alt="Ícone de avaliação" />
              5.0
            </div>
          </div>
          <div className="flex time container time--open">
            <img src="/images/clock-green.svg" alt="Ícone de horário" />
            <span>Aberto</span>
          </div>
        </header>
        <div className="offers__categories no-scroll">
          <div className="container offers__categories--container flex">
            {categoriasDisponiveis.map((category) => (
              <span
                key={category}
                className={`offer__category btn-min ${
                  selectedCategory === category ? "offers__category--check" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <section className="offers__products">
          <div className="offers__container container">
            <h2>{selectedCategory}</h2>
          </div>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              paraLevar={para_levar}
            />
          ))}
        </section>
      </main>
    </>
  );
}
