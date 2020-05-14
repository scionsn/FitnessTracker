const usercollection=require("../models/users");
const useroperations={
    add(record){
var promise=usercollection.create(record);
return promise;
    },
    search(record){
        var promise=new Promise((resolve,reject)=>{
            usercollection.findOne(record,(data,err)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data);
                }
            })
        })
    return promise;
    }
}
module.exports=useroperations