var express = require("express"),
	app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/",function(req,res){
	res.send("Hello World!!! With Node Js",200);
});

app.get("/luis",function(req,res){
	res.send("Hello World!!! With Node Js Luis",200);
});

app.get("/alexander",function(req,res){
	res.send("Probando mi primer get",200);
});

app.get("/chat",function(req,res){
	res.render("chat",{mensaje:"Bienvenido al chat"});
});

app.listen(8090);

console.log("Express server started on port 8090")