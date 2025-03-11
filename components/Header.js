import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({ background, pedidos }) => {
  const router = useRouter();
  const { para_levar } = router.query;
  const [quantidadePedidos, setQuantidadePedidos] = useState(0);
  useEffect(() => {
    const cpf = localStorage.getItem("cpf");
    if (cpf) {
      fetch(`/api/contar-pedidos?cpf=${cpf}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.quantidade > 0) {
            setQuantidadePedidos(data.quantidade);
          }
        })
        .catch((err) =>
          console.error("Erro ao buscar quantidade de pedidos:", err)
        );
    }
  }, []);
  return (
    <header
      className={`main__header ${pedidos}`}
      style={
        background
          ? { backgroundImage: `url(${background})` }
          : { background: "var(--light)" }
      }
    >
      <div className="main__buttons flex container">
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
          className="main__btn main__btn--btn-1 flex"
          href="#"
        >
          <img src="/images/prev.svg" alt="prev icon svg." />
        </Link>
        <Link
          href={`/pedidos/?para_levar=${para_levar}`}
          className="main__btn main__btn--btn-2 flex"
        >
          <img src="/images/orders.svg" alt="market icon svg" />
          {quantidadePedidos > 0 && (
            <span className="count flex">{quantidadePedidos}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
export default Header;
