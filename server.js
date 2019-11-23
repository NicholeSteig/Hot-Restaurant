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

//Tables data
const data = [
    {
        "name": "John",
        "phone": "123-456-7890",
        "email": "john@gmail.com",
        "id": "hellooo"
    },
]



 // Basic route that sends the user first to the AJAX Page
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/tables", function(req, res) {
var newReserve = req.body;

console.log(newReserve);

table.push(newReserve);

res.json(newReserve);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });