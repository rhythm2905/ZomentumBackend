var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
var mongodb = require('mongodb');
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
			res.send("Ticket Booking Successful!");
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

app.put("/movie-ticket/:id",function(req, res, next){ 
    User.findByIdAndUpdate(req.params.id, req.body , {new: true}, 
    	function (err, docs) { 
    	if (err){ 
        	return next(err);
    	} 
    	res.json(docs);
}); 
});

app.delete("/movie-ticket/:id",function(req, res, next){
	var user_id = req.params.id;
	User.findByIdAndRemove(user_id, function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Removed User : ", docs); 
        res.send("Deletion Successful"!);
    } 
}); 
});

app.listen(3000, function(){
	console.log("Server Active");
});