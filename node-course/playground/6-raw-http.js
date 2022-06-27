const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=952f83e27f3c2606f6cac19b0dff89c0&query=40,-75&units=f";

const request = http.request({ url }, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log(chunk);
  });

  response.on("end", () => {
    // console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error : ", error);
});

request.end();
