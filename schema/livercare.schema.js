const mongoose = require("mongoose")

const livercareschema = new mongoose.Schema({
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

const Liver = mongoose.model("livercare", livercareschema)

module.exports=Liver