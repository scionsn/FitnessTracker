import React,{Component} from 'react';
import axios from "axios";
export  class Createuser extends Component{
state={
user:""

}

onchangeuser=(event)=>{
this.setState({
    user:event.target.value
})
}


submitform=(event)=>{
event.preventDefault();
const user={
    user:this.state.user,
   
}
console.log(user)
this.setState({
    user:" "
})
axios.post("http://localhost:3001/user/addusers",user).
then(doc=>{console.log("data is ",doc.data)}).
catch(err=>{console.log("error is ",err)})

}


render(){
    return(<div>
<form method="post" onSubmit={this.submitform}>

<div className="form-group">
<label><strong>Username</strong></label>
<input ref="user"  name="user" required className="form-control"  onChange={this.onchangeuser}>
</input>
</div>


<div className="form-group">
<input type="submit" value="Submit"  className="btn btn-outline-primary"></input>
</div>
</form>
        </div>)
}
}
