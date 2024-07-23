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
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

// const { getItems } = require('../common/db.js');

module.exports = async function (context, req) {
    try {
        // const items = await getItems();
        context.log("Connected to MongoDB" + uri);

        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        database = client.db('UnityFuel'); // DB name
        

        const collection = database.collection('customers'); // collection name
        const items = await collection.find().toArray();
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: items.length ? items : "No data found"
        };
        context.log("API Response:", context.res.body);
    } catch (error) {
        context.log("API Error:", error);
        context.res = {
            status: 500,
            body: "Error connecting to MongoDB from index.js: " + error.message
        };
    }
};



