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




const data = require('../common/data.js'); 


// Outputs Text
module.exports = async function (context, req) {

    // context.res.json({
    //     text: "Hello from the API wando"
    // });

    context.res = {
        body: data,
    };
    context.done();


};

// api/message.js
// const { getItem } = require('./db');

// module.exports = async function (context, req) {
//     try {
//         const item = await getItem();
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: { text: item ? item.text : "No data found" }
//         };
//     } catch (error) {
//         context.res = {
//             status: 500,
//             body: "Error connecting to MongoDB: " + error.message
//         };
//     }
// };
