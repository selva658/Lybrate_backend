const express = require("express")

const app = express()

const cors = require('cors')

app.use(cors())

const landingpagecrud=require("./crudop/landingpagecrud")

app.use(express.json())

app.set("view engine", "ejs")

var distDir = __dirname + "/public";

app.use(express.static(distDir));

app.use("/homepage", landingpagecrud)

module.exports=app