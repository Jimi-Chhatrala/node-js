const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
// console.log(__filename);

// Define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Page",
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
    helpText: "This is some helpful text.",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address.",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );

  // res.send({
  //   forecast: "It is snowing",
  //   location: "Boston",
  //   address: req.query.address,
  // });

  // console.log(req.query.address);
  // res.send({
  //   weather: [],
  // });
  //   res.send("Weather Page");
});

// app.get("/weather", (req, res) => {
//   //   res.send("Weather Page");
//   res.send({
//     forecast: "It is snowing",
//     location: "Boston",
//   });
// });

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a serach term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});
app.get("/help/*", (req, res) => {
  // res.send("404 : Help Article Not Found !!");
  res.render("404", {
    title: "404",
    name: "Jimi Chhatrala",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  // res.send("404 : Page Not Found !!");
  res.render("404", {
    title: "404",
    name: "Jimi Chhatrala",
    errorMessage: "Page Not Found",
  });
});
// Handling non matching request from the client
// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page not found on the server</h1>");
// });

// app.get("", (req, res) => {
//   res.send("<h1>Hello Express</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send("<h1>Help Page</h1>");
// });

// app.get("/object", (req, res) => {
//   res.send({
//     name: "Jimi",
//     age: 20,
//   });
// });

// app.get("/array", (req, res) => {
//   res.send([
//     {
//       name: "Jimi",
//       age: 20,
//     },
//     {
//       name: "Jen",
//       age: 16,
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

app.listen(8000, () => {
  console.log("Server is up on port : 8000");
});
