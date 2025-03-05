import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [boasVindas, setBoasVindas] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRestauranteData = async () => {
      try {
        const res = await fetch("/api/restaurante");
        const data = await res.json();
        if (res.ok) {
          setNomeRestaurante(data.nome_restaurante);
          setBoasVindas(data.boas_vindas);
        } else {
          setError(data.error || "Erro desconhecido");
        }
      } catch (error) {
        setError("Erro ao fazer requisição");
        console.error("Erro ao fazer requisição:", error);
      }
    };
    fetchRestauranteData();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Sistema de pedidos para restaurantes."
        />
        <meta
          name="keywords"
          content="delivery de entrega, software de entrega para restaurantes"
        />
        <title>{nomeRestaurante} - Selecione Seu Pedido!</title>
      </Head>
      <section className="choose container">
        <header className="choose__header flex column">
          <img
            className="choose__header--logo"
            src="/images/logo.png"
            alt="Logo Icon PNG."
          />
          <h1 className="choose__header--title">{nomeRestaurante}</h1>
        </header>
        <div className="choose__body">
          <p className="none choose__title">Seja bem-vindo!</p>
          <p className="choose__description">{boasVindas}</p>
          {error && <p className="error">{error}</p>}{" "}
          <nav className="flex choose__options">
            <Link
              href={{ pathname: "/cardapio", query: { para_levar: "false" } }}
              className="choose__item flex column"
            >
              <img src="/images/group 1.png" alt="Hamburguer Icon PNG." />
              <p className="choose__item--button btn">Para comer aqui</p>
            </Link>
            <Link
              href={{ pathname: "/cardapio", query: { para_levar: "true" } }}
              className="choose__item flex column"
            >
              <img src="/images/group 2.png" alt="Bag Icon PNG." />
              <p className="choose__item--button btn">Para levar</p>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
