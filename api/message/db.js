// db.js
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let client;
let database;

// async function connect() {
//     if (!client) {
//         client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         database = client.db('UnityFuel'); // Replace with your database name
//     }
//     return database;
// }

// async function getItem() {
//     const db = await connect();
//     const collection = db.collection('customers'); // Replace with your collection name
//     const item = await collection.findOne(); // Modify query as needed
//     return item;
// }

// module.exports = { getItem };


async function connect() {
    try {
        if (!client) {
            console.log('attempting to connect' + uri);
            client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            database = client.db('UnityFuel'); // DB name
            console.log("Connected to MongoDB");
        }
        return database;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
}

async function getItems() {
    try {
        const db = await connect();
        const collection = db.collection('customers'); // collection name
        const items = await collection.find().toArray();
        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
}

module.exports = { getItems };