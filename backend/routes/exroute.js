const exercise=require("../db/models/exercise")
const express=require("express");
const mongoose=require("mongoose");
const exroute=express.Router();
const crud=require("../db/helpers/exercisecrud")

exroute.get("/",(req,res)=>{
    res.set({'content-type':'application/json'});
crud.find().
then(data=>{
    console.log("exer. get called")
    res.json(data)
}).
catch(err=>{
    res.json({error:err})
})
}
)
exroute.get("/:id",(req,res)=>{
    res.set({'content-type':'application/json'});
crud.findbyid(req.params.id).
then(data=>{
    console.log("exer. get by id called")
    res.json(data)
}).
catch(err=>{
    res.json({error:err})
})
}
)
exroute.put("/update",(req,res)=>{
    res.set({'content-type':'application/json'});

    const obj={
        user:req.body.user,
        description:req.body.description,
        date:req.body.date,
        duration:Number(req.body.duration)
    }
    crud.update(obj).then(data=>{
        res.json(data)
        console.log("record updted")
    }).catch(err=>{
        console.log("err in update")
    })
}  
)

exroute.delete("/delete/:id",(req,res)=>{
    var id=req.params.id;
crud.delete(id).then(()=>{
    console.log("deletd")
    res.status(200).send("rec deleted")
}).catch(err=>{
    console.log(err)
})
})
exroute.post("/addexercise",(req,res)=>{
    res.set({'content-type':'application/json'});
const duration=Number(req.body.duration);
console.log(typeof duration)
const newobj={
    user:req.body.user,
    description:req.body.description,
    date:req.body.date,
    duration:duration
}
crud.add(newobj).
then(data=>{
    res.json(data)
    console.log("response added")
}).catch(err=>{
    res.json(err)
    console.log("err in exer ",err)
})
})

module.exports=exroute;