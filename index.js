const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const csrf = require("csurf")

const keys = require("./config/db.js")
const homeRouter = require("./routes/index")
const storeRouter = require("./routes/store")
// const profileRouter = require("./routes/profile")
const cartRouter = require("./routes/cart")
const addRouter = require("./routes/add-item")
const authRouter = require("./routes/auth")
// const varMiddleware = require("./middleware/variables")

//! Определение констант для работы с ними
const app = express()
const hbs = exphbs.create({
  defaultLayout:"main",
  extname:"hbs"
})
//! engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs') 
app.set("views", "views") 

//! Хз что это, будущий middleware
app.use( async (req, res, next)=>{
  next()
})


// ! middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(csrf()) // здесь всё работает
// app.use(varMiddleware())

// ! Роуты
app.use("/",homeRouter)
app.use("/store", storeRouter)
app.use("/cart", cartRouter)
app.use('/add',addRouter)
app.use("/auth", authRouter)

// ! Коннектим mongodb
const connect = async()=>{
  try {
    await mongoose.connect(keys.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const PORT = process.env.PORT || 3000 
    app.listen(PORT, ()=>{
      console.log('[Server is running]');
    })
  } catch (error) {
    console.log(error);
  }
}
connect()