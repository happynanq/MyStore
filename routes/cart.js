const {Router} = require("express")
const Item = require("../models/item")
const router = Router()

router.get("/", (req,res)=>{
  res.render("cart",{
    title:"Cart",
    isCart:true
  })
})

module.exports = router