// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const names = ["Jimi", "Roy", "Sam"];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("USA", (data) => {
//   console.log(data);
// });

const add = (a, b, addition) => {
  setTimeout(() => {
    const sum = a + b;
    addition(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
