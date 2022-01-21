const mongoose = require("mongoose")

const cofeeschema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    pnew: { type: Number },
    pold: { type: Number, required: true },
    dis:{type:Number,required:true}
},
    {
        versionKey: false,
        timestamps:true
    })

const Cofee = mongoose.model("cofee", cofeeschema)

module.exports=Cofee