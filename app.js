const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const milestonesRouter = require("./routes/milestones");
const targetsRouter = require("./routes/targets");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/milestones", milestonesRouter);
app.use("/api/targets", targetsRouter);

module.exports = app;
