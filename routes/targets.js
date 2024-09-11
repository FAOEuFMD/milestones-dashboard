const express = require("express");
const router = express.Router();
const db = require("../model/helper");

router.get("/health-check", (req, res) => {
  res.send("Server is running!");
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
s;
