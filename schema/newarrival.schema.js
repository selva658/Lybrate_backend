const mongoose = require("mongoose")

const newarrivalschema = new mongoose.Schema({
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

const Newarrival = mongoose.model("newarrival", newarrivalschema)

module.exports=Newarrival