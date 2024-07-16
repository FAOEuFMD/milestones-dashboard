var express = require("express");
var router = express.Router();
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

module.exports = router;