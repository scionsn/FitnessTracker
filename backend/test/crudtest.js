const  userop=require("../db/helpers/usercrud")
const exerciseop=require("../db/helpers/exercisecrud")
var d=new Date();
console.log(d)
async function insert(){
    try{
var rec=await userop.add({user:"raghav"})
var rec2=await userop.add({user:"kaashi "})
var rec3=await exerciseop.add({user:"raghav",description:"football",date:d,duration:11})
console.log("records added in db ",rec3);
    }
    catch(e){
        console.log("error in insert--",e)
    }
}
insert();
