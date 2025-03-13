import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const PopUps = ({
  isPopupActive,
  setIsPopupActive,
  bagItems,
  setBagItems,
  totalPrice,
}) => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [mesa, setMesa] = useState("");
  const [isFinishPopupActive, setIsFinishPopupActive] = useState(false);
  const [paraLevar, setParaLevar] = useState(false);
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    const storedCpf = localStorage.getItem("cpf");
    if (storedCpf) {
      setCpf(storedCpf);
      const storedNome = localStorage.getItem("nome");
      if (storedNome) {
        setNome(storedNome);
      } else {
        fetchNomeByCpf(storedCpf);
      }
    }
    if (query.para_levar === "true") {
      setParaLevar(true);
    } else if (query.para_levar === "false") {
      setParaLevar(false);
    }
  }, [query]);
  const fetchNomeByCpf = async (cpf) => {
    try {
      const response = await fetch(`/api/buscarNome?cpf=${cpf}`);
      if (!response.ok) throw new Error("Erro ao buscar nome.");
      const data = await response.json();
      if (data && data.nome) {
        setNome(data.nome);
        localStorage.setItem("nome", data.nome);
      }
    } catch (error) {
      console.error("Erro ao buscar nome:", error);
    }
  };
  const cpfChange = (e) => {
    const formattedCpf = e.target.value.replace(/\D/g, "").slice(0, 14);
    setCpf(formattedCpf);
    localStorage.setItem("cpf", formattedCpf);
  };
  const nomeChange = (e) => setNome(e.target.value);
  const finish = async () => {
    if (!nome.trim() || !cpf.trim() || bagItems.length === 0) {
      alert("Preencha todos os campos antes de finalizar o pedido.");
      return;
    }
    localStorage.setItem("nome", nome);
    const pedidoPayload = bagItems.map((item) => ({
      nome: item.nomeProduto || "Nome não informado",
      preco: totalPrice,
      quantidade: item.quantity || 1,
      mesa: mesa || "Sem mesa",
      para_levar: paraLevar ? 1 : 0,
      nome_cliente: nome || "Nome não informado",
      cpf: cpf || "cpf não informado",
      foto: item.foto || "pedido.jpg",
      status: "pendente",
      em_preparo: 1,
    }));
    const requestBody = {
      pedidos: pedidoPayload,
      debug: true,
    };
    try {
      const response = await fetch("/api/finalizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) throw new Error("Erro ao enviar pedido.");
      setIsPopupActive(false);
      setIsFinishPopupActive(true);
      setBagItems([]);
      localStorage.removeItem("bagItems");
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
    }
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
              <span>Seu CPF</span>
              <input
                type="text"
                name="cpf-cliente"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={cpfChange}
              />
            </label>
            <label>
              <span>Seu nome</span>
              <input
                type="text"
                name="cliente"
                placeholder="Digite seu nome"
                value={nome}
                onChange={nomeChange}
              />
            </label>
            <label>
              <span>Número da Mesa</span>
              <input
                type="number"
                name="mesa-cliente"
                placeholder="Digite o número da mesa"
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
              />
            </label>
            <div className="btn-area flex">
              <button
                className="btn cancel"
                type="button"
                onClick={() => setIsPopupActive(false)}
              >
                Cancelar
              </button>
              <button className="btn finish" type="button" onClick={finish}>
                Finalizar
              </button>
            </div>
          </div>
        </form>
      </div>
      {isFinishPopupActive && (
        <div className="popup-wrapper active">
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
      )}
    </>
  );
};
export default PopUps;
