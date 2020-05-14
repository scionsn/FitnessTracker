const connection=require("../../utils/connection")
var schema=connection.Schema
const userschema=new schema({
    user:{type:String,required:true,unique:true,trim:true,minlength:3}
})
const userscollection=connection.model("users",userschema)
module.exports=userscollection