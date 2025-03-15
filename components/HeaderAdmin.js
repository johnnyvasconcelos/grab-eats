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
        <div className={`flex ${styles.headerImages}`}>
          <img src="/images/moon.svg" alt="moon svg icon" />
          <a href="/painel-admin/pedidos" className={styles.countArea}>
            <span className={`count flex ${styles.count}`}>1</span>
            <img src="/images/bell.svg" alt="bell svg icon" />
          </a>
          <a href="/painel-admin/configuracoes-gerais">
            <img src="/images/cog.svg" alt="cog svg icon" />
          </a>
          <a href="/painel-admin/log-de-pedidos">
            <img src="/images/log.svg" alt="log svg icon" />
          </a>
          <button class={`btn ${styles.logout}`}>sair</button>
          <a
            href="/painel-admin/usuarios"
            className={styles.imageUser}
            title="User"
          >
            <img src="/images/user.jpg" alt="img user" />
          </a>
        </div>
        9
      </header>
    </>
  );
};
export default HeaderAdmin;
