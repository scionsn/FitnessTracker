const exercisecollection=require("../models/exercise");
const exerciseoperations={
    add(record){
var promise=exercisecollection.create(record);
return promise;
    }
}
module.exports=exerciseoperations