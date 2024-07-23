// Template Output
// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }




const data = require('./data.js'); 

// const data = {
//     "_id": "61dbe610755daebc5155e468",
//     "customerName": "APCO",
//     "customerContact": null,
//     "externalData": {
//         "customerId": 400081
//     },
//     "isActive": true,
//     "eligibleProducts": [
//         "AUTOGAS"
//     ],
//     "__v": 0,
//     "notifications": {
//         "email": "saraht@apco.com.au"
//     }
// }; 

// Outputs Text
module.exports = async function (context, req) {

    // context.res.json({
    //     text: "Hello from the API wando"

    // });
    context.res = {
        body: data,
    };
    context.done();

    // context.res.body = {
    //     status: 200,
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     text: JSON.stringify(data)

    // };

};

// const data = require('../../data'); 
// require('dotenv').config();

// // requests data from UnityFuel Customers
// const { getItems } = require('../../db');

// module.exports = async function (context, req) {

//     const message = "Hello, World! This is a test endpoint.";


//     // try {
//         // const items = await getItems();


//         context.res = {
//             status: 200, /* Defaults to 200 */
//             // body: data,
//             body: {message},
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         };
//         console.log("API Response:", context.res.body);


//     // } catch (error) {
//     //     console.error("API Error:", error);
//     //     context.res = {
//     //         status: 500,
//     //         body: "Error connecting to MongoDB: " + error.message
//     //     };
//     // }
// };
