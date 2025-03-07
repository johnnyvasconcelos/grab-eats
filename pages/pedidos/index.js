import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Order from "../../components/Order";
import Head from "next/head";
const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [cpf, setCpf] = useState("");
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    const storedCpf = localStorage.getItem("cpf");
    if (storedCpf) {
      setCpf(storedCpf);
      fetchPedidos(storedCpf);
    } else {
      setIsPopupActive(true);
    }
  }, []);
  const addToBag = () => {
    setBagItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.nomeProduto === product.nome_produto
      );
      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: Date.now(),
            nomeProduto: product.nome_produto,
            price: parseFloat(product.preco),
            quantity,
            paraLevar: para_levar,
          },
        ];
      }
    });
    setOpenBag(true);
  };
  const fetchPedidos = async (cpfFilter) => {
    try {
      const response = await fetch("/api/pedidos");
      if (!response.ok) throw new Error("Erro ao buscar pedidos");
      const data = await response.json();
      const pedidosFiltrados = data.filter(
        (pedido) => pedido.cpf === cpfFilter
      );
      setPedidos(pedidosFiltrados);
    } catch (error) {
      console.error("Erro ao carregar pedidos:", error);
    }
  };
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
  const handleCpfSubmit = () => {
    const cleanCpf = cpf.replace(/\D/g, "");
    if (cleanCpf.length !== 11) {
      alert("Por favor, insira um CPF válido.");
      return;
    }
    localStorage.setItem("cpf", cpf);
    setIsPopupActive(false);
    window.location.reload();
  };
  return (
    <>
      <Head>
        <title>Meus Pedidos</title>
      </Head>
      <Header pedidos="order" />
      <main className="offers alt">
        <section className="offers__products offers__products--description">
          <div className="container">
            <h2>
              <img src="/images/orders.svg" alt="chef svg icon" />
              Meus Pedidos
            </h2>
            <div className="orders flex column">
              {pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <Order
                    key={pedido.id}
                    pedido={pedido}
                    setBagItems={setBagItems}
                  />
                ))
              ) : (
                <p className="nothing">Nenhum pedido encontrado.</p>
              )}
            </div>
          </div>
        </section>
      </main>
      {isPopupActive && (
        <div className="popup-wrapper active">
          <div className="popup popup-info">
            <div className="popup-container">
              <header>
                <h4>Informe seu CPF</h4>
                <p>Para visualizar seus pedidos, insira seu CPF abaixo.</p>
              </header>
              <label>
                <span>Seu CPF</span>
                <input
                  type="text"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={handleCpfChange}
                  maxLength="14"
                />
              </label>
              <div className="btn-area flex">
                <button
                  className="btn full finish"
                  type="button"
                  onClick={handleCpfSubmit}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Pedidos;
