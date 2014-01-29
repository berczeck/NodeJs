var express = require("express"),	
	swig    = require('swig'),
    cons 	= require('consolidate');

var env = "dev";

var app 	= express(),
	server 	= require('http').createServer(app); 

swig.init({
	cache : false
});

// View engine
app.engine('html', cons.swig);
app.set("view engine", "html");
app.set("views", "./app/views");

// Add POST, PUT, DELETE methods to the app
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Static files
app.use( express.static('./public') );

// Routes
app.get("/",function(req,res){
	res.render("chat",{mensaje:"Bienvenido al chat"});
});

server.listen(8090);

console.log("Express server started on port 8090")