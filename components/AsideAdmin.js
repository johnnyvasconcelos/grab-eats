import styles from "../styles/admin.module.css";
import Link from "next/link";
function AsideAdmin() {
  return (
    <aside className={styles.asideAdmin}>
      <header className="flex">
        <img src="/images/small-logo.png" alt="logo svg" />
        <span>Restaurante</span>
        <button>
          <img src="/images/back.svg" alt="back icon svg" />
        </button>
      </header>
      <nav>
        <h2>Restaurante</h2>
        <ul>
          <li>
            <Link href="/painel-admin/">
              <img src="/images/house.svg" alt="house icon svg" />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link href="/painel-admin/pratos">
              <img src="/images/dish.svg" alt="dish icon svg" />
              <span>Pratos</span>
            </Link>
          </li>
          <li>
            <Link href="/painel-admin/pedidos">
              <img src="/images/order.svg" alt="order icon svg" />
              <span>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link href="/painel-admin/log-de-pedidos">
              <img src="/images/log.svg" alt="log icon svg" />
              <span>Log de Pedidos</span>
            </Link>
          </li>
        </ul>
        <h2>Configurações</h2>
        <ul>
          <li>
            <Link href="/painel-admin/usuarios">
              <img src="/images/user.svg" alt="user icon svg" />
              <span>Usuários</span>
            </Link>
          </li>
          <li>
            <Link href="/painel-admin/configuracoes-gerais">
              <img src="/images/restaurant.svg" alt="restaurant icon svg" />
              <span>Gerais</span>
            </Link>
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
