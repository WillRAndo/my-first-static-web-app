// const data = require('../common/data.js'); 
// module.exports = async function (context, req) {

//     // context.res.json({
//     //     text: "Hello from the API wando"
//     // });

//     context.res = {
//         body: data,
//     };
//     context.done();
// };


// const { getItems } = require('../common/db.js');

// module.exports = async function (context, req) {
//     try {
//         const items = await getItems();
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: items.length ? items : "No data found"
//         };
//         console.log("API Response:", context.res.body);
//     } catch (error) {
//         console.error("API Error:", error);
//         context.res = {
//             status: 500,
//             body: "Error connecting to MongoDB: " + error.message
//         };
//     }
// };

// const { getItems } = require('../common/db.js');
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let client;
let database;

async function connect() {
    // try {
        if (!client) {
            client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            database = client.db('UnityFuel'); // DB name
            console.log("Connected to MongoDB");
        }
        return database;
    // } catch (error) {
    //     console.error("Error connecting to MongoDB:", error);
    //     throw error;
    // }
}


async function getItems() {
    // try {
        const db = await connect();
        const collection = db.collection('customers'); // collection name
        const items = await collection.find().toArray();
        return items;
    // } catch (error) {
    //     console.error("Error fetching items:", error);
    //     throw error;
    // }
}

module.exports = async function (context, req) {
    try {


        const items = await getItems();
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: items.length ? items : "No data found"
        };
        console.log("API Response:", context.res.body);
    } catch (error) {
        console.error("API Error:", error);
        context.res = {
            status: 500,
            body: "Error connecting to MongoDB in index.js: " + error.message
        };
    }
};


