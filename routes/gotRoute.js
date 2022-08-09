const express = require("express");
const app = express();
const gotJson = require("../got.json");

app.get("/json", (req, res) => {
  const getData = async () => {
    const response = await axios.get("http://localhost:5001/gameOfThrone/json");
    console.log(response.data);
  };
  res.send(gotJson);
});
module.exports = app;
