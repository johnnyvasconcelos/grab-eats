import styles from "../styles/admin.module.css";

function AsideAdmin({ activePage }) {
  return (
    <aside className={styles.asideAdmin}>
      <header className="flex">
        <img src="/images/small-logo.png" alt="logo svg" />
        <span>Restaurante</span>
      </header>
      <nav>
        <ul>
          <h2>Restaurante</h2>
          <li
            className={`${styles.noneMobile} ${
              activePage === "inicio" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/">
              <img src="/images/house.svg" alt="house icon svg" />
              <span>Início</span>
            </a>
          </li>
          <li
            className={`${styles.firstItem} ${
              activePage === "cardapio" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/cardapio">
              <img
                src="/images/food.svg"
                alt="dish icon svg"
                className={styles.noneScreen}
              />
              <img
                src="/images/dish.svg"
                alt="dish icon svg"
                className={styles.noneMobile}
              />
              <span>Cardápio</span>
            </a>
          </li>
          <li
            className={`${styles.orders} ${
              activePage === "pedidos" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/pedidos">
              <img
                src="/images/orders.svg"
                alt="order icon svg"
                className={styles.noneScreen}
              />
              <img
                src="/images/order.svg"
                alt="order icon svg"
                className={styles.noneMobile}
              />
              <span>Pedidos</span>
            </a>
          </li>
          <li
            className={`${styles.sales} ${
              activePage === "vendas" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/vendas">
              <img
                src="/images/sale.svg"
                alt="sale icon svg"
                className={styles.noneScreen}
              />
              <img
                src="/images/sales.svg"
                alt="sales icon svg"
                className={styles.noneMobile}
              />
              <span>Vendas</span>
            </a>
          </li>
          <h2>Configurações</h2>
          <li
            className={`${styles.noneMobile} ${
              activePage === "usuarios" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/usuarios">
              <img src="/images/user.svg" alt="user icon svg" />
              <span>Usuários</span>
            </a>
          </li>
          <li
            className={`${styles.noneMobile} ${
              activePage === "configuracoes" ? styles.active : ""
            }`}
          >
            <a href="/painel-admin/configuracoes-gerais">
              <img src="/images/restaurant.svg" alt="restaurant icon svg" />
              <span>Gerais</span>
            </a>
          </li>
          <li className={`${styles.noneScreen}`}>
            <a href="/painel-admin/configuracoes-gerais">
              <img src="/images/menu.svg" alt="restaurant icon svg" />
              <span>Mais</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.asideFooter}>
        <p>Versão: 1.0.0-W</p>
      </div>
    </aside>
  );
}

export default AsideAdmin;
