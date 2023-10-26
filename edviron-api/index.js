
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();

const MONGODB_URI = process.env.MONGO_URI;

//for caching db
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

//connection
  const client = await MongoClient.connect(MONGODB_URI);


  const db = await client.db("test");

  cachedDb = db;
  return db;
}

const getData = async () => {
 
  const db = await connectToDatabase();
  const dueDate = new Date();

  const collection = db.collection("dues");

  const filterQuery = {
    due_date: { $lt: dueDate }, 
    // Due date is less than today's date
  };
  const dues = await collection.distinct("student", filterQuery);
  const students = await db
    .collection("students")
    .find({ _id: { $in: dues } })
    .toArray();

  return students;

};

module.exports.handler = async (event) => {
  const list = await getData();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        defaulters: list,
      },
      null,
      2
    ),
  };
};
