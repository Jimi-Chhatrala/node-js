// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly");
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      { _id: new ObjectID("62c5be86f61fc1045e66cd58") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log("Unable to fetch");
        }
        console.log(tasks);
      });

    // db.collection("users")
    //   .find({ age: 21 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 21 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(count);
    //   });

    // db.collection("users").findOne({ name: "Jimi" }, (error, user) => {
    // db.collection("users").findOne({ name: "Jimi", age: 1 }, (error, user) => {
    // db.collection("users").findOne(
    //   { _id: new ObjectID("62c95dc00b12ce2b5e54d582") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vikram",
    //     age: 29,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log("Result ops: ", result.ops);
    //   }
    // );

    // db.collection("users").insertOne(
    //   {
    //     name: "Jimmy",
    //     age: 21,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log("Result ops: ", result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Ram",
    //       age: 24,
    //     },
    //     {
    //       name: "Shyam",
    //       age: 26,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "Pot plants",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert taksk!");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );
  }
);
