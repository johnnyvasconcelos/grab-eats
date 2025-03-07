import styles from "../styles/admin.module.css";
function AsideAdmin() {
  return (
    <aside className={styles.asideAdmin}>
      <header className="flex">
        <img src="/images/logo.png" alt="logo svg" />
        <button>
          <img src="/images/back.svg" alt="back icon svg" />
        </button>
      </header>
      <nav>
        <p>Bem-vindo(a), Fonseca!</p>
        <h2>Configurações Gerais</h2>
        <ul>
          <li>
            <a href="#">
              <img src="/images/house.svg" alt="house icon svg" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/dish.svg" alt="dish icon svg" />
              <span>Cadastro de Pratos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/order.svg" alt="order icon svg" />
              <span>Pedidos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/log.svg" alt="log icon svg" />
              <span>Log de Pedidos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/user.svg" alt="user icon svg" />
              <span>Cadastro de Usuários</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default AsideAdmin;
