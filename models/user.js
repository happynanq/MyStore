const  {Schema,model}  =require("mongoose") 
const userModel = new Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  cart:{
    items:[
      {
        count:{
          type:Number,
          required:true,
          default:1
        },
        courseId:{
          type:Schema.Types.ObjectId,
          required:true,
          ref:"Item"
        }
      }
      
    ]
  }
  
})

module.exports = model("User", userModel)