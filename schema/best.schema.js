const mongoose = require("mongoose")

const bestschema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    pnew: { type: Number, required: true },
    pold: { type: Number, required: true },
    dis:{type:Number,required:true}
},
    {
        versionKey: false,
        timestamps:true
    })

const Best = mongoose.model("best", bestschema)

module.exports=Best