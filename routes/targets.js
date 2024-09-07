const express = require("express");
const router = express.Router();
const db = require("../model/helper");

router.get("/health-check", (req, res) => {
  res.send("Server is running!");
});

router.get("/alltargets", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        t.*,
        fo.name AS focus_objective_name,
        ka.name AS key_area_name
      FROM 
        targets t
        LEFT JOIN focus_objectives fo ON t.key_areas_id = fo.id
        LEFT JOIN key_areas ka ON t.key_areas_id = ka.id
      ORDER BY 
        t.id;
    `);
    res.json(result);
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
