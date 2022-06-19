const fs = require("fs");

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// console.log(dataBuffer.toString());

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log("Author: ", parseData.author);
// console.log("Title: ", parseData.title);

const dataBuffer = fs.readFileSync("data.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
user.name = "Jimmy";
user.age = 18;

const userJSON = JSON.stringify(user);
fs.writeFileSync("data.json", userJSON);
