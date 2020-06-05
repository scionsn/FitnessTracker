const connection=require("../../utils/connection")
var schema=connection.Schema;
var exerciseschema=new schema({
user:{required:true,type:String},
description:{required:true,type:String},
date:{required:true,type:String},
duration:{required:true,type:Number}
})

const exercisecollection=connection.model("exercise",exerciseschema)
module.exports=exercisecollection