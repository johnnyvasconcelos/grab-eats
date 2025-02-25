import Head from "next/head";
export default function Home() {
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
        <title>Grab Eats</title>
      </Head>
      <section className="choose">
        <div class="choose__header">
          <img
            className="choose__header--logo"
            src="/logo.png"
            alt="Logo Icon PNG."
          />
          <p className="choose__header--title"></p>
        </div>
        <h1 className="none choose__title">Seja bem-vindo!</h1>
        <p>
          Escolha como escolhe aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe. =)
        </p>
        <div class="flex choose__options">
          <a className="choose__item">
            <img src="/group 1.png" alt="Hamburguer Icon PNG." />
            <p>Para comer aqui</p>
          </a>
          <a className="choose__item">
            <img src="/group 2.png" alt="Bag Icon PNG." />
            <p>Para levar</p>
          </a>
        </div>
      </section>
    </>
  );
}
