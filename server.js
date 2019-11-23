//Dependencies
var express = require("express");
var path = require('path');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //Tables data
// const data = [
//     {
//         "name" : "John",
//         "email": "john@gmail.com"
//     },
// ]



 // Basic route that sends the user first to the AJAX Page
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
