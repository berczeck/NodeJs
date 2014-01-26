var express = require("express"),
	app = express();

app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/",function(req,res){
	res.send("Hello World!!! With Node Js",200);
});

app.listen(8090);

console.log("Express server started on port 8080")