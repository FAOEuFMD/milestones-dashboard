var express = require("express");
var router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    //Search the database to retrieve all the targets
    const recipes = await db("SELECT * FROM target");
    //Send the retrieved recipes as a JSON response
    res.json(target);
  } catch (error) {
    //Handle database error
    console.error("Error retrieving targets:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;