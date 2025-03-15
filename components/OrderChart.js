"use client";
import { useEffect, useState } from "react";
import styles from "../styles/admin.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function OrderChart() {
  const [data, setData] = useState([]);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/grafico-pedidos");
        const result = await response.json();
        console.log("Dados recebidos:", result);
        if (Array.isArray(result)) {
          const formattedData = result.map((item) => ({
            name: new Date(item.date).toLocaleDateString("pt-BR"),
            Pedidos: Number(item.orders),
          }));
          setData(formattedData);
          const total = formattedData.reduce(
            (sum, item) => sum + item.Pedidos,
            0
          );
          setTotalPedidos(total);
        }
      } catch (error) {
        console.error("Erro ao buscar dados dos pedidos:", error);
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
    <article className={`${styles.orderChart} ${styles.bigChart}`}>
      {data.length > 0 ? (
        <>
          <ResponsiveContainer width="99%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {!hideYAxis && <YAxis />}
              <Tooltip formatter={(value) => value} />
              <Line
                type="monotone"
                dataKey="Pedidos"
                stroke="#a855f7"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p>
            <h3>Pedidos na Última Semana</h3>
            <span>Total de Pedidos: {totalPedidos}</span>
          </p>
        </>
      ) : (
        <p>Carregando Gráfico...</p>
      )}
    </article>
  );
}
