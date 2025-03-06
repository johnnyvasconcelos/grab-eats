import { useState, useEffect } from "react";
import Link from "next/link";
const PopUps = ({
  isPopupActive,
  setIsPopupActive,
  setBagItems,
  bagItems,
  finalizarPedido,
}) => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [mesa, setMesa] = useState("");
  const [isFinishPopupActive, setIsFinishPopupActive] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  useEffect(() => {
    const storedCpf = localStorage.getItem("cpf");
    const storedNome = localStorage.getItem("nome");
    if (storedCpf && storedNome) {
      setCpf(storedCpf);
      setNome(storedNome);
      setIsFirstTime(false);
    }
  }, []);
  const formatCpf = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length <= 3) return value;
    if (value.length <= 6) return value.replace(/(\d{3})(\d{0,})/, "$1.$2");
    if (value.length <= 9)
      return value.replace(/(\d{3})(\d{3})(\d{0,})/, "$1.$2.$3");
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,})/, "$1.$2.$3-$4");
  };
  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };
  const handleFinish = () => {
    if (
      isFirstTime &&
      (cpf.replace(/\D/g, "").length !== 11 || nome.trim() === "")
    ) {
      alert("Por favor, preencha Nome e CPF corretamente.");
      return;
    }
    if (isFirstTime) {
      localStorage.setItem("cpf", cpf);
      localStorage.setItem("nome", nome);
      setIsFirstTime(false);
    }
    setIsPopupActive(false);
    setIsFinishPopupActive(true);

    if (finalizarPedido) {
      finalizarPedido(nome, cpf, mesa);
    }
  };
  const handleCancel = () => {
    if (bagItems.length > 0) {
      setBagItems(bagItems.slice(0, -1));
    }
    setIsPopupActive(false);
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
            {isFirstTime && (
              <>
                <label>
                  <span>Seu nome</span>
                  <input
                    type="text"
                    name="cliente"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </label>
                <label>
                  <span>Seu CPF</span>
                  <input
                    type="text"
                    name="cpf-cliente"
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={handleCpfChange}
                    maxLength="14"
                  />
                </label>
              </>
            )}
            <label>
              <span>Número da Mesa</span>
              <input
                type="number"
                name="mesa-cliente"
                placeholder="Digite o número da mesa"
                value={mesa}
                inputMode="numeric"
                onChange={(e) => {
                  if (e.target.value.length <= 3) {
                    setMesa(e.target.value);
                  }
                }}
              />
            </label>
            <div className="btn-area flex">
              <button
                className="btn cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button
                className="btn finish"
                type="button"
                onClick={handleFinish}
              >
                Finalizar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className={
          isFinishPopupActive ? "popup-wrapper active" : "popup-wrapper"
        }
      >
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
              <button
                className="btn continue"
                type="button"
                onClick={() => setIsFinishPopupActive(false)}
              >
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
