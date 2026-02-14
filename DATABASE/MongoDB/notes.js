// ======================================================
// Day 38 – MongoDB (Part 1)
// ======================================================
//
// ------------------------------------------------------
// 🟢 What is MongoDB?
// ------------------------------------------------------
// MongoDB is a NoSQL database.
// It does NOT store data in tables and rows like SQL.
// Instead, it stores data as documents inside collections.
//
// Data is stored in BSON format (Binary JSON).
// BSON is just JSON + extra data types + faster processing.
//
// ------------------------------------------------------
// 🟢 MongoDB Shell
// ------------------------------------------------------
// MongoDB shell is a command-line tool.
// We use it to interact with MongoDB directly.
//
// When MongoDB starts, it connects to a default database called "test".
//
// 👉 "test" database:
// - It exists by default
// - It is created automatically
// - If no db is selected, MongoDB uses "test"
//
// ------------------------------------------------------
// 🟢 Basic Shell Commands
// ------------------------------------------------------
//
// show dbs
// 👉 shows all available databases
//
// use db_name
// 👉 switches to a database
// 👉 if db does not exist, MongoDB will create it later when data is added
//
// db
// 👉 shows current active database
//
// show collections
// 👉 shows all collections inside the current database
//
// ------------------------------------------------------
// 🟢 Documents and Collections
// ------------------------------------------------------
// Database
//   └── Collection
//         └── Document
//
// Document = single record (JSON-like object)
// Collection = group of documents
//
// Example document:
// {
//   name: "Rahul",
//   age: 21,
//   course: "BCA"
// }
//
// ------------------------------------------------------
// 🟢 Insert Data
// ------------------------------------------------------
//
// insertOne()
// 👉 inserts only ONE document
//
// db.collection_name.insertOne({
//   name: "Amit",
//   age: 22
// })
//
// insertMany()
// 👉 inserts MULTIPLE documents at once
//
// db.collection_name.insertMany([
//   { name: "Ravi", age: 21 },
//   { name: "Neha", age: 23 }
// ])
//
// ------------------------------------------------------
// 🟢 Read / Fetch Data
// ------------------------------------------------------
//
// find()
// 👉 returns ALL documents
// 👉 returns a cursor (reference, not actual copy)
//
// db.student.find()
//
// find({ key: value })
// 👉 returns documents matching condition
//
// db.student.find({ age: 21 })
//
// findOne()
// 👉 returns ONLY ONE document
//
// db.student.findOne({ name: "Ravi" })
//
// ------------------------------------------------------
// 🟢 Query Operators
// ------------------------------------------------------
// Used to apply conditions while querying data.
//
// Examples:
// $gt  → greater than
// $lt  → less than
// $gte → greater than or equal
// $lte → less than or equal
// $ne  → not equal
//
// Example:
// db.student.find({ age: { $gt: 20 } })
//
// ------------------------------------------------------
// 🟢 Update Data
// ------------------------------------------------------
//
// updateOne()
// 👉 updates FIRST matching document
//
// updateMany()
// 👉 updates ALL matching documents
//
// $set
// 👉 used to update specific fields
//
// db.student.updateOne(
//   { name: "Ravi" },
//   { $set: { age: 22 } }
// )
//
// replaceOne()
// 👉 replaces entire document (be careful ⚠️)
//
// ------------------------------------------------------
// 🟢 Nesting (Dot Notation)
// ------------------------------------------------------
// MongoDB supports nested objects.
//
// Example document:
// {
//   name: "Aman",
//   address: {
//     city: "Delhi",
//     pincode: 110001
//   }
// }
//
// Access nested field using dot notation:
//
// db.student.find({ "address.city": "Delhi" })
//
// ------------------------------------------------------
// 🟢 Delete Data
// ------------------------------------------------------
//
// deleteOne()
// 👉 deletes FIRST matching document
//
// deleteMany()
// 👉 deletes ALL matching documents
//
// db.student.deleteOne({ name: "Amit" })
//
// db.student.deleteMany({ age: 21 })
//
// ------------------------------------------------------
// 🟢 Delete Database
// ------------------------------------------------------
//
// deleteMany({})
// 👉 empties the collection (removes all documents)
//
// db.dropDatabase()
// 👉 deletes the entire database permanently ⚠️
//
// ======================================================
