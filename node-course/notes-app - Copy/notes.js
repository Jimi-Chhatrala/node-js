const fs = require("fs");
const chalk = require("chalk");
// console.log("notes.js");

// const getNotes = function (note) {
//   return note;
// };
const getNotes = function () {
  return "Your notes...";
};
const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added"));
  } else {
    console.log(chalk.green.inverse("Note title already taken"));
  }
  // console.log(notes);
};

const removeNote = function (title) {
  console.log(title);
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  saveNotes(notesToKeep);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
// module.exports = getNotes;
