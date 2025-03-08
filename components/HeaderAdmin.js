import styles from "../styles/admin.module.css";
const HeaderAdmin = () => {
  return (
    <>
      <header className={`flex ${styles.headerAdmin}`}>
        <div className={`flex ${styles.headerAdminContainer}`}>
          <form className={styles.searchBar}>
            <input type="text" placeholder="Pesquisa..." />
            <img src="/images/search.svg" alt="search icon svg" />
          </form>
        </div>
        <img src="/images/moon.svg" alt="moon svg icon" />
        <img src="/images/bell.svg" alt="bell svg icon" />
      </header>
    </>
  );
};
export default HeaderAdmin;
