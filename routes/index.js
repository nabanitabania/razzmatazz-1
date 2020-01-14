var express = require('express')
var router = express.Router()

//Landing Page
router.get("/",(req,res)=>{
	res.render("index")
})


//Event Page
router.get("/events",(req,res)=>{
	res.render("events")
})

//Team Page
router.get("/team",(req,res)=>{
	res.render("team")
})

//Galleria
router.get("/galleria",(req,res)=>{
	res.render("Galleria")
})

//FAQ page
router.get("/faq",(req,res)=>{
	res.render("FAQ")
})


module.exports = router