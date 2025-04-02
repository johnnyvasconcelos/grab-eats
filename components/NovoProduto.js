import { useState } from "react";
import styles from "../styles/admin.module.css";
export default function NovoProduto({ onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    nome_produto: "",
    ingredientes: "",
    preco: "",
    categoria_produto: "",
    descricao: "",
  });
  const [imagem, setImagem] = useState(null);
  const change = (e) => {
    let { name, value } = e.target;
    if (name === "preco") {
      value = value.replace(",", ".");
    }
    setFormData({ ...formData, [name]: value });
  };
  const fileChange = (e) => {
    setImagem(e.target.files[0]);
  };
  const Submit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (imagem) {
      data.append("foto", imagem, imagem.name);
    }
    try {
      const response = await fetch("/api/adicionarProduto", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        onUpdate();
        onClose();
      } else {
        alert("Erro ao adicionar: " + result.error);
      }
    } catch (error) {
      alert("Erro ao adicionar: " + error.message);
    }
  };
  return (
    <div className={styles.modal}>
      <div className="modal-content">
        <h2>Adicionar Novo Prato</h2>
        <form onSubmit={Submit}>
          <label>Nome:</label>
          <input type="text" name="nome_produto" onChange={change} required />
          <label>Ingredientes (separados por vírgula):</label>
          <input type="text" name="ingredientes" onChange={change} required />
          <label>Preço:</label>
          <input
            type="text"
            name="preco"
            value={formData.preco}
            onChange={change}
            required
          />
          <label>Categoria:</label>
          <input
            type="text"
            name="categoria_produto"
            onChange={change}
            required
          />
          <label>Descrição:</label>
          <textarea name="descricao" onChange={change} required />
          <label>Foto (fotos leves para melhor desempenho do site):</label>
          <input
            type="file"
            name="foto"
            onChange={fileChange}
            accept="image/*"
          />
          <div className={`flex ${styles.formBtns}`}>
            <button className="btn" type="submit">
              Adicionar
            </button>
            <button className="btn" type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
