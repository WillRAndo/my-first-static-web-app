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




// const data = require('../common/data.js'); 


// // Outputs Text
// module.exports = async function (context, req) {

//     // context.res.json({
//     //     text: "Hello from the API wando"
//     // });

//     context.res = {
//         body: data,
//     };
//     context.done();


// };

// api/message.js
const { getItems } = require('../common/db.js');

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
            body: "Error connecting to MongoDB: " + error.message
        };
    }
};
