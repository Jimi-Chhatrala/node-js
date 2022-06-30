const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
// console.log(__filename);
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "Index Page",
    name: "Jimi Chhatrala",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Jimi Chhatrala",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Jimi Chhatrala",
  });
});

app.use(express.static(publicDirectoryPath));

// app.get("", (req, res) => {
//   res.send("<h1>Hello Express</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send("<h1>Help Page</h1>");
// });

app.get("/object", (req, res) => {
  res.send({
    name: "Jimi",
    age: 20,
  });
});

app.get("/array", (req, res) => {
  res.send([
    {
      name: "Jimi",
      age: 20,
    },
    {
      name: "Jen",
      age: 16,
    },
  ]);
});

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

app.get("/weather", (req, res) => {
  //   res.send("Weather Page");
  res.send({
    forecast: "It is snowing",
    location: "Boston",
  });
});

app.listen(8000, () => {
  console.log("Server is up on port : 8000");
});
