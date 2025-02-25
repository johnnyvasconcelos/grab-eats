import { Head } from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Meu Site - Página Inicial</title>
        <meta
          name="description"
          content="Descrição da minha página para SEO."
        />
        <meta
          name="keywords"
          content="palavra-chave1, palavra-chave2, palavra-chave3"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <a href="/">Home</a> | <a href="/about">Sobre</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Meu Site</p>
      </footer>
    </>
  );
}
