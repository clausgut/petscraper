const express = require("express");
const mongojs = require("mongojs");
const axios = require("axios");
const cheerio = require("cheerio");
const router = require("./controllers/route");
const mongoose = require("mongoose");
const Index = require("./models/index");

const app = express();

const databaseUrl = "sweetones";

const collection = ["little-animals"];

const db = mongojs(databaseUrl, collection);

mongoose.connect("mongodb://localhost/sweetonesdb", { useNewUrlParser: true});

app.use(router);
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

Index.create(data)
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.log(error.message);
});
// db.on("error", function(error){
//     console.log("Database Error: ", error);
// });

app.listen(3000, function() {
    console.log("App running on port 3000!");
  });