const express = require("express");
const router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" });
});

module.exports = router;
