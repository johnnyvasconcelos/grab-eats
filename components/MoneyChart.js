"use client";
import { useEffect, useState } from "react";
import styles from "../styles/admin.module.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
const COLORS = ["#ef4444", "#22c55e", "#eab308", "#358ffc"];
export default function MoneyChart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
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
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  const isMobile = screenWidth <= 550;
  const outerRadius = screenWidth <= 340 ? 70 : 100;
  const cx = screenWidth <= 340 ? "47%" : "50%";
  const cy = screenWidth <= 340 ? "47%" : "50%";
  return (
    <article className={`${styles.moneyChart} ${styles.bigChart}`}>
      {data.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx={cx}
                cy={cy}
                outerRadius={outerRadius}
                fill="#a855f7"
                label={
                  !isMobile ? ({ value }) => `R$ ${value.toFixed(2)}` : false
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
            </PieChart>
          </ResponsiveContainer>
          <p className={styles.chartTitle}>
            <h3>Lucro nos Últimos 14 Dias</h3>
            <span>Lucro Total: R$ {total.toFixed(2)}</span>
          </p>
        </>
      ) : (
        <p>Carregando Gráfico...</p>
      )}
    </article>
  );
}
