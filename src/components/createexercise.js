import React,{Component} from 'react';
import axios from "axios";
export  class Createexercise extends Component{
state={
user:"",
description:"",
duration:"",
date: "",
users:[]
}
componentDidMount(){
axios.get("http://localhost:3001/user").
then(doc=>{
  if(doc.data.length>0){
     this.setState({
         users:doc.data.map(item=>item.user),
         user:doc.data[0].user
             }
             ) 
    
            }
}
)
}

onchangedesc=(event)=>{
    this.setState({
        description:event.target.value
    })
    }
onchangedur=(event)=>{
        this.setState({
            duration:event.target.value
        })
        }

onchangedate=event=>{
            this.setState({
                date:event.target.value
            })
            }

submitform=(event)=>{
event.preventDefault();
const exercise={
    user:this.state.user,
    description:this.state.description,

    duration:this.state.duration,
    date:this.state.date
}
console.log(exercise)
axios.post("http://localhost:3001/exercise/addexercise",exercise).
then(doc=>{
console.log("doc added ",doc.data)
}).catch(err=>{
    console.log("err is ",err)
})
window.location="/"

}

render(){
    return(<div>
        <br></br>
        <h3 className="text-primary text-center">Add Exercise</h3>
        <br></br>
<form onSubmit={this.submitform}>

<div className="form-group">
<label><strong>Username</strong></label>
<select name="user" ref="user" required className="form-control">
    {this.state.users.map(data=>{
        return <option value={data}>{data}</option>
    })}
</select>
</div>
<div className="form-group">
<label><strong>Description</strong></label>

    <input name="description" value={this.state.description} onChange={this.onchangedesc} type="text " placeholder="enter description" required className="form-control"></input>
</div>
<div className="form-group">
<label><strong>Duration (In Minutes)</strong></label>

    <input name="duration" value={this.state.duration} onChange={this.onchangedur} type="text " placeholder="enter duration" required className="form-control"></input>
</div>
<div className="form-group">
    <label><strong>Date</strong></label>
<input name="date" value={this.state.date} onChange={this.onchangedate} type="text " placeholder="enter date" required className="form-control"></input>

</div>

<div className="form-group">
<input type="submit" value="Submit" className="btn btn-outline-success"></input>
</div>
</form>
        </div>)
}
}
