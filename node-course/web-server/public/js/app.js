console.log("Client Side JavaScript file is loaded");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:8000/weather?address=boston").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From JS";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:8000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          // console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
          // console.log(data.location);
          // console.log(data.forecast);
        }
      });
    }
  );
  // console.log(location);
  // console.log("Testing!");
});
