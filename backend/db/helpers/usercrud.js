const usercollection=require("../models/users");
const useroperations={
    add(record){
var promise=usercollection.create(record);
return promise;
    },
    update(record){
       var pr= usercollection.update(record);
    return pr;
    },
    find(){
        var pr=usercollection.find();
        return pr;
    },
    findbyid(id){
        var pr=usercollection.findById(id);
        return pr;
    },
    delete(id){
        var pr=usercollection.findByIdAndDelete(id)
        return pr;
    }
    
}
module.exports=useroperations