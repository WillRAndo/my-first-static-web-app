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
            body: "Error connecting to MongoDB in index.js: " + error.message
        };
    }
};


