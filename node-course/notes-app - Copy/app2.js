const chalk = require("chalk");
const yargs = require("yargs");
const greenMsg = chalk.green("Success!");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title:" + argv.title + "\nDescription: " + argv.description);
    // console.log("Adding a new Notes!!", argv);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Remove the notes!!");
  },
});

// Create list command

yargs.command({
  command: "list",
  describe: "Display the list",
  handler: function () {
    console.log("Displaying out the list items!!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read the list",
  handler: function () {
    console.log("Reading out the list items!!");
  },
});

// Add, Remove, Read, List

// const command = process.argv[2];

// console.log(process.argv);
// console.log(yargs.argv);
yargs.parse();
// if (command === "add") {
//   console.log("Adding notes");
// } else if (command === "remove") {
//   console.log("Removing Notes");
// } else {
//   console.log("Nothing to show");
// }

// console.log(process.argv);
// console.log(process.argv[2]);

// console.log(greenMsg);
// console.log(chalk.bgGreen("Success!"));
// console.log(chalk.green.bold("Success!"));
// console.log(chalk.green.inverse.bold("Success!"));
// console.log(chalk.red.inverse.bold("Error!"));
// console.log(chalk.yellow.inverse.bold("Warning!"));
// const validator = require("validator");

// console.log(validator.isURL("https/example.com"));
// console.log(validator.isURL("example.com"));
// console.log(validator.isEmail("example.com"));
// console.log(validator.isEmail("jimi@exxample.com"));

// const add = require("./utils.js");
// const notes = require("./notes.js");

// const getNote = notes("Your notes...");

// console.log(getNote);

// const sum = add(4, -2);

// const firstName = require("./utils.js");

// console.log(sum);

// console.log(firstName);
