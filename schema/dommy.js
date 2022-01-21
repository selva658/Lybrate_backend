const mongoose = require("mongoose")

const dommyschema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    descp: { type: String, required: true },
    originalP: { type: Number, required: true },
    cutP: { type: Number, required: true },
    ds:{type:Number,required:true}
},
    {
        versionKey: false,
        timestamps:true
    })

const Cofee = mongoose.model("dommy", dommyschema)

module.exports=Cofee