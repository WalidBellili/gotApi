const express = require("express");
const app = express();
const port = 5001;
const axios = require("axios");
const gotJson = require("./got.json");
const gotRoute = require("./routes/gotRoute");

app.use("/gameOfThrone", gotRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
