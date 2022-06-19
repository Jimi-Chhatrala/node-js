// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log("Guest list for " + this.name);
//   },
// };

const event = {
  name: "Birthday Party",
  guestList: ["Jimi", "Andrew", "Mike", "John"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

// const event = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list for " + this.name);
//   },
// };

event.printGuestList();
