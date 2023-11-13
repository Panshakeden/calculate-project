const express = require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));


let infos=[];

app.get("/",(req,res)=>{
    res.render("index",{infos:infos});
});

app.post("/",(req,res)=>{
    const num1 = Number( req.body.num1);
    const num2 = Number( req.body.num2);
    
    const total = num1 + num2;
    infos.push(total);
    
    res.redirect("/");

});

app.get("/addition",(req,res)=>{
    res.render("addition");
});



    



app.listen(4000, function(){
    console.log("app is listening to port ...");
});