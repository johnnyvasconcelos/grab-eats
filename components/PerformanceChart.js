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
  const [resumoSemanaPassada, setResumoSemanaPassada] = useState(null);
  const [loadingResumo, setLoadingResumo] = useState(true);
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
    fetch("/api/pedidos-semana-passada")
      .then((res) => res.json())
      .then((resumo) => {
        setResumoSemanaPassada(resumo);
        setLoadingResumo(false);
      })
      .catch(() => {
        setResumoSemanaPassada(null);
        setLoadingResumo(false);
      });
  }, []);
  if (loading) return <p>Carregando Gráfico...</p>;
  if (error) return <p>{error}</p>;
  return (
    <article
      className={`${styles.largeChart} ${styles.bigChart} ${styles.performanceChart}`}
    >
      <ResponsiveContainer height={300}>
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
          <YAxis
            yAxisId="left"
            tickFormatter={(tick) => `${tick}`}
            stroke="#22c55e"
          />
          <YAxis yAxisId="right" orientation="right" stroke="#eab308" />
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
          <Bar
            yAxisId="right"
            dataKey="pedidos"
            fill="#358ffc"
            name="Pedidos"
          />
          <Bar yAxisId="left" dataKey="revenue" fill="#22c55e" name="Lucro" />
        </BarChart>
      </ResponsiveContainer>
      <h3>Performance na Última Semana</h3>
      {loadingResumo ? (
        <p>Carregando dados da semana passada...</p>
      ) : resumoSemanaPassada ? (
        <span>
          Pedidos Semana Passada: <strong>{resumoSemanaPassada.orders}</strong>{" "}
          &nbsp;|&nbsp; Lucro Semana Passada:{" "}
          <strong>R$ {resumoSemanaPassada.revenue}</strong>
        </span>
      ) : (
        <p>Não há dados da semana passada.</p>
      )}
    </article>
  );
}
