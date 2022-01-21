const redis = require("redis")

const client = redis.createClient();

client.on("error", function (error){
    console.log(error);
})

module.exports=client