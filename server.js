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
// =============================================================
//Tables data
const datas = [
    {
        "name": "John",
        "phone": "123-456-7890",
        "email": "john@gmail.com",
        "id": "hellooo"
    }
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

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(datas);
});

// Displays a single table, or returns false
app.get("/api/datas/:data", function(req, res) {
  var chosen = req.params.data;

  console.log(chosen);

  for (var i = 0; i < datas.length; i++) {
    if (chosen === datas[i].name) {
      return res.json(datas[i]);
    }
  }

  return res.json(false);
});
//create new tables
app.post("/api/tables", function(req, res) {
var newReserve = req.body;

newReserve.name = newReserve.name.replace(/\s+/g, "").toLowerCase();

console.log(newReserve);

table.push(newReserve);

res.json(newReserve);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });