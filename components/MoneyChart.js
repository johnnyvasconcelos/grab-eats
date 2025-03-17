"use client";
import { useEffect, useState } from "react";
import styles from "../styles/admin.module.css";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MoneyChart() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/grafico-lucros");
        const result = await response.json();
        if (Array.isArray(result)) {
          const formattedData = result.map((item) => ({
            name: new Date(item.data_pedido).toLocaleDateString("pt-BR"),
            Lucro: Number(item.preco),
          }));
          setData(formattedData);
          const totalValue = formattedData.reduce(
            (sum, item) => sum + item.Lucro,
            0
          );
          setTotal(totalValue);
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

  const hideYAxis = screenWidth <= 620;

  return (
    <article className={`${styles.moneyChart} ${styles.bigChart}`}>
      {data.length > 0 ? (
        <>
          <ResponsiveContainer width="99%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {!hideYAxis && <YAxis />}
              <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
              <Line
                type="monotone"
                dataKey="Lucro"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p>
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
