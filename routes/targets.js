const express = require("express");
const router = express.Router();
const db = require("../model/helper");


router.get("/test", (req, res) => {
    res.send("Test route is working!");
  });

router.get("/", async (req, res) => {
    try {
      const result = await db("SELECT * FROM target");
      res.json(result.data);
    } catch (error) {
      console.error("Error retrieving targets", error);
      res.status(500).json({ message: "Database query failed" });
    }
  });

module.exports = router;
