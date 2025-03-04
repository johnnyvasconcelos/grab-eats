import mysql from "mysql2/promise";
export const connectDb = async () => {
  if (global.connection && global.connection.state !== "disconnected") {
    return global.connection;
  }
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  global.connection = connection;
  return connection;
};
export const queryDb = async (query, params = []) => {
  const connection = await connectDb();
  const [rows] = await connection.execute(query, params);
  return rows;
};
