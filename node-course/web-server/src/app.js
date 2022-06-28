const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

app.listen(8000, () => {
  console.log("Server is up on port : 8000");
});
