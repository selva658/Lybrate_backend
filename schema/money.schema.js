const mongoose = require("mongoose")

const moneyschema = new mongoose.Schema({
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

const Money = mongoose.model("money", moneyschema)

module.exports=Money