const  {Schema,model}  =require("mongoose") 
const itemModel = new Schema({
  itemName:{
    type:String,
    required:true
  },
  cost:{
    type:Number,
    required:true
  },
  img:{
    type:String,
    required:true
  },

  img:String,
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
})

module.exports = model("Item", itemModel)