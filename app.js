const app = require("./se")

const connect = require("./configs/db")

app.listen(5000, async () => {
    await connect()
    console.log("listening on server 5000");

})