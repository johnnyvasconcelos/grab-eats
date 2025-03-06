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

  // Função para buscar cliente na API com base no CPF
  const fetchCliente = async (cpf) => {
    try {
      const response = await fetch(`/api/clientes?cpf=${cpf}`);
      if (response.ok) {
        const data = await response.json();
        setNome(data.nome); // Preenche o nome automaticamente com o dado retornado
      } else {
        setNome(""); // Se não encontrar, limpa o campo de nome
      }
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      setNome(""); // Em caso de erro, limpa o campo de nome
    }
  };

  // Recuperar CPF do localStorage ao carregar a página
  useEffect(() => {
    const storedCpf = localStorage.getItem("cpf");
    if (storedCpf) {
      setCpf(storedCpf);
      fetchCliente(storedCpf); // Busca o cliente no banco quando o CPF já está armazenado
    }
  }, []);

  const handleCpfChange = (e) => {
    const newCpf = e.target.value;
    setCpf(newCpf);
    localStorage.setItem("cpf", newCpf); // Salva o CPF no localStorage
    fetchCliente(newCpf); // Busca o cliente no banco ao alterar o CPF
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value); // Permite a edição do nome normalmente
  };

  const handleFinish = () => {
    if (nome.trim() === "" || cpf.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    // Quando finalizar, salva o nome no localStorage
    localStorage.setItem("nome", nome);
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
            {/* Campo de CPF */}
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
            {/* Campo de Nome */}
            <label>
              <span>Seu nome</span>
              <input
                type="text"
                name="cliente"
                placeholder="Digite seu nome"
                value={nome}
                onChange={handleNomeChange} // Nome pode ser editado normalmente
              />
            </label>
            {/* Campo de Mesa */}
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
