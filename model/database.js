require("dotenv").config();
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

// Checks database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Database connected successfully!");
  connection.release(); // Releases the connection back to the pool
});

module.exports = pool;
