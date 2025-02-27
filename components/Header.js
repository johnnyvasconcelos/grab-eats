import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="main__header">
        <div className="main__header--buttons flex container">
          <Link className="main__header--btn btn-1 flex" href="/">
            <img src="/images/prev.svg" alt="prev icon svg." />
          </Link>
          <div className="main__header--btn btn-2 flex">
            <img src="/images/bag.svg" alt="market icon svg" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
