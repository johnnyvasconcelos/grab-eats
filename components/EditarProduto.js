import { useState } from "react";
import styles from "../styles/admin.module.css";
export default function EditarProduto({
  produto,
  onClose,
  onUpdate,
  imagemProduto,
}) {
  const [formData, setFormData] = useState({
    id: produto?.id || "",
    nome_produto: produto?.nome_produto || "",
    ingredientes: produto?.ingredientes || "",
    preco: produto?.preco || "",
    categoria_produto: produto?.categoria_produto || "",
    descricao: produto?.descricao || "",
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
    if (imagem !== null) {
      data.append("foto", imagem);
    }
    try {
      const response = await fetch("/api/atualizarProduto", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        onUpdate();
        onClose();
        location.reload();
      } else {
        alert("Erro ao atualizar: " + result.error);
      }
    } catch (error) {
      alert("Erro ao atualizar: " + error.message);
    }
  };
  return (
    <div className={styles.modal}>
      <div className="modal-content">
        <h2>Editar Produto</h2>
        <form onSubmit={Submit}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome_produto"
            value={formData.nome_produto}
            onChange={change}
            required
          />
          <label>Ingredientes (separados por vírgula):</label>
          <input
            type="text"
            name="ingredientes"
            value={formData.ingredientes}
            onChange={change}
            required
          />
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
            value={formData.categoria_produto}
            onChange={change}
            required
          />
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={change}
            required
          />
          <label>Foto (fotos leves para não pesar o site):</label>
          <input
            type="file"
            name="foto"
            onChange={fileChange}
            accept="image/*"
          />
          {imagemProduto && (
            <div>
              <p>Foto Atual:</p>
              <img
                src={`/images/${imagemProduto}`}
                alt="Foto do Produto"
                width={100}
              />
            </div>
          )}
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
