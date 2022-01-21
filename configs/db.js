const mongoose = require("mongoose")

const connect = async () => {
    return mongoose.connect("mongodb+srv://selva658:selva100_@cluster0.fowgx.mongodb.net/lybrate")
}

module.exports=connect