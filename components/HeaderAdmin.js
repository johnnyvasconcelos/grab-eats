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
          <p>Bem-vindo(a), Fonseca!</p>
        </div>
        <div className={`flex ${styles.headerImages}`}>
          <img src="/images/moon.svg" alt="moon svg icon" />
          <div className={styles.countArea}>
            <span className={`count flex ${styles.count}`}>1</span>
            <img src="/images/bell.svg" alt="bell svg icon" />
          </div>
          <img src="/images/cog.svg" alt="bell svg icon" />
          <button class={`btn ${styles.logout}`}>sair</button>
        </div>
      </header>
    </>
  );
};
export default HeaderAdmin;
