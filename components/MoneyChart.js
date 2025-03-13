"use client";
import { useEffect, useState } from "react";
import styles from "../styles/admin.module.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
const COLORS = ["#dbb377", "#77cedb", "#dbdb77", "#e3849a"];

export default function MoneyChart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/grafico-lucros");
        const result = await response.json();
        console.log("Dados recebidos:", result);

        if (Array.isArray(result)) {
          const totalValue = result.reduce(
            (acc, item) => acc + Number(item.preco),
            0
          );
          setTotal(totalValue);

          setData(
            result.map((item, index) => ({
              name: new Date(item.data_pedido).toLocaleDateString("pt-BR"),
              value: Number(item.preco),
              color: COLORS[index % COLORS.length],
            }))
          );
        }
      } catch (error) {
        console.error("Erro ao buscar dados de lucro:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <article className={`${styles.moneyChart} ${styles.bigChart}`}>
      <h3>Lucro nos Últimos 30 Dias</h3>
      {data.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ value }) => `R$ ${value.toFixed(2)}`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
            </PieChart>
          </ResponsiveContainer>
          <p>
            <strong>Total dos Pedidos: R$ {total.toFixed(2)}</strong>
          </p>
        </>
      ) : (
        <p>Carregando Gráfico...</p>
      )}
    </article>
  );
}
