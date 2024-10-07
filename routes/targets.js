// I need to make the routs dynamic and not hardcoded
// This allows the frontend reequest different data based on the keyAreaId and expectedResults 
// I want to replace the hardcoded routes innto dynamic ones, for example: /targets/:keyAreaId/expectedresult/:expectedResult 
//This route uses req.params.keyAreaId and req.params.expectedResult to fetch data based on those parameters

const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// SQL query that retrieves all the necessary target information
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

// Health check route
router.get("/health-check", (req, res) => {
  res.send("Server is running!");
});

// Fetch all targets using the pre-defined query
router.get("/alltargets", async (req, res) => {
  try {
    const result = await db.query(query);
    res.json(result);
    console.log("You're amazing babes");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching targets" });
  }
});

// Dynamic route for fetching targets based on key area ID and expected result
router.get("/targets/:keyAreaId/expectedresult/:expectedResult", async (req, res) => {
  const { keyAreaId, expectedResult } = req.params;
  
  try {
    const result = await db.query(
      `SELECT * FROM targets WHERE key_area_id = ? AND expected_result LIKE ?`, 
      [keyAreaId, `${expectedResult}%`]
    );
    res.json(result);
  } catch (error) {
    console.error("Error retrieving targets", error);
    res.status(500).json({ message: "Database query failed" });
  }
});

module.exports = router;
