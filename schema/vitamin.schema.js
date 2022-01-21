const mongoose = require("mongoose")

const vitaminschema = new mongoose.Schema({
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

const Vitamin = mongoose.model("vitamin", vitaminschema)

module.exports=Vitamin