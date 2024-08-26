require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const con = mysql.createConnection({
  host: DB_HOST || "localhost",
  user: DB_USER || "root",
  password: DB_PASS || "",
  database: DB_NAME,
  multipleStatements: true,
});
con.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
  // Example query to test the connection
  con.query("SELECT * FROM Targets.target", function (err, results) {
    if (err) throw err;
    console.log(results);
  });
});
module.exports = con;
