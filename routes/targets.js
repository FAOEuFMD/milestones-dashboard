// // I need to make the routs dynamic and not hardcoded
// // This allows the frontend reequest different data based on the keyAreaId and expectedResults 
// // I want to replace the hardcoded routes innto dynamic ones, for example: /targets/:keyAreaId/expectedresult/:expectedResult 
// //This route uses req.params.keyAreaId and req.params.expectedResult to fetch data based on those parameters

// const express = require("express");
// const router = express.Router();
// const db = require("../model/helper");

// // SQL query that retrieves all the necessary target information
// const query = `SELECT
//   fo.id AS focus_objective_id,
//   fo.name AS focus_objective_name,
//   ka.id AS key_area_id,
//   ka.name AS key_area_name,
//   t.id AS target_id,
//   t.indicator AS target_indicator,
//   t.target_description,
//   t.expected_result,
//   t.annual_target,
//   t.program_target,
//   t.\`Q1/2024\`,
//   t.\`Q2/2024\`,
//   t.\`Q3/2024\`,
//   t.\`Q4/2023\`,
//   t.\`Q4/2024\`
// FROM
//   focus_objectives fo
// INNER JOIN key_areas ka ON fo.id = ka.focus_objectives_id
// INNER JOIN targets t ON ka.id = t.key_area_id
// WHERE
//   fo.id = 1
// ORDER BY
//   ka.name ASC, t.id ASC;
// `;

// // Health check route
// router.get("/health-check", (req, res) => {
//   res.send("Server is running!");
// });

// // Fetch all targets using the pre-defined query
// router.get("/alltargets", async (req, res) => {
//   try {
//     const result = await db.query(query);
//     res.json(result);
//     console.log("You're amazing babes");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching targets" });
//   }
// });

// // Dynamic route for fetching targets based on key area ID and expected result
// router.get("/targets/:keyAreaId/expectedresult/:expectedResult", async (req, res) => {
//   const { keyAreaId, expectedResult } = req.params;
  
//   try {
//     const result = await db.query(
//       `SELECT * FROM targets WHERE key_area_id = ? AND expected_result LIKE ?`, 
//       [keyAreaId, `${expectedResult}%`]
//     );
//     res.json(result);
//   } catch (error) {
//     console.error("Error retrieving targets", error);
//     res.status(500).json({ message: "Database query failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../model/helper");
// this query selects all the necessary information from the Database
//it's in a const since the translation from express to mysql is difficult
const query = `SELECT
fo.id AS focus_objective_id,
fo.name AS focus_objective_name,
ka.id AS key_area_id,
ka.name AS key_area_name,
t.id AS target_id,
t.indicator AS target_indicator,
t.target_description,
t.expected_result,
t.annual_target,
t.program_target,
t.\`Q1/2024\`,
t.\`Q2/2024\`,
t.\`Q3/2024\`,
t.\`Q4/2023\`,
t.\`Q4/2024\`
FROM
focus_objectives fo
INNER JOIN key_areas ka ON fo.id = ka.focus_objectives_id
INNER JOIN targets t ON ka.id = t.key_area_id
WHERE
fo.id = 1
ORDER BY
ka.name ASC, t.id ASC;
`;
router.get("/health-check", (req, res) => {
  res.send("Server is running!");
});
router.get("/alltargets", async (req, res) => {
  try {
    //here we use the query and it works :D
    const result = await db.query(query);
    res.json(result);
    console.log("You're amazing babes");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching targets" });
  }
});
router.get("/targets", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM targets");
    console.log("Query result:", result);
    res.json(result);
  } catch (error) {
    console.error("Error retrieving targets", error);
    res.status(500).json({ message: "Database query failed" });
  }
});
//this routes selects key are 1 and expected result 1.1 should be deprecated soon
// it corresponds to the name tag in Button component as 1.1 is not valid express
router.get("/targets/KeyArea1/expectedresult/1-1", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM targets WHERE key_area_id = 1 AND expected_result LIKE '1.1%';"
    );
    console.log("Query result:", result);
    res.json(result);
  } catch (error) {
    console.error("Error retrieving targets", error);
    res.status(500).json({ message: "Database query failed" });
  }
});
//this routes selects key are 1 and expected result 1.2 should be deprecated soon
router.get("/targets/KeyArea1/expectedresult/1-2", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM targets WHERE key_area_id = 1 AND expected_result LIKE '1.2%';"
    );
    console.log("Query result:", result);
    res.json(result);
  } catch (error) {
    console.error("Error retrieving targets", error);
    res.status(500).json({ message: "Database query failed" });
  }
});
//this routes selects key are 1 and expected result 1.1 should be deprecated soon
router.get("/targets/KeyArea1/expectedresult/1-3", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM targets WHERE key_area_id = 1 AND expected_result LIKE '1.3%';"
    );
    console.log("Query result:", result);
    res.json(result);
  } catch (error) {
    console.error("Error retrieving targets", error);
    res.status(500).json({ message: "Database query failed" });
  }
});module.exports = router;