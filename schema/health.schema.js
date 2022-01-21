const mongoose = require("mongoose")

const healthschema = new mongoose.Schema({
    health: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps:true
    })

const Health = mongoose.model("search", healthschema)

module.exports=Health