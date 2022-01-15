const express = require("express");
const cors = require("cors");
const hospitalRoutes = require("./routes/hospitalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hospital API");
});

app.use("/api/hospitals", hospitalRoutes);

module.exports = app;
