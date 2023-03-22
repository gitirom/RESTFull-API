const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//connect ti DB 

mongoose.connect("mongodb://localhost:27017/WikiDB", {useNewUrlParser: true});

//Create a Schema
const articleSchema = {
    title: String,
    content: String
};

//Create A model
const Article = mongoose.model("Article", articleSchema);


app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
})