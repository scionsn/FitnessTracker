const exercisecollection=require("../models/exercise");
const exerciseoperations={
    add(record){
var promise=exercisecollection.create(record);
return promise;
    }
,
 update(record){
    console.log(record)
   
   var pr= exercisecollection.updateOne(record)
    // var rec=new exercisecollection(record)
    // var pr=rec.save();
    return pr;
},
updatenew(id){
var pr=exercisecollection.findByIdAndUpdate({id},{"user":"test user"})
return pr;
},
find(){
    var pr=exercisecollection.find();
    return pr;
},
findbyid(id){
    var pr=exercisecollection.findById(id);
    return pr;
},
delete(id){
    var pr=exercisecollection.findByIdAndDelete(id)
    return pr;
}

}

module.exports=exerciseoperations