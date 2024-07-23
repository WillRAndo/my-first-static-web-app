// db.js
// const { MongoClient } = require('mongodb');

// const uri = process.env.MONGODB_URI;
// let client;
// let database;

// async function connect() {
//     // try {
//         if (!client) {
//             client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//             await client.connect();
//             database = client.db('UnityFuel'); // DB name
//             console.log("Connected to MongoDB");
//         }
//         return database;
//     // } catch (error) {
//     //     console.error("Error connecting to MongoDB:", error);
//     //     throw error;
//     // }
// }

// async function getItems() {
//     // try {
//         const db = await connect();
//         const collection = db.collection('customers'); // collection name
//         const items = await collection.find().toArray();
//         return items;
//     // } catch (error) {
//     //     console.error("Error fetching items:", error);
//     //     throw error;
//     // }
// }

// module.exports = { getItems };
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let client;

async function connectToDatabase() {
  if (!client || !client.isConnected()) {
    try {
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return client.db('UnityFuel'); // Replace with actual database name
}

async function getItems() {
  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Database connection is not established.");
    }
    const collection = db.collection('customers'); // Replace with actual collection name
    if (!collection) {
      throw new Error("Collection not found.");
    }
    const items = await collection.find({}).toArray();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

module.exports = { getItems };