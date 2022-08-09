const express = require("express");
const app = express();
const gotJson = require("../got.json");

app.get("/json", (req, res) => {
  res.send(gotJson);
});
module.exports = app;
