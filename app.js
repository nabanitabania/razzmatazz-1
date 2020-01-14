var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

var app = express();

//Database config===================================


//App config=======================================
app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Routes===========================================
var indexRoutes = require("./routes/index");
app.use(indexRoutes);

//Application listen at port 8080
var port = process.env.PORT|3000;
app.listen(port,(err)=>{
	if(err)
		console.log(err);
	else
		console.log("Server started at port "+port);
}) 
