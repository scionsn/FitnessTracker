var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
var port=process.env.Port||3001;
app.listen(port,()=>{
    console.log("server started");
})
