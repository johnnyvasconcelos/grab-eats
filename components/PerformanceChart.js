"use client";
import { useEffect, useState } from "react";
import styles from "../styles/admin.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
export default function PerformanceChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/grafico-pedidos")
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((d) => ({
            day: d.date,
            pedidos: d.orders,
            revenue: d.revenue,
          }))
        );
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar os dados");
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Carregando Gráfico...</p>;
  if (error) return <p>{error}</p>;
  return (
    <article className={`${styles.performanceChart} ${styles.bigChart}`}>
      <h3>Performance (Dias da Semana)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => {
              const date = new Date(tick);
              return date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              });
            }}
          />
          <YAxis tickFormatter={(tick) => `R$ ${tick}`} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "Lucro") {
                return [`R$ ${value}`, name];
              }
              return [value, name];
            }}
            labelFormatter={(label) => {
              const date = new Date(label);
              return date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              });
            }}
          />

          <Bar dataKey="pedidos" fill="#8884d8" name="Pedidos" />
          <Bar dataKey="revenue" fill="#82ca9d" name="Lucro" />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}
