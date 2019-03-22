var express =require("express");
var app =express();



var port =process.env.PORT||3000;

app.get("/",function(reqres){


res.send("hello");
});

app.listen(port, function(){
	console.log("running");
})