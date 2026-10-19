const express = require("express");
const mongodb = require("mongoose");

const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index")
})






app.listen(4000)