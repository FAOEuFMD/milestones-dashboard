const express = require("express");
const router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res, next) => {
  res.send({ title: "Milestones & Targets Dashboard" });
});

module.exports = router;
