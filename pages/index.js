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
        <title>Grab Eats - Selecione Seu Pedido!</title>
      </Head>
      <section className="choose container">
        <header className="choose__header flex column">
          <img
            className="choose__header--logo"
            src="/images/logo.png"
            alt="Logo Icon PNG."
          />
          <h1 className="choose__header--title">Grab Eats</h1>
        </header>
        <div className="choose__body">
          <p className="none choose__title">Seja bem-vindo!</p>
          <p className="choose__description">
            Escolha como escolhe aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </p>
          <nav className="flex choose__options">
            <a className="choose__item flex column">
              <img src="/images/group 1.png" alt="Hamburguer Icon PNG." />
              <p className="choose__item--button btn">Para comer aqui</p>
            </a>
            <a className="choose__item flex column">
              <img src="/images/group 2.png" alt="Bag Icon PNG." />
              <p className="choose__item--button btn">Para levar</p>
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
