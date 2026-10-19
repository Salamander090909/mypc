const express = require("express");
const mongodb = require("mongoose");

const app = express();

app.set("view engine", "ejs")

app.listen(4000)