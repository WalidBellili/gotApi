const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  );

  res.send(response.data);
});

app.get("/api/:id", async (req, res) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
  );

  res.send(response.data);
});

module.exports = app;
