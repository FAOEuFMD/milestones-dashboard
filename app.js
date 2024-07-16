const cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var milestonesRouter = require("./routes/milestones");
var targetRouter = require('./routes/target'); //to handle requests to /api/targets

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/milestones", milestonesRouter);
app.use('/api/target', targetRouter);

module.exports = app;
