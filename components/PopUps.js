import { useState } from "react";
import Link from "next/link";
const PopUps = ({ isPopupActive, setIsPopupActive }) => {
  const [cpf, setCpf] = useState("");
  const formatCpf = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length <= 3) {
      return value;
    }
    if (value.length <= 6) {
      return value.replace(/(\d{3})(\d{0,})/, "$1.$2");
    }
    if (value.length <= 9) {
      return value.replace(/(\d{3})(\d{3})(\d{0,})/, "$1.$2.$3");
    }
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,})/, "$1.$2.$3-$4");
  };
  const handleCpfChange = (e) => {
    let value = e.target.value;
    setCpf(formatCpf(value));
  };

  const handleCpfBlur = () => {
    setCpf(formatCpf(cpf));
  };
  const handleCpfFocus = () => {
    let value = cpf.replace(/\D/g, "");
    setCpf(value);
  };
  return (
    <>
      <div className={isPopupActive ? "popup-wrapper active" : "popup-wrapper"}>
        <form className="popup popup-info">
          <div className="popup-container">
            <header>
              <h4>Quase lá!</h4>
              <p>Para finalizar o seu pedido, insira os dados abaixo.</p>
            </header>
            <label>
              <span>Seu nome</span>
              <input type="text" name="cliente" placeholder="Digite seu nome" />
            </label>
            <label>
              <span>Seu CPF</span>
              <input
                type="text"
                name="cpf-cliente"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={handleCpfChange}
                onBlur={handleCpfBlur}
                onFocus={handleCpfFocus}
                maxLength="14"
              />
            </label>
            <div className="btn-area flex">
              <button className="btn cancel" type="button">
                Cancelar
              </button>
              <button className="btn finish" type="button">
                Finalizar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="popup-wrapper">
        <section className="popup popup-finish">
          <div className="popup-container">
            <header>
              <img src="/images/popup-check.svg" alt="check icon svg" />
              <h4>Pedido Efetuado!</h4>
              <p>Seu pedido foi realizado com sucesso!</p>
            </header>
            <div className="btn-area flex">
              <button className="btn see-orders" type="button">
                <Link href="/pedidos">Ver pedidos</Link>
              </button>
              <button className="btn continue" type="button">
                Continuar
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PopUps;
