const {Router} = require("express")
const Item = require("../models/item")
const router = Router()

router.get("/",async (req,res)=>{// ! req= browser->server; res= server->browser 
  
  const item = await Item()
  console.log('item', item);
  res.render("store", {
    title:"Store",
    item:[{cost:2000},{cost:3000}],
    isStore:true
  })
})

module.exports = router