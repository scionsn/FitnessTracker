var express=require("express");
var cors=require("cors");
var app=express();
var userroute=require("./routes/userroute")
var exroute=require("./routes/exroute")
var bodyparser=require("body-parser");
app.use(cors());

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/user",userroute)
app.use("/exercise",exroute)
app.use(express.json());

var port=process.env.Port||3001;
app.listen(port,()=>{
    console.log("server started on",port);
})
