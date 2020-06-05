import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
const Exertable=props=>{
    return(<tr>
        <td className="text-monospace text-capitalize alert-secondary alert-info ">{props.exercise.user}</td>
        <td className="text-monospace text-capitalize alert-secondary">{props.exercise.description}</td>
        <td className="text-monospace text-capitalize alert-secondary alert-info">{props.exercise.duration}</td>
        <td className="text-monospace text-capitalize alert-secondary">{props.exercise.date}</td>
        <td className="alert-info">
            <Link to={"/editexer/"+props.exercise._id}>
                <img className=" h-25 img-thumbnail " src="https://image.flaticon.com/icons/png/128/61/61456.png"></img>
            </Link>
            &nbsp;
            &nbsp;
            <img className="img-thumbnail h-25 " src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png" onClick={()=>{props.delete(props.exercise._id)}} ></img>
        </td>

    </tr>)
}
export class Exerciselist extends React.Component{

state={
    exercise:[]
}
componentDidMount(){
    axios.get("http://localhost:3001/exercise/").
    then(doc=>{
        if(doc.data.length>0){
            console.log("data recov.")
            this.setState({
                exercise:doc.data
            })
        }
    }).catch(err=>{
        console.log("err is",err)
    })
}
delete(id){
    console.log("del called")
    axios.delete("http://localhost:3001/exercise/delete/"+id).
    then(res=>{
        console.log("rec. deleted",res.data)
    }).catch(err=>{
        console.log("err in deletion")
    })
    this.setState({
        exercise:this.state.exercise.filter(list=>list._id!==id)
    })
    // we added _id so as to make it same as the _id key in database
    
}
exerciselist(){
    return this.state.exercise.map(ex=>{
        return <Exertable exercise={ex} delete={this.delete} key={ex._id}/>
    })
}
    render(){
        return(<div>
            <br></br>
<h2 className=" text-center text-monospace text-secondary text-uppercase"><strong><ins>Exercises List</ins></strong></h2>
<br></br>
<table className="table">
    <thead className="thead-light">
        <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration (In Min)</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
            </thead>
<tbody>
    {this.exerciselist()}
</tbody>
</table>
        </div>)
    }
}
