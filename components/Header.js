import React from "react";
import Link from "next/link";
const Header = ({ background, pedidos }) => {
  return (
    <>
      <header
        className={`main__header ${pedidos}`}
        style={
          background
            ? { backgroundImage: `url(${background})` }
            : { background: "var(--light)" }
        }
      >
        <div className="main__header--buttons flex container">
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
            className="main__header--btn btn-1 flex"
            href="#"
          >
            <img src="/images/prev.svg" alt="prev icon svg." />
          </Link>
          <Link
            href="/pedidos/"
            className={`main__header--btn btn-2 flex ${pedidos}`}
          >
            <img src="/images/orders.svg" alt="market icon svg" />
            <span className="count flex">1</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
