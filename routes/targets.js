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








module.exports = router;
