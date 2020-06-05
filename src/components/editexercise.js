import React,{Component} from 'react';
import axios from "axios";
export  class Editexercise extends Component{
state={
user:"",
description:"",
duration:"",
date: "",
users:[]
}
componentDidMount(){
   axios.get("http://localhost:3001/exercise/"+this.props.match.params.id).
   then(doc=>{
       console.log("id ",this.props.match.params.id)
       this.setState({
           user:doc.data.user,
        description:doc.data.description,
        duration:doc.data.duration,
        date: doc.data.date
       })
   }).
   catch(err=>{
       console.log("err is ",err)
   })
axios.get("http://localhost:3001/user").
then(doc=>{
  if(doc.data.length>0){
     this.setState({
         users:doc.data.map(item=>item.user)             }
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
axios.put("http://localhost:3001/exercise/update",exercise).
then(doc=>{
console.log("axios update ",doc.data)
}).catch(err=>{
    console.log("err is ",err)
})
window.location="/"

}

render(){
    return(<div>
        <h3 className="text-center text-muted">Edit Exercise</h3>
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
<input type="submit" value="Edit" className="btn btn-outline-success"></input>
</div>
</form>
        </div>)
}
}
