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
        - dark mode <img src="/images/moon.svg" alt="moon svg icon" />-
        notificação com novos pedidos não vistos
      </header>
    </>
  );
};
export default HeaderAdmin;
