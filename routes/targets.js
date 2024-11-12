const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// this query selects all the necessary information from the Database
//it's in a const since the translation from express to mysql is difficult
const query = `SELECT
  focus_objectives.id AS focus_objective_id,
  focus_objectives.name AS focus_objective_name,
  key_areas.id AS key_area_id,
  key_areas.name AS key_area_name,
  targets.target_id,
  targets.indicator,
  targets.target_description,
  targets.result_to_date,
  targets.program_target,
  targets.expected_result
  FROM focus_objectives
  JOIN key_areas ON focus_objectives.id = key_areas.focus_objectives_id
  JOIN targets ON key_areas.id = targets.key_area_id;
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
router.get("/targets-keyarea1-expectedresult-1-1", async (req, res) => {
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
router.get("/targets-keyarea1-expectedresult-1-2", async (req, res) => {
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
router.get("/targets-keyarea1-expectedresult-1-3", async (req, res) => {
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
});

// router.get(`/KeyArea1/expectedresult/${expected_result}`, async (req, res) => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM targets WHERE key_area_id = 1 AND expected_result LIKE '${expected_result}';`
//     );
//     console.log("Query result:", result);
//     res.json(result);
//   } catch (error) {
//     console.error("Error retrieving targets", error);
//     res.status(500).json({ message: "Database query failed" });
//   }
// });

// router.get(`/KeyArea1/expectedresults/1.1/`, async (req, res) => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM targets WHERE key_area_id = 1 AND expected_result LIKE '1.1%'`
//     );
//     console.log("Query result:", result);
//     res.json(result);
//   } catch (error) {
//     console.error("Error retrieving targets", error);
//     res.status(500).json({ message: "Database query failed" });
//   }
// });
module.exports = router;
