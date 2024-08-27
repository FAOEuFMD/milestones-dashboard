const mysql = require("mysql");
const pool = require("./database");

module.exports = {
  query: function (query, params) {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) {
          console.error("Query execution failed:", error);
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};
