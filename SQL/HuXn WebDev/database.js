import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Dvala.2021",
  database: "free_code_camp",
});

export default pool;
