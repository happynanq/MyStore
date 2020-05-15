const {Router} = require("express")
const router = Router()
router.get("/",(req,res)=>{
  res.redirect("/auth/register")
})

router.get("/login",(req,res)=>{
  res.render("auth/login",{
    isLogin:true
  })
})

router.get("/register",(req,res)=>{
  res.render("auth/register",{
    isRegister:true
    
  })
})
// TODO: Делаем пост запросы и записываем\проверяем данные в ДБ 

module.exports = router