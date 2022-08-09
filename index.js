const express = require("express");
const app = express();
const port = 5001;
const axios = require("axios");
const gotJson = require("./got.json");
const gotRoute = require("./routes/gotRoute");
const pokemons = require("./routes/pokemons");

app.use("/gameOfThrone", gotRoute);
app.use("/pokemons", pokemons);

app.use("/*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
