import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "postgres",
  port: 5432,
  database: "dvdrental",
});

export default db;
