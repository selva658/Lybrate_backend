const express = require("express")

const app = express()

const cors = require('cors')

app.use(cors())

const landingpagecrud=require("./crudop/landingpagecrud")

app.use(express.json())

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/homepage", landingpagecrud)

module.exports=app