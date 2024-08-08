require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
});

con.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log("Connected to the database!");
  // Example query to test the connection
  con.query('SELECT * FROM Targets.target', function (err, results) {
    if (err) throw err;
    console.log(results);
  });
});
module.exports = con;

/*
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `milestones` was successful!");

    console.log("Closing...");
  });

  con.end();
});
*/

/*
require("dotenv").config();
const mysql = require("mysql");

var file = process.argv[2];
console.log("file is: ", file);

const fs = require("fs");
const migrationSQL = fs.readFileSync(__dirname + "/" + file).toString();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
});

con.connect(function(err) {
  if (err){
	console.log(`Failed to connect to ${DB_HOST}`);
	throw err;
  }
  console.log(`Connected! To ${DB_HOST}`);

  con.end();
});
*/

// Load environment variables from .env file
/*
require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");
// Retrieve database connection parameters from environment variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
// Create a MySQL connection using the environment variables
const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true, // Allow multiple SQL statements in one query
});
// Connect to the MySQL database
con.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log("Connected to the database!");
  // Example query to test the connection
  con.query('SELECT * FROM some_table', function (err, results) {
    if (err) throw err;
    console.log(results);
  });
});
module.exports = con; // Export the connection object for use in other modules
*/