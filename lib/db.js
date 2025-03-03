import { Client } from "pg";
let client;
export async function connectDb() {
  if (!client) {
    client = new Client({
      user: "postgres",
      host: "localhost",
      database: "db_restaurante",
      password: "@dbrestaurant",
      port: 5500,
    });
    await client.connect();
    console.log("Conectado ao banco de dados PostgreSQL");
  }
}
export function queryDb(query, values) {
  return client.query(query, values);
}
