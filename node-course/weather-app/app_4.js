const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  console.log("Error : ", error);
  console.log("Data : ", data);
});

forecast(42.355492, -71.048611, (error, data) => {
  console.log("Error : ", error);
  console.log("Data : ", data);
});

// const url =
//   "http://api.weatherstack.com/current?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233&units=f";

// const url =
//   "http://api.weatherstack.com/current?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current);

//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

// const geocodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=aad27c86d1e2762115654e1674aea905&query=1600 Pennsylvania Ave NW, Washington DC&limit=1";

// const geocodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=aad27c86d1e2762115654e1674aea905&query=&limit=1";

// const geocodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=aad27c86d1e2762115654e1674aea905&query=Los%20Angles&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   // console.log(response.body.data[0].name);

//   if (error) {
//     console.log("Unable to connect to location services!");
//   }
// else if (response.body.error != "") {
//   // console.log(response.body.error != "");
//   console.log("Unable to find location. Try another search.");
// }
//   else {
//     const latitude = response.body.data[0].latitude;
//     const longitude = response.body.data[0].longitude;
//     console.log(latitude, longitude);
//   }
// });

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.current);
//   // console.log(response);
// });

// https://api.weatherstack.com/current/?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233

// http://api.weatherstack.com/current/?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233

// https://api.weatherstack.com/current?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233

// http://api.weatherstack.com/current?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=37.8267,-122.4233

/*
{"request":{"type":"LatLon","query":"Lat 37.83 and Lon -122.42","language":"en","unit":"m"},"location":{"name":"North Beach","country":"United States of America","region":"California","lat":"37.806","lon":"-122.411","timezone_id":"America\/Los_Angeles","localtime":"2022-06-13 02:19","localtime_epoch":1655086740,"utc_offset":"-7.0"},"current":{"observation_time":"09:19 AM","temperature":14,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0004_black_low_cloud.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":4,"wind_degree":10,"wind_dir":"N","pressure":1014,"precip":0,"humidity":81,"cloudcover":25,"feelslike":12,"uv_index":1,"visibility":16,"is_day":"no"}}
*/

// =================================================================================
// const geocode = (address, callback) => {
//   const url = `http://api.positionstack.com/v1/forward?access_key=aad27c86d1e2762115654e1674aea905&query=${encodeURIComponent(
//     address
//   )}&limit=1`;

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.data[0].latitude,
//         longitude: response.body.data[0].longitude,
//         location: response.body.data[0].label,
//       });
//     }
//   });
// };

// geocode("Boston", (error, data) => {
//   console.log("Error : ", error);
//   console.log("Data : ", data);
// });

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log("Error : ", error);
//   console.log("Data : ", data);
// });
