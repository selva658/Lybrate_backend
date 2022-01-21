const express = require("express")

const router = express.Router()

const axios = require('axios')

//const client=require("../configs/redis")

const Liver = require("../schema/livercare.schema")

const Best = require("../schema/best.schema")

const Newarrival=require("../schema/newarrival.schema")

const Money = require("../schema/money.schema")

const Sexwell = require("../schema/sexwell.schema")

const Immunity = require("../schema/immunity.schema")

const Weight = require("../schema/weight.schema")

const Vitamin = require("../schema/vitamin.schema")

const Coffee = require("../schema/cofee.schema")

const Hair = require("../schema/hair.schema")

const Dommy = require("../schema/dommy")

const Health=require("../schema/health.schema")

//Landing page

router.get("/",  (req, res) => {
    
    res.render("landingpage")

})


router.post("/livercare", async (req, res) => {
    const liver = await Liver.create(req.body)
    
    res.send(liver)
})

//Liver care product page

router.get("/livercare",  (req, response) => {  
    
         response.render("liverprod")
})


//api for Livercare

router.get("/livercareapi", async (req, res) => {
    
    const liver = await Liver.find().lean().exec()
    res.send(liver)
 
})

//home page

router.get("/home", async (req, res) => {
    res.render("homepage")
})



//BEST product Schems

router.post("/best", async (req, res) => {
    const best = await Best.create(req.body)
    
    res.send(best)
})

router.get("/best", async (req, res) => {

    // client.get("best", async (err, post) => {

    //     if (err) console.log(err);
        
    //     if (post) {
    //         res.send({ post: JSON.parse(post),redis:true })
    //     }
    //     else
    //     {
            const bestm = await Best.find().lean().exec()
            
           // client.set("best",JSON.stringify(bestm))

            res.send(bestm)
    //     }

    // })  
})



//New Arrival schema

router.post("/newarrival", async (req, res) => {
    const newa = await Newarrival.create(req.body)
    
    res.send(newa)
})

router.get("/newarrival", async (req, res) => {
    const newa = await Newarrival.find().lean().exec()
    res.send(newa)
})


//Money schema

router.post("/money", async (req, res) => {
    const money = await Money.create(req.body)
    
    res.send(money)
})

router.get("/money", async (req, res) => {
    const money = await Money.find().lean().exec()
    res.send(money)
})



//sexwell schema

router.post("/sexwell", async (req, res) => {
    const sw = await Sexwell.create(req.body)
    
    res.send(sw)
})

router.get("/sexwell", async (req, res) => {
    const sw = await Sexwell.find().lean().exec()
    res.send(sw)
})



//Immunity schema

router.post("/immunity", async (req, res) => {
    const imm = await Immunity.create(req.body)
    
    res.send(imm)
})

router.get("/immunity", async (req, res) => {
    const imm = await Immunity.find().lean().exec()
    res.send(imm)
})


//weight schema

router.post("/weight", async (req, res) => {
    const imm = await Weight.create(req.body)
    
    res.send(imm)
})

router.get("/weight", async (req, res) => {
    const imm = await Weight.find().lean().exec()

    res.send(imm)
})


//vitamin schema

router.post("/vitamin", async (req, res) => {
    const imm = await Vitamin.create(req.body)
    
    res.send(imm)
})

router.get("/vitamin", async (req, res) => {
    const imm = await Vitamin.find().lean().exec()

    res.send(imm)
})


//coffe schema

router.post("/coffee", async (req, res) => {
    const imm = await Coffee.create(req.body)
    
    res.send(imm)
})

router.get("/coffee", async (req, res) => {
    const imm = await Coffee.find().lean().exec()
    res.send(imm)
})


//hair schema

router.post("/hair", async (req, res) => {
    const imm = await Hair.create(req.body)
    
    res.send(imm)
})

router.get("/hair", async (req, res) => {
    const imm = await Hair.find().lean().exec()
    res.send(imm)
})


//cart
router.post("/d", async (req, res) => {
    const imm = await Dommy.create(req.body)
    
    res.send(imm)
})

router.get("/cart", async (req, res) => {
    const imm = await Dommy.find().lean().exec()
    res.render("cart")
})

router.get("/d/api", async (req, res) => {
    const imm = await Dommy.find().lean().exec()
    res.send(imm)
})

router.delete("/d/:id", async (req, res) => {
    const imm = await Dommy.findByIdAndDelete(req.params.id)

    res.send(imm)

})


//address page

router.get("/address", async (req, res) => {
    res.render("address")
})


//payment page

router.get("/payment", async (req, res) => {

    res.render("payment")
})




//login page

router.get("/login", async (req, res) => {

    res.render("login")
})

//signup page

router.get("/signup", async (req, res) => {

    res.render("signup")
})


//searching

router.get("/health", async (req, res) => {
    
    const s = req.query.search

    //const best = await Health.find({ $text: { $search:`$s`} } )
    const best = await Health.find({health:{$regex:s}})
    
    res.send(best)
})

router.post("/health", async (req, res) => {
    const health = await Health.create(req.body)
    
    res.send(health)
})




module.exports=router