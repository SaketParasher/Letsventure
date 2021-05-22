const express = require("express");
const os = require("os");
const connectDB = require("../config/db");
const app = express();

const JobController = require('./jobController');

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/api/getJobs",JobController.getAllJobs);

// Connect Database
connectDB();
app.listen(4000, () => console.log(`Listening on port 4000!`));
