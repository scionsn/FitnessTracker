const  userop=require("../db/helpers/usercrud")
const exerciseop=require("../db/helpers/exercisecrud")
async function insert(){
    try{
// var rec=await userop.add({user:"raghav"})
// var rec2=await userop.add({user:"kaashi "})
// var rec3=await exerciseop.add({user:"bihari",description:"football",date:"2nd august",duration:11})
// var rec4=await exerciseop.update({user:"tim",description:"simple exer",date:"3rd august",duration:14})
// var rec5=await exerciseop.findbyid({_id:"5ec1fa703683b1278c6bb08b"})
// var rec5=await userop.delete({_id:"5ebb8b619090ca1c244b28d4"})

var rec4=exerciseop.find()

console.log("records added in db ",rec4);
    }
    catch(e){
        console.log("error in insert--",e)
    }
}
insert();
