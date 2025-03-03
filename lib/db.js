import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
let client;
export async function connectDb() {
  if (!client) {
    client = new Client({
      user: process.env.DB_USER,
      host: "localhost",
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: 5500,
      options: "-c client_encoding=UTF8",
    });
    await client.connect();
    console.log("Conectado ao banco de dados PostgreSQL");
  }
}
export function queryDb(query, values) {
  return client.query(query, values);
}
