import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <body>
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
