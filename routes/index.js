const {Router} = require("express")
const router =  Router()

router.get("/", (req,res)=>{
  res.render('home', {
    title: 'Главная страница',
    isHome: true
  })
})
//! думай как установить тайтл

module.exports = router