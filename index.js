// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const port = process.env.PORT || 3000;
// app.use(bodyParser.json());

// // app.post('/route-handler', function (req, res) {
// //     res.json({
// //         name: "Soumya",
// //         age : 23
// //     });
// // });
// // app.get('/route-handler', function (req, res) {
// //     res.send('<h1>Soumya</h1>');
// // });

// // app.listen(port,  function (req, res) {
// //     console.log(`Example app listening on port ${port}`);
// // });
// app.post("/conversations", (req, res) => {
//     console.log(req.body);
//     res.send("Hi i am Soumya in local");
// });
// app.listen(port, (req, res) => {
//     console.log(`App is running on port ${port}`);
// });



// const express = require("express");
// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++){
//         ans += i;
//     }
//     return ans;
// }

// app.get("/", (req, res) => {
//     //const n = req.query.n;
//     //res.send(sum(n).toString());
//     res.send("<h1> I love Mayuri </h1");
// });

// app.listen(3000);

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// let users = [{
//     name: "John",
//     kidneys: [{
//         isHealthy: false
//     }, {
//         isHealthy: true
//     }]

// }];

// app.get("/", (req, res) => {
//     const numOfKidneys = users[0]["kidneys"].length;
//     let numOfHealthyKidneys = 0;
//     for (let i = 0; i < numOfKidneys; i++){
//         if (users[0]["kidneys"][i]["isHealthy"] == true) numOfHealthyKidneys += 1;
//     }
//     const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
//     res.json({
//         numOfKidneys,
//         numOfHealthyKidneys,
//         numOfUnhealthyKidneys
//     });
// });

// app.post("/", function (req, res) {
//     const healthy = req.body.isHealthy;
//     users[0]["kidneys"].push({
//         isHealthy: healthy
//     });
//     res.json({
//         msg : "done!"
//     });
// });

// app.put("/", function (req, res) {
//     const numOfKidneys = users[0]["kidneys"].length;
//     for (let i = 0; i < numOfKidneys; i++) {
//         users[0]["kidneys"][i].isHealthy = true;
//     }
//     res.json({
//         msg : "Done!"
//     })
// });

// app.delete("/", function (req, res) {
//     let isThereAnUnhealthyKidney = false;
//     const numOfKidneys = users[0]["kidneys"].length;
//     for (let i = 0; i < numOfKidneys; i++) {
//         if (users[0]["kidneys"][i].isHealthy == false) {
//             isThereAnUnhealthyKidney = true;
//             users[0]["kidneys"][i].isHealthy = true;
//             break;
//         }
//     }
//     if (isThereAnUnhealthyKidney == false) res.status(411).json({
//         msg: "Wrong Operation"
//     });
//     else res.status(200).json({
//         msg: "Done!"
//     });
// });


// app.listen(3004);



// const sum = (a, b) => { return a + b; };
// console.log(sum(1, 2));

const input = [1, 2, 3, 4, 5];
// console.log(input.map((i) => { return i * 2; }));
console.log(input.filter((n) => {
    if (n % 2 == 0)
        return true;
    else
        return false;
}));
 
let anotherbranch = 0;