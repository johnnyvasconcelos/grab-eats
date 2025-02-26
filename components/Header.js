import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="main__header">
        <div className="main__header--buttons flex">
          <Link href="/">prev</Link>
          <div className="menu__btn">menu</div>
        </div>
      </header>
    </>
  );
};

export default Header;
