
var express = require("express");
var path = require("path");

var app = express();
var Filepath =path.join(__dirname,"/View/");

app.use(express.static(path.join(__dirname, '/public')));


app.get("/",function(req,res){
  res.sendFile(Filepath + "index.html");
});
app.get("/index",function(req,res){
    res.sendFile(Filepath + "index.html");
  });

app.get("/Home",function(req,res){
  res.sendFile(Filepath + "index.html");
});


app.get("/ourwork",function(req,res){
  res.sendFile(Filepath + "ourwork.html");
});

app.get("/projects",function(req,res){
  res.sendFile(Filepath + "projects.html");
});

app.get("/testimonials",function(req,res){
  res.sendFile(Filepath + "testimonials.html");
});

app.get("/contact",function(req,res){
  res.sendFile(Filepath + "contact.html");
});

app.use("*",function(req,res){
  var t=__dirname;
  res.sendFile(Filepath + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
    


