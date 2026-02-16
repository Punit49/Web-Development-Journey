// ------------------------------------------------------
// 1. What is Mongoose?
// ------------------------------------------------------
/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
It provides a schema-based solution to define data structure, apply
validations, and interact with MongoDB using JavaScript objects.
*/


// ------------------------------------------------------
// 2. mongoose.connect()
// ------------------------------------------------------
/*
mongoose.connect() is used to establish a connection between a Node.js
application and a MongoDB database. It returns a promise, which allows
connection handling using async/await or then-catch.
*/


// ------------------------------------------------------
// 3. Promise-based Nature of Mongoose
// ------------------------------------------------------
/*
Almost all Mongoose methods are asynchronous and return promises.
This enables non-blocking database operations and smooth error handling
using async/await.
*/


// ------------------------------------------------------
// 4. Operation Buffering in Mongoose
// ------------------------------------------------------
/*
Operation buffering is a Mongoose feature where database operations are
temporarily stored if the database connection is not yet established.
Once the connection is successful, all buffered operations are executed.
*/


// ------------------------------------------------------
// 5. Schema in Mongoose
// ------------------------------------------------------
/*
A schema defines the structure of documents within a MongoDB collection.
It specifies fields, data types, default values, and validation rules
to maintain data consistency.
*/


// ------------------------------------------------------
// 6. Model in Mongoose
// ------------------------------------------------------
/*
A model is a compiled version of a schema that represents a MongoDB
collection. Models are used to perform CRUD operations on documents.
*/


// ------------------------------------------------------
// 7. Insert and insertMany
// ------------------------------------------------------
/*
Insertion methods are used to add new documents to a collection.
insert is used for inserting a single document, while insertMany
is used to insert multiple documents in one operation.
*/


// ------------------------------------------------------
// 8. find() Method and Query Object
// ------------------------------------------------------
/*
The find() method returns a query object instead of an immediate promise.
This query object is thenable and executes only when awaited or resolved,
allowing query chaining before execution.
*/


// ------------------------------------------------------
// 9. find() with Condition
// ------------------------------------------------------
/*
find() with conditions is used to retrieve documents that match specific
criteria. It helps filter data based on field values or logical rules.
*/


// ------------------------------------------------------
// 10. findOne()
// ------------------------------------------------------
/*
findOne() retrieves the first document that matches the given condition.
It returns a single document instead of an array.
*/


// ------------------------------------------------------
// 11. findById()
// ------------------------------------------------------
/*
findById() retrieves a document using its unique _id field.
*/


// ------------------------------------------------------
// 12. Update Methods in Mongoose
// ------------------------------------------------------
/*
Update methods modify existing documents in a collection.
They return query objects and support updating single or multiple
documents based on conditions.

Methods - updateOne(), updateMany()

*/


// ------------------------------------------------------
// 13. findByIdAndUpdate() and findOneAndUpdate()
// ------------------------------------------------------
/*
These methods find and update a document in a single operation.
They improve performance by combining read and update into one step.
*/


// ------------------------------------------------------
// 14. new: true Option
// ------------------------------------------------------
/*
The new: true option ensures that the updated document is returned
after the update operation, instead of the original document.
*/


// ------------------------------------------------------
// 15. Delete Methods in Mongoose
// ------------------------------------------------------
/*
Delete methods are used to remove documents from a collection.

Methods - deleteOne(), deleteMany(),  findByIdAndDelete() and findOneAndDelete()
*/


// ------------------------------------------------------
// 16. Schema Validations
// ------------------------------------------------------
/*
Schema validations enforce rules on data before it is stored in the
database. They help maintain data integrity using constraints like
type, required, min, max, enum, and length limits, define type of data 
that can be stored in DB.
*/


// ------------------------------------------------------
// 17. Validation Execution Timing
// ------------------------------------------------------
/*
By default, schema validations are applied only during document
insertion and creation, not during update operations.
*/


// ------------------------------------------------------
// 18. runValidators Option
// ------------------------------------------------------
/*
The runValidators option forces schema validations to run during
update operations, ensuring updated data follows schema rules.
*/

