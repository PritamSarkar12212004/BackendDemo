const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  res.send("Hello I am Pritam sarkar");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
