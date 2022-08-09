const express = require("express");
const app = express();
const port = 5000;
const gotJson = require("./got.json");

app.use("/json", gotJson);


app.get("/", (req, res) => {
  res.send(gotJson);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
