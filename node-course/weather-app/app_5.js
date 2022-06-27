const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  if (error) {
    return console.log("Error : ", error);
  }

  // console.log("Error : ", error);
  // console.log("Data : ", data);

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log("Error : ", error);
    }
    console.log("Location : ", data.location);
    console.log("Forecast data : ", forecastData);
    // console.log("Error : ", error);
    // console.log("Data : ", data);
  });
});
