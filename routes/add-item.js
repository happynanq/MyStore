const {Router} = require("express")
const Item = require("../models/item")

const router = Router()

router.get("/",(req,res)=>{
  res.render("add_item",{
    isAdd:true,
    title:"Add Item"
  })
})

router.post('/',async(req,res)=>{
  const newItem = new Item({
    itemName:req.body.iname,
    cost:req.body.icost,
    userId:req.user,
    img:req.body.iimg

  })
  try {
    await newItem.save()
    res.redirect("/store")
  } catch (e) {
    console.log(e);
  }

})


module.exports= router

 

//  TODO: адд айтем должен создавать новую схему(модель) и передавать в монгодб схему айтема, после чего рендерить айтем в item.js после этого сделать нормальную карзину сделать, после этого    юсера и аунтификацию
//? узнай как передавать данныые и з инпута формы в монго дб через req.body?? 
//! ........ 
// TODO: сделай кнопку сабмита 