const mysql = require("mysql2")
const pool = require("./database");

module.exports = {
  query: function (query, params) {
    return new Promise((resolve, reject) => {
      pool.execute(query, params, (error, rows, fields) => {
        if (error) {
          console.error("Query execution failed:", error);
          return reject(error);
        }
        resolve({rows, fields});
      });
    });
  },
};
