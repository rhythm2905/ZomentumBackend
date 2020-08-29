var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Zomentum',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Schema Setup
var userSchema = new mongoose.Schema({
	name: String,
	phone: String,
	timing: Number
});

var User = mongoose.model("user",userSchema);
app.use(bodyParser.urlencoded({extended:true}));
//Routes
app.get("/",function(req,res){
	res.send("HomePage");
});

app.get("/movie-ticket", function(req,res){
	User.find({},function(err, allUser){
		if(err){
			console.log(err);
		}
		else{
			console.log(allUser);
			res.send("Hi2");
		}
	});
});
app.post("/movie-ticket",function(req,res){
	var name = req.body.name;
	var phone = req.body.phone;
	var timing = req.body.timing;
	var newUser = {name:name, phone:phone, timing:timing};
	User.create(newUser,function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/movie-ticket");
		}
	});
});
app.listen(3000, function(){
	console.log("Server Active");
});