import { useState } from "react";
import styles from "../styles/admin.module.css";
export default function EditarProduto({
  produto,
  onClose,
  onUpdate,
  imagemProduto,
}) {
  const [formData, setFormData] = useState({
    nome_produto: produto?.nome_produto || "",
    ingredientes: produto?.ingredientes || "",
    preco: produto?.preco || "",
    categoria_produto: produto?.categoria_produto || "",
    descricao: produto?.descricao || "",
  });
  const [imagem, setImagem] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setImagem(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (imagem) {
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
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome_produto"
            value={formData.nome_produto}
            onChange={handleChange}
            required
          />
          <label>Ingredientes (separados por vírgula):</label>
          <input
            type="text"
            name="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            required
          />
          <label>Preço:</label>
          <input
            type="text"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            required
          />
          <label>Categoria:</label>
          <input
            type="text"
            name="categoria_produto"
            value={formData.categoria_produto}
            onChange={handleChange}
            required
          />
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
          <label>Foto (recomendado 500x500 webp):</label>
          <input
            type="file"
            name="foto"
            onChange={handleFileChange}
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
