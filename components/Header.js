import React from "react";
import Link from "next/link";
const Header = ({ background, prevlink }) => {
  return (
    <>
      <header
        className="main__header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="main__header--buttons flex container">
          <Link className="main__header--btn btn-1 flex" href={prevlink}>
            <img src="/images/prev.svg" alt="prev icon svg." />
          </Link>
          <Link href="/pedidos/" className="main__header--btn btn-2 flex">
            <img src="/images/orders.svg" alt="market icon svg" />
            <span className="count flex">1</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
