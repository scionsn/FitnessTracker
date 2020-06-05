var userroute=require("express").Router()
const users=require("../db/models/users")
var crud=require("../db/helpers/usercrud")
userroute.get("/",(req,res)=>{
    res.set({'content-type':'application/json'});


users.find().
then(data=>{
    res.json(data)
    console.log(data)
}).catch(err=>{
        res.json({msg:err})
        console.log(err)
    })
})
userroute.post("/addusers",(req,res)=>{
    res.set({'content-type':'application/json'});
    res.header("Access-Control-Allow-Origin", "*");


   const user=req.body;
   console.log(user)
   crud.add(user).
   then(data=>{
       res.json(data)
       console.log("user added")
   }).catch(err=>{
       res.json(err)
       console.log("error in adding user is ",err)
   })
})
userroute.post("/update/:id",(req,res)=>{
    
})
module.exports=userroute;